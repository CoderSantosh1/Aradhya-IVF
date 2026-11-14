import Image from "next/image";
import Link from "next/link";
import { footerServices, navLinks, site } from "@/data";
import { delay } from "@/utils";
import { ArrowUpRight, Mail, MapPin, Phone, socialIcons } from "./icons";

export default function Footer() {
  return (
    <footer className="relative mt-2 overflow-hidden bg-gradient-to-b from-blush to-[#fceaea]">
      <div className="mx-auto grid max-w-[1351px] lg:grid-cols-[1fr_515px]">
        {/* Left side */}
        <div className="lg:border-r lg:border-primary/20">
          <div className="grid gap-8 px-4 py-12 sm:px-2 md:grid-cols-[minmax(0,320px)_1fr] md:items-center md:gap-0 lg:pl-[60px]">
            <div data-reveal="up">
              <Link href="/" aria-label="Aaradhya IVF home" className="inline-block">
                <Image src="/images/logo.png" alt="Aaradhya IVF" width={2172} height={724} className="h-[88px] w-auto" />
              </Link>
            </div>
            <div data-reveal="up" style={delay(120)} className="md:border-l md:border-primary/25 md:pl-7">
              <p className="max-w-[260px] text-[15px] leading-[1.45] text-ink">
                We are committed to helping individuals and families achieve their dream of parenthood with
                compassionate care and advanced fertility treatments.
              </p>
              <Link href="/about" className="group mt-5 inline-flex items-center gap-1.5 text-[15px] text-primary">
                <span className="link-underline">Read More</span>
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className="grid gap-10 border-t border-primary/20 px-4 py-10 sm:grid-cols-2 sm:px-12 lg:pl-[64px]">
            <div data-reveal="up" className="sm:border-r sm:border-primary/20">
              <h2 className="font-display text-[26px] text-ink">Quick Links</h2>
              <ul className="mt-3 space-y-1.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-block text-[15.5px] text-muted transition-all duration-300 hover:translate-x-1.5 hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal="up" style={delay(120)} className="sm:pl-4">
              <h2 className="font-display text-[26px] text-ink">Our Services</h2>
              <ul className="mt-3 space-y-1.5">
                {footerServices.map((s) => (
                  <li key={s.label}>
                    <Link href={s.href} className="inline-block text-[15.5px] text-muted transition-all duration-300 hover:translate-x-1.5 hover:text-primary">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div data-reveal="up" className="border-t border-primary/20 px-4 py-10 sm:px-12 lg:border-t-0 lg:px-9">
          <h2 className="font-display text-[34px] leading-tight text-ink">Contact Us</h2>
          <p className="mt-1 text-[15.5px] leading-snug text-muted">
            We are here to support you on your journey. Get in touch with us for appointments, consultations or
            any queries.
          </p>
          <ul className="mt-5 space-y-3.5">
            {[
              { icon: MapPin, label: "Our Location", value: site.address, href: site.mapsUrl },
              { icon: Phone, label: "Call Anytime", value: site.phone, href: site.phoneHref },
              { icon: Mail, label: "Email Address", value: site.email, href: `mailto:${site.email}` },
            ].map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="group flex items-center gap-7">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary-soft/70 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                  <Icon size={20} className="icon-wiggle" />
                </span>
                <div>
                  <p className="text-[15px] text-primary">{label}</p>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[15px] text-muted transition-colors hover:text-primary"
                  >
                    {value}
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="img-zoom relative mt-5 block overflow-hidden rounded-2xl border-2 border-primary/25 p-1"
            aria-label="Open our location in Google Maps"
          >
            <span className="block overflow-hidden rounded-xl">
              <iframe
                src={site.mapEmbed}
                title="Map showing Aaradhya IVF in Springfield, USA"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[194px] w-full border-0"
              />
            </span>
            <span className="pointer-events-none absolute left-[54%] top-[38%] size-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 animate-pulse-ring" />
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-[1351px] px-4 sm:px-11">
        <div className="grid border-t border-primary/20 lg:grid-cols-[1fr_515px]">
          <div className="flex flex-col items-center gap-4 py-5 sm:flex-row sm:justify-between lg:pr-[22%]">
            <p className="text-[15px] text-muted">© 2026 Aaradhya IVF. All Rights Reserved.</p>
            <div className="flex gap-4">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid size-[30px] place-items-center rounded-md border-[1.5px] border-primary text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
