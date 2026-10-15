"use client";

import React from "react";

export default function Bands() {
  const bandA = [
    { t: "Full Stack", o: false },
    { t: "Node.js", o: true },
    { t: "Next.js", o: false },
    { t: "REST APIs", o: true },
    { t: "MongoDB", o: false },
    { t: "PostgreSQL", o: true },
    { t: "Clean Code", o: false },
    { t: "Production-ready", o: true },
  ];

  const bandB = [
    { t: "TypeScript", o: true },
    { t: "Redux", o: false },
    { t: "Tailwind CSS", o: true },
    { t: "Prisma", o: false },
    { t: "Docker", o: true },
    { t: "Vercel", o: false },
    { t: "Available Worldwide", o: true },
    { t: "Open to work", o: false },
  ];

  const renderItems = (items: typeof bandA) => (
    <div className="g2">
      {items.map((item, idx) => (
        <span key={idx} className="bi">
          <span className={item.o ? "o" : ""}>{item.t}</span>
          <svg className="st" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2l2.6 6.9L22 12l-7.4 3.1L12 22l-2.6-6.9L2 12l7.4-3.1z" />
          </svg>
        </span>
      ))}
    </div>
  );

  return (
    <div className="bandwrap" aria-hidden="true">
      {/* Band 1 - Tilted Dark Ribbon */}
      <div className="band b1">
        <div className="tk">
          {renderItems(bandA)}
          {renderItems(bandA)}
          {renderItems(bandA)}
          {renderItems(bandA)}
        </div>
      </div>

      {/* Band 2 - Tilted Indigo Ribbon */}
      <div className="band b2">
        <div className="tk">
          {renderItems(bandB)}
          {renderItems(bandB)}
          {renderItems(bandB)}
          {renderItems(bandB)}
        </div>
      </div>
    </div>
  );
}
