"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Over() {
    const router = useRouter();

  return (
    <div className="container-fluid">
        
        <section className="container mx-auto my-[100px] px-4 md:px-0">
            <div className="grid grid-cols-12 gap-4 ">
            <div className="col-span-12 md:col-span-7">
                <h2 className="text-2xl md:text-6xl leading-[1.2] font-semibold text-black">Het lijkt ons leuk om je te leren kennen en jouw verhaal te horen.</h2>
            </div>
            <div className="col-span-12 md:col-start-9 md:col-span-4">
                <p className="mt-4 font-medium text-base md:text-lg">Je bent altijd welkom voor een gesprek. Telefonisch, of bij ons op kantoor. </p>
            </div>
            </div>
        </section>       

    </div>
  );
}