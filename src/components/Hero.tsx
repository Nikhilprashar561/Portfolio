"use client";

import React, { CSSProperties } from "react";
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
  const whatsappUrl = `https://wa.me/916239130326?text=${encodeURIComponent(
    "Hi Nikhil, I saw your portfolio and would like to discuss a project."
  )}`;

  return (
    <>
      <section className="wrap hero">
        <div className="hero-l">
          <div className="avail in" style={{ "--d": 0 } as CSSProperties}>
            <span className="pdot"></span>
            <span className="hidden sm:inline">
              Available for Freelance Projects &amp; Full-Time Roles
            </span>
            <span className="inline sm:hidden">
              Available for Projects &amp; Full-Time
            </span>
          </div>

          <h1 className="h1 in" style={{ "--d": 1 } as CSSProperties}>
            Hi, I&apos;m Nikhil Prashar
          </h1>

          <p className="sub in" style={{ "--d": 2 } as CSSProperties}>
            I engineer{" "}
            <span className="rot">
              <span>modern web applications</span>
              <span>scalable backend APIs</span>
            </span>
          </p>

          <div className="traits in" style={{ "--d": 3 } as CSSProperties}>
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

          <div className="ctas in" style={{ "--d": 4 } as CSSProperties}>
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

          <div className="connect in" style={{ "--d": 5 } as CSSProperties}>
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

        <div className="hero-r in" style={{ "--d": 3 } as CSSProperties}>
          <div className="viz" aria-hidden="true">
            {/* Background Browser Card */}
            <div className="vback">
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
            <div className="term mono">
              <div className="tbar">
                <div className="dots">
                  <i style={{ background: "#44403C" }}></i>
                  <i style={{ background: "#44403C" }}></i>
                  <i style={{ background: "#44403C" }}></i>
                </div>
                <span>GET /api/nikhil</span>
                <span className="ok">200 OK</span>
              </div>
              <div className="ln" style={{ "--i": 0 } as CSSProperties}>
                <span className="p">&#123;</span>
              </div>
              <div className="ln" style={{ "--i": 1 } as CSSProperties}>
                {"  "}
                <span className="k">&quot;role&quot;</span>
                <span className="p">:</span>{" "}
                <span className="s">&quot;Full Stack Developer&quot;</span>
                <span className="p">,</span>
              </div>
              <div className="ln" style={{ "--i": 2 } as CSSProperties}>
                {"  "}
                <span className="k">&quot;stack&quot;</span>
                <span className="p">:</span>{" "}
                <span className="p">[</span>
                <span className="s">&quot;Next.js&quot;</span>
                <span className="p">,</span>{" "}
                <span className="s">&quot;Node&quot;</span>
                <span className="p">,</span>
              </div>
              <div className="ln" style={{ "--i": 3 } as CSSProperties}>
                {"    "}
                <span className="s">&quot;MongoDB&quot;</span>
                <span className="p">],</span>
              </div>
              <div className="ln" style={{ "--i": 4 } as CSSProperties}>
                {"  "}
                <span className="k">&quot;status&quot;</span>
                <span className="p">:</span>{" "}
                <span className="s">&quot;available&quot;</span>
              </div>
              <div className="ln" style={{ "--i": 5 } as CSSProperties}>
                <span className="p">&#125;</span> <span className="cur"></span>
              </div>
            </div>

            {/* Floating Tech Chips */}
            <span
              className="fchip fchip-next"
              style={{ top: "0px", left: "6%", "--r": "-4deg" } as CSSProperties}
            >
              <i className="cd"></i>Next.js
            </span>
            <span
              className="fchip fchip-node"
              style={
                {
                  top: "44%",
                  right: "0%",
                  "--r": "3deg",
                  animationDelay: "-2s",
                } as CSSProperties
              }
            >
              <i className="cd" style={{ background: "#10B981" }}></i>Node.js
            </span>
            <span
              className="fchip fchip-pg"
              style={
                {
                  bottom: "6%",
                  left: "8%",
                  "--r": "-2deg",
                  animationDelay: "-4s",
                } as CSSProperties
              }
            >
              <i className="cd" style={{ background: "#E11D48" }}></i>PostgreSQL
            </span>
            <span
              className="fchip fchip-ts"
              style={
                {
                  bottom: "0%",
                  right: "6%",
                  "--r": "4deg",
                  animationDelay: "-1s",
                } as CSSProperties
              }
            >
              <i className="cd" style={{ background: "#F59E0B" }}></i>TypeScript
            </span>
          </div>
        </div>
      </section>

    </>
  );
}
