"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Haal de slug op uit de URL
import { client } from "@/lib/sanity"; // Sanity client

import AnimatedHeaderblock from "@/components/animations/AnimatedHeaderblock";
import AnimatedHeadertitle from "@/components/animations/AnimatedHeadertitle";
import AnimatedTitles from "@/components/animations/AnimatedTitles";
import AnimatedBlock from "@/components/animations/AnimatedBlock";

import Breadcrumb from '@/components/Breadcrumb';
import Method from "@/components/Method";
import Belofteswhite from "@/components/Belofteswhite";
import Cta from "@/components/Cta";


import Link from "next/link";

async function getService(slug) {
    const query = `*[_type == 'services' && slug.current == '${slug}'] {
        title,
        "texts": content[].children[].text,
        smallDescription,
        "currentSlug": slug.current,
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
            <section className="container mx-auto px-4 my-[50px] xl:my-[100px] xl:px-0">
              <Breadcrumb />
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-6 xl:col-span-7">
                      <AnimatedHeadertitle>
                        <h2 className="text-4xl xl:text-6xl leading-[1.2] font-semibold text-black">{services.title}</h2>
                      </AnimatedHeadertitle>
                    </div>
                    <div className="col-span-12 md:col-span-6 md:col-start-7 xl:col-span-5 xl:col-start-8">
                        {services?.texts?.map((t, i) => (
                          <AnimatedHeaderblock key={i}>
                            <p className="mt-4 font-medium text-base xl:text-lg">{t}</p>
                          </AnimatedHeaderblock>
                        ))}
                    </div>
                </div>

                {/* <div className="grid grid-cols-12 gap-4 mt-[100px]">
                    <div className="col-span-12 md:col-span-6">
                        <div className="bg-blue-600 aspect-video rounded-2xl">

                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="bg-blue-600 aspect-video rounded-2xl">

                        </div>
                    </div>
                </div> */}
            </section>

            <Method />

            <Belofteswhite />

            <Cta />

        </div>
      </>
    );
  }