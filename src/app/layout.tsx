import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import Script from "next/script";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-JKQNR2F3XH";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nardianna.it"),
  title: "Creazione Siti Web su Misura | Anna Nardi — Nardi Creates",
  description:
    "Web designer freelance: creo siti web su misura e landing page per piccole attività e professionisti, con restyling e manutenzione. Preventivo gratuito.",
  keywords: [
    "creazione siti web",
    "sito web su misura",
    "web designer freelance",
    "sito vetrina per attività",
    "landing page",
    "restyling sito web",
    "manutenzione sito WordPress",
    "sito web per professionisti",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://nardianna.it",
    siteName: "Nardi Creates",
    title: "Creazione Siti Web su Misura | Anna Nardi — Nardi Creates",
    description:
      "Web designer freelance: creo siti web su misura e landing page per piccole attività e professionisti, con restyling e manutenzione. Preventivo gratuito.",
    images: [
      {
        url: "/images/anna-hero-2.png",
        width: 2000,
        height: 1044,
        alt: "Anna Nardi — Nardi Creates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creazione Siti Web su Misura | Anna Nardi — Nardi Creates",
    description:
      "Web designer freelance: creo siti web su misura e landing page per piccole attività e professionisti, con restyling e manutenzione. Preventivo gratuito.",
    images: ["/images/anna-hero-2.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${playfair.variable} ${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });
            try {
              var stored = JSON.parse(localStorage.getItem('cookie_consent'));
              if (stored) {
                gtag('consent', 'update', {
                  'analytics_storage': stored.analytics ? 'granted' : 'denied',
                  'ad_storage': stored.ads ? 'granted' : 'denied',
                  'ad_user_data': stored.ads ? 'granted' : 'denied',
                  'ad_personalization': stored.ads ? 'granted' : 'denied'
                });
              }
            } catch (e) {}
          `}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
