import Image from "next/image";
import Link from "next/link";
import { cardTreatments } from "@/lib/data";
import { delay } from "@/lib/utils";
import { ArrowRight } from "./icons";

/**
 * "Comprehensive Fertility Treatments" — sticky intro on the left, cards on the
 * right that stack on top of each other as you scroll (desktop).
 */
export default function TreatmentStack() {
  return (
    <section className="relative py-14 lg:py-10">
      <div className="mx-auto grid max-w-[1351px] gap-10 px-4 sm:px-8 lg:grid-cols-[1fr_626px] lg:gap-6 lg:px-[30px]">
        <div className="lg:sticky lg:top-[120px] lg:self-start lg:pt-2">
          <h2 className="font-display text-[42px] leading-[1.25] text-ink sm:text-[54px] lg:text-[60px]">
            <span className="line-reveal block"><span>Comprehensive</span></span>
            <span className="line-reveal block" style={delay(120)}>
              <span><span className="text-primary">Fertility</span> Treatments</span>
            </span>
          </h2>
          <p data-reveal="up" style={delay(250)} className="mt-7 max-w-[540px] pl-2.5 font-serif text-[16.5px] leading-[1.55] text-ink">
            We offer a range of advanced fertility treatments tailored to your unique needs, helping you take a
            confident step towards parenthood.
          </p>
          <div data-reveal="up" style={delay(350)} className="mt-8 hidden pl-2.5 lg:block">
            <Link
              href="/book-an-appointment"
              className="btn-shine group inline-flex items-center gap-3 rounded-md border border-primary px-6 py-3 font-display text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              Talk to a specialist
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <ul className="space-y-[30px] lg:space-y-9">
          {cardTreatments.map((t, i) => (
            <li key={t.slug} className="lg:sticky" style={{ top: `${110 + i * 22}px` }}>
              <article
                data-reveal="up"
                className="group grid grid-cols-[1fr_auto] items-stretch gap-4 rounded-[22px] bg-white p-4 shadow-[0_-6px_30px_-18px_rgb(180_43_85/0.35)] transition-shadow duration-500 hover:shadow-card sm:p-5"
              >
                <div className="flex flex-col justify-end pb-3 pl-2 sm:pl-5">
                  <h3 className="font-display text-[26px] leading-tight text-ink transition-colors duration-300 group-hover:text-primary sm:text-[38px]">
                    {t.title}
                  </h3>
                  <Link
                    href={`/treatments/${t.slug}`}
                    className="mt-3 inline-flex w-fit items-center gap-2 font-serif text-[16px] text-primary"
                    aria-label={`Read more about ${t.title}`}
                  >
                    Readmore
                    <span className="grid size-6 place-items-center rounded-full border border-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </div>
                <Link
                  href={`/treatments/${t.slug}`}
                  tabIndex={-1}
                  aria-hidden
                  className="img-zoom relative block aspect-[239/289] w-[130px] overflow-hidden rounded-2xl sm:w-[239px]"
                >
                  <Image src={t.card!} alt="" fill sizes="(min-width: 640px) 239px, 130px" className="object-cover" />
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
