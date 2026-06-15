import { sql } from '@vercel/postgres';

interface SearchParams {
  searchParams: Promise<{ token?: string }>;
}

export const metadata = {
  title: 'Unsubscribe | BuyGeogrid',
  robots: { index: false, follow: false },
};

export default async function UnsubscribePage({ searchParams }: SearchParams) {
  const { token } = await searchParams;

  if (!token) {
    return Wrap(
      <>
        <h1 className="text-2xl font-bold mb-3">Invalid unsubscribe link</h1>
        <p className="text-gray-600">
          The link you clicked is missing its token. If you want to be removed
          from our list, reply to any email from us and we&apos;ll take care of
          it.
        </p>
      </>
    );
  }

  if (token === 'PREVIEW') {
    return Wrap(
      <>
        <h1 className="text-2xl font-bold mb-3">Preview unsubscribe link</h1>
        <p className="text-gray-600">
          This is a test-mode link. Real unsubscribe links from our broadcasts
          will remove you from the list when clicked.
        </p>
      </>
    );
  }

  let result: { email: string | null; alreadyOff: boolean } = {
    email: null,
    alreadyOff: false,
  };

  try {
    const { rows } = await sql<{ email: string; unsubscribed: boolean }>`
      SELECT email, unsubscribed FROM email_signups WHERE unsubscribe_token = ${token}
    `;
    if (rows.length === 0) {
      return Wrap(
        <>
          <h1 className="text-2xl font-bold mb-3">Link not recognized</h1>
          <p className="text-gray-600">
            This unsubscribe link doesn&apos;t match any address on file. It may
            have expired or been changed. Reply to any email from us and
            we&apos;ll handle it manually.
          </p>
        </>
      );
    }
    const row = rows[0];
    if (row.unsubscribed) {
      result = { email: row.email, alreadyOff: true };
    } else {
      await sql`UPDATE email_signups SET unsubscribed = true WHERE unsubscribe_token = ${token}`;
      result = { email: row.email, alreadyOff: false };
    }
  } catch {
    return Wrap(
      <>
        <h1 className="text-2xl font-bold mb-3">Something went wrong</h1>
        <p className="text-gray-600">
          We couldn&apos;t process your unsubscribe right now. Please try again
          in a moment, or reply to any email from us and we&apos;ll handle it
          manually.
        </p>
      </>
    );
  }

  return Wrap(
    <>
      <div className="text-5xl mb-3">✓</div>
      <h1 className="text-2xl font-bold mb-2">
        {result.alreadyOff ? 'Already unsubscribed' : 'You&apos;re unsubscribed'}
      </h1>
      <p className="text-gray-600">
        {result.email ? (
          <>
            <strong>{result.email}</strong> won&apos;t receive any more emails
            from BuyGeogrid.
          </>
        ) : (
          <>You won&apos;t receive any more emails from BuyGeogrid.</>
        )}
      </p>
      <p className="text-gray-500 text-sm mt-6">
        Signed up by accident or changed your mind? Just sign up again at{' '}
        <a href="/" className="text-[#00c97e] hover:underline">
          buygeogrid.com
        </a>
        .
      </p>
    </>
  );
}

function Wrap(content: React.ReactNode) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md bg-white border border-gray-200 rounded-2xl p-10 shadow-sm text-center">
        {content}
      </div>
    </div>
  );
}
