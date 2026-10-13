"use client";

import { Lightbulb, Layout, Code2, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      step: "01",
      icon: Lightbulb,
      title: "Plan & Scope",
      description: "Define product goals, core requirements, and user needs.",
    },
    {
      step: "02",
      icon: Layout,
      title: "Design & Model",
      description: "Wireframe interfaces, design database schemas, and plan APIs.",
    },
    {
      step: "03",
      icon: Code2,
      title: "Build & Test",
      description: "Develop with clean, modern code and responsive layouts.",
    },
    {
      step: "04",
      icon: Rocket,
      title: "Deploy & Support",
      description: "Launch to production with hosting, domain setup, and monitoring.",
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-20 bg-[#fbf9f5] border-b border-stone-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-200/90 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-2 shadow-lux-sm">
            <span>Workflow</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            How I Work
          </h2>
          <p className="mt-2 text-sm text-stone-600 font-normal">
            A simple, transparent process from initial idea to working software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-lux-sm hover:shadow-lux transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-semibold text-stone-700 bg-stone-100 px-2 py-0.5 rounded">
                    Step {item.step}
                  </span>
                  <div className="p-2 rounded-lg bg-stone-50 text-stone-700">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-bold text-stone-900 text-base">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
