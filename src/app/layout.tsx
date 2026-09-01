import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

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
  title: "Nardi Creates | Anna Nardi — Web Design & Strategia Digitale",
  description:
    "Creo siti web personali e landing page, gestisco presenza social e digitale, sviluppo soluzioni digitali su misura per brand e professionisti.",
  keywords: [
    "creazione siti web",
    "web designer freelance",
    "landing page personalizzata",
    "gestione social media",
    "sviluppo web app su misura",
    "presenza digitale professionisti",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://nardianna.it",
    siteName: "Nardi Creates",
    title: "Nardi Creates | Anna Nardi — Web Design & Strategia Digitale",
    description:
      "Creo siti web personali e landing page, gestisco presenza social e digitale, sviluppo soluzioni digitali su misura per brand e professionisti.",
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
    title: "Nardi Creates | Anna Nardi — Web Design & Strategia Digitale",
    description:
      "Creo siti web personali e landing page, gestisco presenza social e digitale, sviluppo soluzioni digitali su misura per brand e professionisti.",
    images: ["/images/anna-hero-2.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${playfair.variable} ${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
