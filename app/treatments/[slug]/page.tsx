import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import PageBanner from "@/components/PageBanner";
import { ArrowRight, ChartUp, Check, HandsHeart, Lotus, Phone, Shield } from "@/components/icons";
import { getTreatment, sidebarTreatmentSlugs, site, treatments } from "@/data";
import { delay } from "@/utils";

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/treatments/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) return {};
  return { title: t.title, description: t.intro[0] };
}

const highlights = [
  { icon: ChartUp, label: ["Higher", "Success Rates"] },
  { icon: Shield, label: ["Advanced", "Technology"] },
  { icon: HandsHeart, label: ["Personalized", "Care Plans"] },
];

/** Gold accent rule under section headings */
const Rule = () => <span className="mt-3 block h-[3px] w-[60px] rounded-full bg-gold" />;

export default function TreatmentDetailPage({ params }: PageProps<"/treatments/[slug]">) {
  // The banner is static; everything that depends on the URL streams in behind a
  // skeleton so client navigations can paint immediately.
  return (
    <>
      <PageBanner title="Treatments Detail" titleAs="p" crumbs={[{ label: "Our Treatments", href: "/treatments" }, { label: "Treatments Detail" }]} />
      <Suspense fallback={<DetailSkeleton />}>
        <TreatmentDetail params={params} />
      </Suspense>
    </>
  );
}

function DetailSkeleton() {
  return (
    <div className="mx-auto grid max-w-[1351px] animate-pulse gap-10 px-4 py-12 sm:px-8 lg:grid-cols-[350px_1fr] lg:px-[52px]">
      <div className="h-[600px] rounded-[18px] bg-white/50" />
      <div className="space-y-6">
        <div className="aspect-[864/412] rounded-[18px] bg-white/50" />
        <div className="h-12 w-2/3 rounded-lg bg-white/50" />
        <div className="h-32 rounded-lg bg-white/40" />
      </div>
    </div>
  );
}

