type IconProps = { className?: string };

export function MonitorIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3" y="4" width="18" height="13" rx="1.5" />
      <path strokeLinecap="round" d="M8 21h8M12 17v4" />
    </svg>
  );
}

export function MegaphoneIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 11v2a2 2 0 0 0 2 2h1l3 5V9l-3 2H5a2 2 0 0 0-2 2Z" />
      <path strokeLinecap="round" d="M13 8.5c3-1.2 5-3 6.5-5.2M13 15.5c3 1.2 5 3 6.5 5.2M21 12h-3" />
    </svg>
  );
}

export function CodeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5.5l-3 13" />
    </svg>
  );
}

export function MailIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 6.5 8 6 8-6" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function HeartIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 20.5s-7.5-4.6-10-9.3C.5 8 2 4.5 5.6 4a5 5 0 0 1 6.4 2.4A5 5 0 0 1 18.4 4c3.6.5 5.1 4 3.6 7.2-2.5 4.7-10 9.3-10 9.3Z" />
    </svg>
  );
}

export function LeafBranchIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 120 200" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
      <path strokeLinecap="round" d="M60 200V40" />
      <path strokeLinecap="round" d="M60 170c-16 0-28-12-28-28M60 170c0-16 12-28 28-28M60 130c-14 0-24-10-24-24M60 130c0-14 10-24 24-24M60 90c-12 0-20-8-20-20M60 90c0-12 8-20 20-20M60 55c-8 0-14-6-14-14" />
    </svg>
  );
}

export function RefreshIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12a8 8 0 0 1 14.3-4.9M20 12a8 8 0 0 1-14.3 4.9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 3v4.5H14M5.5 21v-4.5H10" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  );
}

export function PhoneIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5L16 14l4 1.5V19a1.5 1.5 0 0 1-1.5 1.5A15.5 15.5 0 0 1 3.5 5.5 1.5 1.5 0 0 1 5 4Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20l1.2-3.6A8 8 0 1 1 8 19.1L4 20Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.2 8.8c0 3 2.5 5.8 5.8 6l1-1.2-1.6-.9-.7.7a4.4 4.4 0 0 1-2.3-2.3l.7-.7-.9-1.6-1.2 1Z" />
    </svg>
  );
}
