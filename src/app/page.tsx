"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import ScheduleModal from "@/components/ScheduleModal";

export default function Home() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  // Mouse handler for existing Hero 3D tilt effects
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const page = e.currentTarget;
    if (!page || !page.getBoundingClientRect) return;
    const pr = page.getBoundingClientRect();
    page.style.setProperty("--mx", `${e.clientX - pr.left}px`);
    page.style.setProperty("--my", `${e.clientY - pr.top}px`);

    const t = e.target as HTMLElement | null;
    if (!t || !t.closest) return;

    const hr = t.closest(".hero-r") as HTMLElement | null;
    if (hr) {
      const r = hr.getBoundingClientRect();
      hr.style.setProperty(
        "--px",
        String(((e.clientX - r.left) / r.width - 0.5) * 2)
      );
      hr.style.setProperty(
        "--py",
        String(((e.clientY - r.top) / r.height - 0.5) * 2)
      );
    }
  };

  return (
    <div id="top" className="page" onMouseMove={handleMouseMove}>
      {/* Existing Navbar - untouched structure and logic, updated font */}
      <Navbar onOpenSchedule={() => setIsScheduleOpen(true)} />

      <main>
        {/* Existing Hero - untouched structure and logic, updated font */}
        <Hero onOpenSchedule={() => setIsScheduleOpen(true)} />

        {/* Updated sections below Hero matching exact design reference from HTML file */}
        <Projects />
        <Experience />
        <TechStack />
        <Services />
        <Blog />
        <About />
        <ContactSection onOpenSchedule={() => setIsScheduleOpen(true)} />
      </main>

      {/* Schedule Call Modal */}
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />
    </div>
  );
}
