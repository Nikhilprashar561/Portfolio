"use client";

import { Code2, Server, Database, Wrench, Layers } from "lucide-react";

export default function TechStack() {
  const skillGroups = [
    {
      category: "Languages",
      icon: Code2,
      skills: ["JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3"],
    },
    {
      category: "Frontend",
      icon: Layers,
      skills: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit", "shadcn/ui", "Responsive Layouts"],
    },
    {
      category: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT Authentication", "Zod Validation"],
    },
    {
      category: "Databases",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma ORM", "Mongoose"],
    },
    {
      category: "Tools & DevOps",
      icon: Wrench,
      skills: ["Git & GitHub", "Docker", "Postman", "Vercel", "Turborepo", "Cloudinary"],
    },
  ];

  return (
    <section id="stack" className="py-20 sm:py-24 bg-[#fbf9f5] border-b border-stone-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-200/90 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-lux-sm">
            <span>Core Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-normal">
            The programming languages, frameworks, databases, and engineering tools I rely on to deliver reliable software.
          </p>
        </div>

        {/* Clean Stack Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="rounded-2xl border border-stone-200/90 bg-white p-6 shadow-lux-sm hover:shadow-lux transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-stone-100">
                  <div className="p-2.5 rounded-xl bg-stone-100/80 text-stone-800">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-stone-900 text-base">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#f5f2eb]/70 text-stone-700 border border-stone-200/70 hover:border-stone-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
