"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@/hooks/useGSAP";
import {
  CalendarScheduleIcon,
  WhatsAppIcon,
  ArrowRightIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterXIcon,
  HashnodeIcon,
} from "@/components/BrandIcons";

interface HeroProps {
  onOpenSchedule: () => void;
}

export default function Hero({ onOpenSchedule }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const availRef = useRef<HTMLDivElement>(null);
  const wordsContainerRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const traitsRef = useRef<HTMLDivElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);

  const vbackRef = useRef<HTMLDivElement>(null);
  const termRef = useRef<HTMLDivElement>(null);
  const chipNextRef = useRef<HTMLSpanElement>(null);
  const chipNodeRef = useRef<HTMLSpanElement>(null);
  const chipPgRef = useRef<HTMLSpanElement>(null);
  const chipTsRef = useRef<HTMLSpanElement>(null);

  const whatsappUrl = `https://wa.me/916239130326?text=${encodeURIComponent(
    "Hi Nikhil, I saw your portfolio and would like to discuss a project."
  )}`;

  const headlineWords = ["Hi,", "I'm", "Nikhil", "Prashar"];

  useGSAP(
    () => {
      if (!heroRef.current) return;

      // Master Entrance Timeline
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // 1. Availability badge pop-in
      if (availRef.current) {
        tl.fromTo(
          availRef.current,
          { opacity: 0, scale: 0.92, y: 12 },
          { opacity: 1, scale: 1, y: 0, duration: 0.7 }
        );
      }

      // 2. Character/Word reveal for "Hi, I'm Nikhil Prashar"
      const words = heroRef.current.querySelectorAll(".hero-word-inner");
      if (words.length > 0) {
        tl.fromTo(
          words,
          { yPercent: 120, opacity: 0, rotateX: -20 },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.08,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.4"
        );
      }

      // 3. Subtitle
      if (subRef.current) {
        tl.fromTo(
          subRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        );
      }

      // 4. Traits badges pop-in
      const traitItems = heroRef.current.querySelectorAll(".trait");
      if (traitItems.length > 0) {
        tl.fromTo(
          traitItems,
          { opacity: 0, scale: 0.88, y: 14 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            stagger: 0.09,
            duration: 0.6,
            ease: "back.out(1.4)",
          },
          "-=0.45"
        );
      }

      // 5. CTA buttons
      const ctaItems = heroRef.current.querySelectorAll(".ctas .hero-btn");
      if (ctaItems.length > 0) {
        tl.fromTo(
          ctaItems,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.6 },
          "-=0.35"
        );
      }

      // 6. Connect social icons
      const socItems = heroRef.current.querySelectorAll(".soc");
      const connectLbl = heroRef.current.querySelector(".connect .lbl");
      if (connectLbl) {
        tl.fromTo(
          connectLbl,
          { opacity: 0, x: -10 },
          { opacity: 1, x: 0, duration: 0.5 },
          "-=0.3"
        );
      }
      if (socItems.length > 0) {
        tl.fromTo(
          socItems,
          { opacity: 0, scale: 0.7, y: 10 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            stagger: 0.06,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.35"
        );
      }

      // 7. Visual Elements: Browser card
      if (vbackRef.current) {
        tl.fromTo(
          vbackRef.current,
          { opacity: 0, x: 60, y: 20, rotation: 10, scale: 0.94 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotation: 4,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
          },
          "0.25"
        );
      }

      // 8. Terminal Window
      if (termRef.current) {
        tl.fromTo(
          termRef.current,
          { opacity: 0, x: -50, y: 50, rotation: -6, scale: 0.92 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotation: -2,
            scale: 1,
            duration: 1.15,
            ease: "power3.out",
          },
          "0.4"
        );
      }

      // 9. Terminal code lines stagger
      const lines = heroRef.current.querySelectorAll(".term .ln");
      if (lines.length > 0) {
        tl.fromTo(
          lines,
          { opacity: 0, x: -8 },
          { opacity: 1, x: 0, stagger: 0.12, duration: 0.45, ease: "power2.out" },
          "0.75"
        );
      }

      // 10. Floating chips pop-in with bounce
      const chips = [
        chipNextRef.current,
        chipNodeRef.current,
        chipPgRef.current,
        chipTsRef.current,
      ].filter(Boolean);

      if (chips.length > 0) {
        tl.fromTo(
          chips,
          { opacity: 0, scale: 0, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.75,
            ease: "back.out(1.8)",
          },
          "0.85"
        );
      }

      // 11. Subtle Ambient Floating Loop for Chips (GSAP)
      const floatingTweens: gsap.core.Tween[] = [];
      const chipConfig = [
        { ref: chipNextRef.current, dy: -9, rot: -5, dur: 4.8 },
        { ref: chipNodeRef.current, dy: -13, rot: 4, dur: 5.4 },
        { ref: chipPgRef.current, dy: -10, rot: -3, dur: 5.1 },
        { ref: chipTsRef.current, dy: -12, rot: 5, dur: 4.5 },
      ];

      chipConfig.forEach(({ ref, dy, rot, dur }) => {
        if (!ref) return;
        const tw = gsap.to(ref, {
          y: dy,
          rotation: rot,
          duration: dur,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 1.5,
        });
        floatingTweens.push(tw);
      });

      // 12. Scroll Parallax Transition (Farewell effect)
      if (leftColRef.current && rightColRef.current) {
        gsap.to(leftColRef.current, {
          y: -70,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        if (vbackRef.current) {
          gsap.to(vbackRef.current, {
            y: -120,
            rotation: 1,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        if (termRef.current) {
          gsap.to(termRef.current, {
            y: -80,
            rotation: -5,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      }
    },
    [],
    heroRef
  );

  // Mouse Parallax with GSAP quickTo for buttery 60fps interaction
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.innerWidth <= 900;
    if (isMobile) return;

    const hero = heroRef.current;
    const vback = vbackRef.current;
    const term = termRef.current;
    const chipNext = chipNextRef.current;
    const chipNode = chipNodeRef.current;
    const chipPg = chipPgRef.current;
    const chipTs = chipTsRef.current;

    if (!hero || !vback || !term) return;

    const vbackX = gsap.quickTo(vback, "x", { duration: 0.9, ease: "power2.out" });
    const vbackY = gsap.quickTo(vback, "y", { duration: 0.9, ease: "power2.out" });
    const termX = gsap.quickTo(term, "x", { duration: 0.7, ease: "power2.out" });
    const termY = gsap.quickTo(term, "y", { duration: 0.7, ease: "power2.out" });

    const cNextX = chipNext ? gsap.quickTo(chipNext, "x", { duration: 0.8, ease: "power2.out" }) : null;
    const cNextY = chipNext ? gsap.quickTo(chipNext, "y", { duration: 0.8, ease: "power2.out" }) : null;
    const cNodeX = chipNode ? gsap.quickTo(chipNode, "x", { duration: 0.8, ease: "power2.out" }) : null;
    const cNodeY = chipNode ? gsap.quickTo(chipNode, "y", { duration: 0.8, ease: "power2.out" }) : null;
    const cPgX = chipPg ? gsap.quickTo(chipPg, "x", { duration: 0.8, ease: "power2.out" }) : null;
    const cPgY = chipPg ? gsap.quickTo(chipPg, "y", { duration: 0.8, ease: "power2.out" }) : null;
    const cTsX = chipTs ? gsap.quickTo(chipTs, "x", { duration: 0.8, ease: "power2.out" }) : null;
    const cTsY = chipTs ? gsap.quickTo(chipTs, "y", { duration: 0.8, ease: "power2.out" }) : null;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const py = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      vbackX(px * 18);
      vbackY(py * 14);
      termX(-px * 16);
      termY(-py * 12);

      if (cNextX && cNextY) { cNextX(px * 26); cNextY(py * 20); }
      if (cNodeX && cNodeY) { cNodeX(-px * 22); cNodeY(-py * 18); }
      if (cPgX && cPgY) { cPgX(px * 28); cPgY(py * 22); }
      if (cTsX && cTsY) { cTsX(-px * 24); cTsY(-py * 16); }
    };

    const handleMouseLeave = () => {
      vbackX(0);
      vbackY(0);
      termX(0);
      termY(0);
      if (cNextX && cNextY) { cNextX(0); cNextY(0); }
      if (cNodeX && cNodeY) { cNodeX(0); cNodeY(0); }
      if (cPgX && cPgY) { cPgX(0); cPgY(0); }
      if (cTsX && cTsY) { cTsX(0); cTsY(0); }
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section ref={heroRef} className="wrap hero">
      <div ref={leftColRef} className="hero-l">
        <div ref={availRef} className="avail">
          <span className="pdot"></span>
          <span className="hidden sm:inline">
            Available for Freelance Projects &amp; Full-Time Roles
          </span>
          <span className="inline sm:hidden">
            Available for Projects &amp; Full-Time
          </span>
        </div>

        <h1
          ref={wordsContainerRef}
          className="h1"
          aria-label="Hi, I'm Nikhil Prashar"
        >
          {headlineWords.map((word, idx) => (
            <span
              key={idx}
              className="inline-block overflow-hidden mr-[0.24em] last:mr-0 align-bottom"
              style={{ perspective: 600 }}
            >
              <span className="hero-word-inner inline-block will-change-transform">
                {word}
              </span>
            </span>
          ))}
        </h1>

        <p ref={subRef} className="sub">
          I engineer{" "}
          <span className="rot">
            <span>modern web applications</span>
            <span>scalable backend APIs</span>
          </span>
        </p>

        <div ref={traitsRef} className="traits">
          <span className="trait">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
              <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
              <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
            </svg>
            Full Stack Developer
          </span>
          <span className="trait">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="m16 18 6-6-6-6" />
              <path d="m8 6-6 6 6 6" />
            </svg>
            Clean code
          </span>
          <span className="trait">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            Production-ready
          </span>
        </div>

        <div ref={ctasRef} className="ctas">
          <a className="hero-btn" href="#projects">
            <span>View Projects</span>
            <ArrowRightIcon className="ic arr" />
          </a>

          <button
            className="hero-btn"
            type="button"
            onClick={onOpenSchedule}
            aria-label="Schedule a Meeting"
          >
            <CalendarScheduleIcon className="ic" />
            <span>Schedule Meeting</span>
          </button>

          <a
            className="hero-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon className="brand-ic" />
            <span>WhatsApp</span>
          </a>
        </div>

        <div ref={connectRef} className="connect">
          <span className="lbl mono">CONNECT:</span>
          <a
            className="soc"
            href="https://github.com/Nikhilprashar561"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon className="brand-ic" />
          </a>
          <a
            className="soc"
            href="https://www.linkedin.com/in/nikhilprashar1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="brand-ic" />
          </a>
          <a
            className="soc"
            href="https://x.com/NikhilPrashar_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <TwitterXIcon className="brand-ic" />
          </a>
          <a
            className="soc"
            href="https://nikhilprashar.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hashnode Blog"
          >
            <HashnodeIcon className="brand-ic" />
          </a>
        </div>
      </div>

      <div ref={rightColRef} className="hero-r">
        <div className="viz" aria-hidden="true" style={{ perspective: 1000 }}>
          {/* Background Browser Card */}
          <div ref={vbackRef} className="vback" style={{ willChange: "transform, opacity" }}>
            <div className="row">
              <div className="dots">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <div
                className="bar"
                style={{
                  flex: 1,
                  height: "14px",
                  borderRadius: "8px",
                  marginLeft: "6px",
                }}
              ></div>
            </div>
            <div
              style={{
                height: "84px",
                borderRadius: "12px",
                background: "linear-gradient(120deg, #E1DFF9, #F2F1FC)",
              }}
            ></div>
            <div className="bar" style={{ width: "70%" }}></div>
            <div className="bar" style={{ width: "46%" }}></div>
            <div className="bars" style={{ marginTop: "auto" }}>
              <i style={{ height: "40%" }}></i>
              <i style={{ height: "65%", animationDelay: ".1s" }}></i>
              <i style={{ height: "50%", animationDelay: ".2s" }}></i>
              <i style={{ height: "85%", animationDelay: ".3s" }}></i>
              <i style={{ height: "60%", animationDelay: ".4s" }}></i>
              <i
                style={{
                  height: "100%",
                  animationDelay: ".5s",
                  background: "var(--mint)",
                }}
              ></i>
            </div>
          </div>

          {/* Dark Terminal Window */}
          <div ref={termRef} className="term mono" style={{ willChange: "transform, opacity" }}>
            <div className="tbar">
              <div className="dots">
                <i style={{ background: "#44403C" }}></i>
                <i style={{ background: "#44403C" }}></i>
                <i style={{ background: "#44403C" }}></i>
              </div>
              <span>GET /api/nikhil</span>
              <span className="ok">200 OK</span>
            </div>
            <div className="ln">
              <span className="p">&#123;</span>
            </div>
            <div className="ln">
              {"  "}
              <span className="k">&quot;role&quot;</span>
              <span className="p">:</span>{" "}
              <span className="s">&quot;Full Stack Developer&quot;</span>
              <span className="p">,</span>
            </div>
            <div className="ln">
              {"  "}
              <span className="k">&quot;stack&quot;</span>
              <span className="p">:</span>{" "}
              <span className="p">[</span>
              <span className="s">&quot;Next.js&quot;</span>
              <span className="p">,</span>{" "}
              <span className="s">&quot;Node&quot;</span>
              <span className="p">,</span>
            </div>
            <div className="ln">
              {"    "}
              <span className="s">&quot;MongoDB&quot;</span>
              <span className="p">],</span>
            </div>
            <div className="ln">
              {"  "}
              <span className="k">&quot;status&quot;</span>
              <span className="p">:</span>{" "}
              <span className="s">&quot;available&quot;</span>
            </div>
            <div className="ln">
              <span className="p">&#125;</span> <span className="cur"></span>
            </div>
          </div>

          {/* Floating Tech Chips */}
          <span
            ref={chipNextRef}
            className="fchip fchip-next"
            style={{
              top: "0px",
              left: "6%",
              willChange: "transform, opacity",
            }}
          >
            <i className="cd"></i>Next.js
          </span>
          <span
            ref={chipNodeRef}
            className="fchip fchip-node"
            style={{
              top: "44%",
              right: "0%",
              willChange: "transform, opacity",
            }}
          >
            <i className="cd" style={{ background: "#10B981" }}></i>Node.js
          </span>
          <span
            ref={chipPgRef}
            className="fchip fchip-pg"
            style={{
              bottom: "6%",
              left: "8%",
              willChange: "transform, opacity",
            }}
          >
            <i className="cd" style={{ background: "#E11D48" }}></i>PostgreSQL
          </span>
          <span
            ref={chipTsRef}
            className="fchip fchip-ts"
            style={{
              bottom: "0%",
              right: "6%",
              willChange: "transform, opacity",
            }}
          >
            <i className="cd" style={{ background: "#F59E0B" }}></i>TypeScript
          </span>
        </div>
      </div>
    </section>
  );
}
