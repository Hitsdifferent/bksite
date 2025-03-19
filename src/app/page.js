import Beloftes from "@/components/Beloftes";
import Link from "next/link";
import Image from "next/image";
import NoorderpoortLogo from "@/assets/logos/Noorderpoort.svg";
import HanzeLogo from "@/assets/logos/Hanze.svg";
import PatynaLogo from "@/assets/logos/patyna.svg";
import DcterraLogo from "@/assets/logos/dcterra.svg";
import DrentheLogo from "@/assets/logos/drenthecollege.svg";

export default function Home() {
  return (
    <>
    <div className="container-fluid">

      <section className="container mx-auto">
        <div className="grid grid-cols-12 gap-4 mt-[100px]">
          <div className="col-span-7">
            <h1 className="text-8xl leading-[1.2] font-semibold text-black">Jouw verhaal.<br/>Onze verbeelding.</h1>
          </div>
          <div className="col-start-9 col-span-4 grid content-between">
            <p className="mt-4 font-medium text-lg">Met oog voor detail maken wij professionele video’s voor overheidsinstanties, commerciële organisaties en particulieren. Bij elke klus werken we als een echte beeldkameraad nauw met je samen. </p>
            <Link href="/services">
              <div className="text-white font-medium uppercase"><span className="px-[30px] py-[10px] bg-[#262626]">Hoe mogen we jouw in beeld brengen?</span></div>
            </Link>
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

        <div className="grid grid-cols-12 gap-4 mt-[100px]">
          <div className="col-span-10 col-start-2 items-center">
            <div className="h-[40px] flex flex-row space-x-16 justify-center">
              <NoorderpoortLogo className="w-auto h-full grayscale" />
              <HanzeLogo className="w-auto h-full grayscale" />
              <PatynaLogo className="w-auto h-full text-black grayscale" />
              <DcterraLogo className="w-auto h-full text-black grayscale" />
              <DrentheLogo className="w-auto h-full text-black grayscale" />              
            </div>
          </div>
        </div>      
      </section>

      <Beloftes/>

      <section className="container mx-auto">
        <div className="grid grid-cols-12 gap-4 my-[100px]">
          <div className="col-span-6 text-black space-y-8 pr-8">
            <h1 className="text-3xl leading-[1.2] font-semibold">Onze diensten</h1>
            <p className="text-base leading-[1.5] font-regular">Bij elke klus werken we als een echte beeldkameraad nauw met je samen. Hoe mogen we jou in beeld brengen? Je kan Beeldkameraden gebruiken bij:</p>
            <div className="mt-[50px]">
              <Link href="/services">
                <div className="text-2xl font-medium border-t-2 border-black">
                  <p className="py-[25px] transition duration-300 ease-in-out hover:translate-x-4 cursor-pointer">Wervings-/marketingvideo's</p>
                </div>
              </Link>
              <Link href="/services">
                <div className="text-2xl font-medium border-t-2 border-black">
                  <p className="py-[25px] transition duration-300 ease-in-out hover:translate-x-4 cursor-pointer">Documentaires</p>
                </div>
              </Link>
              <Link href="/services">
                <div className="text-2xl font-medium border-t-2 border-black">
                  <p className="py-[25px] transition duration-300 ease-in-out hover:translate-x-4 cursor-pointer">Aftermovies</p>
                </div>
              </Link>
              <Link href="/services">
                <div className="text-2xl font-medium border-t-2 border-black">
                  <p className="py-[25px] transition duration-300 ease-in-out hover:translate-x-4 cursor-pointer">Livestreams</p>
                </div>
              </Link>
              <Link href="/services">
                <div className="text-2xl font-medium border-t-2 border-black">
                  <p className="py-[25px] transition duration-300 ease-in-out hover:translate-x-4 cursor-pointer">Podcasts</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-span-5 col-start-8">
            <div className="bg-blue-600 aspect-video rounded-2xl">
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid bg-[#262626] py-[100px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-5 text-black grid content-between pr-8 text-white">
              <div className="flex flex-col space-y-8">
                <h1 className="text-3xl leading-[1.2] font-semibold">Over ons</h1>
                <p className="text-base leading-[1.5] font-regular">Al drie jaar staan we met passie achter de lens voor elk verhaal. Wat met een opdracht tijdens een studieproject begon, is uitgegroeid tot een videobedrijf met tientallen opdrachtgevers. Het leukste aan ons werk? Iedereen heeft weer een ander verhaal.</p>
              </div>
              <div className="flex flex-row">
                <Link href="/overons">
                  <div className="text-black font-medium uppercase"><span className="bg-white px-[30px] py-[10px]">Meer over ons</span></div>
                </Link>
              </div>
            </div>
            <div className="col-span-7 col-start-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-600 aspect-square rounded-2xl">

                </div>
                <div className="bg-blue-600 aspect-square rounded-2xl">

                </div>
              </div>
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
