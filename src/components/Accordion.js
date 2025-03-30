"use client";
import { useState } from "react";

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4 text-white">
        <div className="col-span-12">
          <div className="flex flex-col justify-between border-t-2 border-white">
            <div
              className="text-xl md:text-4xl font-medium py-[25px] flex justify-between text-white transition duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {title}
              <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                ▼
              </span>
            </div>
            {isOpen && (
              <div className="grid grid-cols-2">
                <div className="col-span-2 md:col-span-1 md:col-start-2 my-[25px] md:my-[50px]">
                  <p className="text-base leading-[1.5] text-white">
                    {children}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}