import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css"

// ✅ IMPORT GLOBAL COMPONENTS
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import MobileBottomBar from "../components/MobileBottomBar";
import FloatingPromo from "../components/FloatingPromo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
  default: "Avinash Dental Care in Gudur",
  template: "%s | Avinash Dental Care",
},
keywords: [
    "Dental Clinic Gudur",
    "Dentist in Gudur",
    "Dental Implants Gudur",
    "Root Canal Treatment Gudur",
    "Teeth Whitening Gudur",
    "Cosmetic Dentistry Gudur",
    "Avinash Dental Care",
  ],
   description:
    "Avinash Dental Care provides expert dental treatments in Gudur including dental implants, root canal treatment, teeth whitening, cosmetic dentistry, and preventive dental care. Located near Tower Clock Centre, Gudur.",
    icons: {
  icon: "/assests/logo.png",
},

 openGraph: {
    title: "Avinash Dental Care",
    description:
      "Professional dental care near Tower Clock Centre, Gudur.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">

        {/* ✅ GLOBAL UI */}
       
        <Navbar />
         <TopBar />

        {/* ✅ PAGE CONTENT */}
        <main className="flex-1">{children}</main>

        {/* ✅ GLOBAL FOOTER + FLOATING */}
        <Footer />
        <FloatingPromo />
        <FloatingWhatsApp />
        <MobileBottomBar />

      </body>
    </html>
  );
}