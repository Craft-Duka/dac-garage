import type { Metadata } from "next";
import { Archivo, Archivo_Narrow } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_URL } from "@/lib/structured-data";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  variable: "--font-archivo-narrow",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Car Body Shop & Accident Repairs in Nairobi | Dekker Auto Clinic",
    template: "%s | DAC Auto Nairobi",
  },
  description:
    "Expert body repairs, panel beating, car painting and detailing in Nairobi. Visit Dekker Auto Clinic in Lang’ata and Upperhill. Email sales@dautoclinic.com.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Dekker Auto Clinic",
    title: "Dekker Auto Clinic | Bodywork with care. Paintwork with character.",
    description:
      "Body repairs, paint refinishing and detailing in Nairobi. Your car. Our craft.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dekker Auto Clinic — Nairobi bodywork and paint specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dekker Auto Clinic | Nairobi Body Shop",
    description: "Expert body repairs, paint refinishing and detailing.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${archivoNarrow.variable} antialiased`}
    >
      <body className="bg-base text-main flex flex-col min-h-screen">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
