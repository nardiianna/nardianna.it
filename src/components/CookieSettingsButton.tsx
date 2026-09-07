"use client";

import { OPEN_COOKIE_SETTINGS_EVENT } from "./CookieBanner";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))
      }
      className="hover:text-pink-dark"
    >
      Gestisci cookie
    </button>
  );
}
