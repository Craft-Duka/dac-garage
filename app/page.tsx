import Image from "next/image";
import Link from "next/link";
import { SERVICES, SITE_FAQS } from "@/lib/constants";
import {
  localBusinessSchema,
  websiteSchema,
  faqSchema,
} from "@/lib/structured-data";
import { FaqAccordion } from "@/components/FaqAccordion";

const photos = [
  "/our-work/image3.jpg",
  "/generated/img-car-paint-800x600-208.jpg",
  "/our-work/image6.jpg",
  "/generated/img-car-vinylwrap-800x600-206.jpg",
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            localBusinessSchema(),
            websiteSchema(),
            faqSchema(SITE_FAQS),
          ]).replace(/</g, "\\u003c"),
        }}
      />
      <section className="home-hero">
        <div className="hero-photo">
          <Image
            src="/our-work/image3.jpg"
            alt="A technician carefully working on the finish of a car in a workshop"
            fill
            preload
            sizes="(max-width: 760px) 100vw, 60vw"
          />
        </div>
        <div className="hero-shade" />
        <div className="wrap hero-content">
          <p className="eyebrow">
            <span className="accent-line" /> DEKKER AUTO CLINIC · NAIROBI
          </p>
          <h1>
            Back to
            <br />
            beautiful.<span>Beyond repair.</span>
          </h1>
          <p className="hero-description">
            Expert bodywork. Exceptional finishes.
            <br />
            For the car you’re proud to drive.
          </p>
          <div className="hero-actions">
            <Link href="/enquiry" className="btn btn-primary">
              Request an assessment <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/services" className="hero-text-link">
              Explore our expertise <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="hero-footnote">
            <span className="tiny-cross" aria-hidden="true">
              ✳
            </span>
            <p>
              BODY REPAIR. PAINT. DETAILING.
              <br />
              <span>Care in every contour.</span>
            </p>
          </div>
        </div>
        <div className="hero-caption">
          <span>01 / THE ART OF THE FINISH</span>
          <span>DEKKER AUTO CLINIC</span>
        </div>
      </section>
      <div className="specialty-strip">
        <div className="wrap">
          <span>BODYWORK, WITH PURPOSE.</span>
          <p>
            Accident repair <b>✳</b> Panel beating <b>✳</b> Paint refinishing{" "}
            <b>✳</b> Detailing
          </p>
        </div>
      </div>
      <section className="wrap editorial-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / OUR EXPERTISE</p>
            <h2>
              Good as new.
              <br />
              <span>Distinctly yours.</span>
            </h2>
          </div>
          <div className="section-intro">
            <p>
              From the first dent to the final polish, we bring care and
              craftsmanship to your car’s exterior. A Nairobi body shop with an
              eye for the details.
            </p>
            <Link href="/services" className="text-link">
              Discover our services <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="expertise-grid">
          {SERVICES.map((service, i) => (
            <Link
              href={service.href}
              key={service.id}
              className="expertise-card"
            >
              <div className="expertise-image">
                <Image
                  src={photos[i]}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw"
                />
                <span className="service-number">0{i + 1}</span>
                <span className="service-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.shortDesc}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="craft-section">
        <div className="wrap craft-grid">
          <div className="craft-image">
            <Image
              src="/our-work/image2.jpg"
              alt="Automotive technician attending to a vehicle in the workshop"
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
            />
            <div className="image-label">
              A LITTLE OBSESSION.
              <br />
              IN EVERY DETAIL.
            </div>
          </div>
          <div className="craft-copy">
            <p className="eyebrow">02 / THE DAC APPROACH</p>
            <h2>
              It’s more than
              <br />
              metal and paint.
            </h2>
            <p>
              Your car carries a part of your life. We treat it that way.
              Whether it’s a small scrape or accident damage, our approach
              starts with listening and ends with attention to the finish.
            </p>
            <div className="craft-points">
              <div>
                <span>01</span>
                <p>
                  <strong>A clear way forward</strong>Understand the work before
                  it begins.
                </p>
              </div>
              <div>
                <span>02</span>
                <p>
                  <strong>Careful preparation</strong>Because a great finish
                  starts underneath.
                </p>
              </div>
              <div>
                <span>03</span>
                <p>
                  <strong>Attention to the handover</strong>Walk through the
                  completed work with us.
                </p>
              </div>
            </div>
            <Link href="/about" className="text-link">
              Get to know the workshop <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="wrap editorial-section process-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / FROM DAMAGE TO DETAIL</p>
            <h2>
              Your next chapter.
              <br />
              <span>In three simple steps.</span>
            </h2>
          </div>
          <Link href="/enquiry" className="text-link">
            Let’s get started <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="process-grid">
          {[
            [
              "Tell us about your car",
              "Email your vehicle details, a description of the work and any photos of the damage.",
            ],
            [
              "Let’s assess the work",
              "We’ll help arrange an assessment, discuss the repair and prepare a quotation.",
            ],
            [
              "Leave the details to us",
              "Once the scope is agreed, our team gets to work on bringing your car back to its best.",
            ],
          ].map(([title, desc], i) => (
            <div key={title}>
              <span className="process-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="faq-section">
        <div className="wrap faq-grid">
          <div>
            <p className="eyebrow">A FEW THINGS TO KNOW</p>
            <h2>
              Before you
              <br />
              bring it in.
            </h2>
            <p>Have something else in mind?</p>
            <a className="text-link" href="mailto:sales@dautoclinic.com">
              Ask our team ↗
            </a>
          </div>
          <FaqAccordion items={SITE_FAQS} />
        </div>
      </section>
      <section className="contact-band">
        <div className="wrap">
          <div>
            <p className="eyebrow">YOUR CAR. OUR CRAFT.</p>
            <h2>
              Let’s make it
              <br />
              beautiful again.
            </h2>
          </div>
          <div>
            <Link href="/enquiry" className="btn btn-primary">
              Start your enquiry <span aria-hidden="true">↗</span>
            </Link>
            <a className="contact-email" href="mailto:sales@dautoclinic.com">
              sales@dautoclinic.com
            </a>
            <p>Lang’ata & Upperhill · Nairobi</p>
          </div>
        </div>
      </section>
    </>
  );
}
