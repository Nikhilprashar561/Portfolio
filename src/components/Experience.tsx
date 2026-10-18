"use client";

import React, { useRef } from "react";
import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@/hooks/useGSAP";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "REST APIs",
    "Tailwind CSS",
  ];

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Section heading masked reveal
      gsap.fromTo(
        ".exp-sec-heading",
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

      // Coordinated timeline for experience card
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".exp-grid",
          start: "top 85%",
          once: true,
        },
      });

      tl.fromTo(
        ".exp-meta",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.75, ease: "power3.out" }
      )
        .fromTo(
          ".exp-badge",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.8)" },
          "-=0.4"
        )
        .fromTo(
          [".exp-title", ".exp-company", ".exp-summary"],
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.65, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          ".exp-bullet-item",
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, stagger: 0.12, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          ".exp-tag",
          { opacity: 0, scale: 0.85, y: 8 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.45,
            ease: "back.out(1.4)",
          },
          "-=0.3"
        );
    },
    [],
    sectionRef
  );

  return (
    <section ref={sectionRef} id="experience" className="wrap sec">
      <div className="split">
        {/* Left Column - Section Heading */}
        <div className="rail">
          <span className="inline-block overflow-hidden align-bottom">
            <h2 className="rt exp-sec-heading will-change-transform">Experience</h2>
          </span>
        </div>

        {/* Right Area - Meta & Role Details with Top Line */}
        <div className="exp-content">
          <div className="exp-grid">
            {/* Meta Sub-column (Left) */}
            <div className="exp-meta">
              <div className="exp-date">July 2026 – Present</div>
              <div className="exp-loc">Mohali, Punjab, India</div>
              <div className="exp-type">Full-time · Hybrid</div>

              <div className="exp-badge">
                <span className="exp-badge-dot" aria-hidden="true" />
                <span>Current role</span>
              </div>
            </div>

            {/* Details Sub-column (Right) */}
            <div className="exp-details">
              <h3 className="exp-title">Software Engineer</h3>
              <div className="exp-company">Lexvra Infinology Pvt. Ltd.</div>

              <p className="exp-summary">
                Full-stack software engineering for high-performance web
                applications and scalable digital products. Responsible for core
                backend architecture, REST API design, database modeling, and
                responsive, accessible user interfaces.
              </p>

              <div className="exp-bullets">
                <div className="exp-bullet-item">
                  <span className="exp-dash" aria-hidden="true">
                    —
                  </span>
                  <p className="exp-bullet-text">
                    Engineered full-stack features and high-throughput REST APIs
                    using Next.js, Node.js, and MongoDB, reducing server response
                    times and improving client data throughput.
                  </p>
                </div>

                <div className="exp-bullet-item">
                  <span className="exp-dash" aria-hidden="true">
                    —
                  </span>
                  <p className="exp-bullet-text">
                    Architected end-to-end authentication, session management,
                    and role-based access control (RBAC) pipelines ensuring
                    robust security and seamless UX.
                  </p>
                </div>

                <div className="exp-bullet-item">
                  <span className="exp-dash" aria-hidden="true">
                    —
                  </span>
                  <p className="exp-bullet-text">
                    Collaborated with cross-functional product and design teams
                    to deliver production-ready features, automated CI/CD
                    deployments, and clean, maintainable codebases.
                  </p>
                </div>
              </div>

              {/* Technology Tags */}
              <div className="exp-tags">
                {technologies.map((tech) => (
                  <span key={tech} className="exp-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
