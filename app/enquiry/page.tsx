import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { EnquiryForm } from "./EnquiryForm";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Request a Bodywork Assessment",
  alternates: { canonical: "/enquiry" },
  description:
    "Request a quote or book a service at DAC Auto — tell us your vehicle and what you need, and we'll respond by phone, email, or WhatsApp.",
};

export default function EnquiryPage() {
  return (
    <>
      <PageHero
        label="LET’S TALK BODYWORK"
        title="A fresh start for your car."
        subtitle="Tell us about your vehicle and the work you have in mind. Prepare an enquiry for sales@dautoclinic.com, then add photos and send it from your email app."
      />
      <Section>
        <div className="max-w-2xl mx-auto">
          <EnquiryForm />
          <p className="brand-body text-secondary text-xs text-center mt-6">
            Prefer to talk it through? Call or WhatsApp us on{" "}
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {BUSINESS.whatsapp}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
