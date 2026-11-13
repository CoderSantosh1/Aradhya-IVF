import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { Check, Mail, MapPin, Phone } from "@/components/icons";
import PageBanner from "@/components/PageBanner";
import SectionLabel from "@/components/SectionLabel";
import { site } from "@/data";
import { delay } from "@/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the fertility experts at Aaradhya IVF for appointments, consultations or any queries.",
};

const info = [
  { icon: MapPin, label: "Our Location", value: site.address, href: site.mapsUrl },
  { icon: Phone, label: "Call Anytime", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Email Address", value: site.email, href: `mailto:${site.email}` },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" />
      <section className="relative overflow-hidden pb-14 pt-12 lg:pb-[70px] lg:pt-[40px]">
        <svg className="pointer-events-none absolute left-0 top-28 hidden w-[200px] text-primary/40 lg:block" viewBox="0 0 200 180" fill="none" aria-hidden>
          <path className="draw-path" d="M2 120 C 40 150, 120 170, 200 150 M 70 120 C 40 90, 30 40, 60 30 C 80 22, 92 40, 88 56 C 92 36, 116 30, 120 50 C 124 76, 100 100, 70 120" stroke="currentColor" strokeWidth="2" pathLength={1} />
        </svg>

        <div className="relative mx-auto max-w-[1351px] px-4 sm:px-8">
          <div className="mx-auto max-w-[1000px] text-center">
            <SectionLabel className="[&>span:nth-child(2)]:text-[20px] [&>span:nth-child(2)]:font-semibold [&>span:nth-child(2)]:text-ink/70">
              Contact Us
            </SectionLabel>
            <h2 className="line-reveal mt-5 font-serif text-[34px] font-medium leading-tight text-ink sm:text-[48px]">
              <span>
                Get in Touch with Our <span className="text-primary">Fertility Experts</span>
              </span>
            </h2>
            <p data-reveal="up" style={delay(200)} className="mx-auto mt-4 max-w-[680px] font-sans text-[18px] leading-[1.6] text-muted sm:text-[21px]">
              We are here to support you at every step of your parenthood journey. Feel free to reach out to our team
              for any queries or appointments.
            </p>
            <ul data-reveal="flip" style={delay(300)} className="mt-6 flex flex-wrap justify-center gap-x-12 gap-y-3 font-sans text-[18px] text-ink/80">
              {["Quick Response", "Confidential Consultation", "Personalized Support"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid size-[26px] place-items-center rounded-full bg-primary text-white shadow-[0_0_0_4px_rgb(180_43_85/0.15)]">
                    <Check size={15} strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[575px_1fr] lg:gap-8 lg:px-[11px]">
            <div className="min-w-0 space-y-3">
              <div data-reveal="mask" className="img-zoom relative aspect-[575/372] overflow-hidden rounded-[18px] shadow-[0_0_0_4px_rgb(255_255_255/0.7),0_20px_40px_-25px_rgb(180_43_85/0.5)]">
                <Image src="/images/contact.jpg" alt="Doctor checking on a smiling patient during an ultrasound" fill sizes="(min-width: 1024px) 575px, 100vw" className="object-cover" />
              </div>
              <ul data-reveal="left" style={delay(150)} className="space-y-5 rounded-[18px] bg-white/45 p-5 shadow-soft sm:p-7 sm:px-10">
                {info.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="group flex items-center gap-4 sm:gap-6">
                    <span
                      className="grid size-[60px] shrink-0 place-items-center bg-primary-soft sm:size-[76px] text-primary transition-all duration-500 group-hover:rotate-[30deg] group-hover:bg-primary group-hover:text-white"
                      style={{ clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)" }}
                    >
                      <Icon size={30} className="transition-transform duration-500 group-hover:-rotate-[30deg]" />
                    </span>
                    <span className="h-12 w-px bg-gold/60" />
                    <span className="min-w-0">
                      <span className="block font-sans text-[18px] font-medium text-primary sm:text-[20px]">{label}</span>
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="break-words font-sans text-[16px] text-muted transition-colors hover:text-primary sm:text-[18px]">
                        {value}
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div data-reveal="right" className="min-w-0 rounded-[22px] bg-white/55 p-6 shadow-soft sm:px-9 sm:py-8">
              <h2 className="mb-7 font-serif text-[36px] font-medium text-ink sm:text-[44px]">
                Send Us a <span className="text-primary">Message</span>
              </h2>
              <ContactForm />
            </div>
          </div>

          <div data-reveal="up" className="mt-10 overflow-hidden rounded-[22px] shadow-soft lg:mx-[11px]">
            <iframe
              src={site.mapEmbed}
              title="Aaradhya IVF location on Google Maps"
              className="block h-[300px] w-full border-0 sm:h-[406px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
