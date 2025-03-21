"use client";
import Beloftes from "@/components/Beloftes";
import Link from "next/link";
import { useRouter } from "next/navigation";

import AuthorFetcher from '@/components/AuthorFetcher';

export default function Over() {
    const router = useRouter();

  return (
    <div className="container-fluid">
        
        <section className="container mx-auto">
            <div className="grid grid-cols-12 gap-4 my-[100px]">
            <div className="col-span-7">
                <h2 className="text-6xl leading-[1.2] font-semibold text-black">Wij zijn Beeldkameraden</h2>
            </div>
            <div className="col-start-8 col-span-5">
                <p className="mt-4 font-medium text-lg">twee vrienden die dol zijn op het filmvak. Wat in 2020 begon met een gezamenlijk studieproject, groeide al snel uit tot een videobedrijf met vele opdrachtgevers. Nu werken we dagelijks aan de meest uiteenlopende producties. Van bedrijfsfilms, livestreams tot complete documentaires.</p>
            </div>
            </div>
        </section>

        <section className="container-fluid mx-auto bg-[#262626] py-[100px] mt-[50px]">
            <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-4 text-white">
                <div className="col-span-6">                    
                    <p div className="text-3xl font-medium leading-[1.5]">Ons bedrijf is geboren uit het plezier dat we halen uit techniek en creativiteit. Je krijgt bij ons dan ook de combinatie van een inhoudelijke vakidioot met liefde voor de camera en een communicatiespecialist die mensen weet te boeien. Soms flinke tegenpolen, maar beide altijd uit op het boeien van jouw kijker.</p>
                </div>
            </div>
            </div>
        </section>

        <section className="container-fluid mx-auto py-[100px]">
            <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-4 text-black">
                <div className="col-span-6 col-start-7">                    
                    <p div className="text-2xl font-medium leading-[1.5]">We voeren de regie vanuit ons kantoor in de Papiermolen (Groningen). Een gezellige omgeving met andere creatieven die steeds weer inspireert. En dat is ook precies waar we van houden: serieus over het werk, ook lekker makkelijk in contact.</p>
                </div>
            </div>
            </div>
        </section>

        <section className="container-fluid bg-[#262626] py-[100px]">
            <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-4 space-y-8">
                <div className="col-span-6 grid content-between pr-8 text-white">
                <div className="flex flex-col space-y-8">
                    {/* <h1 className="text-3xl leading-[1.2] font-semibold">Over ons</h1> */}
                    <p className="text-2xl leading-[1.5] font-medium">Al drie jaar staan we met passie achter de lens voor elk verhaal. Wat met een opdracht tijdens een studieproject begon, is uitgegroeid tot een videobedrijf met tientallen opdrachtgevers. Het leukste aan ons werk? Iedereen heeft weer een ander verhaal.</p>
                </div>
                </div>            
                <AuthorFetcher>
                {(author) => (
                    author.length > 0 ? (
                    author.map((authorItem, index) => (
                        <div className="col-span-3" key={index} >
                        <div className="bg-blue-600 aspect-retro rounded-xl">
                            
                        </div>
                        <div className="text-white font-medium text-lg p-4 border-b-1">
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

        

        <section className="container mx-auto pt-[100px] pb-[250px]">
            <div className="grid grid-cols-12 gap-4">
            <div className="col-span-7">
                <h1 className="text-8xl leading-[1.2] font-semibold text-black">Klaar om aan de slag te gaan?</h1>
            </div>
            <div className="col-start-9 col-span-4 grid content-between">
                <p className="mt-4 font-medium text-lg">Ben je klaar om jouw product, organisatie of evenement meer onder de aandacht te brengen met een video? Tijdens een kennismakingskoffie vertellen we graag hoe we jouw verhaal tot de verbeelding laten spreken.</p>
                <Link href="/services">
                <div className="text-white font-medium uppercase"><span className="px-[30px] py-[10px] bg-[#262626]">hallo@beeldkameraden.nl</span></div>
                </Link>
            </div>
            </div>
        </section>

    </div>
  );
}