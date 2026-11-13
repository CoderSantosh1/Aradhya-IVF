import Image from "next/image";
import { animDelay, delay } from "@/utils";
import { Sparkle } from "./icons";
import Counter from "./Counter";
import SectionLabel from "./SectionLabel";

const circles = ["/images/circle-1.jpg", "/images/circle-2.jpg", "/images/circle-3.jpg"];

export default function AboutIntro() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-0">
      {/* light panel behind the text column, as in the design */}
      <div className="absolute inset-y-0 right-0 hidden w-[46%] bg-gradient-to-b from-[#fdf1f1] to-[#fdeeee] lg:block" aria-hidden />
      <span data-parallax="0.18" className="blob-morph pointer-events-none absolute right-[8%] top-[12%] hidden size-[180px] bg-primary-soft/40 blur-2xl lg:block" aria-hidden />
      <Sparkle size={18} className="twinkle pointer-events-none absolute right-[6%] top-[16%] hidden text-primary/50 lg:block" style={animDelay(300)} aria-hidden />
      <Sparkle size={14} className="twinkle pointer-events-none absolute bottom-[14%] right-[40%] hidden text-gold lg:block" style={animDelay(1400)} aria-hidden />
      <div className="relative mx-auto grid max-w-[1351px] items-center gap-14 px-4 sm:px-8 lg:grid-cols-[54%_46%] lg:gap-0 lg:px-0 lg:py-14">
        {/* Visual column */}
        <div className="lg:pl-[62px] lg:pr-6">
          <div className="flex flex-wrap items-center gap-x-16 gap-y-6 lg:pl-12">
            <div data-reveal="up">
              <div className="flex items-center gap-5">
                <span className="font-display text-[13px] uppercase tracking-[0.35em] text-ink/80">Trusted by</span>
                <span className="h-px w-16 bg-primary" />
              </div>
              <p className="mt-1 font-display text-[64px] leading-none text-primary sm:text-[74px]">
                <Counter to={15} suffix="K+" />
              </p>
              <p className="mt-2 font-serif text-xl leading-snug text-ink/80">
                Happy Families
                <br />
                Worldwide
              </p>
            </div>
            <ul className="flex -space-x-1">
              {circles.map((src, i) => (
                <li
                  key={src}
                  data-reveal="zoom"
                  style={delay(150 + i * 140)}
                  className="relative size-[86px] overflow-hidden rounded-full border-[3px] border-white shadow-soft transition-transform duration-500 hover:z-10 hover:-translate-y-2 sm:size-[96px]"
                >
                  <Image src={src} alt="" fill sizes="96px" className="object-cover" />
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal="up" style={delay(200)} className="relative mx-auto mt-14 aspect-[615/324] w-full max-w-[615px] lg:mx-0 lg:ml-[18px]">
            <div className="img-zoom absolute inset-y-0 left-0 w-[51%] overflow-hidden pill-left">
              <Image src="/images/about-mother.jpg" alt="Mother gently holding her newborn baby" fill sizes="(min-width: 1024px) 314px, 50vw" className="object-cover object-[70%_center] scale-[1.08]" />
            </div>
            <div className="img-zoom absolute inset-y-0 right-0 w-[48.4%] overflow-hidden pill-right">
              <Image src="/images/about-feet.jpg" alt="Parents cradling a baby's tiny feet around a heart" fill sizes="(min-width: 1024px) 298px, 50vw" className="object-cover object-[30%_center] scale-[1.08]" />
            </div>
            {/* Concentric arcs that draw themselves in */}
            <svg
              className="arc-draw pointer-events-none absolute left-[-4.9%] top-[-9.3%] h-[118.5%] w-[109.8%] overflow-visible text-ink"
              viewBox="-30 -30 675 384"
              fill="none"
              aria-hidden
            >
              <path d="M -17.3 146.3 A 180 180 0 0 1 155.7 -17.8" stroke="currentColor" strokeWidth="1.6" pathLength={1} />
              <path d="M 632.3 177.7 A 180 180 0 0 1 459.3 341.9" stroke="currentColor" strokeWidth="1.6" pathLength={1} />
            </svg>
          </div>
        </div>

        {/* Text column */}
        <div className="lg:pl-5 lg:pr-[60px]">
          <SectionLabel align="left" tone="primary" line="primary" className="[&>span:first-child]:tracking-[0.35em] [&>span:first-child]:text-[13px] [&>span:first-child]:font-display">
            About us
          </SectionLabel>
          <h2 className="mt-6 font-display text-[40px] leading-[1.08] text-ink sm:text-[54px] lg:text-[62px]">
            <span className="line-reveal block"><span>Complete Fertility</span></span>
            <span className="line-reveal block" style={delay(120)}><span>Care for Your</span></span>
            <span className="line-reveal block text-primary" style={delay(240)}><span>Brighter Tomorrow.</span></span>
          </h2>
          <div data-reveal="up" style={delay(300)} className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 pl-2.5">
            <span className="whitespace-nowrap font-display text-2xl text-primary">Aaradhya IVF</span>
            <span className="h-px w-8 bg-primary" />
            <span className="font-serif text-[15px] leading-tight text-ink">
              Advanced Fertility Care
              <br />
              for Growing Families
            </span>
          </div>
          <p data-reveal="up" style={delay(380)} className="mt-6 max-w-[480px] pl-2.5 font-serif text-[17.5px] leading-[1.4] text-ink/85">
            At Aaradhya IVF, we are committed to helping individuals and couples achieve their dream of parenthood
            through advanced fertility treatments, compassionate care, and a personalized approach.
          </p>
        </div>
      </div>
    </section>
  );
}
