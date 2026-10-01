import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { BUSINESS, BRANCHES } from "@/lib/constants";
import { MapEmbed } from "@/components/MapEmbed";
export const metadata: Metadata = {
  title: "Contact Our Nairobi Body Shop",
  description:
    "Enquire about body repairs, car painting and detailing at Dekker Auto Clinic. Email sales@dautoclinic.com. Lang’ata and Upperhill, Nairobi.",
  alternates: { canonical: "/contact" },
};
export default function ContactPage() {
  return (
    <>
      <PageHero
        label="LET’S TALK"
        title="Every great finish starts here."
        subtitle="A dent, a scratch or something more? Tell us what your car needs and we’ll help you find the next step."
      />
      <section className="wrap editorial-section">
        <div className="craft-grid">
          <div>
            <p className="eyebrow">ALL ENQUIRIES</p>
            <h2>Talk to our team.</h2>
            <a
              href={BUSINESS.emailLink}
              className="text-link"
              style={{ fontSize: "clamp(17px, 2.5vw, 27px)" }}
            >
              {BUSINESS.email} ↗
            </a>
            <p className="mt-6 text-secondary text-sm leading-7">
              Include your vehicle make and model, the work required and any
              photos of the damage. We’ll help arrange an assessment.
            </p>
            <Link href="/enquiry" className="btn btn-primary mt-7">
              Prepare an enquiry ↗
            </Link>
            <p className="mt-8 text-sm">
              Prefer to call?{" "}
              <a className="underline" href="tel:+254777223010">
                {BUSINESS.whatsapp}
              </a>
            </p>
          </div>
          <div>
            {BRANCHES.map((branch) => (
              <div key={branch.name} className="border-b border-divider py-7">
                <p className="eyebrow">NAIROBI</p>
                <h3 className="text-3xl">{branch.name}</h3>
                <p className="text-sm text-secondary mt-3">{branch.address}</p>
                {branch.name === "Lang'ata" ? (
                  <a
                    className="text-link"
                    href={BUSINESS.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get directions ↗
                  </a>
                ) : (
                  <a
                    className="text-link"
                    href={`${BUSINESS.emailLink}?subject=Upperhill%20visit`}
                  >
                    Contact us for directions ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <MapEmbed />
        </div>
      </section>
    </>
  );
}
