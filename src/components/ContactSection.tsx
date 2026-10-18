"use client";

import React, { useRef } from "react";
import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@/hooks/useGSAP";

interface ContactSectionProps {
  onOpenSchedule: () => void;
}

export default function ContactSection({ onOpenSchedule }: ContactSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingWords = ["Let's", "work", "together."];

  const whatsappUrl = `https://wa.me/916239130326?text=${encodeURIComponent(
    "Hi Nikhil, I saw your portfolio and would like to discuss a project."
  )}`;

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Dramatic large heading word reveal
      const words = sectionRef.current.querySelectorAll(".cth-word-inner");
      if (words.length > 0) {
        tl.fromTo(
          words,
          { yPercent: 120, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.9,
            ease: "power3.out",
          }
        );
      }

      // Status indicator
      tl.fromTo(
        ".cstat",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

      // Contact rows staggered entrance
      tl.fromTo(
        ".crows .crow",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.75,
          ease: "power3.out",
        },
        "-=0.35"
      );

      // Rotating arrow badge inside each contact row
      tl.fromTo(
        ".crows .cgo",
        { rotate: -45, scale: 0.8 },
        {
          rotate: 0,
          scale: 1,
          stagger: 0.12,
          duration: 0.6,
          ease: "back.out(1.6)",
        },
        "-=0.5"
      );

      // Footer
      tl.fromTo(
        ".foot",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
        "-=0.2"
      );
    },
    [],
    sectionRef
  );

  return (
    <section ref={sectionRef} id="contact" className="band">
      <div className="wrap">
        <div className="cgrid">
          <div>
            <h2 className="cth" aria-label="Let's work together.">
              {headingWords.map((word, wi) => (
                <span
                  key={wi}
                  className="inline-block overflow-hidden mr-[0.24em] last:mr-0 align-bottom"
                >
                  <span className="cth-word-inner inline-block will-change-transform">
                    {word}
                  </span>
                </span>
              ))}
            </h2>
            <p className="cstat">
              <span className="pdot" />
              Available for freelance projects and full-time roles
            </p>
          </div>

          <div className="crows">
            <a
              className="crow"
              href="mailto:nikhilprashar561@gmail.com?subject=Intro%20call"
              onClick={(e) => {
                e.preventDefault();
                onOpenSchedule();
              }}
              role="button"
            >
              <span className="cm">
                <span className="cl">Schedule a call</span>
                <span className="cv">30-minute intro</span>
              </span>
              <span className="cgo">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </span>
            </a>

            <a
              className="crow"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="cm">
                <span className="cl">WhatsApp</span>
                <span className="cv">Message me directly</span>
              </span>
              <span className="cgo">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </span>
            </a>

            <a className="crow" href="mailto:nikhilprashar561@gmail.com">
              <span className="cm">
                <span className="cl">Email</span>
                <span className="cv">nikhilprashar561@gmail.com</span>
              </span>
              <span className="cgo">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="foot">
          <span>© 2026 Nikhil Prashar. All rights reserved.</span>
          <nav className="fl2" aria-label="Social">
            <a
              className="lnk"
              href="https://github.com/Nikhilprashar561"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="lnk"
              href="https://www.linkedin.com/in/nikhilprashar1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="lnk"
              href="https://x.com/NikhilPrashar_"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
            <a
              className="lnk"
              href="https://nikhilprashar.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hashnode
            </a>
          </nav>
          <a className="top" href="#top">
            Back to top{" "}
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
