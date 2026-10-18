"use client";

import React, { useRef } from "react";
import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@/hooks/useGSAP";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const statementWords = [
    "Building",
    "software",
    "with",
    "care,",
    "clarity,",
    "and",
    "clean",
    "code.",
  ];

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Section heading masked reveal
      gsap.fromTo(
        ".about-sec-heading",
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Statement word-by-word cinematic entrance
      const words = sectionRef.current.querySelectorAll(".stmt-word-inner");
      if (words.length > 0) {
        gsap.fromTo(
          words,
          { yPercent: 120, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".stmt",
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Bio text entrance
      gsap.fromTo(
        ".ab",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ab",
            start: "top 88%",
            once: true,
          },
        }
      );

      // Facts rows stagger entrance
      gsap.fromTo(
        ".facts .frow",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".facts",
            start: "top 88%",
            once: true,
          },
        }
      );

      // Button entrance
      gsap.fromTo(
        ".abact",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".abact",
            start: "top 92%",
            once: true,
          },
        }
      );
    },
    [],
    sectionRef
  );

  return (
    <section ref={sectionRef} id="about" className="wrap sec">
      <div className="split">
        <div className="rail">
          <span className="inline-block overflow-hidden align-bottom">
            <h2 className="rt about-sec-heading will-change-transform">About</h2>
          </span>
        </div>

        <div>
          <p className="stmt" aria-label="Building software with care, clarity, and clean code.">
            {statementWords.map((word, wi) => (
              <span
                key={wi}
                className="inline-block overflow-hidden mr-[0.24em] last:mr-0 align-bottom"
              >
                <span className="stmt-word-inner inline-block will-change-transform">
                  {word}
                </span>
              </span>
            ))}
          </p>

          <p className="ab">
            I&apos;m a Full Stack Developer who enjoys building fast, dependable
            and intuitive web applications. I work across the MERN stack and
            Next.js, from the interface to the API and database behind it.
          </p>

          <dl className="facts">
            <div className="frow">
              <dt>Education</dt>
              <dd>
                <div className="ft2">B.Sc. in Information Technology</div>
                <div className="fm">Guru Nanak Dev University, 2023 – 2026</div>
              </dd>
            </div>

            <div className="frow">
              <dt>Training</dt>
              <dd>
                <div className="ft2">Full Stack Web Development</div>
                <div className="fm">
                  Chai Code Intensive Training, Jan – Jun 2026
                </div>
              </dd>
            </div>

            <div className="frow">
              <dt>Writing</dt>
              <dd>
                <div className="ft2">54 technical articles</div>
                <div className="fm">Practical web engineering on Hashnode</div>
              </dd>
            </div>
          </dl>

          <div className="abact">
            <a
              className="btn ghost"
              href="https://nikhilprashar.vercel.app/nikhil_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
              View CV / Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
