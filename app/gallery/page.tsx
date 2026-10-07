import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { VideoCard } from "@/components/VideoCard";
import { GALLERY_VIDEOS } from "@/lib/videos";
export const metadata: Metadata = {
  title: "Bodywork & Paint Gallery",
  description:
    "Explore the craft of automotive bodywork, paint finishes and detailing with Dekker Auto Clinic in Nairobi.",
  alternates: { canonical: "/gallery" },
};
const images = [
  ["/images/dac-workshop-11.jpeg", "Attention to the finish"],
  ["/images/dac-workshop-12.jpeg", "Character in every curve"],
  ["/images/dac-workshop-13.jpeg", "Care in the workshop"],
  ["/images/dac-workshop-14.jpeg", "The finishing touch"],
  ["/images/dac-workshop-15.jpeg", "A distinctive silhouette"],
  ["/images/dac-workshop-16.jpeg", "Where the work begins"],
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
      <section className="video-gallery-section"><div className="wrap">
        <div className="section-heading"><div><p className="eyebrow">05 / IN MOTION</p><h2>The work,<br /><span>in motion.</span></h2></div><p className="section-intro video-intro">See the people, process and precision behind the finish. Tap any film to watch it full screen.</p></div>
        <div className="video-grid">{GALLERY_VIDEOS.map((video, i) => <VideoCard key={video.playbackId} video={video} index={i} />)}</div>
      </div></section>
    </>
  );
}
