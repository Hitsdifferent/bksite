"use client"; // Client component, omdat we hooks gebruiken
import Link from "next/link";
import BkProfile from "@/assets/icons/bk_profile.svg";
import BkTodo from "@/assets/icons/bk_todo.svg";

export default function Beloftes() {
  return (
    <section className="container-fluid bg-white py-[100px]">
        <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-4 space-y-8 mb-[100px]">
                <div className="col-span-8">
                    <p className="text-3xl leading-[1.5] font-medium text-black">Goede samenwerking geeft het beste beeld. Onze verbeelding begint namelijk bij jouw input. Dankzij onze 3 Beeldbeloftes werk je zoveel mogelijk mee aan het resultaat, zonder dat het je agenda opslokt.</p>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 space-y-8">
                <div className="col-span-12 flex flex-row gap-4">
                    <div className="flex flex-col w-1/3 bg-[#404040] rounded-xl px-[35px] py-[50px] space-y-[50px] transition duration-300 ease-in-out">
                        <div className="grid content-between h-[450px]">
                            <div className="flex flex-col space-y-[50px]">
                                <h1 className="text-2xl leading-[1.2] font-medium text-white">50 jij/50 wij</h1>
                                <p className="text-base leading-[1.5] font-base text-white">Wij vragen jou altijd om input en ideeën, maar zullen je ook actief adviseren vanuit onze ervaring. Breng je deze twee samen? Dan krijg je de mooiste video’s.</p>
                            </div>
                            <div className="flex">
                                <BkProfile className="w-[150px] h-auto text-white" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/3 bg-[#404040] rounded-xl px-[35px] py-[50px] space-y-[50px] transition duration-300 ease-in-out">
                        <div className="grid content-between h-[450px]">
                            <div className="flex flex-col space-y-[50px]">
                                <h1 className="text-2xl leading-[1.2] font-medium text-white">Eén aanspreekpunt</h1>
                                <p className="text-base leading-[1.5] font-base text-white">Je hebt van opstart tot oplevering een vaste beeldkameraad als aanspreekpunt. Scheelt je dingen dubbel uitleggen en zorgt voor onverdeelde aandacht.</p>
                            </div>
                            <div className="flex">
                                <BkProfile className="w-[150px] h-auto text-white" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/3 bg-[#404040] rounded-xl px-[35px] py-[50px] space-y-[50px] transition duration-300 ease-in-out">
                        <div className="grid content-between h-[450px]">
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