import type { Metadata } from "next";
import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";
import { Calendar, Heart, Shield } from "@/components/icons";
import PageBanner from "@/components/PageBanner";
import SectionLabel from "@/components/SectionLabel";
import { delay } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Book An Appointment",
  description: "Schedule a consultation with the fertility experts at Aaradhya IVF and get personalized guidance.",
};

const perks = [
  { icon: Calendar, title: "Expert Consultation", body: "Connect with our experienced fertility specialists." },
  { icon: Shield, title: "Personalized Care", body: "Get treatment plans tailored to your unique needs." },
  { icon: Heart, title: "Confidential & Safe", body: "Your privacy and comfort are our priority." },
];

export default function BookAppointmentPage() {
  return (
    <>
      <PageBanner title="Book An Appointment" titleAs="p" />
      <section className="pb-14 pt-14 lg:pb-[52px] lg:pt-[76px]">
        <div className="mx-auto max-w-[1351px] px-4 sm:px-8">
          <div className="mx-auto max-w-[900px] text-center">
            <SectionLabel className="[&>span:nth-child(2)]:text-[19px] [&>span:nth-child(2)]:font-medium [&>span:nth-child(2)]:text-ink">
              Book an appointment
            </SectionLabel>
            <h1 className="line-reveal mt-6 font-serif text-[38px] font-medium leading-tight text-ink sm:text-[58px]">
              <span>
                Book an <span className="text-primary">Appointment</span> Today
              </span>
            </h1>
            <p data-reveal="up" style={delay(200)} className="mx-auto mt-4 max-w-[820px] font-sans text-[18px] leading-[1.7] text-muted sm:text-[21px]">
              Take the first step towards your parenthood journey. Schedule a consultation with our fertility experts
              and get personalized guidance.
            </p>
          </div>

          <div className="mt-12 grid items-start gap-6 lg:grid-cols-[621px_1fr] lg:px-[23px]">
            <div data-reveal="left" className="min-w-0 overflow-hidden rounded-[18px] bg-gradient-to-b from-[#fbdde3] to-[#fde9ec] shadow-soft">
              <div className="img-zoom relative aspect-[621/366] overflow-hidden">
                <Image src="/images/appointment.jpg" alt="Doctor talking with an expecting mother" fill preload sizes="(min-width: 1024px) 621px, 100vw" className="object-cover" />
              </div>
              <ul className="grid gap-6 px-4 py-7 sm:grid-cols-3 sm:gap-0">
                {perks.map(({ icon: Icon, title, body }, i) => (
                  <li key={title} className={`group px-4 text-center ${i > 0 ? "sm:border-l sm:border-primary/25" : ""}`}>
                    <span className="mx-auto grid size-[68px] place-items-center rounded-full bg-primary-soft text-primary transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-white">
                      <Icon size={30} className="icon-wiggle" />
                    </span>
                    <h2 className="mt-4 font-serif text-[18px] font-semibold text-primary">{title}</h2>
                    <p className="mt-1 font-sans text-[16px] leading-[1.5] text-muted">{body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div data-reveal="right" className="min-w-0 rounded-[18px] bg-white/55 p-6 shadow-soft sm:px-[42px] sm:py-9">
              <SectionLabel align="center" tone="primary" className="justify-start [&>span:first-child]:w-[74px] [&>span:last-child]:hidden [&>span:nth-child(2)]:text-[17px] [&>span:nth-child(2)]:font-medium">
                Appointment Form
              </SectionLabel>
              <h2 className="mt-4 font-serif text-[32px] font-medium text-ink sm:text-[38px]">
                Schedule Your <span className="text-primary">Consultation</span>
              </h2>
              <p className="mb-7 mt-2 font-sans text-[18px] leading-[1.6] text-muted sm:text-[19px]">
                Fill in the details below and our team will get in touch with you to confirm your appointment.
              </p>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
