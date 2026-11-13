import type { Metadata } from "next";
import BlogGrid from "@/components/BlogGrid";
import PageBanner from "@/components/PageBanner";
import SectionLabel from "@/components/SectionLabel";
import { delay } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Blog",
  description: "Expert advice, success stories and the latest information on fertility treatments and women's health.",
};

export default function BlogPage() {
  return (
    <>
      <PageBanner title="Our Blog" />
      <section className="py-16 lg:pb-12 lg:pt-[80px]">
        <div className="mx-auto max-w-[1351px] px-4 sm:px-8 lg:px-[47px]">
          <div className="mx-auto max-w-[920px] text-center">
            <SectionLabel className="[&>span:nth-child(2)]:text-[18px] [&>span:nth-child(2)]:font-medium [&>span:nth-child(2)]:text-ink">
              Our Blog
            </SectionLabel>
            <h2 className="line-reveal mt-6 font-serif text-[36px] font-medium leading-tight text-ink sm:text-[50px]">
              <span>
                Insights for Your <span className="text-primary">Fertility Journey</span>
              </span>
            </h2>
            <p data-reveal="up" style={delay(200)} className="mx-auto mt-4 max-w-[740px] font-sans text-[18px] leading-[1.7] text-muted sm:text-[19px]">
              Expert advice, success stories and the latest information on fertility treatments, women&apos;s health
              and family building.
            </p>
          </div>
          <div className="mt-10">
            <BlogGrid />
          </div>
        </div>
      </section>
    </>
  );
}
