"use client"; // Client component, omdat we hooks gebruiken

import Link from "next/link";
import PromiseFetcher from '@/components/PromiseFetcher';
import { urlFor } from '@/lib/sanity';

import BkProfile from "@/assets/icons/bk_profile.svg";
import BkTodo from "@/assets/icons/bk_todo.svg";


export default function Beloftes() {
  return (
    <section className="container-fluid bg-white py-[50px] md:py-[100px]">
        <div className="container mx-auto px-4 md:px-0">
            <div className="grid grid-cols-12 gap-4 space-y-8 mb-[50px] md:mb-[100px]">
                <div className="col-span-11 md:col-span-8">
                    <p className="text-lg md:text-3xl font-medium leading-[1.5] text-black">Goede samenwerking geeft het beste beeld. Onze verbeelding begint namelijk bij jouw input. Dankzij onze 3 Beeldbeloftes werk je zoveel mogelijk mee aan het resultaat, zonder dat het je agenda opslokt.</p>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 space-y-8">
                <div className="col-span-12">
                    <PromiseFetcher>
                        {(promises) => (
                        promises.length > 0 ? (                                
                            <div className="flex flex-col md:flex-row gap-4">
                            {promises.map((promise, index) => (
                                <div key={index}  className="w-full md:w-1/3 bg-[#404040] rounded-xl p-4 md:px-[35px] md:py-[50px] space-y-[50px] transition duration-300 ease-in-out">
                                    <div className="grid content-between h-[300px] md:h-[450px]">
                                        <div className="flex flex-col space-y-[25px] md:space-y-[50px]">
                                            <h1 className="text-xl md:text-2xl leading-[1.2] font-medium text-white">{promise.title}</h1>
                                            <p className="text-sm md:text-base leading-[1.5] text-white">{promise.Description}</p>
                                        </div>
                                        <div className="flex">
                                        {promise.image && promise.image.asset?.url && (
                                        <img className="w-[100px] md:w-[150px] h-auto text-white invert"
                                            src={urlFor(promise.image).url()}
                                            alt={promise.title}
                                        />
                                        )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>    
                        ) : (
                            <p>Laden...</p>
                        )
                        )}
                    </PromiseFetcher>                   
                    
                    {/* <div className="flex flex-col w-full md:w-1/3 bg-[#404040] rounded-xl px-[35px] py-[50px] space-y-[50px] transition duration-300 ease-in-out">
                        <div className="grid content-between h-[350px] md:h-[450px]">
                            <div className="flex flex-col space-y-[25px] md:space-y-[50px]">
                                <h1 className="text-xl md:text-2xl leading-[1.2] font-medium text-white">Eén aanspreekpunt</h1>
                                <p className="text-base leading-[1.5] font-base text-white">Je hebt van opstart tot oplevering een vaste beeldkameraad als aanspreekpunt. Scheelt je dingen dubbel uitleggen en zorgt voor onverdeelde aandacht.</p>
                            </div>
                            <div className="flex">
                                <BkProfile className="w-[100px] md:w-[150px] h-auto text-white" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:w-1/3 bg-[#404040] rounded-xl px-[35px] py-[50px] space-y-[50px] transition duration-300 ease-in-out">
                        <div className="grid content-between h-[350px] md:h-[450px]">
                            <div className="flex flex-col space-y-[25px] md:space-y-[50px]">
                                <h1 className="text-xl md:text-2xl leading-[1.2] font-medium text-white">Begrip voor ander to do’s</h1>
                                <p className="text-base leading-[1.5] font-base text-white">Wij steken al onze tijd in jouw klus. Jij hebt waarschijnlijk ook genoeg andere dingen lopen. Daarom betrekken we je wanneer nodig, en werken we zelfstandig wanneer dat kan.</p>
                            </div>
                            <div className="flex">
                                <BkTodo className="w-[100px] md:w-[150px] h-auto text-white" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
  );
}