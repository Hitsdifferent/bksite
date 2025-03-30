"use client"; // Client component, omdat we hooks gebruiken
import Link from "next/link";
import BkProfile from "@/assets/icons/bk_profile.svg";
import BkTodo from "@/assets/icons/bk_todo.svg";

import Accordion from "@/components/Accordion";

export default function Method() {
  return (
    <>
    <section className="container-fluid mx-auto bg-[#262626] py-[100px] mt-[50px]">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-12 gap-4 text-white">
            <div className="col-span-12">
              <h2 div className="text-lg md:text-3xl font-medium">Hoe we te werk gaan</h2>
              
              <div className="mt-[25px] md:mt-[100px]">
                <Accordion title="Van begin tot eind blijven we in beeld">
                    Bij Beeldkameraden staat samenwerking centraal. Daarom beginnen we met een kennismakingsgesprek waarin we je doelen en wensen bespreken. Vervolgens presenteren we een script en storyboard aan je. Zo heb je vooraf een goed beeld van de video. Wij regelen vervolgens de opnames, interviews, montage en de nabewerking. In de feedbackronde tweaken we – indien nodig – met liefde de video tot ‘ie perfect is. Zo blijven we tijdens het hele project bij je in beeld.
                </Accordion>

                <Accordion title="Scherp, strak en creatief">
                Dankzij onze apparatuur, tools en kennis van het filmvak durven we bij elke video de garantie te geven dat ‘ie van begin tot eind scherp en strak is. Ook houden we ervan om met creatief cameragebruik, animaties (indien gewenst) en andere effecten jouw video net dat creatieve extraatje mee te geven. Tijdens het kennismakingsgesprek bespreken we dit altijd even. 
                </Accordion>

                <Accordion title="Flexibel en betrouwbaar">
                Het is een cliché, maar toch waar: we weten vanuit ervaring dat elke video anders is. Soms verandert een videoproject zelf ook onverwacht. Daarom stellen we ons altijd flexibel op en hebben we standaard een plan B in het achterhoofd. Dat scheelt iedereen namelijk zorgen en zorgt voor een beter resultaat. 
                </Accordion>
              </div>              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}