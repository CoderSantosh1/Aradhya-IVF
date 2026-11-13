import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import TreatmentStack from "@/components/TreatmentStack";

export const metadata: Metadata = {
  title: "Our Treatments",
  description: "Maternity care, gynaecology, paediatrics, radiology, physiotherapy and nutrition under one roof at Aaradhya IVF.",
};

export default function TreatmentsPage() {
  return (
    <>
      <PageBanner title="Our Treatments" />
      <div className="pt-4 lg:pt-6">
        <TreatmentStack />
      </div>
    </>
  );
}
