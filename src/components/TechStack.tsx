"use client";

import React, { useRef } from "react";
import { gsap } from "@/lib/gsapConfig";
import { useGSAP } from "@/hooks/useGSAP";

interface StackGroup {
  name: string;
  items: string[];
}

const stackGroups: StackGroup[] = [
  {
    name: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    name: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "shadcn/ui",
      "Responsive layouts",
    ],
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "JWT authentication",
      "Zod validation",
    ],
  },
  {
    name: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Prisma ORM", "Mongoose"],
  },
  {
    name: "Tools and DevOps",
    items: [
      "Git and GitHub",
      "Docker",
      "Postman",
      "Vercel",
      "Turborepo",
      "Cloudinary",
    ],
  },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Section heading masked reveal
      gsap.fromTo(
        ".stack-sec-heading",
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

      // Staggered entrance for each stack row
      const rows = sectionRef.current.querySelectorAll(".srow");
      rows.forEach((row) => {
        const rowTl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 88%",
            once: true,
          },
        });

        rowTl
          .fromTo(
            row.querySelector(".sname"),
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }
          )
          .fromTo(
            row.querySelectorAll(".tg"),
            { opacity: 0, scale: 0.88, y: 8 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              stagger: 0.045,
              duration: 0.45,
              ease: "back.out(1.4)",
            },
            "-=0.35"
          );
      });
    },
    [],
    sectionRef
  );

  return (
    <section ref={sectionRef} id="stack" className="wrap sec">
      <div className="split">
        <div className="rail">
          <span className="inline-block overflow-hidden align-bottom">
            <h2 className="rt stack-sec-heading will-change-transform">Stack</h2>
          </span>
        </div>
        <div className="stk">
          {stackGroups.map((g) => (
            <div key={g.name} className="srow">
              <div className="sname">{g.name}</div>
              <div className="tags">
                {g.items.map((item) => (
                  <span key={item} className="tg hover:scale-[1.04] transition-transform duration-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
