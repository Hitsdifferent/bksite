"use client";

import Link from "next/link";
import Image from 'next/image'


import { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeadertitle from "@/components/animations/AnimatedHeadertitle";
import AnimatedHeaderblock from "@/components/animations/AnimatedHeaderblock";


import { useRouter } from "next/navigation";

import Breadcrumb from '@/components/Breadcrumb';
import Cta from "@/components/Cta";

import ServiceFetcher from '@/components/ServiceFetcher';
import { urlFor } from '@/lib/sanity';

import RightUp from "@/assets/icons/ArrowRightUp.svg";

export default function Diensten() {
  const router = useRouter();
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (services.length > 0) {
      ScrollTrigger.refresh();
    }
  }, [services]);


  return (
    <>
    <div className="container-fluid">
      
      <section className="container mx-auto my-[50px] xl:my-[100px] px-4 xl:px-0">
        <Breadcrumb />
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7"> 
            <AnimatedHeadertitle>
              <h2 className="text-4xl xl:text-6xl leading-[1.2] font-semibold text-black">Bij elke klus werken we als een echte beeldkameraad nauw met je samen.</h2>
            </AnimatedHeadertitle>
          </div>
          <div className="col-span-12 md:col-start-9 md:col-span-4">
            <AnimatedHeaderblock>
              <p className="mt-4 font-medium text-base xl:text-lg">Hoe mogen we jou in beeld brengen? Je kan Beeldkameraden gebruiken bij:</p>
            </AnimatedHeaderblock>
          </div>
        </div>
      </section>
      
      <section className="container-fluid mx-auto bg-[#262626] py-[50px] xl:py-[100px mt-[50px]">
        <div className="container mx-auto px-4 xl:px-0">
          <div className="grid grid-cols-12 gap-4 xl:gap-8 text-white">
                        
              <ServiceFetcher>
                {(fetchedServices) => {
                  if (services !== fetchedServices) setServices(fetchedServices);

                  return fetchedServices.length > 0 ? (
                    services.map((service) => (
                    <div className="col-span-12 md:col-span-6 xl:col-span-4" key={service.slug}>                                          
                      <div className="flex flex-col py-[25px] mb-[25px] xl:mb-[50px] border-white group">
                        <div className="flex flex-col space-y-4 xl:space-y-8">
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
                          <p className="text-2xl xl:text-4xl font-medium transition duration-300 ease-in-out">{service.title}</p>
                          <p className="text-base font-regular">{service.smallDescription}</p>
                          <div className="flex flex-row xl:flex-col space-x-4 xl:space-y-8 mt-4">
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
                ) : (
                  <p>Laden...</p>
                );
              }}
            </ServiceFetcher>             
            
          </div>
        </div>
      </section>

      <Cta />


    </div>

    </>
  );
}
