import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, cityState, product, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const MONDAY_API_TOKEN = process.env.MONDAY_API_TOKEN;
    const MONDAY_BOARD_ID = process.env.MONDAY_BOARD_ID;

    if (!MONDAY_API_TOKEN || !MONDAY_BOARD_ID) {
      console.error('Monday.com credentials not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // First, get the board columns to find the correct column IDs
    const columnsQuery = `
      query {
        boards(ids: ${MONDAY_BOARD_ID}) {
          columns {
            id
            title
            type
          }
        }
      }
    `;

    const columnsResponse = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': MONDAY_API_TOKEN,
      },
      body: JSON.stringify({ query: columnsQuery }),
    });

    const columnsData = await columnsResponse.json();
    const columns = columnsData.data?.boards?.[0]?.columns || [];

    // Debug: Log all columns
    console.log('Monday.com Board Columns:', JSON.stringify(columns, null, 2));

    // Find column IDs by title
    const phoneColumn = columns.find((col: any) => col.title === 'Phone Number');
    const emailColumn = columns.find((col: any) => col.title === 'Email Address');
    const cityStateColumn = columns.find((col: any) => col.title === 'City/State');
    const projectColumn = columns.find((col: any) => col.title === 'Tell Us About Your Project');
    const productColumn = columns.find((col: any) => col.title === 'Product Interest');

    // Create the item name
    const itemName = name;

    // Build column values for Monday.com
    const columnValues: any = {};

    if (emailColumn && email) {
      if (emailColumn.type === 'email') {
        columnValues[emailColumn.id] = { email: email, text: email };
      } else {
        columnValues[emailColumn.id] = email;
      }
    }

    if (phoneColumn && phone) {
      if (phoneColumn.type === 'phone') {
        columnValues[phoneColumn.id] = { phone: phone.replace(/\D/g, ''), countryShortName: 'US' };
      } else {
        columnValues[phoneColumn.id] = phone;
      }
    }

    if (cityStateColumn && cityState) {
      columnValues[cityStateColumn.id] = cityState;
    }

    if (projectColumn && message) {
      if (projectColumn.type === 'long-text') {
        columnValues[projectColumn.id] = { text: message };
      } else {
        columnValues[projectColumn.id] = message;
      }
    }

    if (productColumn && product) {
      if (productColumn.type === 'color' || productColumn.type === 'status') {
        columnValues[productColumn.id] = { label: product };
      } else {
        columnValues[productColumn.id] = product;
      }
    }

    // Debug: Log column values being sent
    console.log('Column Values to Send:', JSON.stringify(columnValues, null, 2));

    // Monday.com GraphQL mutation
    const mutation = `
      mutation {
        create_item (
          board_id: ${MONDAY_BOARD_ID},
          item_name: "${itemName.replace(/"/g, '\\"')}",
          column_values: ${JSON.stringify(JSON.stringify(columnValues))}
        ) {
          id
        }
      }
    `;

    // Send to Monday.com
    const response = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': MONDAY_API_TOKEN,
      },
      body: JSON.stringify({ query: mutation }),
    });

    const data = await response.json();

    if (data.errors) {
      console.error('Monday.com API error:', data.errors);
      return NextResponse.json(
        { error: 'Failed to submit form', details: data.errors },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully',
      itemId: data.data?.create_item?.id
    });

  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
