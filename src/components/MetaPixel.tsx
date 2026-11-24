"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { getStoredConsent, subscribeConsent } from "@/lib/consent";
import { META_PIXEL_ID, trackMeta } from "@/lib/metaPixel";

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: Fbq;
  loaded: boolean;
  version: string;
};

// Standard Meta snippet, injected only once the visitor accepts ad cookies.
function loadPixel() {
  if (window.fbq) return;
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  } as Fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  fbq("init", META_PIXEL_ID);
}

const CONTACT_LINKS: [string, string][] = [
  ["tel:", "Telefono"],
  ["https://wa.me/", "WhatsApp"],
  ["mailto:", "Email"],
];

export default function MetaPixel() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);
  const adsGranted = useSyncExternalStore(
    subscribeConsent,
    () => getStoredConsent()?.ads === true,
    () => false,
  );

  useEffect(() => {
    if (!adsGranted) {
      window.fbq?.("consent", "revoke");
      return;
    }
    loadPixel();
    window.fbq?.("consent", "grant");
    if (lastTrackedPath.current !== pathname) {
      lastTrackedPath.current = pathname;
      trackMeta("PageView");
    }
  }, [adsGranted, pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest("a");
      const href = link?.getAttribute("href");
      if (!href) return;
      const match = CONTACT_LINKS.find(([prefix]) => href.startsWith(prefix));
      if (match) trackMeta("Contact", { content_name: match[1] });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
