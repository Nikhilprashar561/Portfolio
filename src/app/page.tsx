"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScheduleModal from "@/components/ScheduleModal";

export default function Home() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#1c1917] antialiased selection:bg-amber-100 selection:text-stone-900 font-sans">
      {/* Sticky Navigation */}
      <Navbar onOpenSchedule={() => setIsScheduleOpen(true)} />

      {/* Main Content Areas */}
      <main id="main-content" className="flex-1">
        {/* Section 1: Hero */}
        <Hero onOpenSchedule={() => setIsScheduleOpen(true)} />

        {/* Section 2: Projects */}
        <Projects />

        {/* Section 3: Skills & Technologies */}
        <TechStack />

        {/* Section 4: What I Do / Services */}
        <Services onOpenSchedule={() => setIsScheduleOpen(true)} />

        {/* Section 5: Simple 4-Step Workflow */}
        <Process />

        {/* Section 6: About Nikhil */}
        <About />

        {/* Section 7: Contact Form & Options */}
        <ContactSection onOpenSchedule={() => setIsScheduleOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Meeting Booking Modal */}
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />
    </div>
  );
}
