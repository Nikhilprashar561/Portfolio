"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig";
import { useGSAP } from "@/hooks/useGSAP";

interface NavbarProps {
  onOpenSchedule: () => void;
}

export default function Navbar({ onOpenSchedule }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const headerRef = useRef<HTMLElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Work", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Stack", href: "#stack", id: "stack" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Blog", href: "#blog", id: "blog" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Scroll detection for navbar background styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setIsScrolled(scrollPos > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(
    () => {
      // 1. Initial Navbar entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );
      }

      // 2. Global Scroll Progress Indicator (across entire document)
      if (progressBarRef.current) {
        gsap.to(progressBarRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.2,
          },
        });
      }

      // 3. Section observer for active navbar link
      navLinks.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el) {
          ScrollTrigger.create({
            trigger: el,
            start: "top 45%",
            end: "bottom 45%",
            onEnter: () => setActiveSection(link.id),
            onEnterBack: () => setActiveSection(link.id),
          });
        }
      });
    },
    [],
    headerRef
  );

  return (
    <>
      <header
        ref={headerRef}
        className={`nav ${isScrolled ? "scrolled" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 50,
          backgroundColor: isScrolled
            ? "rgba(249, 248, 245, 0.94)"
            : "rgba(249, 248, 245, 0.88)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid var(--line)",
          boxShadow: isScrolled
            ? "0 4px 20px -10px rgba(28, 25, 23, 0.08)"
            : "none",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {/* Scroll Progress Bar at very top */}
        <div
          ref={progressBarRef}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, var(--accent), var(--indigo-2), var(--mint))",
            transformOrigin: "left",
            transform: "scaleX(0)",
            zIndex: 60,
            pointerEvents: "none",
          }}
        />

        <div
          className="wrap"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "68px",
            width: "100%",
          }}
        >
          {/* Logo / Brand */}
          <a
            className="logo"
            href="#top"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              color: "var(--ink)",
              flexShrink: 0,
            }}
          >
            <span
              className="logo-pic w-[32px] h-[32px] min-[380px]:w-[36px] min-[380px]:h-[36px]"
              style={{
                borderRadius: 9,
                overflow: "hidden",
                display: "inline-block",
                position: "relative",
                flexShrink: 0,
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src="/nikhil.jpg"
                alt="Nikhil Prashar"
                fill
                className="object-cover object-top"
                sizes="36px"
                priority
              />
            </span>
            <span
              className="text-[14px] min-[380px]:text-[15.5px] sm:text-[17px] font-semibold tracking-[-0.015em] whitespace-nowrap"
            >
              Nikhil Prashar
            </span>
          </a>

          {/* Desktop Navlinks with active indicator */}
          <nav
            className="hidden min-[881px]:flex items-center gap-1 ml-auto mr-4"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-[15px] font-medium transition-all ${
                    isActive
                      ? "text-[var(--accent)] bg-[rgba(46,42,123,0.06)] font-semibold"
                      : "text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--grey)]"
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Book a call & Mobile Menu Button */}
          <div className="flex items-center gap-1.5 min-[380px]:gap-2 shrink-0">
            <button
              className="btn pri sm px-2.5 min-[380px]:px-3 sm:px-5 h-[34px] min-[380px]:h-[36px] min-h-[34px] min-[380px]:min-h-[36px] sm:h-[42px] sm:min-h-[42px] text-[12px] min-[380px]:text-[13px] sm:text-[14.5px] whitespace-nowrap"
              type="button"
              onClick={onOpenSchedule}
              aria-label="Book a call"
              style={{
                fontWeight: 600,
              }}
            >
              Book a call
            </button>

            {/* Mobile Hamburger Button - only on screens <= 880px */}
            <button
              className="min-[881px]:hidden flex items-center justify-center w-8 h-8 min-[380px]:w-9 min-[380px]:h-9 sm:w-10 sm:h-10 rounded-lg border border-[var(--line-strong)] bg-transparent text-[var(--ink)] cursor-pointer hover:border-[var(--ink)] transition-colors flex-shrink-0"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4 min-[380px]:w-5 min-[380px]:h-5" /> : <Menu className="w-4 h-4 min-[380px]:w-5 min-[380px]:h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="min-[881px]:hidden border-t border-[var(--line)] px-5 sm:px-6 py-4 sm:py-5 bg-[var(--paper)] shadow-lg max-h-[calc(100vh-68px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 border-b border-[var(--line)] font-serif text-[20px] text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
                  style={{ textDecoration: "none" }}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSchedule();
                  }}
                  className="btn pri sm w-full justify-center"
                  style={{ minHeight: "44px", fontWeight: 600 }}
                >
                  Book a call
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to maintain exact page layout flow while header is fixed */}
      <div className="nav-spacer" aria-hidden="true" style={{ height: "72px", pointerEvents: "none" }} />
    </>
  );
}
