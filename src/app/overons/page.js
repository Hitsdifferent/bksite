"use client";
import Beloftes from "@/components/Beloftes";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import AuthorFetcher from '@/components/AuthorFetcher';
import { urlFor } from '@/lib/sanity';

export default function Over() {
    const router = useRouter();

  return (
    <div className="container-fluid">
        
        <section className="container mx-auto my-[50px] xl:my-[100px] px-4 md:px-0">
            <div className="grid grid-cols-12 gap-4 ">
                <div className="col-span-12 md:col-span-7">
                    <h2 className="text-4xl md:text-6xl leading-[1.2] font-semibold text-black">Wij zijn Beeldkameraden</h2>
                </div>
                <div className="col-span-12 md:col-start-8 md:col-span-5">
                    <p className="mt-4 font-medium text-base md:text-lg">twee vrienden die dol zijn op het filmvak. Wat in 2020 begon met een gezamenlijk studieproject, groeide al snel uit tot een videobedrijf met vele opdrachtgevers. Nu werken we dagelijks aan de meest uiteenlopende producties. Van bedrijfsfilms, livestreams tot complete documentaires.</p>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 mt-[50px] md:mt-[100px]">
                    <div className="col-span-12 md:col-span-6">
                        <div className="relative bg-blue-600 aspect-video rounded-2xl overflow-hidden">
                            <Image 
                            src="/images/Beeldkameraden_220325.jpg" 
                            alt="Beeldkameraden ijshal Kardinge" 
                            fill
                            className="object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="relative bg-blue-600 aspect-video rounded-2xl overflow-hidden">
                            <Image 
                            src="/images/Beeldkameraden_220325-2.jpg" 
                            alt="Beeldkameraden ijshal Kardinge Mart" 
                            fill
                            className="object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
        </section>

        <section className="container-fluid mx-auto bg-[#262626] py-[100px] mt-[50px]">
            <div className="container mx-auto px-4 md:px-0">
                <div className="grid grid-cols-12 gap-4 mb-[100px] text-white">
                    <div className="col-span-11 xl:col-span-8">                    
                        <p div className="text-lg md:text-3xl font-medium leading-[1.5]">Ons bedrijf is geboren uit het plezier dat we halen uit techniek en creativiteit. Je krijgt bij ons dan ook de combinatie van een inhoudelijke vakidioot met liefde voor de camera en een communicatiespecialist die mensen weet te boeien. Soms flinke tegenpolen, maar beide altijd uit op het boeien van jouw kijker.</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 xl:gap-8">
                    <AuthorFetcher>
                    {(author) => (
                        author.length > 0 ? (
                        author.map((authorItem, index) => (
                            <div className="col-span-6 md:col-span-3" key={index} >
                                <div className="relative bg-blue-600 h-[200px] xl:h-[500px] rounded-sm overflow-hidden">
                                    {authorItem.image && authorItem.image.asset?.url && (
                                        <img className="absolute inset-0 w-full h-full object-cover object-center"
                                            src={urlFor(authorItem.image).url()}
                                            alt={authorItem.title}
                                        />
                                    )}
                                </div>
                                <div className="text-white font-medium text-sm xl:text-lg p-4 border-b-1">
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

        <section className="container-fluid mx-auto py-[100px]">
            <div className="container mx-auto px-4 md:px-0">
            <div className="grid grid-cols-12 gap-4 text-black">
                <div className="col-span-12 md:col-span-6 md:col-start-7">                    
                    <p div className="text-md md:text-2xl font-medium leading-[1.5]">We voeren de regie vanuit ons kantoor in de Papiermolen (Groningen). Een gezellige omgeving met andere creatieven die steeds weer inspireert. En dat is ook precies waar we van houden: serieus over het werk, ook lekker makkelijk in contact.</p>
                </div>
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
  );
}