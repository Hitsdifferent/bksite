"use client"; // Client component, omdat we hooks gebruiken

import { Fragment, useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import AnimatedTitles from "./animations/AnimatedTitles";
import AnimatedBlock from "./animations/AnimatedBlock";

export default function Cta() {
  return (
    <>
    <section className="container mx-auto pt-[50px] md:pt-[100px] pb-[100px] md:pb-[250px] px-4 xl:px-0">
        <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-5 xl:col-span-7">
            <AnimatedTitles>
              <h1 className="text-2xl md:text-5xl xl:text-8xl leading-[1.2] font-semibold text-black">Klaar om aan de slag te gaan?</h1>
            </AnimatedTitles>
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7 xl:col-span-4 xl:col-start-9 grid content-between space-y-12">
            <AnimatedBlock>
              <p className="font-medium text-base md:text-lg">Ben je klaar om jouw product, organisatie of evenement meer onder de aandacht te brengen met een video? Tijdens een kennismakingskoffie vertellen we graag hoe we jouw verhaal tot de verbeelding laten spreken.</p>
            </AnimatedBlock>
            <Link href="/services">
            <div className="text-white font-medium uppercase text-sm md:text-lg mt-18 md:mt-0"><span className="px-[30px] py-[10px] bg-[#262626]">hallo@beeldkameraden.nl</span></div>
            </Link>
        </div>
        </div>
    </section>
    </>
  );
}