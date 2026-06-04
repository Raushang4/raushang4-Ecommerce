/**
 * Test Form Submission Script
 * This script allows you to test the Google Sheets connection directly from your terminal.
 */

const { submitContactForm } = require('../src/app/actions/contact');

async function testSubmission() {
  console.log("--- STARTING TEST FORM SUBMISSION ---");
  
  const mockFormData = new FormData();
  mockFormData.append('name', 'Terminal Test User');
  mockFormData.append('email', 'terminal-test@example.com');
  mockFormData.append('phone', '9876543210');
  mockFormData.append('page_source', 'terminal_test');
  mockFormData.append('message', 'This is a test submission sent directly from the CLI to verify the Google Sheets integration.');

  try {
    const result = await submitContactForm({}, mockFormData);
    if (result.success) {
      console.log("✅ SUCCESS: " + result.message);
    } else {
      console.log("❌ FAILED: " + result.error);
    }
  } catch (err) {
    console.error("💥 CRITICAL ERROR:");
    console.error(err);
  }
}

// Check for required env vars first
const missing = [];
if (!process.env.GOOGLE_CLIENT_EMAIL) missing.push("GOOGLE_CLIENT_EMAIL");
if (!process.env.GOOGLE_PRIVATE_KEY) missing.push("GOOGLE_PRIVATE_KEY");
if (!process.env.GOOGLE_SHEET_ID) missing.push("GOOGLE_SHEET_ID");

if (missing.length > 0) {
  console.log("❌ ERROR: Missing environment variables in .env.local:");
  missing.forEach(m => console.log(`   - ${m}`));
  console.log("\nPlease add these to your .env.local file before running the test.");
  process.exit(1);
}

testSubmission();
