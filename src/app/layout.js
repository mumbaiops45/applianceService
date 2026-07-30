import { Poppins } from "next/font/google";
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
  metadataBase: new URL("https://www.example.com"),
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
  openGraph: {
    title: "Home Appliance Repair Services",
    description: "Professional Home Appliance Repair Services Near You.",
    url: "https://www.example.com",
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
    <html lang="en">
      <body className={poppins.variable}>
        <Navbar />

        <main>{children}</main>
  <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}