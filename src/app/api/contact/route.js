import { NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

// Master list of all possible fields across all forms in the project
const MASTER_HEADERS = [
  'Date', 
  'form_name', 
  'page_source', 
  'first_name', 
  'last_name', 
  'name', 
  'email', 
  'phone', 
  'message', 
  'store_url', 
  'website_url', 
  'site_url', 
  'woo_stage', 
  'shopify_stage', 
  'site_type', 
  'location', 
  'monthly_sessions', 
  'monthly_ad_spend', 
  'main_concern', 
  'service_type', 
  'client_source', 
  'product_category', 
  'lead_source'
];

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Basic validation for common fields
    const { name, first_name, last_name, email } = body;
    const displayName = name || `${first_name || ''} ${last_name || ''}`.trim();
    const contactEmail = email;

    if (!contactEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    // Initialize auth
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);

    // Load doc info
    await doc.loadInfo();
    
    // Get the first sheet
    const sheet = doc.sheetsByIndex[0];

    // Check if the sheet is empty or lacks headers
    // sheet.headerValues is only available if there are headers
    try {
        await sheet.loadHeaderRow();
    } catch (e) {
        // If header row loading fails, it's likely empty
        console.log('Sheet appears to be empty. Creating master header row...');
        await sheet.setHeaderRow(MASTER_HEADERS);
    }

    // Prepare row data
    // We'll include a timestamp and then spread all other body fields
    const rowData = {
      Date: new Date().toLocaleString(),
      ...body
    };

    // If 'name' isn't in body but we calculated displayName, add it
    if (!body.name && displayName) {
      rowData.name = displayName;
    }

    // Append the row
    // Note: google-spreadsheet will match keys to header row in the sheet
    await sheet.addRow(rowData);

    return NextResponse.json({ success: true, message: 'Form submission saved successfully' });
  } catch (error) {
    console.error('Form Submission Error:', error);
    return NextResponse.json(
      { error: 'Failed to save submission', details: error.message },
      { status: 500 }
    );
  }
}
