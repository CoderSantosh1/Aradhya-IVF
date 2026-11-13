import { marqueeItems } from "@/data";
import { Sparkle } from "./icons";

export default function Marquee() {
  // Rendered twice so the -50% translate loops seamlessly.
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="group relative overflow-hidden bg-primary py-3 text-white" aria-label="Our promise">
      <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {row.map((item, i) => (
              <li key={`${copy}-${i}`} className="flex items-center">
                <span className="whitespace-nowrap px-7 font-display text-[22px] tracking-tight sm:text-[27px]">{item}</span>
                <Sparkle size={30} className="shrink-0 animate-spin-slow" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
