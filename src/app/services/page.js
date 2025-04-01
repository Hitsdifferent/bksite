"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image'
import { useRouter } from "next/navigation";


import ServiceFetcher from '@/components/ServiceFetcher';
import { urlFor } from '@/lib/sanity';

import RightUp from "@/assets/icons/ArrowRightUp.svg";

export default function Diensten() {
  const router = useRouter();

  return (
    <>
    <div className="container-fluid">
      <section className="container mx-auto my-[50px] xl:my-[100px] px-4 md:px-0">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7">
            <h2 className="text-4xl md:text-6xl leading-[1.2] font-semibold text-black">Bij elke klus werken we als een echte beeldkameraad nauw met je samen.</h2>
          </div>
          <div className="col-span-12 md:col-start-9 md:col-span-4">
            <p className="mt-4 font-medium text-base md:text-lg">Hoe mogen we jou in beeld brengen? Je kan Beeldkameraden gebruiken bij:</p>
          </div>
        </div>
      </section>
      
      <section className="container-fluid mx-auto bg-[#262626] py-[100px] mt-[50px]">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-12 gap-8 text-white">
                        
              <ServiceFetcher>
                {(services) => (
                  services.map((service) => (
                    <div className="col-span-12 md:col-span-4" key={service.slug}>                                          
                      <div className="flex flex-col py-[25px] mb-[25px] md:mb-[50px] border-white group">
                        <div className="flex flex-col space-y-8">
                          <Link href={`/services/${service.slug}`}>
                            <div className="relative bg-blue-600 aspect-video rounded-sm overflow-hidden">
                              {service.image && service.image.asset?.url && (
                                <img className="absolute inset-0 w-full h-full object-cover object-center transition duration-300 ease-in-out hover:scale-125"
                                    src={urlFor(service.image).url()}
                                    alt={service.title}
                                />
                              )}
                            </div>
                          </Link>
                          <p className="text-2xl md:text-4xl font-medium transition duration-300 ease-in-out">{service.title}</p>
                          <p className="text-base font-regular">{service.smallDescription}</p>
                          <div className="flex flex-col space-y-8 mt-4">
                            <Link href={`/services/${service.slug}`}>
                              <div className="text-black font-medium uppercase text-sm md:text-md"><span className="bg-white px-[30px] py-[10px]">Meer info</span></div>
                            </Link>
                            <Link href={`/services/${service.slug}`}>
                              <div className="text-black font-medium uppercase text-sm md:text-md"><span className="bg-white px-[30px] py-[10px]">Bekijk projecten</span></div>
                            </Link>
                          </div>
                          {/* <span className="p-[24px]">
                            <RightUp className="w-[24px] h-[24px] grayscale" />
                          </span> */}
                        </div>
                      </div>
                    </div>                   
                  ))
                )}
              </ServiceFetcher>              
            
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
