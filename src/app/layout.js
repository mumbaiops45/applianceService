import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://customercare247.support"),
  title: {
    default: "Home Appliance Repair Services",
    template: "%s | ApplianceCare",
  },
  description:
    "Professional Home Appliance Repair Services for Washing Machines, Refrigerators & TVs.",
  keywords: [
    "Appliance Repair",
    "LG Washing Machine Repair",
    "Samsung Refrigerator Repair",
    "Sony TV Repair",
  ],
  icons: {
    icon: "/Screenshot 2026-08-05 160324.png",
    shortcut: "/Screenshot 2026-08-05 160324.png",
    apple: "/Screenshot 2026-08-05 160324.png",
  },
  verification: {
    google: "XcdOGfomjhHpfBFHE3otZroY9BcBmEtlWGaJEVpxEUg",
  },
  openGraph: {
    title: "Home Appliance Repair Services",
    description: "Professional Home Appliance Repair Services Near You.",
    url: "https://customercare247.support",
    siteName: "ApplianceCare",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
 <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GM9SKVTD79"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GM9SKVTD79');
          `}
        </Script>
      </head>
      <body className={poppins.variable}>
        <Navbar />

        <main className="pt-6">{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}