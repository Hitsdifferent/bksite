"use client";
import Beloftes from "@/components/Beloftes";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
                <p className="mt-4 font-medium text-lg">Wil je (organisatie) een product of dienst beter in beeld brengen? Of organiseer je een evenement waarvoor je bezoekers wilt enthousiasmeren? Vanuit onze kennis op het gebied van marketing en communicatie maken wij wervings- en marketingvideo’s met overtuigende storytelling.</p>
                <p className="mt-4 font-medium text-lg">Bij Beeldkameraden geloven we daarbij in de kracht van samenwerking. Jij kent je product, organisatie en doelgroepen het beste. Wij weten hoe je jouw verhaal op een visueel aantrekkelijke manier presenteert. Samen maken we video die er niet alleen goed uitziet, maar ook z’n doel behaalt.</p>
            </div>
            </div>
        </section>

        <section className="container-fluid mx-auto bg-[#262626] py-[100px] mt-[50px]">
            <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-4 text-white">
                <div className="col-span-12">
                <h2 div className="text-3xl font-medium">Ons bedrijf</h2>
                </div>
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