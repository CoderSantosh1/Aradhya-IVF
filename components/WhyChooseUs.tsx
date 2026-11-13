import Image from "next/image";
import { delay } from "@/utils";
import { Heart, Shield, Users } from "./icons";
import SectionLabel from "./SectionLabel";

const features = [
  { icon: Users, title: "Experienced Specialists", body: "Our team of fertility experts brings years of experience and a patient-first approach." },
  { icon: Shield, title: "Advanced Technology", body: "We use the latest medical technology to ensure safe, effective and personalized treatment." },
  { icon: Heart, title: "Personalized Care", body: "Every journey is unique, and we create treatment plans tailored to your individual needs." },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-[60px]">
      <div className="mx-auto grid max-w-[1351px] items-center gap-12 px-4 sm:px-8 lg:grid-cols-[354px_1fr_354px] lg:gap-10 lg:px-[72px]">
        <div data-reveal="left" className="relative mx-auto w-full max-w-[354px]">
          <span className="absolute -left-10 top-10 size-[260px] rounded-full bg-primary-soft/50 animate-float" aria-hidden />
          <span className="absolute -top-7 left-0 size-16 rounded-full bg-primary-soft" aria-hidden />
          <div data-tilt="7" className="img-zoom relative aspect-[350/492] overflow-hidden rounded-[22px] border border-primary/20 shadow-soft">
            <Image src="/images/why-left.jpg" alt="Mother hugging her laughing baby" fill sizes="354px" className="object-cover" />
          </div>
        </div>

        <div className="mx-auto max-w-[430px] text-center">
          <SectionLabel line="primary" tone="ink" className="[&>span:nth-child(2)]:text-[13px] [&>span:nth-child(2)]:tracking-[0.35em]">
            Why choose us
          </SectionLabel>
          <h2 className="mt-5 font-serif text-[30px] leading-[1.2] text-ink sm:text-[32px]">
            <span className="line-reveal block"><span>Compassionate Care</span></span>
            <span className="line-reveal block text-primary" style={delay(120)}><span>for Your Parenthood Journey</span></span>
          </h2>
          <p data-reveal="up" style={delay(200)} className="mt-3 text-[15px] leading-[1.45] text-ink/80">
            We combine advanced fertility treatments, modern technology and personalized care to support you at every
            step toward building your family.
          </p>
          <ul className="mt-6 space-y-6 text-left">
            {features.map((f, i) => (
              <li key={f.title} data-reveal="up" style={delay(250 + i * 120)} className="group flex items-center gap-5">
                <span className="grid size-[70px] shrink-0 place-items-center rounded-full bg-primary-soft/70 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                  <f.icon size={30} className="icon-wiggle" />
                </span>
                <span className="h-[62px] w-px shrink-0 bg-primary/50" />
                <span>
                  <span className="block font-serif text-[17px] text-primary">{f.title}</span>
                  <span className="mt-1 block text-[14px] leading-[1.45] text-muted">{f.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal="right" className="relative mx-auto w-full max-w-[354px]">
          <span className="absolute -right-6 top-1/4 size-14 rounded-full bg-primary-soft" aria-hidden />
          <span className="absolute -right-16 -top-8 size-[240px] rounded-full bg-primary-soft/50 animate-float [animation-delay:-3s]" aria-hidden />
          <div data-tilt="7" className="img-zoom relative aspect-[350/500] overflow-hidden rounded-[22px] border border-primary/20 shadow-soft">
            <Image src="/images/why-right.jpg" alt="Doctor reassuring a pregnant patient" fill sizes="354px" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
