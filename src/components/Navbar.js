"use client"; // Client component, omdat we hooks gebruiken

import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Slate from "@/assets/icons/BK_Icon_Extended.svg";
import LogoMobile from "@/assets/logos/BK_Icon.svg";
import Logo from "@/assets/logos/BK_Logo.svg";


import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleLinkClick = () => { setIsMobileMenuOpen(false); };


  return (
         <>
      {pathname === "/" && ( // Alleen tonen als de gebruiker op de homepagina is
        <nav className="flex z-50 bg-black">
          <div className="container mx-auto bg-white">
            <Slate className="w-full h-auto text-black max-h-[300px] scale-100" />
          </div>
        </nav>
      )}
      <nav className="bg-white p-4 text-black border-b-2 sticky top-0 border-[#D5D5D5] z-10">
        <div className="container mx-auto flex justify-between items-center">
          {/* Desktop Logo */}
          <div className="hidden md:flex">
            <Link href="/" onClick={handleLinkClick}>
              <Logo className="w-[70%] h-auto text-black" />
            </Link>
          </div>

          {/* Mobile Logo */}
          <div className="md:hidden flex z-50">
            <Link href="/" onClick={handleLinkClick} >
              <LogoMobile className="w-[20%] h-auto text-black" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex text-sm gap-8 uppercase font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Over ons", path: "/overons" },
              { name: "Werk", path: "/werk" }
            ].map(({ name, path }) => (
              <li key={path}>
                <Link href={path} className="flex items-center px-3 py-2">
                  {pathname === path && <span className="w-3 h-3 bg-red-500 mr-2"></span>}
                  {name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="flex items-center px-3 py-2 bg-[#262626] text-white uppercase font-medium">
                Get in touch
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger Menu Button */}
          <button
            className="md:hidden flex items-center text-black z-50" // z-50 zorgt dat het boven het menu blijft
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              // Jouw eigen kruisje SVG
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              // Hamburger menu SVG
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.ul
                initial={{ y: '-100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="fixed top-0 left-0 w-full h-screen bg-white text-black md:hidden flex flex-col items-center gap-4 pt-[150px] p-4"
              >
                {[
                  { name: "Home", path: "/" },
                  { name: "Services", path: "/services" },
                  { name: "Over ons", path: "/overons" },
                  { name: "Werk", path: "/werk" }
                ].map(({ name, path }) => (
                  <li key={path}>
                    <Link
                      href={path}
                      onClick={handleLinkClick}
                      className="flex items-center px-3 py-2 text-xl"
                    >
                      {pathname === path && (
                        <span className="w-3 h-3 bg-red-500 mr-2"></span>
                      )}
                      {name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    onClick={handleLinkClick}
                    className="flex items-center px-6 py-3 bg-[#262626] text-white uppercase font-medium mt-4"
                  >
                    Get in touch
                  </Link>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>

        </div>
      </nav>
      </>
  );
}
