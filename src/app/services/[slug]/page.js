import Method from "@/components/Method";
import Belofteswhite from "@/components/Belofteswhite";
import Link from "next/link";

export default function DienstenDetail({ params }) {

    const slugToName = {
        "wervingsmarketingvideos": "Wervings-/marketingvideo's",
      };

    const name = slugToName[params.slug] || "Service Not Found";

    return (
        <>
        <div className="container-fluid">
            <section className="container mx-auto">
                <div className="grid grid-cols-12 gap-4 my-[100px]">
                    <div className="col-span-7">
                        <h2 className="text-6xl leading-[1.2] font-semibold text-black">{name}</h2>
                    </div>
                    <div className="col-start-8 col-span-5">
                        <p className="mt-4 font-medium text-lg">Bij elke klus werken we als een echte beeldkameraad nauw met je samen. Hoe mogen we jou in beeld brengen?</p>
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