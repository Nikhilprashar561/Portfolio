"use client";

import { ExternalLink, FolderGit2 } from "lucide-react";
import { GitHubIcon } from "@/components/BrandIcons";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: "ssm-college",
    title: "SSM College Management Portal",
    category: "Full Stack Web App",
    description:
      "A college management platform connecting students and teachers for academic management, assignment tracking, announcements, and seamless communication.",
    technologies: ["MERN Stack", "REST APIs", "JWT", "Resend", "Redux", "Tailwind CSS"],
    githubUrl: "https://github.com/Nikhilprashar561/SSM-College-Project",
  },
  {
    id: "mern-ecommerce",
    title: "MERN E-Commerce Store",
    category: "Full Stack Web App",
    description:
      "Full-featured e-commerce platform with customer & admin roles. Includes product management, Cloudinary image uploads, shopping cart, and secure checkout.",
    technologies: ["MERN Stack", "Cloudinary", "JWT", "REST APIs", "Redux", "Tailwind CSS"],
    githubUrl: "https://github.com/Nikhilprashar561/MERN-Ecommerce",
  },
  {
    id: "mystery-feedback",
    title: "Mystery Feedback System",
    category: "Next.js Web App",
    description:
      "Anonymous feedback tool built with Next.js. Features OTP email verification via Resend, custom user URLs, and strict Zod data validation.",
    technologies: ["Next.js", "TypeScript", "Next-Auth", "Resend", "Zod", "Tailwind CSS"],
    githubUrl: "https://github.com/Nikhilprashar561/Mystry-Feedback",
  },
  {
    id: "blinkit-clone",
    title: "Blinkit Quick-Commerce App",
    category: "Full Stack Web App",
    description:
      "Grocery delivery application replicating quick-commerce workflows with category browsing, real-time cart state, and end-to-end order processing.",
    technologies: ["MERN Stack", "Mongoose", "JWT", "Redux", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/Nikhilprashar561/Blinkit-MERN-Application",
  },
  {
    id: "form-builder",
    title: "Dynamic Form Builder SaaS",
    category: "SaaS Tool",
    description:
      "Custom form creation tool with dynamic field types, real-time response validation, shareable slug-based links, and structured database storage.",
    technologies: ["Next.js", "tRPC", "PostgreSQL", "Turborepo", "Tailwind CSS"],
    githubUrl: "https://github.com/Nikhilprashar561",
  },
  {
    id: "nextjs-auth",
    title: "NextJS Authentication System",
    category: "Security & Auth",
    description:
      "Production-ready authentication setup featuring NextAuth, role-based route protection for users & admins, session tokens, and password encryption.",
    technologies: ["Next.js", "TypeScript", "Next-Auth", "JWT", "Bcrypt.js"],
    githubUrl: "https://github.com/Nikhilprashar561/NextJS-Auth",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#f5f2eb]/60 border-y border-stone-200/80 relative">
      {/* Background Dot Texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-200/90 text-stone-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-lux-sm">
            <FolderGit2 className="w-3.5 h-3.5 text-indigo-600" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Selected Projects &amp; Products
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Real-world web applications built with a focus on clean architecture, intuitive design, and scalable code.
          </p>
        </div>

        {/* 3-Column Grid of Aceternity CardSpotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <CardSpotlight
              key={project.id}
              radius={240}
              color="rgba(99, 102, 241, 0.08)"
              className="p-6 sm:p-7 flex flex-col justify-between hover:border-stone-300 hover:shadow-lux-hover hover:-translate-y-1 transition-all duration-300 bg-white"
            >
              <div>
                {/* Category Pill */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="text-[11px] font-mono font-medium text-stone-700 bg-stone-100/80 px-2.5 py-0.5 rounded-full border border-stone-200/70">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-stone-900 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm text-stone-600 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-[#faf8f5] border border-stone-200/80 text-stone-700 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-stone-700 hover:text-stone-900 transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </CardSpotlight>
          ))}
        </div>

        {/* View All GitHub Link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Nikhilprashar561?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 hover:from-stone-800 hover:to-zinc-800 text-white text-sm font-medium shadow-lux hover:shadow-lux-hover transition-all active:scale-98 border border-stone-700/50"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>View All Repositories on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
