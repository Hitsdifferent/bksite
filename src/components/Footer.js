"use client"; // Client component, omdat we hooks gebruiken
import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Slate from "@/assets/icons/BK_Icon_Extended.svg";

export default function Footer() {
  return (
    <>
    <footer className="container-fluid bg-[#262626]">
        <div className="container mx-auto pt-[50px] md:pt-[100px] pb-[50px] px-4 md:px-0">
            <div className="grid grid-cols-12 gap-4 space-y-8 mb-[100px] md:mb-[200px]">
                <div className="col-span-12 md:col-span-6">
                    <h1 className="text-2xl md:text-5xl leading-[1.2] font-medium text-white">Jouw verhaal.<br/>Onze verbeelding.</h1>
                </div>
                <div className="col-span-6 md:col-span-3 space-y-4 md:space-y-8">
                    <h1 className="text-md md:text-xl font-medium text-white">Locatie</h1>
                    <p className="text-sm md:text-base leading-[1.5] text-white">Papiermolenlaan 3-1 <br/>9721GR Groningen</p>
                </div>
                <div className="col-span-6 md:col-span-3 space-y-4 md:space-y-8">
                    <h1 className="text-md md:text-xl font-medium text-white">Socials</h1>
                    <ul className="space-y-0 md:space-y-4">
                        <li>
                            <a
                                href="https://www.instagram.com/beeldkameraden"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm md:text-base leading-0 md:leading-[1.2]  text-white"
                                >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/company/beeldkameraden"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm md:text-base leading-0 md:leading-[1.2]  text-white"
                                >
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6">
                    <p className="text-sm leading-[1.2] font-regular text-white">&copy; {new Date().getFullYear()} Beeldkameraden</p>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <p className="text-sm leading-[1.2] font-regular text-white">Privacy</p>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <Slate className="w-full h-auto text-white" />
        </div>
    </footer>
    </>
  );
}