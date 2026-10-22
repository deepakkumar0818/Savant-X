/**
 * fetch() that gives up after `timeoutMs`, so a hung request surfaces as an error
 * (and the form shows its retry message) instead of a button stuck on "Sending…".
 * The returned promise rejects with an AbortError on timeout.
 */
export async function fetchWithTimeout(input: RequestInfo | URL, init: RequestInit = {}, timeoutMs = 25000): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}
