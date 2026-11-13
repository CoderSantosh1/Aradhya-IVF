import Link from "next/link";
import { ArrowRight, Heart } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden px-4 py-24 text-center sm:py-32">
      <span className="absolute left-1/2 top-1/2 size-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-soft/40 blur-3xl" aria-hidden />
      <div className="relative">
        <span className="mx-auto grid size-20 place-items-center rounded-full bg-primary-soft text-primary">
          <Heart size={38} className="animate-[heartbeat_1.6s_ease-in-out_infinite]" />
        </span>
        <p className="mt-6 font-sans text-[90px] font-extrabold leading-none tracking-tight text-primary sm:text-[130px]">404</p>
        <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">This page took a different path</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted">
          The page you are looking for doesn&apos;t exist or has been moved. Let us guide you back.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-shine inline-flex items-center gap-3 rounded-md bg-primary px-6 py-3.5 font-display text-white">
            Back to Home <ArrowRight size={18} />
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-3 rounded-md border border-primary px-6 py-3.5 font-display text-primary transition-colors hover:bg-primary hover:text-white">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
