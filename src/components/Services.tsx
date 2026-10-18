"use client";

import React, { useRef } from "react";
import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@/hooks/useGSAP";

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const plineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Section heading masked reveal
      gsap.fromTo(
        ".services-sec-heading",
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

      // Staggered entrance for Service cards
      gsap.fromTo(
        ".svc .sv",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".svc",
            start: "top 85%",
            once: true,
          },
        }
      );

      // Process timeline scrub: connecting line drawing
      if (plineRef.current) {
        gsap.fromTo(
          plineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".proc",
              start: "top 85%",
              end: "bottom 85%",
              scrub: 0.6,
            },
          }
        );
      }

      // Process steps stagger reveal
      gsap.fromTo(
        ".proc .pstep",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.14,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".proc",
            start: "top 85%",
            once: true,
          },
        }
      );

      // Process step nodes pop-in with bounce
      gsap.fromTo(
        ".proc .pnode",
        { scale: 0.6, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.14,
          duration: 0.5,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: ".proc",
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    [],
    sectionRef
  );

  return (
    <section ref={sectionRef} id="services" className="wrap sec">
      <div className="split">
        <div className="rail">
          <span className="inline-block overflow-hidden align-bottom">
            <h2 className="rt services-sec-heading will-change-transform">Services</h2>
          </span>
        </div>

        <div>
          <div className="svc">
            <div className="sv">
              <svg className="ic thin" viewBox="0 0 24 24" aria-hidden="true">
                <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
              </svg>
              <div>
                <div className="h3">Full-stack web apps</div>
                <p>From concept to launch</p>
              </div>
            </div>

            <div className="sv">
              <svg className="ic thin" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
              </svg>
              <div>
                <div className="h3">Frontend and UI</div>
                <p>Clean, responsive, accessible</p>
              </div>
            </div>

            <div className="sv">
              <svg className="ic thin" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="20" height="8" rx="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" />
                <path d="M6 6h.01" />
                <path d="M6 18h.01" />
              </svg>
              <div>
                <div className="h3">Backend and REST APIs</div>
                <p>Secure, with role-based auth</p>
              </div>
            </div>

            <div className="sv">
              <svg className="ic thin" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 13v8" />
                <path d="m8 17 4-4 4 4" />
                <path d="M20 16.7A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" />
              </svg>
              <div>
                <div className="h3">Deployment and setup</div>
                <p>Vercel, VPS, domains and SEO</p>
              </div>
            </div>
          </div>

          <div className="proc">
            <div ref={plineRef} className="pline" style={{ transformOrigin: "left" }} />
            <div className="pstep">
              <span className="pnode">1</span>
              <div className="pt">Plan and scope</div>
              <div className="ps">Goals, requirements, users</div>
            </div>
            <div className="pstep">
              <span className="pnode">2</span>
              <div className="pt">Design and model</div>
              <div className="ps">Wireframes, schemas, APIs</div>
            </div>
            <div className="pstep">
              <span className="pnode">3</span>
              <div className="pt">Build and test</div>
              <div className="ps">Clean code, responsive layouts</div>
            </div>
            <div className="pstep">
              <span className="pnode">4</span>
              <div className="pt">Deploy and support</div>
              <div className="ps">Hosting, domain, monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
