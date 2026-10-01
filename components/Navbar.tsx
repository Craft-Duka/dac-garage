"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Our expertise", href: "/services" },
  { label: "The workshop", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="header-note">
        <span>NAIROBI’S BODYWORK & PAINT SPECIALISTS</span>
        <a href="mailto:sales@dautoclinic.com">
          sales@dautoclinic.com <span aria-hidden="true">↗</span>
        </a>
      </div>
      <nav className="main-nav wrap" aria-label="Main navigation">
        <Link
          href="/"
          aria-label="Dekker Auto Clinic home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/DAC Auto Garage Logo-05.png"
            alt="Dekker Auto Clinic"
            width={150}
            height={60}
            className="nav-logo"
            preload
          />
        </Link>
        <div className="desktop-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/enquiry" className="btn btn-primary nav-cta">
          Let’s talk bodywork <span aria-hidden="true">↗</span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? "Close ✕" : "Menu ☰"}
        </button>
      </nav>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
          <Link href="/enquiry" onClick={() => setOpen(false)}>
            Request an assessment ↗
          </Link>
        </nav>
      )}
    </header>
  );
}
