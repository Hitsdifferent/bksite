"use client"; // Client component, omdat we hooks gebruiken
import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Slate from "@/assets/icons/BK_Icon_Extended.svg";

export default function Footer() {
  return (
    <>
    <footer className="container-fluid bg-[#262626]">
        <div className="container mx-auto pt-[100px] pb-[50px]">
            <div className="grid grid-cols-12 gap-4 space-y-8 mb-[200px]">
                <div className="col-span-6">
                    <h1 className="text-5xl leading-[1.2] font-medium text-white">Jouw verhaal.<br/>Onze verbeelding.</h1>
                </div>
                <div className="col-span-3 space-y-8">
                    <h1 className="text-xl font-medium text-white">Locatie</h1>
                    <p className="text-base leading-[1.5] font-base text-white">Papiermolenlaan 3-1 <br/>9721GR Groningen</p>
                </div>
                <div className="col-span-3 space-y-8">
                    <h1 className="text-xl font-medium text-white">Socials</h1>
                    <ul className="space-y-4">
                        <li>
                            <a
                                href="https://www.instagram.com/beeldkameraden"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base leading-[1.2] font-base text-white"
                                >
                                Instagram
                            </a>
                        </li>
                        <li className="text-base leading-[1.2] font-base text-white">LinkedIn</li>
                        <li className="text-base leading-[1.2] font-base text-white">Youtube</li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                    <p className="text-base leading-[1.2] font-medium text-white">&copy; {new Date().getFullYear()} Beeldkameraden</p>
                </div>
                <div className="col-span-6">
                    <p className="text-base leading-[1.2] font-base text-white">Privacy</p>
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