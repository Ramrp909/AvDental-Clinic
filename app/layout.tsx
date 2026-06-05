import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css"

// ✅ IMPORT GLOBAL COMPONENTS
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import MobileBottomBar from "../components/MobileBottomBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dental Clinic - Professional Dental Care",
  description:
    "Expert dental care with experienced professionals. Book your appointment today.",
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
        <FloatingWhatsApp />
        <MobileBottomBar />

      </body>
    </html>
  );
}