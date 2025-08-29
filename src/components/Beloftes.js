'use client';

import { useState, useEffect } from "react";
import PromiseFetcher from '@/components/PromiseFetcher';
import { urlFor } from '@/lib/sanity';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedBlock from "@/components/animations/AnimatedBlock";

export default function Beloftes() {
  const [promises, setPromises] = useState([]);

  useEffect(() => {
    if (promises.length > 0) {
      ScrollTrigger.refresh();
    }
  }, [promises]);

  return (
    <section className="container-fluid bg-[#262626] py-[50px] xl:py-[100px]">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="grid grid-cols-12 gap-4 space-y-8 mb-[50px] md:mb-[100px]">
          <div className="col-span-11 xl:col-span-8">
            <AnimatedBlock>
              <p className="text-lg md:text-2xl xl:text-3xl font-medium leading-[1.5] text-white">
                Goede samenwerking geeft het beste beeld. Onze verbeelding begint namelijk bij jouw input. Dankzij onze 3 Beeldbeloftes werk je zoveel mogelijk mee aan het resultaat, zonder dat het je agenda opslokt.
              </p>
            </AnimatedBlock>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 space-y-8">               
          <div className="col-span-12">
            <PromiseFetcher>
              {(fetchedPromises) => {
                if (promises !== fetchedPromises) setPromises(fetchedPromises);

                return fetchedPromises.length > 0 ? ( 
                    <AnimatedBlock>    
                        <div className="flex flex-col md:flex-row gap-4 xl:gap-8">
                            {fetchedPromises.map((promise, index) => (
                            <div key={index} className="w-full md:w-1/3 bg-[#404040] rounded-xl p-4 md:px-[35px] md:py-[50px] space-y-[50px] transition duration-300 ease-in-out hover:scale-105">
                                <div className="grid content-between h-[300px] md:h-[400px] xl:h-[450px]">
                                <div className="flex flex-col space-y-[25px] xl:space-y-[50px]">
                                    <h1 className="text-xl xl:text-2xl leading-[1.2] font-medium text-white">{promise.title}</h1>
                                    <p className="text-sm md:text-base leading-[1.5] text-white">{promise.Description}</p>
                                </div>
                                <div className="flex">
                                    {promise.image && promise.image.asset?.url && (
                                    <img className="w-[100px] xl:w-[150px] h-auto text-white invert"
                                        src={urlFor(promise.image).url()}
                                        alt={promise.title}
                                    />
                                    )}
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>   
                    </AnimatedBlock>
                ) : (
                  <p>Laden...</p>
                )
              }}
            </PromiseFetcher>                   
          </div>                
        </div> 
      </div>                   
    </section>
  );
}
