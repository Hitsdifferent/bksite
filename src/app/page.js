"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Beloftes from "@/components/Beloftes";
import ServiceFetcher from '@/components/ServiceFetcher';
import AuthorFetcher from '@/components/AuthorFetcher';

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

      <section className="container mx-auto mb-[100px] px-4 md:px-0">
        <div className="grid grid-cols-12 gap-4 mt-[50px] md:mt-[100px]">
          <div className="col-span-12 md:col-span-7">
            <h1 className="text-4xl md:text-8xl leading-[1.2] font-semibold text-black">Jouw verhaal.<br/>Onze verbeelding.</h1>
          </div>
          <div className="col-span-12 md:col-start-9 md:col-span-4 grid content-between">
            <p className="mt-4 font-medium text-base md:text-lg">Met oog voor detail maken wij professionele video&apos;s voor overheidsinstanties, commerciële organisaties en particulieren. Bij elke klus werken we als een echte beeldkameraad nauw met je samen. </p>
            <Link href="/services">
              <div className="text-white font-medium uppercase text-sm md:text-md mt-16 md:mt-0"><span className="px-[10px] md:px-[30px] py-[10px] bg-[#262626]">Hoe mogen we jouw in beeld brengen?</span></div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mt-[50px] md:mt-[100px]">
          <div className="col-span-12 md:col-span-6">
            <div className="bg-blue-600 aspect-video rounded-2xl">

            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="bg-blue-600 aspect-video rounded-2xl">

            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mt-[100px]">
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
      </section>

      <Beloftes/>

      <section className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-12 gap-4 my-[50px] md:my-[100px]">
          <div className="col-span-12 md:col-span-6 text-black space-y-8 ">
            <p className="text-xl md:text-3xl leading-[1.5] font-medium">Bij elke klus werken we als een echte beeldkameraad nauw met je samen. Hoe mogen we jou in beeld brengen? Je kan Beeldkameraden gebruiken bij:</p>
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
            <div className="bg-blue-600 aspect-video rounded-2xl">
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid bg-[#262626] py-[50px] md:py-[100px] px-4 md:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4 space-y-8">
            <div className="col-span-12 md:col-span-6 grid pr-8 text-white">
              <div className="flex flex-col space-y-8">
                {/* <h1 className="text-3xl leading-[1.2] font-semibold">Over ons</h1> */}
                <p className="text-lg md:text-2xl leading-[1.5] font-medium">Al drie jaar staan we met passie achter de lens voor elk verhaal. Wat met een opdracht tijdens een studieproject begon, is uitgegroeid tot een videobedrijf met tientallen opdrachtgevers. Het leukste aan ons werk? Iedereen heeft weer een ander verhaal.</p>
              </div>
              <div className="flex flex-row mt-16 md:mt-0">
                <Link href="/overons">
                  <div className="text-black font-medium uppercase text-sm md:text-md"><span className="bg-white px-[30px] py-[10px]">Meer over ons</span></div>
                </Link>
              </div>
            </div>            
            <AuthorFetcher>
              {(author) => (
                author.length > 0 ? (
                  author.map((authorItem, index) => (
                    <div className="col-span-6 md:col-span-3" key={index} >
                      <div className="bg-blue-600 aspect-retro rounded-xl">
                        
                      </div>
                      <div className="text-white font-medium text-sm md:text-lg py-2 md:py-4 border-b-1">
                        <p>{authorItem.name}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Laden...</p>
                )
              )}
            </AuthorFetcher>                       
          </div>
        </div>
      </section>

      <section className="container mx-auto pt-[50px] md:pt-[100px] pb-[100px] md:pb-[250px] px-4 md:px-0">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7">
            <h1 className="text-4xl md:text-8xl leading-[1.2] font-semibold text-black">Klaar om aan de slag te gaan?</h1>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 grid content-between">
            <p className="mt-4 font-medium text-base md:text-lg">Ben je klaar om jouw product, organisatie of evenement meer onder de aandacht te brengen met een video? Tijdens een kennismakingskoffie vertellen we graag hoe we jouw verhaal tot de verbeelding laten spreken.</p>
            <Link href="/services">
              <div className="text-white font-medium uppercase text-sm md:text-lg mt-18 md:mt-0"><span className="px-[30px] py-[10px] bg-[#262626]">hallo@beeldkameraden.nl</span></div>
            </Link>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
