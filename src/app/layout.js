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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Beeldkameraden</title>
        <meta name="description" content="Videobedrijf uit Groningen" />
        <link rel="icon" href="/bkfavicon.svg" />
      </Head>
      <body className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`} >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
