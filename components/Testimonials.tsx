"use client";

import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/lib/data";
import { animDelay } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Quote, Star } from "./icons";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback((dir: number) => setIndex((i) => (i + dir + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [paused, go]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative sm:px-16 lg:px-[62px]">
        <div className="grid" role="group" aria-roledescription="carousel" aria-label="Patient testimonials">
          {testimonials.map((t, i) => {
            const active = i === index;
            const offset = active ? "translate-x-0 opacity-100" : i < index ? "-translate-x-10 opacity-0" : "translate-x-10 opacity-0";
            return (
              <figure
                key={t.name}
                aria-hidden={!active}
                inert={!active}
                className={`col-start-1 row-start-1 rounded-[22px] bg-gradient-to-br from-white/90 to-[#fdf3f3] p-6 shadow-soft transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-10 sm:py-7 ${offset} ${active ? "" : "pointer-events-none"}`}
              >
                <span className={`grid size-[68px] place-items-center rounded-full bg-primary-soft text-primary sm:-ml-3 ${active ? "pop-in" : ""}`} style={animDelay(250)}>
                  <Quote size={30} />
                </span>
                <blockquote className="mt-5 font-serif text-[17px] leading-[1.5] text-ink/85 sm:text-[18.5px]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <span className={`mt-6 block h-px bg-primary transition-[width] delay-300 duration-700 ${active ? "w-[52px]" : "w-0"}`} />
                <figcaption className="mt-5 flex items-end justify-between gap-4">
                  <span>
                    <span className="block font-display text-2xl text-primary">{t.name}</span>
                    <span className="block font-serif text-[15px] text-muted">{t.city}</span>
                  </span>
                  <span className="flex gap-1 text-[#f0a020]" role="img" aria-label="Rated 5 out of 5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={22} className={active ? "pop-in" : ""} style={animDelay(450 + s * 90)} />
                    ))}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="absolute left-0 top-1/2 hidden size-[46px] -translate-y-1/2 place-items-center rounded-full border border-primary bg-white/60 text-primary transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white sm:grid"
        >
          <ArrowLeft size={16} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="absolute right-0 top-1/2 hidden size-[46px] -translate-y-1/2 place-items-center rounded-full border border-primary bg-white/60 text-primary transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white sm:grid"
        >
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="mt-7 flex justify-center gap-3">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
            aria-pressed={i === index}
            className={`h-3.5 rounded-full border border-primary transition-all duration-500 ${
              i === index ? "w-8 bg-primary" : "w-3.5 bg-transparent hover:bg-primary/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
