'use client';

import { useEffect, useMemo, useState } from 'react';

const NET30 = 'Net 30 terms (credit account)';

type FormState = {
  company: string;
  dba: string;
  entityType: string;
  ein: string;
  yearsInBusiness: string;
  custType: string;
  website: string;
  companyPhone: string;
  contactFirst: string;
  contactLast: string;
  contactTitle: string;
  contactEmail: string;
  contactPhone: string;
  apSame: boolean;
  apName: string;
  apEmail: string;
  apPhone: string;
  statementMethod: string;
  buyers: string;
  billStreet: string;
  billCity: string;
  billState: string;
  billZip: string;
  taxExempt: string;
  taxReason: string;
  taxCert: string;
  poRequired: string;
  paymentPref: string;
  bankName: string;
  bankContact: string;
  bankPhone: string;
  ref1Company: string; ref1Contact: string; ref1Phone: string;
  ref2Company: string; ref2Contact: string; ref2Phone: string;
  ref3Company: string; ref3Contact: string; ref3Phone: string;
  notes: string;
  sigName: string;
  sigTitle: string;
  agree: boolean;
  fax: string; // honeypot
};

const INITIAL: FormState = {
  company: '', dba: '', entityType: '', ein: '', yearsInBusiness: '', custType: '',
  website: '', companyPhone: '',
  contactFirst: '', contactLast: '', contactTitle: '', contactEmail: '', contactPhone: '',
  apSame: false, apName: '', apEmail: '', apPhone: '',
  statementMethod: 'Email', buyers: '',
  billStreet: '', billCity: '', billState: 'OH', billZip: '',
  taxExempt: 'No', taxReason: '', taxCert: '', poRequired: 'No',
  paymentPref: '',
  bankName: '', bankContact: '', bankPhone: '',
  ref1Company: '', ref1Contact: '', ref1Phone: '',
  ref2Company: '', ref2Contact: '', ref2Phone: '',
  ref3Company: '', ref3Contact: '', ref3Phone: '',
  notes: '', sigName: '', sigTitle: '', agree: false, fax: '',
};

