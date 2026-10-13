"use client";

import { Calendar, ArrowRight, MessageCircle, FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon, TwitterXIcon, HashnodeIcon } from "@/components/BrandIcons";
import { Spotlight } from "@/components/ui/Spotlight";
import { FlipWords } from "@/components/ui/FlipWords";

interface HeroProps {
  onOpenSchedule: () => void;
}

export default function Hero({ onOpenSchedule }: HeroProps) {
  // Construct direct WhatsApp link with prefilled text. Phone number is NEVER displayed as plain text.
  const whatsappUrl = `https://wa.me/916239130326?text=${encodeURIComponent(
    "Hi Nikhil, I saw your portfolio and would like to discuss a project."
  )}`;

  const dynamicWords = [
    "modern web applications",
    "scalable backend APIs",
    "intuitive user interfaces",
    "end-to-end digital products",
  ];

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-32 overflow-hidden bg-[#fbf9f5]">
      {/* Aceternity UI Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#818cf8"
      />

      {/* Aceternity UI Subtle Grid with Radial Fade Mask */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_15%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Warm Ambient Glow for Business-Class Depth */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-amber-100/40 via-stone-200/20 to-transparent rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-stone-200/90 shadow-lux-sm mb-6 text-xs font-medium text-stone-700 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for Freelance Projects &amp; Full-Time Roles</span>
        </div>

        {/* Name & Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.14]">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-stone-900 via-stone-800 to-indigo-950 bg-clip-text text-transparent">
            Nikhil Prashar
          </span>
        </h1>

        {/* Dynamic Aceternity Flip Words Headline */}
        <div className="mt-4 text-xl sm:text-2xl lg:text-3xl font-medium text-stone-700 h-[72px] sm:h-[48px] flex items-center justify-center">
          <span>I engineer</span>
          <FlipWords words={dynamicWords} className="text-indigo-900 font-semibold" />
        </div>

        {/* Clean, Human Description */}
        <p className="mt-5 text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-normal">
          A Full Stack Developer specializing in clean code, robust backend architectures, and polished user experiences. Helping teams turn ideas into dependable, production-ready software.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white font-medium text-sm sm:text-base shadow-lux hover:shadow-lux-hover hover:from-stone-800 hover:to-zinc-800 transition-all duration-200 active:scale-98 cursor-pointer border border-stone-700/50"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenSchedule}
            id="hero-schedule-btn"
            type="button"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/95 hover:bg-stone-50 text-stone-800 font-medium text-sm sm:text-base border border-stone-200 shadow-lux-sm hover:shadow-lux transition-all duration-200 active:scale-98 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-indigo-600" />
            <span>Schedule a Call</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#ecfdf5]/90 hover:bg-[#d1fae5] text-emerald-900 font-medium text-sm border border-emerald-200/80 transition-all duration-200 active:scale-98"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <a
            href="/nikhil_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-stone-100/90 hover:bg-stone-200 text-stone-700 font-medium text-sm transition-all duration-200 active:scale-98 border border-stone-200/60"
          >
            <FileText className="w-4 h-4 text-stone-600" />
            <span>Resume (PDF)</span>
          </a>
        </div>

        {/* Quick Connect Strip */}
        <div className="mt-12 pt-8 border-t border-stone-200/80 flex items-center justify-center gap-5 text-stone-500">
          <span className="text-xs font-mono uppercase tracking-wider text-stone-400">Connect:</span>
          <a
            href="https://github.com/Nikhilprashar561"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-xl hover:text-stone-900 hover:bg-white border border-transparent hover:border-stone-200/80 transition-all shadow-2xs"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhilprashar1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-xl hover:text-indigo-600 hover:bg-white border border-transparent hover:border-stone-200/80 transition-all shadow-2xs"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href="https://x.com/NikhilPrashar_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X Profile"
            className="p-2 rounded-xl hover:text-stone-900 hover:bg-white border border-transparent hover:border-stone-200/80 transition-all shadow-2xs"
          >
            <TwitterXIcon className="w-4 h-4" />
          </a>
          <a
            href="https://nikhilprashar.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hashnode Tech Blog"
            className="p-2 rounded-xl hover:text-indigo-600 hover:bg-white border border-transparent hover:border-stone-200/80 transition-all shadow-2xs"
          >
            <HashnodeIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
