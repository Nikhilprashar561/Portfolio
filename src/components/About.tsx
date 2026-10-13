"use client";

import Image from "next/image";
import { GraduationCap, Award, FileText, MapPin } from "lucide-react";
import { LinkedInIcon, TwitterXIcon, GitHubIcon } from "@/components/BrandIcons";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#f5f2eb]/50 border-b border-stone-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Portrait Photo Column (Left) */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm aspect-4/5 rounded-2xl overflow-hidden border border-stone-200/90 shadow-lux-card bg-stone-100 group">
              <Image
                src="/nikhil.jpg"
                alt="Nikhil Prashar - Full Stack Developer"
                fill
                className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 360px"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-transparent text-white">
                <div className="font-bold text-base leading-tight">Nikhil Prashar</div>
                <div className="text-xs text-stone-300 flex items-center gap-1.5 mt-1 font-normal">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>India • Available Worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative & Background (Right) */}
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-200/90 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-lux-sm">
              <span>About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
              Building software with care, clarity, and clean code.
            </h2>

            <div className="mt-4 space-y-3 text-base text-stone-600 leading-relaxed font-normal">
              <p>
                I&apos;m a dedicated <strong className="text-stone-900 font-semibold">Full Stack Developer</strong> who enjoys creating fast, dependable, and intuitive web applications. I focus on writing maintainable code and delivering smooth user experiences.
              </p>
              <p>
                With strong hands-on experience in the MERN stack and Next.js, I bridge the gap between frontend design and backend architecture. When I&apos;m not writing code, I author in-depth technical guides on Hashnode sharing practical web engineering concepts.
              </p>
            </div>

            {/* Quick Strengths Strip */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center sm:text-left">
              <div className="p-3.5 rounded-xl bg-white border border-stone-200/90 shadow-lux-sm">
                <div className="text-base font-bold text-stone-900">MERN &amp; Next.js</div>
                <div className="text-xs text-stone-500 font-normal">Full-Stack Stack</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-stone-200/90 shadow-lux-sm">
                <div className="text-base font-bold text-stone-900">Clean Code</div>
                <div className="text-xs text-stone-500 font-normal">Maintainable Architecture</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-stone-200/90 shadow-lux-sm">
                <div className="text-base font-bold text-stone-900">50+ Articles</div>
                <div className="text-xs text-stone-500 font-normal">Hashnode Writer</div>
              </div>
            </div>

            {/* Education & Training Highlights */}
            <div className="mt-6 space-y-2.5">
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-stone-200/90 text-sm shadow-lux-sm">
                <div className="p-2 rounded-lg bg-stone-100 text-stone-800">
                  <GraduationCap className="w-4 h-4 shrink-0" />
                </div>
                <div>
                  <span className="font-semibold text-stone-900">B.Sc. in Information Technology</span>
                  <span className="text-stone-500 text-xs block font-normal">Guru Nanak Dev University (2023 – 2026)</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-stone-200/90 text-sm shadow-lux-sm">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800">
                  <Award className="w-4 h-4 shrink-0" />
                </div>
                <div>
                  <span className="font-semibold text-stone-900">Full Stack Web Development</span>
                  <span className="text-stone-500 text-xs block font-normal">Chai Code Intensive Training (Jan 2026 – Jun 2026)</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="/nikhil_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white text-xs sm:text-sm font-medium shadow-lux hover:shadow-lux-hover transition-all border border-stone-700/50"
              >
                <FileText className="w-4 h-4" />
                <span>View CV / Resume (PDF)</span>
              </a>

              <a
                href="https://github.com/Nikhilprashar561"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-700 text-xs font-medium border border-stone-200/90 shadow-lux-sm transition-all"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/nikhilprashar1/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-700 text-xs font-medium border border-stone-200/90 shadow-lux-sm transition-all"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-indigo-600" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://x.com/NikhilPrashar_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-700 text-xs font-medium border border-stone-200/90 shadow-lux-sm transition-all"
              >
                <TwitterXIcon className="w-3.5 h-3.5" />
                <span>Twitter / X</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
