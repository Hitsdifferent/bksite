"use client"; // Client component, omdat we hooks gebruiken
import Link from "next/link";
import BkProfile from "@/assets/icons/bk_profile.svg";
import BkTodo from "@/assets/icons/bk_todo.svg";

export default function Beloftes() {
  return (
    <section className="container-fluid bg-[#262626] py-[100px] mt-[100px]">
        <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-4 space-y-8 mb-[100px]">
                <div className="col-span-6 col-start-4">
                    <h1 className="text-3xl leading-[1.2] font-medium text-white text-center">Onze beeldbeloftes</h1>
                </div>
                <div className="col-span-6 col-start-4">
                    <p className="text-lg leading-[1.2] font-base text-white text-center">Goede samenwerking geeft het beste beeld. Onze verbeelding begint namelijk bij jouw input. Dankzij onze 3 Beeldbeloftes werk je zoveel mogelijk mee aan het resultaat, zonder dat het je agenda opslokt.</p>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 space-y-8">
                <div className="col-span-10 col-start-2 flex flex-row gap-8">
                    <div className="flex flex-col w-1/3 bg-[#404040] rounded-2xl px-[35px] py-[50px] space-y-[50px]">
                        <div className="grid content-between h-[500px]">
                            <div className="flex flex-col space-y-[50px]">
                                <h1 className="text-2xl leading-[1.2] font-medium text-white">50 jij/50 wij</h1>
                                <p className="text-base leading-[1.5] font-base text-white">Wij vragen jou altijd om input en ideeën, maar zullen je ook actief adviseren vanuit onze ervaring. Breng je deze twee samen? Dan krijg je de mooiste video’s.</p>
                            </div>
                            <div className="flex">
                                <BkProfile className="w-[150px] h-auto text-white" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/3 bg-[#404040] rounded-2xl px-[35px] py-[50px]">
                        <div className="grid content-between h-[500px]">
                            <div className="flex flex-col space-y-[50px]">
                                <h1 className="text-2xl leading-[1.2] font-medium text-white">Eén aanspreekpunt</h1>
                                <p className="text-base leading-[1.5] font-base text-white">Je hebt van opstart tot oplevering een vaste beeldkameraad als aanspreekpunt. Scheelt je dingen dubbel uitleggen en zorgt voor onverdeelde aandacht.</p>
                            </div>
                            <div className="flex">
                                <BkProfile className="w-[150px] h-auto text-white" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/3 bg-[#404040] rounded-2xl px-[35px] py-[50px] space-y-[50px]">
                        <div className="grid content-between h-[500px]">
                            <div className="flex flex-col space-y-[50px]">
                                <h1 className="text-2xl leading-[1.2] font-medium text-white">Begrip voor ander to do’s</h1>
                                <p className="text-base leading-[1.5] font-base text-white">Wij steken al onze tijd in jouw klus. Jij hebt waarschijnlijk ook genoeg andere dingen lopen. Daarom betrekken we je wanneer nodig, en werken we zelfstandig wanneer dat kan.</p>
                            </div>
                            <div className="flex">
                                <BkTodo className="w-[150px] h-auto text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}