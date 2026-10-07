import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
export const metadata: Metadata = {
  title: "Our Body Shop in Nairobi",
  description:
    "Meet Dekker Auto Clinic: a Nairobi body shop focused on accident repairs, panel beating, paint refinishing and attention to detail.",
  alternates: { canonical: "/about" },
};
export default function AboutPage() {
  return (
    <>
      <PageHero
        label="THE WORKSHOP"
        title="A passion for the finish."
        subtitle="We’re Dekker Auto Clinic. A Nairobi body shop built around care for your car, and the details that make it yours."
      />
      <section className="wrap editorial-section craft-grid">
        <div className="craft-image">
          <Image
            src="/images/dac-workshop-10.jpeg"
            alt="A technician attending to a car in an automotive workshop"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
        <div className="craft-copy">
          <p className="eyebrow">BODYWORK. PAINT. PEOPLE.</p>
          <h2>
            Good work starts
            <br />
            with good care.
          </h2>
          <p>
            There’s a personal story behind every car that comes through the
            door. Our job is to help you move forward, whether that means
            repairing accident damage, refreshing tired paintwork or making the
            exterior feel more like you.
          </p>
          <p className="mt-5">
            With locations in Lang’ata and Upperhill, we serve drivers across
            Nairobi. We begin with a conversation about your vehicle, explain
            the work it needs and help you choose the right next step.
          </p>
          <Link href="/enquiry" className="text-link">
            Tell us about your car ↗
          </Link>
        </div>
      </section>
      <section className="contact-band">
        <div className="wrap">
          <h2>
            Let’s talk about
            <br />
            your next chapter.
          </h2>
          <Link href="/contact" className="btn btn-primary">
            Find the workshop ↗
          </Link>
        </div>
      </section>
    </>
  );
}
