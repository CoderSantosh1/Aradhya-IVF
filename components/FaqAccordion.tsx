"use client";

import { useId, useState } from "react";
import { faqs } from "@/data";
import { delay } from "@/utils";
import { Plus } from "./icons";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <ul className="space-y-4">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          // Reveal lives on a wrapper with a static className so React never clobbers `is-visible`.
          <li key={f.q} data-reveal="right" style={delay(Math.min(i, 5) * 90)}>
            <div
              className={`rounded-[18px] bg-white/60 px-4 py-3.5 shadow-[0_10px_35px_-25px_rgb(180_43_85/0.5)] transition-all duration-500 sm:px-6 ${
                isOpen ? "bg-white/85 shadow-soft" : "hover:bg-white/80"
              }`}
            >
              <h3>
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center gap-4 text-left sm:gap-7"
                >
                  <span className="grid size-[56px] shrink-0 place-items-center rounded-full bg-primary-soft font-sans text-[20px] font-semibold text-primary sm:size-[62px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex-1 font-serif text-[19px] font-medium leading-snug transition-colors duration-300 sm:text-[25px] ${
                      isOpen ? "text-primary" : "text-ink group-hover:text-primary"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`grid size-[48px] shrink-0 place-items-center rounded-full transition-all duration-500 ${
                      isOpen ? "rotate-[135deg] bg-[#e0566f] text-white" : "bg-primary-soft text-primary group-hover:bg-primary group-hover:text-white"
                    }`}
                    aria-hidden
                  >
                    <Plus size={22} strokeWidth={2.2} />
                  </span>
                </button>
              </h3>
              {/* grid-rows trick animates height without measuring */}
              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="mt-4 rounded-[14px] bg-blush/80 px-6 py-5 font-sans text-[17px] leading-[1.7] text-muted sm:text-[19px]">{f.a}</p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