export default function OpenAccountForm() {
  const [f, setF] = useState<FormState>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);
  const [doneIsCredit, setDoneIsCredit] = useState(false);

  const credit = f.paymentPref === NET30;
  const taxOn = f.taxExempt === 'Yes';

  // Keep AP fields mirrored while "same as contact" is checked.
  useEffect(() => {
    if (!f.apSame) return;
    const full = [f.contactFirst, f.contactLast].map((s) => s.trim()).filter(Boolean).join(' ');
    setF((prev) => ({
      ...prev,
      apName: full,
      apEmail: prev.contactEmail,
      apPhone: prev.contactPhone,
    }));
  }, [f.apSame, f.contactFirst, f.contactLast, f.contactEmail, f.contactPhone]);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => setF((p) => ({ ...p, [k]: v }));

  const agreeText = useMemo(
    () =>
      credit
        ? 'I am authorized to open this account, the information above is accurate, and I authorize Asphalt Fabrics & Supply to contact the bank and trade references listed to verify credit.'
        : 'I am authorized to open this account, and the information above is accurate.',
    [credit]
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setError('');

    // Required-field check mirrors server-side rules.
    const need: (keyof FormState)[] = [
      'company', 'entityType', 'contactFirst', 'contactLast', 'contactEmail', 'contactPhone',
      'billStreet', 'billCity', 'billState', 'billZip', 'paymentPref', 'sigName',
    ];
    if (credit) need.push('ein', 'bankName', 'ref1Company', 'ref1Phone', 'ref2Company', 'ref2Phone');
    if (taxOn) need.push('taxReason');

    const missing = need.find((k) => !String(f[k] ?? '').trim());
    if (missing || !f.agree) {
      setError('Please fill in the required fields marked *.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(f.contactEmail.trim())) {
      setError('Please check the email address.');
      return;
    }

    setSubmitting(true);
    try {
      const payload = { ...f, agree: 'Yes' as const };
      const res = await fetch('/api/open-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
      setDoneIsCredit(Boolean(data.credit));
      setDone(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  const input =
    'w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#00c97e] focus:border-[#00c97e] transition-all disabled:bg-gray-100 text-base text-gray-900 placeholder:text-gray-400';
  const label = 'block text-sm font-semibold text-gray-800 mb-1';
  const req = <span className="text-red-600" aria-hidden="true"> *</span>;
  const legend = 'text-sm font-bold uppercase tracking-wider text-gray-900 mb-4';
  const section = 'border-t border-gray-200 pt-6';

  if (done) {
    return (
      <div className="bg-white border border-gray-200 rounded p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Thanks, your application is in.</h2>
        <p className="text-gray-700 leading-relaxed">
          {doneIsCredit
            ? "We'll review your credit references and let you know when Net 30 terms are approved. You can still order and pay by check in the meantime."
            : "We'll set up your account and reach out if we need anything else."}
        </p>
        <p className="text-sm text-gray-600 mt-4">
          Questions? Email{' '}
          <a href="mailto:reneex@asphaltfabrics.com" className="text-[#00c97e] font-semibold hover:underline">
            reneex@asphaltfabrics.com
          </a>{' '}
          or call{' '}
          <a href="tel:4403681420" className="text-[#00c97e] font-semibold hover:underline">
            (440) 368-1420
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded p-6 md:p-8 shadow-sm space-y-6"
      autoComplete="off"
      noValidate
    >
      {/* Honeypot */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
      >
        <label htmlFor="fax">Fax (leave blank)</label>
        <input
          type="text"
          id="fax"
          name="fax"
          tabIndex={-1}
          autoComplete="off"
          value={f.fax}
          onChange={(e) => update('fax', e.target.value)}
        />
      </div>

      {/* Business information */}
      <fieldset>
        <legend className={legend}>Business information</legend>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="md:col-span-4">
            <label className={label} htmlFor="company">Legal business name{req}</label>
            <input id="company" className={input} required autoComplete="organization" value={f.company} onChange={(e) => update('company', e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className={label} htmlFor="dba">DBA (if different)</label>
            <input id="dba" className={input} value={f.dba} onChange={(e) => update('dba', e.target.value)} />
          </div>
          <div className="md:col-span-3">
            <label className={label} htmlFor="entityType">Entity type{req}</label>
            <select id="entityType" className={`${input} bg-white`} required value={f.entityType} onChange={(e) => update('entityType', e.target.value)}>
              <option value="">Select one</option>
              <option>LLC</option><option>Corporation</option><option>Partnership</option>
              <option>Sole proprietor</option><option>Government / public agency</option><option>Nonprofit</option>
            </select>
          </div>
          <div className="md:col-span-3">
            <label className={label} htmlFor="custType">Type of business</label>
            <select id="custType" className={`${input} bg-white`} value={f.custType} onChange={(e) => update('custType', e.target.value)}>
              <option value="">Select one</option>
              <option>General / site contractor</option>
              <option>Paving contractor</option>
              <option>Landscape contractor</option>
              <option>Engineer / designer</option>
              <option>Municipality / public agency</option>
              <option>Property owner / facility</option>
              <option>Distributor / reseller</option>
              <option>Other</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className={label} htmlFor="ein">Federal EIN{credit ? req : null}</label>
            <input id="ein" className={input} placeholder="12-3456789" inputMode="numeric" value={f.ein} onChange={(e) => update('ein', e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className={label} htmlFor="yearsInBusiness">Years in business</label>
            <input id="yearsInBusiness" className={input} inputMode="numeric" value={f.yearsInBusiness} onChange={(e) => update('yearsInBusiness', e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className={label} htmlFor="companyPhone">Company phone</label>
            <input id="companyPhone" className={input} type="tel" value={f.companyPhone} onChange={(e) => update('companyPhone', e.target.value)} />
          </div>
          <div className="md:col-span-6">
            <label className={label} htmlFor="website">Website</label>
            <input id="website" className={input} placeholder="example.com" value={f.website} onChange={(e) => update('website', e.target.value)} />
          </div>
        </div>
      </fieldset>

      {/* Primary contact */}
      <fieldset className={section}>
        <legend className={legend}>Primary contact</legend>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="md:col-span-3">
            <label className={label} htmlFor="contactFirst">First name{req}</label>
            <input id="contactFirst" className={input} required autoComplete="given-name" value={f.contactFirst} onChange={(e) => update('contactFirst', e.target.value)} />
          </div>
          <div className="md:col-span-3">
            <label className={label} htmlFor="contactLast">Last name{req}</label>
            <input id="contactLast" className={input} required autoComplete="family-name" value={f.contactLast} onChange={(e) => update('contactLast', e.target.value)} />
          </div>
          <div className="md:col-span-6">
            <label className={label} htmlFor="contactTitle">Title</label>
            <input id="contactTitle" className={input} value={f.contactTitle} onChange={(e) => update('contactTitle', e.target.value)} />
          </div>
          <div className="md:col-span-3">
            <label className={label} htmlFor="contactEmail">Email{req}</label>
            <input id="contactEmail" className={input} type="email" required autoComplete="email" value={f.contactEmail} onChange={(e) => update('contactEmail', e.target.value)} />
          </div>
          <div className="md:col-span-3">
            <label className={label} htmlFor="contactPhone">Phone{req}</label>
            <input id="contactPhone" className={input} type="tel" required autoComplete="tel" value={f.contactPhone} onChange={(e) => update('contactPhone', e.target.value)} />
          </div>
        </div>
      </fieldset>

      {/* Accounts payable */}
      <fieldset className={section}>
        <legend className={legend}>Accounts payable</legend>
        <label className="inline-flex items-center gap-2 cursor-pointer mb-4 text-gray-800">
          <input type="checkbox" checked={f.apSame} onChange={(e) => update('apSame', e.target.checked)} className="h-4 w-4 text-[#00c97e] border-gray-300 focus:ring-[#00c97e]" />
          Same as primary contact
        </label>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="md:col-span-2">
            <label className={label} htmlFor="apName">AP contact name</label>
            <input id="apName" className={input} readOnly={f.apSame} value={f.apName} onChange={(e) => update('apName', e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className={label} htmlFor="apEmail">AP email</label>
            <input id="apEmail" className={input} type="email" readOnly={f.apSame} value={f.apEmail} onChange={(e) => update('apEmail', e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className={label} htmlFor="apPhone">AP phone</label>
            <input id="apPhone" className={input} type="tel" readOnly={f.apSame} value={f.apPhone} onChange={(e) => update('apPhone', e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className={label} htmlFor="statementMethod">Send invoices and statements by</label>
            <select id="statementMethod" className={`${input} bg-white`} value={f.statementMethod} onChange={(e) => update('statementMethod', e.target.value)}>
              <option>Email</option><option>Mail</option><option>Both</option>
            </select>
          </div>
          <div className="md:col-span-4">
            <label className={label} htmlFor="buyers">Who is authorized to place orders?</label>
            <input id="buyers" className={input} placeholder="Names, separated by commas" value={f.buyers} onChange={(e) => update('buyers', e.target.value)} />
          </div>
        </div>
      </fieldset>

      {/* Mailing address */}
      <fieldset className={section}>
        <legend className={legend}>Mailing address</legend>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="md:col-span-6">
            <label className={label} htmlFor="billStreet">Street{req}</label>
            <input id="billStreet" className={input} required autoComplete="address-line1" value={f.billStreet} onChange={(e) => update('billStreet', e.target.value)} />
          </div>
          <div className="md:col-span-3">
            <label className={label} htmlFor="billCity">City{req}</label>
            <input id="billCity" className={input} required autoComplete="address-level2" value={f.billCity} onChange={(e) => update('billCity', e.target.value)} />
          </div>
          <div className="md:col-span-1">
            <label className={label} htmlFor="billState">State{req}</label>
            <input id="billState" className={input} required maxLength={2} autoComplete="address-level1" value={f.billState} onChange={(e) => update('billState', e.target.value.toUpperCase())} />
          </div>
          <div className="md:col-span-2">
            <label className={label} htmlFor="billZip">ZIP{req}</label>
            <input id="billZip" className={input} required inputMode="numeric" autoComplete="postal-code" value={f.billZip} onChange={(e) => update('billZip', e.target.value)} />
          </div>
        </div>
      </fieldset>

      {/* Payment & tax */}
      <fieldset className={section}>
        <legend className={legend}>Payment &amp; tax</legend>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="md:col-span-2">
            <label className={label} htmlFor="paymentPref">How will you pay?{req}</label>
            <select id="paymentPref" className={`${input} bg-white`} required value={f.paymentPref} onChange={(e) => update('paymentPref', e.target.value)}>
              <option value="">Select one</option>
              <option>Check</option>
              <option>{NET30}</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className={label} htmlFor="taxExempt">Tax exempt?</label>
            <select id="taxExempt" className={`${input} bg-white`} value={f.taxExempt} onChange={(e) => update('taxExempt', e.target.value)}>
              <option>No</option><option>Yes</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className={label} htmlFor="poRequired">PO required on invoices?</label>
            <select id="poRequired" className={`${input} bg-white`} value={f.poRequired} onChange={(e) => update('poRequired', e.target.value)}>
              <option>No</option><option>Yes</option>
            </select>
          </div>
        </div>

        {taxOn && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="md:col-span-3">
              <label className={label} htmlFor="taxReason">Exemption reason{req}</label>
              <select id="taxReason" className={`${input} bg-white`} required value={f.taxReason} onChange={(e) => update('taxReason', e.target.value)}>
                <option value="">Select one</option>
                <option>Resale</option><option>Government</option><option>Nonprofit</option>
                <option>Exempt project / contract</option><option>Other</option>
              </select>
            </div>
            <div className="md:col-span-3">
              <label className={label} htmlFor="taxCert">Exemption certificate #</label>
              <input id="taxCert" className={input} value={f.taxCert} onChange={(e) => update('taxCert', e.target.value)} />
            </div>
            <p className="md:col-span-6 text-sm text-gray-600">
              Please email your signed tax-exempt certificate to{' '}
              <a href="mailto:reneex@asphaltfabrics.com" className="text-[#00c97e] font-semibold hover:underline">
                reneex@asphaltfabrics.com
              </a>
              . We can&apos;t remove sales tax until it&apos;s on file.
            </p>
          </div>
        )}

        {credit && (
          <div className="mt-6 bg-gray-50 border border-gray-200 rounded p-4 md:p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-1">Credit references</h3>
            <p className="text-sm text-gray-600 mb-4">
              Required for Net 30. List suppliers you currently buy from on terms. Do not enter account numbers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="md:col-span-2">
                <label className={label} htmlFor="bankName">Bank name{req}</label>
                <input id="bankName" className={input} required value={f.bankName} onChange={(e) => update('bankName', e.target.value)} />
              </div>
              <div className="md:col-span-2">
                <label className={label} htmlFor="bankContact">Bank contact</label>
                <input id="bankContact" className={input} value={f.bankContact} onChange={(e) => update('bankContact', e.target.value)} />
              </div>
              <div className="md:col-span-2">
                <label className={label} htmlFor="bankPhone">Bank phone</label>
                <input id="bankPhone" className={input} type="tel" value={f.bankPhone} onChange={(e) => update('bankPhone', e.target.value)} />
              </div>

              <div className="md:col-span-6 text-xs font-semibold uppercase tracking-wider text-gray-500 mt-2">
                Trade reference 1
              </div>
              <div className="md:col-span-2">
                <label className={label} htmlFor="ref1Company">Company{req}</label>
                <input id="ref1Company" className={input} required value={f.ref1Company} onChange={(e) => update('ref1Company', e.target.value)} />
              </div>
              <div className="md:col-span-2">
                <label className={label} htmlFor="ref1Contact">Contact</label>
                <input id="ref1Contact" className={input} value={f.ref1Contact} onChange={(e) => update('ref1Contact', e.target.value)} />
              </div>
              <div className="md:col-span-2">
                <label className={label} htmlFor="ref1Phone">Phone or email{req}</label>
                <input id="ref1Phone" className={input} required value={f.ref1Phone} onChange={(e) => update('ref1Phone', e.target.value)} />
              </div>

              <div className="md:col-span-6 text-xs font-semibold uppercase tracking-wider text-gray-500 mt-2">
                Trade reference 2
              </div>
              <div className="md:col-span-2">
                <label className={label} htmlFor="ref2Company">Company{req}</label>
                <input id="ref2Company" className={input} required value={f.ref2Company} onChange={(e) => update('ref2Company', e.target.value)} />
              </div>
              <div className="md:col-span-2">
                <label className={label} htmlFor="ref2Contact">Contact</label>
                <input id="ref2Contact" className={input} value={f.ref2Contact} onChange={(e) => update('ref2Contact', e.target.value)} />
              </div>
              <div className="md:col-span-2">
                <label className={label} htmlFor="ref2Phone">Phone or email{req}</label>
                <input id="ref2Phone" className={input} required value={f.ref2Phone} onChange={(e) => update('ref2Phone', e.target.value)} />
              </div>

              <div className="md:col-span-6 text-xs font-semibold uppercase tracking-wider text-gray-500 mt-2">
                Trade reference 3 (optional)
              </div>
              <div className="md:col-span-2">
                <label className={label} htmlFor="ref3Company">Company</label>
                <input id="ref3Company" className={input} value={f.ref3Company} onChange={(e) => update('ref3Company', e.target.value)} />
              </div>
              <div className="md:col-span-2">
                <label className={label} htmlFor="ref3Contact">Contact</label>
                <input id="ref3Contact" className={input} value={f.ref3Contact} onChange={(e) => update('ref3Contact', e.target.value)} />
              </div>
              <div className="md:col-span-2">
                <label className={label} htmlFor="ref3Phone">Phone or email</label>
                <input id="ref3Phone" className={input} value={f.ref3Phone} onChange={(e) => update('ref3Phone', e.target.value)} />
              </div>
            </div>
          </div>
        )}
      </fieldset>

      {/* Notes */}
      <fieldset className={section}>
        <legend className={legend}>Notes</legend>
        <label className={label} htmlFor="notes">Anything else we should know? (optional)</label>
        <textarea id="notes" rows={4} className={input} value={f.notes} onChange={(e) => update('notes', e.target.value)} />
      </fieldset>

      {/* Authorization */}
      <fieldset className={section}>
        <legend className={legend}>Authorization</legend>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="md:col-span-3">
            <label className={label} htmlFor="sigName">Your full name{req}</label>
            <input id="sigName" className={input} required value={f.sigName} onChange={(e) => update('sigName', e.target.value)} />
          </div>
          <div className="md:col-span-3">
            <label className={label} htmlFor="sigTitle">Title</label>
            <input id="sigTitle" className={input} value={f.sigTitle} onChange={(e) => update('sigTitle', e.target.value)} />
          </div>
          <div className="md:col-span-6">
            <label className="flex items-start gap-3 text-gray-800 cursor-pointer">
              <input type="checkbox" required checked={f.agree} onChange={(e) => update('agree', e.target.checked)} className="h-4 w-4 mt-1 text-[#00c97e] border-gray-300 focus:ring-[#00c97e]" />
              <span>{agreeText}</span>
            </label>
          </div>
        </div>
      </fieldset>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm" role="alert">
          {error}
        </div>
      )}

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#00c97e] hover:bg-[#00b36f] rounded transition-colors duration-200 disabled:opacity-60"
        >
          {submitting ? 'Sending…' : 'Submit application'}
        </button>
        <span className="text-sm text-gray-600">
          Takes about 5 minutes.
        </span>
      </div>
    </form>
  );
}
