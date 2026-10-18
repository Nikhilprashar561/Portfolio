"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@/hooks/useGSAP";

interface Project {
  title: string;
  kind: string;
  desc: string;
  stack: string[];
  url: string;
}

const projects: Project[] = [
  {
    title: "SSM College Management Portal",
    kind: "Full stack web app",
    desc: "Connects students and teachers for assignments, announcements and academic management.",
    stack: ["MERN Stack", "REST APIs", "JWT", "Resend", "Redux", "Tailwind CSS"],
    url: "https://github.com/Nikhilprashar561/SSM-College-Project",
  },
  {
    title: "MERN E-Commerce Store",
    kind: "Full stack web app",
    desc: "Customer and admin roles with product management, cart and secure checkout.",
    stack: ["MERN Stack", "Cloudinary", "JWT", "REST APIs", "Redux", "Tailwind CSS"],
    url: "https://github.com/Nikhilprashar561/MERN-Ecommerce",
  },
  {
    title: "Mystery Feedback System",
    kind: "Next.js web app",
    desc: "Anonymous feedback with email OTP verification and personal user links.",
    stack: ["Next.js", "TypeScript", "Next-Auth", "Resend", "Zod", "Tailwind CSS"],
    url: "https://github.com/Nikhilprashar561/Mystry-Feedback",
  },
  {
    title: "Blinkit Quick-Commerce App",
    kind: "Full stack web app",
    desc: "Grocery delivery flow with category browsing, live cart and order processing.",
    stack: ["MERN Stack", "Mongoose", "JWT", "Redux", "Stripe", "Tailwind CSS"],
    url: "https://github.com/Nikhilprashar561/Blinkit-MERN-Application",
  },
  {
    title: "Dynamic Form Builder SaaS",
    kind: "SaaS tool",
    desc: "Build forms with dynamic fields and share them through slug-based links.",
    stack: ["Next.js", "tRPC", "PostgreSQL", "Turborepo", "Tailwind CSS"],
    url: "https://github.com/Nikhilprashar561",
  },
  {
    title: "NextJS Authentication System",
    kind: "Security and auth",
    desc: "Role-based route protection for users and admins, with encrypted passwords.",
    stack: ["Next.js", "TypeScript", "Next-Auth", "JWT", "Bcrypt.js"],
    url: "https://github.com/Nikhilprashar561/NextJS-Auth",
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const current = projects[active];
  const sectionRef = useRef<HTMLElement>(null);
  const stageFrameRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Section heading masked reveal
      const heading = sectionRef.current.querySelector(".project-sec-heading");
      if (heading) {
        gsap.fromTo(
          heading,
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
      }

      // Staggered entrance for project rows
      const rows = sectionRef.current.querySelectorAll(".plist .prow");
      if (rows.length > 0) {
        gsap.fromTo(
          rows,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.08,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".plist",
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Stage preview entrance
      const stage = sectionRef.current.querySelector(".stage");
      if (stage) {
        gsap.fromTo(
          stage,
          { opacity: 0, x: 25, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stage,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Bottom button entrance
      const bottomBtn = sectionRef.current.querySelector(".projects-bottom-btn");
      if (bottomBtn) {
        gsap.fromTo(
          bottomBtn,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bottomBtn,
              start: "top 90%",
              once: true,
            },
          }
        );
      }
    },
    [],
    sectionRef
  );

  // Micro-transition when project changes
  useEffect(() => {
    if (stageFrameRef.current) {
      gsap.fromTo(
        stageFrameRef.current,
        { opacity: 0.65, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" }
      );
    }
  }, [active]);

  return (
    <section ref={sectionRef} id="projects" className="wrap sec">
      <div className="split">
        <div className="rail">
          <span className="inline-block overflow-hidden align-bottom">
            <h2 className="rt project-sec-heading will-change-transform">Selected work</h2>
          </span>
        </div>

        <div className="work">
          <div className="plist">
            {projects.map((p, i) => (
              <a
                key={p.title}
                className={`prow ${i === active ? "on" : ""}`}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.title}, ${p.kind}. Opens GitHub repository`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <span className="pmain">
                  <span className="ptitle">{p.title}</span>
                  <span className="pkind">{p.kind}</span>
                  <span className="rdesc">{p.desc}</span>
                </span>
                <span className="pgo">
                  <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>

          <aside className="stage" aria-live="polite">
            <div ref={stageFrameRef} className="frame" aria-hidden="true">
              {active === 0 && (
                <div className="ill">
                  <div className="ww" style={{ width: "74%" }}>
                    <div className="rw">
                      <i className="dotc acc" />
                      <i className="sk" style={{ width: "34%" }} />
                      <span className="fl" />
                      <i className="sk ind" style={{ width: "30px" }} />
                    </div>
                    <div className="rw g8">
                      <div className="blk ind" />
                      <div className="blk" />
                      <div className="blk" />
                    </div>
                    <div className="rw">
                      <i className="dotc sm" />
                      <i className="sk fl" />
                      <i className="sk ind" style={{ width: "30px" }} />
                    </div>
                    <div className="rw">
                      <i className="dotc sm" />
                      <i className="sk" style={{ width: "62%" }} />
                      <span className="fl" />
                      <i className="sk ind" style={{ width: "30px" }} />
                    </div>
                  </div>
                </div>
              )}

              {active === 1 && (
                <div className="ill">
                  <div className="ww" style={{ width: "68%" }}>
                    <div className="rw g8">
                      <div className="tile">
                        <i className="timg" />
                        <i className="sk" style={{ width: "70%" }} />
                        <i className="sk ind" style={{ width: "34px" }} />
                      </div>
                      <div className="tile">
                        <i className="timg" />
                        <i className="sk" style={{ width: "56%" }} />
                        <i className="sk ind" style={{ width: "34px" }} />
                      </div>
                    </div>
                    <div className="rw g8">
                      <div className="tile">
                        <i className="timg" />
                        <i className="sk" style={{ width: "64%" }} />
                        <i className="sk ind" style={{ width: "34px" }} />
                      </div>
                      <div className="tile">
                        <i className="timg" />
                        <i className="sk" style={{ width: "50%" }} />
                        <i className="sk ind" style={{ width: "34px" }} />
                      </div>
                    </div>
                  </div>
                  <span className="badge">
                    <svg className="ic thin" viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="8" cy="21" r="1" />
                      <circle cx="19" cy="21" r="1" />
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                  </span>
                </div>
              )}

              {active === 2 && (
                <div className="ill">
                  <div className="ww" style={{ width: "70%" }}>
                    <div className="bub" style={{ background: "var(--stage)", width: "68%" }}>
                      <i className="sk" style={{ background: "var(--skel2)" }} />
                      <i className="sk" style={{ width: "58%", background: "var(--skel2)" }} />
                    </div>
                    <div
                      className="bub"
                      style={{
                        background: "var(--accent)",
                        width: "56%",
                        alignSelf: "flex-end",
                      }}
                    >
                      <i className="sk" style={{ background: "rgba(255,255,255,.55)" }} />
                      <i className="sk" style={{ width: "55%", background: "rgba(255,255,255,.55)" }} />
                    </div>
                    <div className="rw" style={{ justifyContent: "center", gap: "8px" }}>
                      <i className="otpb" />
                      <i className="otpb" />
                      <span className="otpb on">
                        <i className="caret" />
                      </span>
                      <i className="otpb" />
                    </div>
                  </div>
                </div>
              )}

              {active === 3 && (
                <div className="ill">
                  <div className="ww" style={{ width: "74%" }}>
                    <div className="rw" style={{ justifyContent: "space-between" }}>
                      <i className="dotc" style={{ width: "30px", height: "30px" }} />
                      <i className="dotc" style={{ width: "30px", height: "30px" }} />
                      <i className="dotc" style={{ width: "30px", height: "30px" }} />
                      <i className="dotc" style={{ width: "30px", height: "30px" }} />
                    </div>
                    <div className="rw g8">
                      <div className="tile">
                        <i className="timg" style={{ height: "30px" }} />
                        <div className="rw">
                          <i className="sk fl" />
                          <i className="dotc sm acc" />
                        </div>
                      </div>
                      <div className="tile">
                        <i className="timg" style={{ height: "30px" }} />
                        <div className="rw">
                          <i className="sk fl" />
                          <i className="dotc sm acc" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="badge">
                    <svg className="ic thin" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </span>
                </div>
              )}

              {active === 4 && (
                <div className="ill">
                  <div className="ww" style={{ width: "68%" }}>
                    <i className="sk ind" style={{ width: "32%" }} />
                    <div className="fin" />
                    <i className="sk ind" style={{ width: "42%" }} />
                    <div
                      className="fin"
                      style={{
                        borderColor: "var(--accent)",
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "9px",
                      }}
                    >
                      <i className="caret" style={{ height: "12px" }} />
                    </div>
                    <div className="rw">
                      <i className="tog" />
                      <i className="sk" style={{ width: "34%" }} />
                      <span className="fl" />
                      <i className="subm" />
                    </div>
                  </div>
                  <span className="slug">/f/contact</span>
                </div>
              )}

              {active === 5 && (
                <div className="ill">
                  <span className="roleb" style={{ left: "15%", top: "28%" }}>
                    <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21a8 8 0 0 1 16 0" />
                    </svg>
                    User
                  </span>
                  <span className="roleb" style={{ right: "15%", bottom: "26%" }}>
                    <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="7.5" cy="15.5" r="4.5" />
                      <path d="m10.7 12.3 9.8-9.8" />
                      <path d="m16 7 3 3" />
                    </svg>
                    Admin
                  </span>
                  <i className="ring" />
                  <div className="shield">
                    <svg className="ic thin" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            <div className="sinfo">
              <div className="skind">{current.kind}</div>
              <p className="sdesc">{current.desc}</p>
              <div className="tags">
                {current.stack.map((tag) => (
                  <span key={tag} className="tg">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                className="slink lnk u"
                href={current.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub{" "}
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </div>
          </aside>
        </div>
      </div>

      <div className="split" style={{ marginTop: "32px" }}>
        <div />
        <div>
          <a
            className="btn ghost projects-bottom-btn"
            href="https://github.com/Nikhilprashar561?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            All repositories on GitHub{" "}
            <svg className="ic go" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
