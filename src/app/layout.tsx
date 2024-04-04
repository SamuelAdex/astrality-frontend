import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Astrality",
  description: "Dive into Astrality, A fusion of limitless potential and tangible reality",
  keywords: [],
  icons: {
    icon: "/assets/img/astrality-logo2.png",
    shortcut: "/assets/img/astrality-logo2.png",
    apple: "/assets/img/astrality-logo2.png",
  },
  applicationName: "Astrality",
  authors: [],
  referrer: "origin",
  creator: "",
  publisher: "Astrality",
  robots: { index: true, follow: true },
  alternates: { canonical: "" },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "",
    title: "Astrality",
    description: "Dive into Astrality, A fusion of limitless potential and tangible reality",
    siteName: "Astrality",
    images: [
      {
        url: "/assets/img/astrality-logo2.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "",
    creator: "",
    images: "",
    description: "Dive into Astrality, A fusion of limitless potential and tangible reality",
    title: "Astrality",
  },
  verification: {
    google: "",
  },
  abstract:
    "Dive into Astrality, A fusion of limitless potential and tangible reality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
