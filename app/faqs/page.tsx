import type { Metadata } from "next";
import Image from "next/image";
import FaqAccordion from "@/components/FaqAccordion";
import PageBanner from "@/components/PageBanner";
import SectionLabel from "@/components/SectionLabel";
import { faqs } from "@/data";
import { delay } from "@/utils";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to common questions about IVF, fertility treatments, costs, safety and success rates.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqsPage() {
  return (
    <>
      <PageBanner title="Our Faqs" />
      <section className="relative overflow-hidden pb-16 pt-14 lg:pb-[70px] lg:pt-[70px]">
        <svg className="pointer-events-none absolute left-2 top-16 hidden w-[160px] text-primary/50 lg:block" viewBox="0 0 160 160" fill="none" aria-hidden>
          <path className="draw-path" d="M6 154 C 50 110, 100 60, 150 6" stroke="currentColor" strokeWidth="2" pathLength={1} />
          {[0, 1, 2, 3].map((i) => (
            <ellipse key={i} cx={40 + i * 30} cy={118 - i * 30} rx="16" ry="7" fill="currentColor" opacity=".7" transform={`rotate(-30 ${40 + i * 30} ${118 - i * 30})`} />
          ))}
        </svg>
        <svg className="pointer-events-none absolute right-0 top-28 hidden w-[260px] text-primary/40 lg:block" viewBox="0 0 260 200" fill="none" aria-hidden>
          <path className="draw-path" d="M0 190 C 90 170, 170 120, 150 60 C 140 20, 100 20, 92 50 C 80 15, 30 30, 52 80 C 70 120, 160 160, 260 140" stroke="currentColor" strokeWidth="2" pathLength={1} />
        </svg>

        <div className="relative mx-auto max-w-[1351px] px-4 sm:px-8">
          <div className="mx-auto max-w-[860px] text-center">
            <SectionLabel className="[&>span:nth-child(2)]:text-[20px] [&>span:nth-child(2)]:font-semibold [&>span:nth-child(2)]:text-muted">
              Our Faqs
            </SectionLabel>
            <h2 className="line-reveal mt-6 font-serif text-[38px] font-medium leading-tight text-ink sm:text-[58px]">
              <span>
                Your Questions, <span className="text-primary">Our Guidance</span>
              </span>
            </h2>
            <p data-reveal="up" style={delay(200)} className="mx-auto mt-4 max-w-[700px] font-sans text-[18px] leading-[1.7] text-muted sm:text-[20px]">
              Find clear and helpful answers to common questions about our fertility treatments, procedures, and
              services.
            </p>
          </div>
        </div>

        <div className="relative mx-auto mt-12 grid max-w-[1351px] items-start gap-10 px-4 sm:px-8 lg:mt-20 lg:grid-cols-[527px_1fr] lg:gap-2 lg:pl-0 lg:pr-[31px]">
          <div data-reveal="left" className="relative hidden lg:block">
            <span className="absolute -left-10 -top-16 size-[500px] rounded-full bg-primary-soft/40 blur-2xl" aria-hidden />
            <Image
              src="/images/faq-woman.jpg"
              alt="Smiling expecting mother cradling her bump"
              width={527}
              height={1280}
              sizes="527px"
              className="relative h-auto w-full mix-blend-multiply"
            />
          </div>
          <FaqAccordion />
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
