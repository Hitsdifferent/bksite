"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Haal de slug op uit de URL
import { client } from "@/lib/sanity"; // Sanity client

import Method from "@/components/Method";
import Belofteswhite from "@/components/Belofteswhite";
import Link from "next/link";

async function getService(slug) {
    const query = `*[_type == 'services' && slug.current == '${slug}'] {
        "currentSlug": slug.current,
        title,
        smallDescription
    }[0]`;
  
    try {
      const data = await client.fetch(query, { slug });
      return data;
    } catch (error) {
      console.error("Fout bij ophalen van service:", error);
      return null;
    }
  }

export default function DienstenDetail() {

    const { slug } = useParams();
    const [services, setService] = useState([]);

    useEffect(() => {
        async function fetchData() {
          if (slug) {
            const data = await getService(slug);
            // console.log("Fetched service:", data); // Voeg log toe om de structuur van de opgehaalde data te inspecteren
            setService(data);
          }
        }
      
        fetchData();
      }, [slug]);

    return (
        <>
        <div className="container-fluid">
            <section className="container mx-auto">
                <div className="grid grid-cols-12 gap-4 my-[100px]">
                    <div className="col-span-7">
                        <h2 className="text-6xl leading-[1.2] font-semibold text-black">{services.title}</h2>
                    </div>
                    <div className="col-start-8 col-span-5">
                        <p className="mt-4 font-medium text-lg">{services.smallDescription}</p>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4 mt-[100px]">
                    <div className="col-span-6">
                        <div className="bg-blue-600 aspect-video rounded-2xl">

                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className="bg-blue-600 aspect-video rounded-2xl">

                        </div>
                    </div>
                </div>
            </section>
            <Method />
            <Belofteswhite />
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
      </>
    );
  }