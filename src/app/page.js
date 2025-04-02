"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Beloftes from "@/components/Beloftes";
import ServiceFetcher from '@/components/ServiceFetcher';
import AuthorFetcher from '@/components/AuthorFetcher';
import Cta from "@/components/Cta";

import NoorderpoortLogo from "@/assets/logos/Noorderpoort.svg";
import HanzeLogo from "@/assets/logos/Hanze.svg";
import PatynaLogo from "@/assets/logos/patyna.svg";
import DcterraLogo from "@/assets/logos/dcterra.svg";
import DrentheLogo from "@/assets/logos/drenthecollege.svg";

import RightUp from "@/assets/icons/ArrowRightUp.svg";

export default function Home() {

  return (
    <>
    <div className="container-fluid">

      <section className="container mx-auto my-[50px] xl:my-[100px] px-4 xl:px-0">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 xl:col-span-7">
            <h1 className="text-4xl md:text-6xl xl:text-8xl leading-[1.2] font-semibold text-black">Jouw verhaal.<br/>Onze verbeelding.</h1>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8  xl:col-span-4 xl:col-start-9 grid content-between">
            <p className="mt-4 font-medium text-base md:text-lg">Met oog voor detail maken wij professionele video&apos;s voor overheidsinstanties, commerciële organisaties en particulieren. Bij elke klus werken we als een echte beeldkameraad nauw met je samen. </p>
            <Link href="/services">
              <div className="font-medium uppercase text-sm md:text-md mt-16 xl:mt-0 group">
                <span className="px-[30px] py-[10px] text-white bg-[#262626] border-2 border-[#262626] transition duration-300 ease-in-out group-hover:text-black group-hover:bg-white group-hover:border-2">Hoe mogen we jouw in beeld brengen?</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mt-[50px] md:mt-[100px]">
          <div className="col-span-12 md:col-span-6">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image 
                src="/images/Beeldkameraden_220325.jpg" 
                alt="Beeldkameraden ijshal Kardinge" 
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
          <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image 
                src="/images/Beeldkameraden_220325-2.jpg" 
                alt="Beeldkameraden ijshal Kardinge Mart" 
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="grid grid-cols-12 gap-4 mt-[50px] xl:mt-[100px]">
            <div className="col-span-10 col-start-2 items-center">
              <div className="h-auto md:h-[40px] w-1/2 md:w-full flex flex-col md:flex-row space-x-0 md:space-x-16 justify-center">
                <NoorderpoortLogo className="w-auto h-full grayscale" />
                <HanzeLogo className="w-auto h-full grayscale" />
                <PatynaLogo className="w-auto h-full text-black grayscale" />
                <DcterraLogo className="w-auto h-full text-black grayscale" />
                <DrentheLogo className="w-auto h-full text-black grayscale" />              
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden flex">
          <div className="grid grid-cols-3 gap-4 space-y-4 mt-[50px]">
            
                <NoorderpoortLogo className="w-4/5 flex mx-auto h-8 grayscale" />
                <HanzeLogo className="w-4/5 flex mx-auto h-8 grayscale" />
                <PatynaLogo className="w-4/5 flex mx-auto h-8 grayscale" />
                <DcterraLogo className="w-4/5 flex mx-auto h-8 grayscale" />
                <DrentheLogo className="w-4/5 flex mx-auto h-8 grayscale" />              
             
          </div>
        </div>

      </section>

      <Beloftes/>

      <section className="container mx-auto px-4 xl:px-0">
        <div className="grid grid-cols-12 gap-4 my-[50px] xl:my-[100px]">
          <div className="col-span-12 md:col-span-6 text-black space-y-8 ">
            <p className="text-lg md:text-2xl xl:text-3xl leading-[1.5] font-medium">Bij elke klus werken we als een echte beeldkameraad nauw met je samen. Hoe mogen we jou in beeld brengen? Je kan Beeldkameraden gebruiken bij:</p>
            <div className="mt-[50px]">          
              <ul>
                <ServiceFetcher>
                  {(services) => (
                    services.map((service) => (
                      <li key={service.slug}>
                        <Link href={`/services/${service.slug}`}>
                          <div className="flex flex-row justify-between border-t-2 border-black group">
                            <p className="text-lg md:text-2xl font-medium py-[25px] transition duration-300 ease-in-out group-hover:translate-x-4 cursor-pointer">{service.title}</p>
                            <span className="p-[24px]">
                              <RightUp className="w-[24px] h-[24px]" />
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))
                  )}
                </ServiceFetcher>
              </ul>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <div className="bg-blue-600 aspect-video rounded-lg">
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid bg-[#262626] py-[50px] md:py-[100px] px-4 xl:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4 space-y-8">
            <div className="col-span-12 xl:col-span-5">
              <div className="bg-blue-600 aspect-video rounded-lg">
              </div>
            </div>
            <div className="col-span-12 xl:col-span-6 xl:col-start-7 grid pr-8 text-white">
              <div className="flex flex-col space-y-8">
                {/* <h1 className="text-3xl leading-[1.2] font-semibold">Over ons</h1> */}
                <p className="text-lg md:text-2xl leading-[1.5] font-medium">Al drie jaar staan we met passie achter de lens voor elk verhaal. Wat met een opdracht tijdens een studieproject begon, is uitgegroeid tot een videobedrijf met tientallen opdrachtgevers. Het leukste aan ons werk? Iedereen heeft weer een ander verhaal.</p>
              </div>
              <div className="flex flex-row mt-16 md:mt-0">
                <Link href="/overons">
                  <div className="font-medium uppercase text-sm md:text-md mt-16 xl:mt-0 group">
                    <span className="px-[30px] py-[10px] text-[#262626] bg-white border-2 border-white transition duration-300 ease-in-out group-hover:text-white group-hover:border-2 group-hover:bg-[#262626] group-hover:border-white">Meer over ons</span>
                  </div>
                </Link>
              </div>
            </div>                               
          </div>
        </div>
      </section>

      <Cta />

    </div>
    </>
  );
}
