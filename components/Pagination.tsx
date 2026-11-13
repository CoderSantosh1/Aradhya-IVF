"use client";

import { ChevronLeft, ChevronRight } from "./icons";

type Props = { page: number; total: number; onChange: (page: number) => void; size?: "md" | "lg" };

export default function Pagination({ page, total, onChange, size = "md" }: Props) {
  if (total <= 1) return null;
  const dim = size === "lg" ? "size-14 text-lg" : "size-[50px] text-base";
  const btn = `grid ${dim} place-items-center rounded-full font-sans font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-40`;
  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-4 sm:gap-5">
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
        className={`${btn} bg-white text-primary shadow-soft enabled:hover:-translate-x-1 enabled:hover:bg-primary enabled:hover:text-white`}
      >
        <ChevronLeft size={20} strokeWidth={2.4} />
      </button>
      {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-label={`Page ${n}`}
          aria-current={n === page ? "page" : undefined}
          className={`${btn} ${n === page ? "scale-105 bg-primary text-white shadow-card" : "bg-white text-primary shadow-soft hover:bg-primary-soft"}`}
        >
          {n}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page === total}
        aria-label="Next page"
        className={`${btn} bg-white text-primary shadow-soft enabled:hover:translate-x-1 enabled:hover:bg-primary enabled:hover:text-white`}
      >
        <ChevronRight size={20} strokeWidth={2.4} />
      </button>
    </nav>
  );
}
