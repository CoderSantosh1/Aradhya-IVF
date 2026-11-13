"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site, specialists } from "@/data";
import { delay } from "@/utils";
import { Share, socialIcons } from "./icons";
import Pagination from "./Pagination";

const PER_PAGE = 9;

function ShareMenu({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);

  return (
    <div ref={ref} className="absolute bottom-[3%] right-[2.2%] z-10 flex w-[15.5%] min-w-[48px] flex-col-reverse items-center gap-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={`Share ${name}'s profile`}
        className={`grid aspect-square w-full place-items-center rounded-full bg-primary text-white shadow-card ring-4 ring-white/0 transition-all duration-500 hover:ring-white/40 ${open ? "rotate-[360deg]" : ""}`}
      >
        <Share size={22} />
      </button>
      {site.socials.map((s, i) => {
        const Icon = socialIcons[s.icon];
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on ${s.label}`}
            tabIndex={open ? 0 : -1}
            style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            className={`grid size-10 place-items-center rounded-full bg-white text-primary shadow-soft transition-all duration-300 hover:bg-primary hover:text-white ${
              open ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-4 scale-50 opacity-0"
            }`}
          >
            <Icon size={17} />
          </a>
        );
      })}
    </div>
  );
}

export default function SpecialistsGrid() {
  const [page, setPage] = useState(1);
  const top = useRef<HTMLDivElement>(null);
  const total = Math.ceil(specialists.length / PER_PAGE);
  const items = specialists.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const change = (p: number) => {
    setPage(p);
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={top} className="scroll-mt-28">
      <ul key={page} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-5">
        {items.map((d, i) => (
          <li
            key={d.name}
            data-reveal="up"
            style={delay((i % 3) * 120)}
            className="group rounded-[22px] bg-white/45 p-3 shadow-[0_15px_40px_-25px_rgb(180_43_85/0.45)] transition-all duration-500 hover:-translate-y-2 hover:bg-white/80 hover:shadow-card"
          >
            <div data-tilt="6" className="relative aspect-[379/306] overflow-hidden rounded-2xl">
              <Image
                src={d.image}
                alt={`Portrait of ${d.name}`}
                fill
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-[filter] duration-700 group-hover:brightness-105"
              />
              <ShareMenu name={d.name} />
            </div>
            <div className="px-5 pb-5 pt-4">
              <h3 className="font-serif text-[26px] font-medium text-ink transition-colors duration-300 group-hover:text-primary">{d.name}</h3>
              <span className="mt-1 block h-[3px] w-8 rounded-full bg-gold transition-all duration-500 group-hover:w-16" />
              <p className="mt-4 inline-block rounded-full bg-primary-soft/80 px-6 py-2.5 font-sans text-[17px] font-medium text-primary">{d.role}</p>
            </div>
          </li>
        ))}
      </ul>
      <Pagination page={page} total={total} onChange={change} />
    </div>
  );
}
