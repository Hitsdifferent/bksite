import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// IBM Plex Sans font
const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// IBM Plex Mono font
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Beeldkameraden",
  description: "Videobedrijf uit Groningen",
  icons: {
    icon: [
        {
            url: "/bkfavicon.svg", // /public path
            href: "/bkfavicon.svg", // /public path
        },
    ],
},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`} >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
