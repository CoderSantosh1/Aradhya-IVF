"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { gallery } from "@/data";
import { delay } from "@/utils";
import { ChevronLeft, ChevronRight, Close, ZoomIn } from "./icons";

export default function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);
  const count = gallery.length;

  const step = useCallback(
    (dir: number) => setActive((i) => (i === null ? i : (i + dir + count) % count)),
    [count],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, step]);

  return (
    <>
      <ul className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((img, i) => (
          <li key={img.src} data-reveal="zoom" style={delay((i % 3) * 120)}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Open image: ${img.alt}`}
              data-tilt="6"
              className="group relative block aspect-[413/437] w-full overflow-hidden rounded-[18px] shadow-[0_0_0_6px_rgb(255_255_255/0.5),0_20px_40px_-25px_rgb(180_43_85/0.5)]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 413px, (min-width: 640px) 50vw, 100vw"
                loading={i < 3 ? "eager" : "lazy"}
                className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 scale-50 place-items-center rounded-full bg-white text-primary opacity-0 shadow-card transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                <ZoomIn size={26} />
              </span>
              <span className="absolute inset-x-5 bottom-5 translate-y-4 text-left font-serif text-lg text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        inert={active === null}
        className={`fixed inset-0 z-[80] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm transition-opacity duration-500 ${
          active === null ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        onClick={() => setActive(null)}
      >
        {active !== null && (
          <figure className="relative w-full max-w-[1000px] animate-[lightbox-in_0.5s_cubic-bezier(0.22,1,0.36,1)]" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[413/437] max-h-[80vh] w-full overflow-hidden rounded-2xl sm:aspect-[4/3]">
              <Image key={gallery[active].src} src={gallery[active].src} alt={gallery[active].alt} fill sizes="1000px" className="object-contain" />
            </div>
          </figure>
        )}
        <button type="button" aria-label="Close" onClick={() => setActive(null)} className="absolute right-5 top-5 grid size-12 place-items-center rounded-full bg-white/10 text-white transition-all duration-300 hover:rotate-90 hover:bg-primary">
          <Close size={24} />
        </button>
        <button type="button" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary sm:left-8">
          <ChevronLeft size={26} />
        </button>
        <button type="button" aria-label="Next image" onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary sm:right-8">
          <ChevronRight size={26} />
        </button>
      </div>
    </>
  );
}
