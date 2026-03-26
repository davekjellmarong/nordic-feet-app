"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#om-oss", label: "Om oss" },
  { href: "#fotterapi", label: "Fotterapi" },
  { href: "#priser", label: "Priser" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full bg-[#1B3A6B] shadow-md"
      style={{ backgroundColor: "var(--color-navy)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" aria-label="Nordic Feet Fotklinikk – hjem">
          <Image
            src="/nordic-feet-logo.png"
            alt="Nordic Feet Fotklinikk logo"
            width={80}
            height={80}
            priority
            className="h-16 w-16 object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6" aria-label="Hovednavigasjon">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white font-medium text-sm tracking-wide hover:text-[#4EA8DE] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Åpne meny"
          aria-expanded={open}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="md:hidden bg-[#1B3A6B] border-t border-[#4EA8DE]/30 px-4 pb-4"
          aria-label="Mobilnavigasjon"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-white font-medium text-sm hover:text-[#4EA8DE] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
