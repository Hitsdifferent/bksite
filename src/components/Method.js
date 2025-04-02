"use client"; // Client component, omdat we hooks gebruiken
import { useState } from "react";
import Accordion from "@/components/Accordion";

export default function Method() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container-fluid mx-auto bg-[#262626] py-[50px] xl:py-[100px] mt-[50px]">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="grid grid-cols-12 gap-4 text-white">
          <div className="col-span-12">
            <h2 className="text-lg md:text-3xl font-medium">Hoe we te werk gaan</h2>

            <div className="mt-[25px] md:mt-[100px] space-y-4">
              <Accordion
                title="Van begin tot eind blijven we in beeld"
                isOpen={openIndex === 0}
                onToggle={() => handleToggle(0)}
              >
                Bij Beeldkameraden staat samenwerking centraal. Daarom beginnen we met een kennismakingsgesprek waarin we je doelen en wensen bespreken. Vervolgens presenteren we een script en storyboard aan je. Zo heb je vooraf een goed beeld van de video. Wij regelen vervolgens de opnames, interviews, montage en de nabewerking. In de feedbackronde tweaken we – indien nodig – met liefde de video tot ‘ie perfect is. Zo blijven we tijdens het hele project bij je in beeld.
              </Accordion>

              <Accordion
                title="Scherp, strak en creatief"
                isOpen={openIndex === 1}
                onToggle={() => handleToggle(1)}
              >
                Dankzij onze apparatuur, tools en kennis van het filmvak durven we bij elke video de garantie te geven dat ‘ie van begin tot eind scherp en strak is. Ook houden we ervan om met creatief cameragebruik, animaties (indien gewenst) en andere effecten jouw video net dat creatieve extraatje mee te geven. Tijdens het kennismakingsgesprek bespreken we dit altijd even.
              </Accordion>

              <Accordion
                title="Flexibel en betrouwbaar"
                isOpen={openIndex === 2}
                onToggle={() => handleToggle(2)}
              >
                Het is een cliché, maar toch waar: we weten vanuit ervaring dat elke video anders is. Soms verandert een videoproject zelf ook onverwacht. Daarom stellen we ons altijd flexibel op en hebben we standaard een plan B in het achterhoofd. Dat scheelt iedereen namelijk zorgen en zorgt voor een beter resultaat.
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
