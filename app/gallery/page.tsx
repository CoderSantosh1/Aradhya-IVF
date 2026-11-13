import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Our Gallery",
  description: "Take a look inside Aaradhya IVF — our clinic, laboratory and the families we have helped.",
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner title="Our Gallery" />
      <section className="py-14 lg:py-[66px]">
        <div className="mx-auto max-w-[1351px] px-4 sm:px-8 lg:px-[38px]">
          <h2 className="sr-only">Photo gallery</h2>
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
