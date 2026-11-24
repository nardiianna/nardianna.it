export const META_PIXEL_ID = "1327846102778416";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

// No-op until the visitor accepts ad cookies and MetaPixel loads fbq.
export function trackMeta(event: string, params?: Record<string, unknown>) {
  window.fbq?.("track", event, params);
}
