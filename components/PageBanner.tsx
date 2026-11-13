import Link from "next/link";
import Marquee from "./Marquee";
import { animDelay, delay } from "@/lib/utils";
import { Heart, Sparkle } from "./icons";

type Crumb = { label: string; href?: string };

export default function PageBanner({
  title,
  crumbs,
  titleAs: Title = "h1",
}: {
  title: string;
  crumbs?: Crumb[];
  /** Use "p" when the page renders its own <h1> further down. */
  titleAs?: "h1" | "p";
}) {
  const trail: Crumb[] = crumbs ?? [{ label: title }];
  return (
    <>
      <section className="relative flex h-[250px] items-center overflow-hidden sm:h-[320px] lg:h-[373px]">
        <div
          className="absolute inset-0 animate-[banner-zoom_14s_ease-out_forwards] bg-cover bg-[62%_center] sm:bg-center"
          style={{ backgroundImage: "url('/images/page-banner.webp')" }}
          aria-hidden
        />
        {/* Soft wash keeps the title legible on small screens where the photo sits behind it */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fde8ee]/90 via-[#fde8ee]/50 to-transparent md:from-[#fde8ee]/60 md:via-transparent" aria-hidden />
        {/* floating decor */}
        <span className="blob-morph pointer-events-none absolute -left-16 -top-16 size-[220px] bg-white/40 blur-2xl" aria-hidden />
        <Sparkle size={20} className="twinkle pointer-events-none absolute left-[6%] top-[18%] text-primary/60" style={animDelay(0)} aria-hidden />
        <Sparkle size={14} className="twinkle pointer-events-none absolute left-[38%] top-[26%] hidden text-gold sm:block" style={animDelay(1100)} aria-hidden />
        <Heart size={18} className="bob pointer-events-none absolute bottom-[18%] left-[30%] hidden text-primary/50 sm:block" style={animDelay(600)} aria-hidden />
        <div className="relative z-10 mx-auto w-full max-w-[1170px] px-5 sm:px-8 lg:px-[15px]">
          <Title className="line-reveal font-sans text-[42px] font-extrabold leading-[1.1] tracking-[-0.02em] text-primary sm:text-[60px] lg:text-[70px]">
            <span>{title}</span>
          </Title>
          <nav aria-label="Breadcrumb" data-reveal="up" style={delay(300)}>
            <ol className="mt-3 flex flex-wrap items-center gap-2.5 font-sans text-sm font-bold text-ink sm:text-base">
              <li>
                <Link href="/" className="link-underline hover:text-primary">Home</Link>
              </li>
              {trail.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2.5">
                  <span aria-hidden className="text-[22px] font-normal leading-none">›</span>
                  {c.href && i < trail.length - 1 ? (
                    <Link href={c.href} className="link-underline hover:text-primary">{c.label}</Link>
                  ) : (
                    <span aria-current="page">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>
      <Marquee />
    </>
  );
}
