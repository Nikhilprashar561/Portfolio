"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenSchedule: () => void;
}

export default function Navbar({ onOpenSchedule }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#stack" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "glass-nav border-b border-stone-200/80 shadow-lux-sm py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Avatar */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-left rounded-lg focus:outline-hidden"
          aria-label="Nikhil Prashar - Home"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-stone-200/90 shadow-lux-sm shrink-0 group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/nikhil.jpg"
              alt="Nikhil Prashar"
              fill
              className="object-cover object-top"
              sizes="40px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-stone-900 text-sm sm:text-base leading-tight tracking-tight group-hover:text-stone-700 transition-colors">
                Nikhil Prashar
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available</span>
              </span>
            </div>
            <span className="text-xs text-stone-500 font-normal">
              Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-stone-200/90 shadow-lux-sm"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-stone-600 hover:text-stone-950 hover:bg-stone-100/80 px-3 py-1.5 rounded-full transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenSchedule}
            id="nav-schedule-btn"
            type="button"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-200/90 px-3.5 py-2 rounded-xl shadow-lux-sm transition-all active:scale-98 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-stone-700" />
            <span>Book a Call</span>
          </button>

          <a
            href="/nikhil_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 hover:from-stone-800 hover:to-zinc-800 px-3.5 py-2 rounded-xl shadow-lux hover:shadow-lux-hover transition-all active:scale-98 border border-stone-700/50"
          >
            <span>Resume (PDF)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          className="md:hidden p-2 text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-lg border border-stone-200 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-stone-200 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-stone-800 hover:text-stone-950 hover:bg-stone-100/70 px-3 py-2 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2 pt-2 border-t border-stone-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule();
              }}
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-stone-800 bg-white border border-stone-200 py-2.5 rounded-xl shadow-lux-sm"
            >
              <Calendar className="w-4 h-4 text-stone-700" />
              <span>Schedule a Meeting</span>
            </button>
            <a
              href="/nikhil_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-stone-900 to-zinc-900 py-2.5 rounded-xl shadow-lux"
            >
              <span>Download Resume (PDF)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
