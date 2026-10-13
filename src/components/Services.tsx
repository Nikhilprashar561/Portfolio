"use client";

import { Code2, Layout, Server, Cloud, ArrowRight } from "lucide-react";

interface ServicesProps {
  onOpenSchedule: () => void;
}

export default function Services({ onOpenSchedule }: ServicesProps) {
  const services = [
    {
      icon: Code2,
      title: "Full-Stack Web Development",
      description:
        "Building responsive, complete web applications from initial concept to launch using Next.js, React, and Node.js.",
    },
    {
      icon: Layout,
      title: "Frontend & UI Engineering",
      description:
        "Crafting clean, accessible, and mobile-friendly user interfaces with smooth interactions and modern styling.",
    },
    {
      icon: Server,
      title: "Backend & RESTful APIs",
      description:
        "Developing secure APIs, role-based authentication, and optimized database schemas using MongoDB and PostgreSQL.",
    },
    {
      icon: Cloud,
      title: "Deployment & Setup",
      description:
        "Setting up custom domains, cloud hosting on Vercel or VPS, and ensuring fast load times and clean SEO configurations.",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#f5f2eb]/60 border-b border-stone-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-200/90 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-lux-sm">
            <span>Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            What I Do
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-normal">
            I help startups, businesses, and individuals build high-quality digital products.
          </p>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-7 hover:border-stone-300 hover:shadow-lux hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="p-3 rounded-xl bg-[#f5f2eb] text-stone-800 w-fit mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-stone-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Discuss Project Banner */}
        <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-white border border-stone-200/90 shadow-lux-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-stone-900 text-base">
              Need help with a web application or project?
            </h4>
            <p className="text-sm text-stone-600 mt-0.5">
              Let&apos;s talk about your requirements and see how we can bring it to life.
            </p>
          </div>
          <button
            onClick={onOpenSchedule}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 hover:from-stone-800 hover:to-zinc-800 text-white font-medium text-sm shrink-0 shadow-lux transition-all cursor-pointer border border-stone-700/50"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
