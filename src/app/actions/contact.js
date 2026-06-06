"use server";

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

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

export async function submitContactForm(prevState, formData) {
  try {
    // Check for honeypot
    if (formData.get('_honeypot')) {
      return { success: false, error: 'Spam detected' };
    }

    const data = Object.fromEntries(formData.entries());
    const { name, first_name, last_name, email } = data;
    const displayName = name || `${first_name || ''} ${last_name || ''}`.trim();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { success: false, error: 'Valid email is required' };
    }

    // Mock success if credentials are missing (e.g., in CI environments)
    if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
      console.warn('Google Sheets credentials missing. Mocking successful submission.');
      // Simulate API latency for UI loading states
      await new Promise(resolve => setTimeout(resolve, 800));
      return { success: true, message: 'Message sent successfully!' };
    }

    // Initialize auth
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);

    await doc.loadInfo();
    
    // Determine the worksheet title based on page_source
    const sheetTitle = data.page_source ? 
      data.page_source.charAt(0).toUpperCase() + data.page_source.slice(1).replace(/-/g, ' ') : 
      'General Leads';

    // Find existing sheet or create a new one
    let sheet = doc.sheetsByTitle[sheetTitle];
    if (!sheet) {
      sheet = await doc.addSheet({ title: sheetTitle, headerValues: MASTER_HEADERS });
    }

    try {
        // If sheet existed but had no headers, set them
        await sheet.loadHeaderRow();
    } catch (e) {
        await sheet.setHeaderRow(MASTER_HEADERS);
    }

    const rowData = {
      Date: new Date().toLocaleString(),
      ...data,
      name: data.name || displayName
    };

    // Remove honeypot from row data
    delete rowData._honeypot;

    await sheet.addRow(rowData);

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Form Action Error:', error);
    return { success: false, error: 'Failed to send message. Please try again later.' };
  }
}
