/** Zoho CRM Web-to-Lead form configuration (SavantX). */
export const ZOHO_CRM_WEB_TO_LEAD_URL = 'https://crm.zoho.in/crm/WebToLeadForm';

export const ZOHO_CRM_FORM_ID = '1306132000000687004';

export const ZOHO_CRM_ANALYTICS_SCRIPT =
  'https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=81ea50668ef7097f2c074ac1b6b83be0d205f009cd1b87e8006a3a36dd39ed7f337f8b031814bb47ebe64d7c26a3f75cgid83f6281f81d930ee63db03b0d30a63e401926d17ad2eeba9319e983b26bc7162gid53d0a4000545ac6299ab0021c76f02b57e533ffc159a253073155ff6ae520685gid4bcb3abd87f982ac7d154820994b65cbbc11eaad5d89efb4a76ce3e8686795b3&tw=2d1c2cf5232b081a553ea16fd64a4568a661d27f1e9a80c1685d23b1ccbd11a6&version=v2';

/** Required hidden fields — do not remove. */
const ZOHO_HIDDEN_FIELDS = {
  xnQsjsdp:
    '7510e47d2357c13a5aab13c964e9aa5231c60ac9659372db5ba84c5a5e522d45',
  xmIwtLD:
    '1b4761e84af5289f790173339b5daa92d524118e956f1975be0f8c03dfe33e8b90794f3aae69ba80b30f372658bb65e4',
  actionType: 'TGVhZHM=',
  returnURL: 'null',
} as const;

export type ZohoLeadPayload = {
  lastName: string;
  company: string;
  email?: string;
  mobile?: string;
  description?: string;
  interestZohoApps?: string;
  honeypot?: string;
  service?: string;
};

export function validateZohoLeadPayload(payload: ZohoLeadPayload): string | null {
  if (payload.honeypot?.trim()) {
    return 'Invalid submission.';
  }

  if (!payload.lastName?.trim()) {
    return 'Last Name cannot be empty.';
  }

  if (!payload.company?.trim()) {
    return 'Company cannot be empty.';
  }

  const email = payload.email?.trim() ?? '';
  if (email) {
    const atpos = email.indexOf('@');
    const dotpos = email.lastIndexOf('.');
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
      return 'Please enter a valid email address.';
    }
  }

  return null;
}

export function buildZohoLeadFormData(payload: ZohoLeadPayload): FormData {
  const formData = new FormData();

  formData.append('xnQsjsdp', ZOHO_HIDDEN_FIELDS.xnQsjsdp);
  formData.append('zc_gad', '');
  formData.append('xmIwtLD', ZOHO_HIDDEN_FIELDS.xmIwtLD);
  formData.append('actionType', ZOHO_HIDDEN_FIELDS.actionType);
  formData.append('returnURL', ZOHO_HIDDEN_FIELDS.returnURL);

  formData.append('Last Name', payload.lastName.trim());
  formData.append('Company', payload.company.trim());
  formData.append('Email', payload.email?.trim() ?? '');
  formData.append('Mobile', payload.mobile?.trim() ?? '');
  formData.append('Description', payload.description?.trim() ?? '');
  formData.append('LEADCF2', payload.interestZohoApps?.trim() ?? '');

  // Honeypot — do not remove.
  formData.append('aG9uZXlwb3Q', payload.honeypot?.trim() ?? '');

  if (payload.service?.trim()) {
    formData.append('service', payload.service.trim());
  }

  return formData;
}

type ZohoCrmJsonResponse = {
  actionsubmit?: string;
  actionvalue?: string;
  message?: string;
  success?: boolean;
  invalidCaptcha?: string | boolean;
  redirectUrl?: string;
};

export type ZohoLeadSubmitResult = {
  ok: boolean;
  message: string;
};

export async function submitZohoLeadToCrm(
  payload: ZohoLeadPayload
): Promise<ZohoLeadSubmitResult> {
  const validationError = validateZohoLeadPayload(payload);
  if (validationError) {
    return { ok: false, message: validationError };
  }

  const formData = buildZohoLeadFormData(payload);

  const response = await fetch(ZOHO_CRM_WEB_TO_LEAD_URL, {
    method: 'POST',
    body: formData,
    cache: 'no-cache',
  });

  const contentType = response.headers.get('Content-Type') ?? '';

  if (contentType.includes('application/json')) {
    const data = (await response.json()) as ZohoCrmJsonResponse;

    if (data.invalidCaptcha === true || data.invalidCaptcha === 'true') {
      return {
        ok: false,
        message: data.actionvalue || 'Captcha validation failed. Please try again.',
      };
    }

    if (data.actionsubmit === 'Splash Message') {
      return {
        ok: true,
        message: data.actionvalue || 'Thank you! We have received your request.',
      };
    }

    if (data.actionsubmit === 'error_msg' || data.actionsubmit === 'captcha_error') {
      return {
        ok: false,
        message: data.message || data.actionvalue || 'Submission failed. Please try again.',
      };
    }

    if (
      data.success &&
      (data.actionsubmit === 'redirect_url' ||
        data.actionsubmit === 'parent_redirect' ||
        data.actionsubmit === 'thankyou_page')
    ) {
      return {
        ok: true,
        message: 'Thank you! We have received your request.',
      };
    }

    if (data.actionsubmit === 'add_hash') {
      return {
        ok: true,
        message: 'Thank you! We have received your request.',
      };
    }

    return {
      ok: response.ok,
      message: data.actionvalue || data.message || 'Thank you! We have received your request.',
    };
  }

  const text = await response.text();
  if (!response.ok) {
    return { ok: false, message: 'Submission failed. Please try again.' };
  }

  return {
    ok: true,
    message: text.trim() || 'Thank you! We have received your request.',
  };
}
