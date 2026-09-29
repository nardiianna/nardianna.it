"use client";

import { useEffect } from "react";

const STAGGER_MS = 110;

// Fades section content in as it scrolls into view. Classes are added only
// on the client, so without JS (or with reduced motion) everything stays visible.
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets: HTMLElement[] = [];
    document
      .querySelectorAll<HTMLElement>("main section:not(#home) > div > *")
      .forEach((el) => {
        if (el.classList.contains("grid")) {
          Array.from(el.children).forEach((child, i) => {
            (child as HTMLElement).style.transitionDelay = `${i * STAGGER_MS}ms`;
            targets.push(child as HTMLElement);
          });
        } else {
          targets.push(el);
        }
      });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (!isIntersecting) return;
          const el = target as HTMLElement;
          observer.unobserve(el);
          el.classList.add("is-visible");
          // Hand transitions back to the element's own hover styles once done.
          el.addEventListener(
            "transitionend",
            () => {
              el.classList.remove("reveal", "is-visible");
              el.style.transitionDelay = "";
            },
            { once: true },
          );
        });
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    targets.forEach((el) => {
      const { display, position } = getComputedStyle(el);
      // Skip decorative/breakpoint-hidden elements (they may never intersect)
      // and anything already on screen, to avoid a flash on load.
      if (
        display === "none" ||
        position === "absolute" ||
        el.getBoundingClientRect().top < window.innerHeight
      ) {
        el.style.transitionDelay = "";
        return;
      }
      el.classList.add("reveal");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
