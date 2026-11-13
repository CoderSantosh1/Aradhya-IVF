"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { animDelay as d } from "@/utils";
import { navLinks, site } from "@/data";
import { ArrowRight, Close, Mail, MapPin, Menu, Phone, socialIcons } from "./icons";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the drawer whenever the route changes (state derived during render).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`header-in sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-blush/85 shadow-[0_8px_30px_-12px_rgb(180_43_85/0.25)] backdrop-blur-md"
            : "bg-blush"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1340px] items-center justify-between gap-4 px-4 transition-all duration-500 sm:px-8 ${
            scrolled ? "h-[72px]" : "h-[88px]"
          }`}
        >
          <Link href="/" aria-label="Aaradhya IVF home" className="header-in-item shrink-0" style={d(250)}>
            <Image
              src="/images/logo.png"
              alt="Aaradhya IVF — Hope, Nurture, Together"
              width={2172}
              height={724}
              preload
              className={`w-auto transition-all duration-500 ${scrolled ? "h-[50px]" : "h-[58px] sm:h-[64px]"}`}
            />
          </Link>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-8 font-display text-[15px]">
              {navLinks.map((link, i) => {
                const active = isActive(pathname, link.href);
                return (
                  <li key={link.href} className="header-in-item" style={d(350 + i * 70)}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`group relative py-2 transition-colors duration-300 ${
                        active ? "text-primary" : "text-ink hover:text-primary"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute -bottom-1.5 left-0 h-[1.5px] bg-primary transition-all duration-500 ${
                          active ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="header-in-item flex items-center gap-3 sm:gap-4" style={d(700)}>
            <Link
              href="/book-an-appointment"
              className="btn-shine glow-pulse group hidden items-center gap-3 rounded-md bg-primary px-4 py-3 font-display text-[15px] text-white shadow-soft transition-colors duration-300 hover:bg-primary-dark sm:inline-flex"
            >
              Book An Appointment
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="site-drawer"
              className="grid size-11 place-items-center rounded-md border border-primary text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Off-canvas drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <aside
        id="site-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-[400px] flex-col overflow-y-auto bg-blush shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-primary/15 px-6 py-5">
          <Image src="/images/logo.png" alt="Aaradhya IVF" width={2172} height={724} className="h-14 w-auto" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid size-10 place-items-center rounded-full bg-white text-primary transition-transform duration-500 hover:rotate-90"
          >
            <Close size={22} />
          </button>
        </div>

        <nav aria-label="Mobile" className="px-6 py-6 xl:hidden">
          <ul className="space-y-1">
            {navLinks.map((link, i) => {
              const active = isActive(pathname, link.href);
              return (
                <li
                  key={link.href}
                  className={`transition-all duration-500 ${open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
                  style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between rounded-lg px-3 py-3 font-display text-lg transition-colors ${
                      active ? "bg-white text-primary" : "text-ink hover:bg-white/70 hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <ArrowRight size={16} className="opacity-50" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden px-6 pt-8 xl:block">
          <h2 className="font-display text-3xl text-ink">
            Hope begins <span className="text-primary">here.</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            We are committed to helping individuals and families achieve their dream of parenthood with
            compassionate care and advanced fertility treatments.
          </p>
        </div>

        <div className="mt-auto space-y-4 px-6 pb-8 pt-6">
          <ul className="space-y-4 text-[15px]">
            <li className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-soft text-primary"><MapPin size={18} /></span>
              <span className="pt-2 text-muted">{site.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-soft text-primary"><Phone size={18} /></span>
              <a href={site.phoneHref} className="text-muted hover:text-primary">{site.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-soft text-primary"><Mail size={18} /></span>
              <a href={`mailto:${site.email}`} className="text-muted hover:text-primary">{site.email}</a>
            </li>
          </ul>
          <Link
            href="/book-an-appointment"
            className="btn-shine flex items-center justify-center gap-3 rounded-md bg-primary px-5 py-3.5 font-display text-white"
          >
            Book An Appointment <ArrowRight size={18} />
          </Link>
          <div className="flex gap-3 pt-2">
            {site.socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-md border border-primary/50 text-primary transition-all hover:-translate-y-1 hover:bg-primary hover:text-white"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
