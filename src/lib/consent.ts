export type ConsentState = {
  analytics: boolean;
  ads: boolean;
};

const STORAGE_KEY = "cookie_consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

export function storeConsent(consent: ConsentState) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
}

export function clearConsent() {
  window.localStorage.removeItem(STORAGE_KEY);
}

export function applyConsent(consent: ConsentState) {
  window.gtag?.("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.ads ? "granted" : "denied",
    ad_user_data: consent.ads ? "granted" : "denied",
    ad_personalization: consent.ads ? "granted" : "denied",
  });
}
