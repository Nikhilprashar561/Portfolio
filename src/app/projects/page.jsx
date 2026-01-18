import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Task Management System",
    description:
      "A React-based employee task management app to assign tasks and track progress.",
    tech: ["React", "JavaScript", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Authentication & Authorization",
    description:
      "Complete backend auth system using Node.js, Express, MongoDB with EJS frontend.",
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    github: "#",
  },
  {
    title: "Password Manager",
    description:
      "Secure password manager built with React and styled using Tailwind CSS.",
    tech: ["React", "Tailwind"],
    github: "#",
  },
  {
    title: "Blogging Website",
    description:
      "Authenticated blogging platform where logged-in users can create blogs.",
    tech: ["Node.js", "MongoDB", "EJS"],
    github: "#",
  },
  {
    title: "NextJS Auth",
    description: "Authentication & authorization system built with Next.js.",
    tech: ["Next.js", "TypeScript"],
    github: "#",
  },
  {
    title: "Mystery Feedback",
    description: "Next.js app for collecting anonymous user feedback.",
    tech: ["Next.js", "TypeScript"],
    github: "#",
  },
  {
    title: "SSM College Project",
    description:
      "MERN-based college management platform for students and teachers.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "#",
  },
  {
    title: "Blinkit MERN Application",
    description:
      "Blinkit-like e-commerce app to practice real-world MERN workflows.",
    tech: ["MERN Stack"],
    github: "#",
  },
  {
    title: "Learning DSA in JS",
    description:
      "JavaScript DSA repository to strengthen problem-solving skills.",
    tech: ["JavaScript", "DSA"],
    github: "#",
  },
  {
    title: "MERN E-commerce",
    description:
      "Full-stack e-commerce app with authentication, cart, and orders.",
    tech: ["MERN Stack"],
    github: "#",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Projects
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A collection of full-stack, backend, and frontend projects showcasing
          real-world development experience.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-gray-200 dark:border-gray-800
                       bg-white dark:bg-zinc-900 p-6 transition
                       hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full
                             bg-gray-100 dark:bg-zinc-800
                             text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-6 flex items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 text-sm font-medium
                             text-gray-700 dark:text-gray-300
                             hover:text-black dark:hover:text-white"
                >
                  <Github size={18} /> GitHub
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 text-sm font-medium
                             text-blue-600 hover:underline"
                >
                  <ExternalLink size={18} /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
