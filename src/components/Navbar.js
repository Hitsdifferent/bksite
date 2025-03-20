"use client"; // Client component, omdat we hooks gebruiken

import Link from "next/link";
import Image from "next/image";
import Slate from "@/assets/icons/BK_Icon_Extended.svg";


import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
         <>
      {pathname === "/" && ( // Alleen tonen als de gebruiker op de homepagina is
        <nav>
          <Slate className="w-full h-auto text-black" />
        </nav>
      )}
      <nav className="bg-white p-4 text-black border-b-2 sticky top-0 border-[#D5D5D5] z-10">        
        <div className="container mx-auto flex justify-between content-center">
          <div className="">

          </div>
          <ul className="flex text-sm gap-8 uppercase font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Over ons", path: "/overons" },
              { name: "Werk", path: "/werk" }
            ].map(({ name, path }) => (
              <li key={path}>
               <Link
                  href={path}
                  className={"flex items-center px-3 py-2"}
                >
                  {pathname === path && <span className="w-3 h-3 bg-red-500 mr-2"></span>}
                  {name}
                </Link>
              </li>
            ))}
            <li><Link href="/contact" className="flex items-center px-3 py-2 bg-[#262626] text-white uppercase font-medium">Get in touch</Link></li>
          </ul>          
        </div>      
      </nav>
      </>
  );
}
