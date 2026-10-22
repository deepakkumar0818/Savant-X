const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxf1yi29E6UeYzg23FBr6dzheMllWVg-xLZTa93sTDujBvrkZOfybbRtUxkJgXRj8Pj/exec';

export type GoogleSheetLeadPayload = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  zohoApps: string;
  requirement: string;
};

export type GoogleSheetSubmitResult = {
  ok: boolean;
  message: string;
};

export async function submitZohoLeadToGoogleSheet(
  payload: GoogleSheetLeadPayload
): Promise<GoogleSheetSubmitResult> {
  const params = new URLSearchParams({
    fullName: payload.fullName,
    companyName: payload.companyName,
    email: payload.email,
    phone: payload.phone,
    zohoApps: payload.zohoApps,
    requirement: payload.requirement,
  });

  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  const text = await response.text();
  let data: { message?: string; error?: string } = {};

  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { message: text || 'Submitted' };
  }

  // 401 means the Apps Script is deployed as "Only myself" and the row was NOT written.
  // Report it as a failure so the visitor is never told a lost submission succeeded.
  if (response.status === 401) {
    return { ok: false, message: 'Google Sheet script rejected the request (401). Redeploy it with access "Anyone".' };
  }

  if (!response.ok) {
    return {
      ok: false,
      message: data.error || 'Google Sheet submission failed.',
    };
  }

  return {
    ok: true,
    message: data.message || 'Form submitted successfully.',
  };
}
