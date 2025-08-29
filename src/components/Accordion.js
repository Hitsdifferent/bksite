"use client";
import { motion, AnimatePresence } from "framer-motion";
import ArrowUp from "@/assets/icons/ArrowUp.svg";

export default function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="flex flex-col justify-between border-t-2 border-white">
      {/* Accordion Header */}
      <div
        className="text-xl md:text-4xl font-medium py-[25px] flex justify-between cursor-pointer"
        onClick={onToggle}
      >
        {title}
        {/* Animated Arrow Icon */}
        <motion.span
          className="transition-transform duration-150"
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          
            <ArrowUp className="w-[24px] h-[24px] invert" />
          
        </motion.span>
      </div>

      {/* Accordion Content with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="grid grid-cols-2 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="col-span-2 md:col-span-1 md:col-start-2 my-[25px] md:my-[50px]">
              <p className="font-medium text-base leading-[1.5] text-white">
                {children}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
