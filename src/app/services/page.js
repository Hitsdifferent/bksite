"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { client } from "@/lib/sanity";
import RightUp from "@/assets/icons/ArrowRightUp.svg";

async function getData() {
  const query = `*[_type == 'services'] {
    title,
    smallDescription,
    "currentSlug": slug.current
  }`;

  try {
    const data = await client.fetch(query); // Haal de data op van Sanity
    return data;
    
  } catch (error) {
    console.error("Fout bij het ophalen van data van Sanity:", error); // Log de fout als het niet lukt
    throw error;
  }
}

export default function Diensten() {
  const router = useRouter();
  
  const [services, setServices] = useState([]); // State om de data op te slaan

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      // console.log("Opgehaalde data:", data);
      setServices(data); // Update de state met de opgehaalde data
    }

    fetchData();
  }, []);

  return (
    <>
    <div className="container-fluid">
      <section className="container mx-auto">
        <div className="grid grid-cols-12 gap-4 my-[100px]">
          <div className="col-span-7">
            <h2 className="text-6xl leading-[1.2] font-semibold text-black">Onze diensten</h2>
          </div>
          <div className="col-start-8 col-span-5">
            <p className="mt-4 font-medium text-lg">Bij elke klus werken we als een echte beeldkameraad nauw met je samen. Hoe mogen we jou in beeld brengen?</p>
          </div>
        </div>
      </section>
      
      <section className="container-fluid mx-auto bg-[#262626] py-[100px] mt-[50px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4 text-white">
            <div className="col-span-12">
              <h2 div className="text-3xl font-medium">Je kan Beeldkameraden gebruiken bij:</h2>
              <ul className="mt-[100px]">
                {services.map((service) => (
                  <li key={service.currentSlug}>
                    <Link href={`/services/${service.currentSlug}`}>
                      <div className="flex flex-col justify-between border-t-2 border-white group">
                        <div className="flex flex-row justify-between">
                          <p className="text-4xl font-medium py-[25px] transition duration-300 ease-in-out group-hover:translate-x-4 cursor-pointer">{service.title}</p>
                          <span className="p-[24px]">
                            <RightUp className="w-[24px] h-[24px] grayscale" />
                          </span>
                        </div>
                        <div className="flex w-2/3 pb-[25px]">
                          <p className="text-base font-regular">{service.smallDescription}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
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

    </>
  );
}
