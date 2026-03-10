/**
 * PASTE THIS ENTIRE FILE INTO YOUR GOOGLE APPS SCRIPT PROJECT
 * (The one whose Web App URL is used in the SavantX Zoho form.)
 *
 * 1. Open your "Leads" Google Sheet
 * 2. Extensions → Apps Script
 * 3. Replace any existing code with this entire file
 * 4. Save (Ctrl+S), then Deploy → New deployment → Type: Web app
 * 5. Description: "Zoho form" | Execute as: Me | Who has access: Anyone
 * 6. Deploy → Copy the Web app URL and update the URL in savantx-website if needed
 */

function doPost(e) {
  try {
    var params = e.parameter;
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Append row matching your columns: Full Name | Company Name | Email | Phone | Zoho Apps | Requirement | Date
    sheet.appendRow([
      params.fullName || '',
      params.companyName || '',
      params.email || '',
      params.phone || '',
      params.zohoApps || '',
      params.requirement || '',
      new Date()
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ message: 'Submitted' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
