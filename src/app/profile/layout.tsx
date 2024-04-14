import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/globalComponents/Header";
import Footer from "@/components/globalComponents/Footer";
import Image from "next/image";
import { SaleBottom } from "../../../public/assets/Images";
import Sidebar from "@/components/Profile/Sidebar";

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

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="mt-[6rem]">
          <Sidebar />
          <main className="">
            <div className="lg:ml-[21rem] md:p-8 p-4">
              {children}
            </div>
            <div className='md:my-12 mb-14'>
              <Image 
                src={SaleBottom}
                alt=''
              />
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
