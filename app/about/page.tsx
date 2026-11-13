import type { Metadata } from "next";
import AboutIntro from "@/components/AboutIntro";
import HowItWorks from "@/components/HowItWorks";
import PageBanner from "@/components/PageBanner";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn how Aaradhya IVF combines advanced fertility technology with compassionate, personalized care.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" />
      <AboutIntro />
      <WhyChooseUs />
      <HowItWorks />
    </>
  );
}
