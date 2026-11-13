import Image from "next/image";
import AboutIntro from "@/components/AboutIntro";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import SectionLabel from "@/components/SectionLabel";
import Testimonials from "@/components/Testimonials";
import TreatmentStack from "@/components/TreatmentStack";
import { Heart, Sparkle } from "@/components/icons";
import { animDelay as d, delay } from "@/utils";

export default function HomePage() {
  return (
    <>
      {/* ------------------------------ Hero ------------------------------ */}
      <section className="relative overflow-hidden bg-blush">
        <div data-parallax="0.12" className="pointer-events-none absolute -right-24 top-10 size-[520px] blob-morph bg-[#f9d3dc]/60 blur-3xl" aria-hidden />
        <div data-parallax="-0.1" className="pointer-events-none absolute -left-32 bottom-0 size-[380px] blob-morph bg-white/60 blur-3xl [animation-delay:-6s]" aria-hidden />
        {/* twinkling sparkles + drifting hearts */}
        <Sparkle size={22} className="twinkle pointer-events-none absolute left-[8%] top-[12%] text-primary/50" style={d(0)} aria-hidden />
        <Sparkle size={16} className="twinkle pointer-events-none absolute left-[46%] top-[18%] hidden text-gold lg:block" style={d(900)} aria-hidden />
        <Sparkle size={18} className="twinkle pointer-events-none absolute bottom-[14%] left-[30%] hidden text-primary/40 sm:block" style={d(1700)} aria-hidden />
        <Heart size={20} className="bob pointer-events-none absolute right-[6%] top-[22%] hidden text-primary/40 lg:block" style={d(400)} aria-hidden />
        <Heart size={14} className="bob pointer-events-none absolute bottom-[30%] left-[4%] hidden text-primary/30 lg:block" style={d(1500)} aria-hidden />
        <div className="relative mx-auto grid max-w-[1351px] items-end lg:min-h-[637px] lg:grid-cols-[575px_1fr]">
          <div className="relative z-10 self-start px-5 pt-14 sm:px-10 lg:pl-[74px] lg:pr-0 lg:pt-[92px]">
            <h1 className="font-display text-[40px] leading-[1.22] text-ink sm:text-[68px] lg:w-[700px] lg:whitespace-nowrap lg:text-[84px]">
              <span className="line-reveal block" style={delay(100)}><span>Your Journey to</span></span>
              <span className="line-reveal block text-primary" style={delay(250)}><span>Motherhood</span></span>
              <span className="line-reveal block" style={delay(400)}><span>Begins Here</span></span>
            </h1>
          </div>
          <div data-reveal="right" style={delay(300)} className="relative mt-6 px-4 sm:px-10 lg:mt-0 lg:px-0">
            <div className="absolute bottom-10 left-1/2 size-[70%] -translate-x-1/2 rounded-full border border-primary/15 animate-spin-slow [border-style:dashed]" aria-hidden />
            <Image
              src="/images/hero.jpg"
              alt="Smiling pregnant woman with her doctor"
              width={705}
              height={637}
              preload
              quality={90}
              sizes="(min-width: 1024px) 705px, 100vw"
              className="relative mx-auto h-auto w-full max-w-[705px] mix-blend-multiply animate-[float_8s_ease-in-out_infinite] [animation-delay:1.2s]"
            />
          </div>
        </div>
      </section>

      <Marquee />

      {/* --------------------------- Mission stats -------------------------- */}
      <section className="px-4 pb-6 pt-16 text-center sm:pt-[62px]">
        <h2 data-reveal="blur" className="mx-auto max-w-[880px] font-sans text-[30px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink sm:text-[44px] lg:text-[58px]">
          Helping Dreams of Parenthood with Advanced Fertility Care.
        </h2>
        <dl className="mt-10 flex flex-wrap justify-center gap-x-28 gap-y-8">
          {[
            { to: 15, suffix: "+", label: "Years of Expertise" },
            { to: 98, suffix: "%", label: "Patient Satisfaction" },
          ].map((s, i) => (
            <div key={s.label} data-reveal="flip" style={delay(150 + i * 150)} className="flex flex-col-reverse items-center">
              <dt className="mt-1 font-sans text-[22px] text-ink sm:text-[27px]">{s.label}</dt>
              <dd className="font-sans text-[64px] font-bold leading-none tracking-[-0.03em] text-ink sm:text-[86px]">
                <Counter to={s.to} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <AboutIntro />

      <TreatmentStack />

      {/* --------------------------- Testimonials --------------------------- */}
      <section className="py-16 lg:py-[110px]">
        <div className="mx-auto grid max-w-[1351px] items-center gap-12 px-4 sm:px-8 lg:grid-cols-[569px_1fr] lg:gap-10 lg:pl-[37px] lg:pr-[27px]">
          <div data-reveal="mask-up" className="img-zoom relative mx-auto aspect-[569/822] w-full max-w-[569px] overflow-hidden rounded-2xl">
            <Image src="/images/testimonial.jpg" alt="Doctor caring for a smiling expecting mother" fill sizes="(min-width: 1024px) 569px, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionLabel tone="primary" line="primary" className="[&>span:nth-child(2)]:tracking-[0.3em]">
              Testimonials
            </SectionLabel>
            <h2 className="mt-5 text-center font-display text-[40px] leading-[1.18] text-ink sm:text-[54px] lg:text-[62px]">
              <span className="line-reveal block"><span>Real Stories,</span></span>
              <span className="line-reveal block text-primary" style={delay(150)}><span>Brighter Tomorrows</span></span>
            </h2>
            <div data-reveal="up" style={delay(250)} className="mt-12 lg:mt-[110px]">
              <Testimonials />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
