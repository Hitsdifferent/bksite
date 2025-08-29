"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import AnimatedHeaderblock from "@/components/animations/AnimatedHeaderblock";
import AnimatedHeadertitle from "@/components/animations/AnimatedHeadertitle";
import AnimatedTitles from "@/components/animations/AnimatedTitles";
import AnimatedBlock from "@/components/animations/AnimatedBlock";


export default function Over() {
    const router = useRouter();

  return (
    <div className="container-fluid">
        
        <section className="container mx-auto my-[100px] px-4 md:px-0 h-[60vh]">
            <div className="grid grid-cols-12 gap-4 ">
                <div className="col-span-12 md:col-span-7">
                    <AnimatedHeadertitle>
                        <h2 className="text-2xl md:text-6xl leading-[1.2] font-semibold text-black">Het lijkt ons leuk om je te leren kennen en jouw verhaal te horen.</h2>
                    </AnimatedHeadertitle>
                </div>
                <div className="col-span-12 md:col-start-9 md:col-span-4 space-y-16">
                    <AnimatedHeaderblock>
                        <p className="mt-4 font-medium text-base md:text-lg">Je bent altijd welkom voor een gesprek. Telefonisch, of bij ons op kantoor. </p>
                    </AnimatedHeaderblock>
                    <div className="flex flex-col space-y-8">
                        <h2 className="text-xl md:text-3xl font-medium">Mail ons</h2>
                        <p className="font-medium text-base md:text-lg">Mart Verstraete</p>
                        <a href="mailto:info@beeldkameraden.nl">
                            <div className="text-white font-medium uppercase text-sm">
                                <span className="px-[30px] py-[10px] bg-[#262626]">info@beeldkameraden.nl</span>
                            </div>
                        </a>
                    </div>  
                    <div className="flex flex-col space-y-8">
                        <h2 className="text-xl md:text-3xl font-medium">Volg ons</h2>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="https://www.instagram.com/beeldkameraden"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-base md:text-lg leading-0 md:leading-[1.2]"
                                    >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/beeldkameraden"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-base md:text-lg leading-0 md:leading-[1.2]"
                                    >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>              
                </div>  
            </div>
        </section>       

    </div>
  );
}