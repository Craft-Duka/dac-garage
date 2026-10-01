import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SERVICES } from "@/lib/constants";
import { serviceSchema } from "@/lib/structured-data";
export const metadata: Metadata = {
  title: "Body Repairs, Panel Beating & Car Painting in Nairobi",
  description:
    "Explore accident repairs, panel beating, car resprays, paint refinishing and detailing at Dekker Auto Clinic in Nairobi.",
  alternates: { canonical: "/services" },
};
const photos = [
  "/our-work/image3.jpg",
  "/generated/img-car-paint-800x600-208.jpg",
  "/our-work/image6.jpg",
  "/generated/img-car-vinylwrap-800x600-206.jpg",
];
export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="OUR EXPERTISE"
        title="Bodywork is our craft."
        subtitle="From accident damage to the smallest finishing touch. Discover considered care for your vehicle’s body, paint and appearance."
      />
      <div className="wrap">
        {SERVICES.map((service, i) => (
          <section key={service.id} id={service.id} className="service-detail">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(serviceSchema(service)),
              }}
            />
            <div>
              <p className="eyebrow">0{i + 1} / OUR EXPERTISE</p>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link
                href={`/enquiry?service=${service.id}`}
                className="btn btn-primary"
              >
                Enquire about this service ↗
              </Link>
            </div>
            <div className="service-detail-image">
              <Image
                src={photos[i]}
                alt={service.title}
                fill
                sizes="(max-width: 540px) 100vw, 50vw"
              />
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