async function TreatmentDetail({ params }: { params: PageProps<"/treatments/[slug]">["params"] }) {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) notFound();

  const sidebar = sidebarTreatmentSlugs.map((s) => getTreatment(s)!);
  // Keep the current treatment visible in the sidebar even if it is a "service" card.
  if (!sidebarTreatmentSlugs.includes(t.slug)) sidebar.unshift(t);

  const half = Math.ceil(t.benefitFor.length / 2);

  return (
      <section className="overflow-x-clip py-12 lg:py-[52px]">
        <div className="mx-auto grid max-w-[1351px] gap-10 px-4 sm:px-8 lg:grid-cols-[350px_1fr] lg:gap-[42px] lg:pl-[52px] lg:pr-[43px]">
          {/* ------------------------------ Sidebar ------------------------------ */}
          <aside className="space-y-8 lg:sticky lg:top-[100px] lg:self-start">
            <nav data-reveal="left" aria-label="Treatments" className="overflow-hidden rounded-[18px] border border-primary/15 bg-white/60 pb-4 shadow-soft">
              <h2 className="flex items-center gap-4 px-7 pb-6 pt-7 font-serif text-[28px] font-semibold text-primary">
                <Lotus size={44} className="text-primary" /> Our Treatments
              </h2>
              <ul>
                {sidebar.map((item) => {
                  const active = item.slug === t.slug;
                  return (
                    <li key={item.slug}>
                      <Link
                        href={`/treatments/${item.slug}`}
                        aria-current={active ? "page" : undefined}
                        className={`group flex items-center justify-between gap-4 font-sans text-[18px] transition-all duration-300 ${
                          active
                            ? "bg-gradient-to-r from-primary to-[#d0477a] px-7 py-5 text-white"
                            : "mx-6 border-b border-primary/10 py-5 text-ink hover:pl-2 hover:text-primary"
                        }`}
                      >
                        <span>{item.title}</span>
                        <span
                          className={`grid size-[30px] shrink-0 place-items-center rounded-full transition-all duration-300 ${
                            active ? "bg-white/90 text-primary" : "bg-primary-soft text-primary group-hover:bg-primary group-hover:text-white"
                          }`}
                        >
                          <ArrowRight size={15} />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div data-reveal="left" style={delay(120)} className="relative overflow-hidden rounded-[18px] border border-primary/25 bg-white/50 px-8 pb-20 pt-8 shadow-soft">
              <h2 className="font-serif text-[30px] font-semibold text-primary">Have Questions?</h2>
              <p className="mt-2 font-sans text-[19px] leading-snug text-muted">We&apos;re here to help you on your fertility journey.</p>
              <a href={site.helplineHref} className="group mt-6 flex items-center gap-4 font-sans text-[22px] font-medium text-ink">
                <span className="grid size-12 place-items-center rounded-full bg-primary-soft text-primary transition-transform duration-500 group-hover:rotate-12">
                  <Phone size={22} />
                </span>
                {site.helpline}
              </a>
              <Link
                href="/book-an-appointment"
                className="btn-shine group mt-6 inline-flex items-center gap-3 whitespace-nowrap rounded-xl bg-gradient-to-b from-[#c48a3a] to-gold px-6 py-4 font-serif text-[17px] sm:px-7 sm:text-[19px] text-white shadow-[0_10px_25px_-10px_rgb(184_126_44/0.7)]"
              >
                Book an Appointment
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <svg className="absolute -bottom-2 left-0 w-40 text-primary/15" viewBox="0 0 160 70" fill="currentColor" aria-hidden>
                <path d="M40 70c-20-12-34-28-30-44 3-12 18-14 26-4 6-14 24-12 24 4 0 18-12 32-20 44Z" />
                <path d="M90 70c10-14 30-22 50-18-6 10-24 18-50 18Z" opacity=".6" />
              </svg>
            </div>
          </aside>

          {/* ---------------------------- Main content --------------------------- */}
          <article className="min-w-0">
            <div data-reveal="mask" className="img-zoom relative aspect-[864/412] overflow-hidden rounded-[18px] shadow-soft">
              <Image src={t.image} alt={t.title} fill preload sizes="(min-width: 1024px) 864px, 100vw" className="object-cover" />
            </div>

            <h1 data-reveal="up" className="mt-7 font-serif text-[38px] font-semibold leading-tight text-ink sm:text-[52px]">
              <span className="text-primary">{t.short}</span> {t.long}
            </h1>
            <Rule />
            <p data-reveal="up" className="mt-5 font-serif text-[24px] text-primary sm:text-[30px]">{t.tagline}</p>
            <div className="mt-4 space-y-5 font-sans text-[17px] leading-[1.75] text-muted sm:text-[19px]">
              {t.intro.map((p, i) => (
                <p key={i} data-reveal="up" style={delay(i * 80)}>{p}</p>
              ))}
            </div>

            <ul data-reveal="up" className="mt-8 grid gap-6 rounded-[18px] bg-white/50 p-6 shadow-soft sm:grid-cols-3 sm:gap-0">
              {highlights.map(({ icon: Icon, label }, i) => (
                <li key={label[0]} className={`group flex items-center gap-5 sm:px-4 ${i > 0 ? "sm:border-l sm:border-primary/20" : ""}`}>
                  <span className="grid size-[86px] shrink-0 place-items-center rounded-full bg-primary-soft/80 text-primary transition-transform duration-500 group-hover:scale-110">
                    <Icon size={40} className="icon-wiggle" />
                  </span>
                  <span className="font-serif text-[19px] leading-snug text-ink">
                    {label[0]}
                    <br />
                    {label[1]}
                  </span>
                </li>
              ))}
            </ul>

            <section className="mt-9 grid items-center gap-8 md:grid-cols-[336px_1fr] md:gap-10">
              <div data-reveal="mask-up" className="img-zoom relative aspect-[336/341] overflow-hidden rounded-[18px] shadow-soft">
                <Image src="/images/td-embryo.jpg" alt="Microscopic view of an egg being fertilized" fill sizes="336px" className="object-cover" />
              </div>
              <div data-reveal="right">
                <h2 className="font-serif text-[32px] font-semibold text-ink sm:text-[38px]">
                  How <span className="text-primary">{t.short}</span> Can <span className="text-primary">Help</span>
                </h2>
                <Rule />
                <p className="mt-5 font-sans text-[17px] leading-[1.7] text-muted sm:text-[19px]">{t.helps}</p>
                <ul className="mt-4 space-y-2">
                  {t.helpPoints.map((point) => (
                    <li key={point} className="flex items-center gap-3 font-serif text-[17px] font-medium text-ink sm:text-[18px]">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-white"><Check size={14} strokeWidth={2.6} /></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mt-12 grid items-center gap-8 md:grid-cols-[1fr_260px] lg:gap-6">
              <div data-reveal="up">
                <h2 className="font-serif text-[32px] font-semibold text-ink sm:text-[38px]">
                  Who Can <span className="text-primary">Benefit</span> from {t.short}?
                </h2>
                <Rule />
                <p className="mt-5 font-sans text-[17px] text-muted sm:text-[19px]">
                  {t.short} can be a suitable option for individuals and couples facing:
                </p>
                <div className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {[t.benefitFor.slice(0, half), t.benefitFor.slice(half)].map((col, ci) => (
                    <ul key={ci} className="space-y-3">
                      {col.map((b) => (
                        <li key={b} className="flex items-center gap-3 font-sans text-[15.5px] text-muted">
                          <span className="grid size-6 shrink-0 place-items-center rounded-full bg-gold text-white"><Check size={14} strokeWidth={2.6} /></span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
              <div data-reveal="zoom" className="relative mx-auto size-[260px] sm:size-[288px]">
                <span className="absolute inset-0 rounded-full border-[6px] border-primary-soft animate-pulse-ring [animation-duration:3.5s]" aria-hidden />
                <div className="relative size-full overflow-hidden rounded-full border-[6px] border-primary-soft shadow-soft">
                  <Image src="/images/td-benefit.jpg" alt="Mother and baby sharing a joyful moment" fill sizes="288px" className="scale-[1.06] object-cover" />
                </div>
              </div>
            </section>

            <section data-reveal="up" className="mt-12 grid items-center gap-8 rounded-[18px] bg-white/50 p-4 shadow-soft md:grid-cols-[300px_1fr] md:gap-8">
              <div className="img-zoom relative aspect-[301/221] overflow-hidden rounded-[14px]">
                <Image src="/images/td-expect.jpg" alt="Illustration of a baby in a protective bubble held by caring hands" fill sizes="300px" className="object-cover" />
              </div>
              <div className="pb-4 md:pb-0">
                <h2 className="font-serif text-[32px] font-semibold text-ink sm:text-[38px]">
                  What to <span className="text-primary">Expect</span>
                </h2>
                <Rule />
                <p className="mt-5 font-sans text-[17px] leading-[1.7] text-muted">{t.expect}</p>
              </div>
            </section>
          </article>
        </div>
      </section>
  );
}
