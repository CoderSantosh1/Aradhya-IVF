import { steps } from "@/lib/data";
import { delay } from "@/lib/utils";
import { Baby, Clipboard, Embryo, Flask, Users } from "./icons";
import SectionLabel from "./SectionLabel";

const icons = { users: Users, clipboard: Clipboard, flask: Flask, embryo: Embryo, baby: Baby };

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fdecec] to-blush py-16 lg:py-[70px]">
      <div className="mx-auto max-w-[1040px] px-4 sm:px-8">
        <SectionLabel line="primary" tone="muted" className="[&>span:nth-child(2)]:font-semibold">
          How it works
        </SectionLabel>
        <h2 className="mt-4 text-center font-serif text-[34px] leading-[1.2] text-ink sm:text-[42px]">
          <span className="line-reveal block"><span>Your Journey to Parenthood</span></span>
          <span className="line-reveal block text-primary" style={delay(120)}><span>in Simple Steps</span></span>
        </h2>
        <p data-reveal="up" style={delay(200)} className="mx-auto mt-4 max-w-[470px] text-center text-[17px] leading-relaxed text-muted">
          We make fertility care simple, transparent and supportive with a step-by-step approach tailored to your needs.
        </p>

        <ol className="relative mt-8 lg:mt-6">
          {/* centre line that grows downward */}
          <span
            data-reveal="grow"
            className="timeline-line absolute bottom-6 left-[27px] top-0 w-px origin-top bg-primary lg:left-1/2"
            aria-hidden
          />
          {steps.map((step, i) => {
            const Icon = icons[step.icon];
            const right = i % 2 === 1;
            return (
              <li
                key={step.title}
                className={`relative grid grid-cols-[56px_1fr] items-center gap-4 py-3 lg:grid-cols-[1fr_96px_1fr] lg:gap-0 lg:py-0 ${i > 0 ? "lg:-mt-8" : ""}`}
              >
                {/* number bubble */}
                <span
                  data-reveal="zoom"
                  style={delay(100)}
                  className="relative z-10 col-start-1 row-start-1 grid size-[52px] place-items-center rounded-full border-2 border-primary bg-blush font-sans text-lg font-bold text-primary shadow-[0_0_0_6px_var(--color-blush)] lg:col-start-2 lg:mx-auto"
                >
                  {String(i + 1).padStart(2, "0")}
                  <span className="absolute inset-0 -z-10 rounded-full bg-primary/20 animate-pulse-ring" aria-hidden />
                </span>

                <div
                  data-reveal={right ? "right" : "left"}
                  className={`group col-start-2 row-start-1 ${right ? "lg:col-start-3" : "lg:col-start-1"} ${right ? "lg:pl-9" : "lg:pr-9"}`}
                >
                  <div className="relative flex items-start gap-5 rounded-[22px] bg-white/70 p-4 shadow-[0_10px_40px_-25px_rgb(180_43_85/0.45)] backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-white group-hover:shadow-card sm:p-5">
                    <span className="grid size-[70px] shrink-0 place-items-center rounded-full bg-primary-soft/70 text-primary transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 sm:size-[86px]">
                      <Icon size={34} className="icon-wiggle" />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-primary">{step.title}</h3>
                      <p className="mt-1.5 text-[15px] leading-[1.45] text-muted">{step.body}</p>
                    </div>
                    {/* dotted connector to the timeline */}
                    <svg
                      className={`absolute top-1/2 hidden h-12 w-9 -translate-y-1/2 text-primary lg:block ${right ? "-left-9 -scale-x-100" : "-right-9"}`}
                      viewBox="0 0 56 48"
                      fill="none"
                      aria-hidden
                    >
                      <path d="M2 8 C 22 8, 30 24, 54 24" stroke="currentColor" strokeDasharray="3 4" strokeWidth="1.2" />
                      <circle cx="3" cy="8" r="3" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
