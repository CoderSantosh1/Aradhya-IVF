import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import SectionLabel from "@/components/SectionLabel";
import SpecialistsGrid from "@/components/SpecialistsGrid";
import { delay } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Specialists",
  description: "Meet the IVF specialists, embryologists and gynaecologists at Aaradhya IVF.",
};

export default function SpecialistsPage() {
  return (
    <>
      <PageBanner title="Our Specialists" />
      <section className="relative overflow-hidden pb-16 pt-16 lg:pb-12 lg:pt-[70px]">
        {/* decorative heart ribbon + baby feet like the design */}
        <svg className="pointer-events-none absolute left-0 top-36 hidden w-[200px] text-primary/40 lg:block" viewBox="0 0 200 180" fill="none" aria-hidden>
          <path
            className="draw-path"
            d="M2 140 C 60 120, 110 80, 120 40 C 128 10, 92 -2, 70 22 C 50 -2, 10 10, 22 50 C 34 90, 120 150, 200 150"
            stroke="currentColor"
            strokeWidth="2"
            pathLength={1}
          />
        </svg>
        <div className="pointer-events-none absolute -right-8 top-6 hidden size-[330px] lg:block" data-reveal="zoom" aria-hidden>
          <span className="absolute inset-0 rounded-full bg-primary-soft/60 animate-float" />
          <div className="absolute inset-4 overflow-hidden rounded-full">
            <Image src="/images/about-feet.jpg" alt="" fill sizes="300px" className="scale-110 object-cover" />
          </div>
        </div>

        <div className="relative mx-auto max-w-[1351px] px-4 sm:px-8 lg:px-[50px]">
          <div className="mx-auto max-w-[760px] text-center">
            <SectionLabel line="primary" tone="muted" className="[&>span:nth-child(2)]:text-[17px] [&>span:nth-child(2)]:font-semibold">
              Our Specialists
            </SectionLabel>
            <h2 className="mt-6 font-serif text-[38px] font-medium leading-[1.2] text-ink sm:text-[54px]">
              <span className="line-reveal block"><span>Expert Care for Your</span></span>
              <span className="line-reveal block text-primary" style={delay(150)}><span>Parenthood Journey</span></span>
            </h2>
            <p data-reveal="up" style={delay(250)} className="mx-auto mt-5 max-w-[720px] font-sans text-[17px] leading-[1.6] text-muted">
              Our experienced fertility specialists are dedicated to providing compassionate care, advanced
              treatments and personalized support to help you achieve your dream of parenthood.
            </p>
          </div>

          <div className="mt-12 lg:mt-14">
            <SpecialistsGrid />
          </div>
        </div>
      </section>
    </>
  );
}
