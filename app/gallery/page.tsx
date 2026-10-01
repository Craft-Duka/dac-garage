import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
export const metadata: Metadata = {
  title: "Bodywork & Paint Gallery",
  description:
    "Explore the craft of automotive bodywork, paint finishes and detailing with Dekker Auto Clinic in Nairobi.",
  alternates: { canonical: "/gallery" },
};
const images = [
  ["/our-work/image3.jpg", "Attention to the finish"],
  ["/generated/img-car-paint-800x600-208.jpg", "Character in every curve"],
  ["/our-work/image2.jpg", "Care in the workshop"],
  ["/our-work/image6.jpg", "The finishing touch"],
  ["/generated/img-car-vinylwrap-800x600-206.jpg", "A distinctive silhouette"],
  ["/our-work/image1.jpg", "Where the work begins"],
];
export default function GalleryPage() {
  return (
    <>
      <PageHero
        label="THE DETAIL MAKES THE DIFFERENCE"
        title="An eye for the finish."
        subtitle="A visual look at the bodywork, paint and detailing that inspire our approach. Images are illustrative, rather than documented customer repairs."
      />
      <section className="wrap editorial-section">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {images.map(([src, title], i) => (
            <figure key={src}>
              <div className="relative aspect-[4/5]">
                <Image
                  src={src}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex justify-between mt-4 text-sm">
                <span>{title}</span>
                <span className="text-muted">0{i + 1}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h2>Have a finish in mind?</h2>
          <Link href="/enquiry" className="btn btn-primary mt-7">
            Tell us about it ↗
          </Link>
        </div>
      </section>
    </>
  );
}
