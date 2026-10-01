import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link
              className="footer-wordmark"
              href="/"
              aria-label="DAC Auto home"
            >
              DAC<span>.</span> AUTO
            </Link>
            <p>
              Bodywork with care. Paintwork with character.
              <br />
              Dekker Auto Clinic, Nairobi.
            </p>
            <a
              href={BUSINESS.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
          </div>
          <div>
            <h3>EXPLORE</h3>
            <Link href="/services">Our expertise</Link>
            <Link href="/about">The workshop</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/blog">Car care journal</Link>
          </div>
          <div>
            <h3>LET’S TALK</h3>
            <a href={BUSINESS.emailLink}>{BUSINESS.email}</a>
            <a href="tel:+254777223010">{BUSINESS.whatsapp}</a>
            <Link href="/contact">Lang’ata & Upperhill, Nairobi ↗</Link>
            <Link href="/enquiry">Request an assessment ↗</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Dekker Auto Clinic. All rights
            reserved.
          </span>
          <span>THE DETAIL MAKES THE DIFFERENCE.</span>
        </div>
      </div>
    </footer>
  );
}
