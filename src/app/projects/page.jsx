import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SSM College Project",
    description:
      "A college management platform that connects students and teachers for seamless communication, assignment tracking, and academic management.",
    tech: [
      "MERN Stack",
      "REST Api's",
      "JWT",
      "Resend",
      "Redux",
      "Shadcn",
      "Tailwind CSS",
    ],
    github: "https://github.com/Nikhilprashar561/SSM-College-Project",
  },
  {
    title: "E-commerce",
    description:
      "Built a full-featured e-commerce website with separate user and admin roles. Users can browse products, create an account, and place orders securely.",
    tech: ["MERN Stack", "Cloudinary", "JWT", "REST Api's", "Redux", "Shadcn"],
    github: "https://github.com/Nikhilprashar561/MERN-Ecommerce",
  },
  {
    title: "Mystery Feedback",
    description:
      "Feedback System built with Next.js . Implemented frontend pages for submitting feedback and backend API routes for storing and retrieving data.",
    tech: [
      "Next.js",
      "TypeScript",
      "Next-auth",
      "Resend",
      "UI Library",
      "API's Routes",
      "ZOD",
    ],
    github: "https://github.com/Nikhilprashar561/Mystry-Feedback",
  },
  {
    title: "Blinkit Application",
    description:
      "Built a Blinkit like grocery ordering web app to practice real world e-commerce workflows using the full stack concepts.",
    tech: [
      "MERN Stack",
      "Mongoose",
      "JWT",
      "Resend",
      "Cloudinary",
      "Redux",
      "Tailwind CSS",
      "Stripe",
    ],
    github: "https://github.com/Nikhilprashar561/Blinkit-MERN-Application",
  },
  {
    title: "NextJS Auth",
    description:
      "Implemented NextAuth for secure user authentication and session management.Enabled role-based access to protect routes for users and admins.",
    tech: ["Next.js", "TypeScript", "JWT", "Nodemailer", "Bcrypt.js"],
    github: "https://github.com/Nikhilprashar561/NextJS-Auth",
  },
  {
    title: "Authentication & Authorization",
    description:
      "mplemented secure user login, registration, and token-based access control.Protected APIs with role-based authorization to ensure secure data access.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "Bcrypt",
      "Cloudinary",
      "Mongoose",
      "EJS",
    ],
    github: "https://github.com/Nikhilprashar561/Authentication-Authorization",
  },
  {
    title: "Task Management System",
    description:
      "Built an employee task management system to assign, track, and manage tasks efficiently.",
    tech: ["React.js", "JavaScript", "Tailwind"],
    github: "https://github.com/Nikhilprashar561/Task-Management",
  },
  {
    title: "Password Manager",
    description:
      "Built a URL shortener that converts long links into short, shareable URLs.",
    tech: ["React.js", "Tailwind CSS", "Javascript"],
    github: "https://github.com/Nikhilprashar561/Password-Manager",
    live: "https://reactpasword.netlify.app/",
  },
  {
    title: "React Todo",
    description:
      "Built a to-do application to create, update, and manage daily tasks built with React.",
    tech: ["React.js", "Tailwind CSS", "Javascript"],
    github: "https://github.com/Nikhilprashar561/React-Todo",
    live: "https://reacttoddo.netlify.app/",
  },
  {
    title: "Blogging Website",
    description:
      "Authenticated blogging platform where logged-in users can create blogs and publish posts.",
    tech: ["Node.js", "MongoDB", "EJS", "Express.js", "Mongoose", "JWT"],
    github: "https://github.com/Nikhilprashar561/Blogging-Website",
    live: "https://res.cloudinary.com/da9c3vejh/video/upload/Timeline_1_z4qubf.mp4?_s=vp-3.6.3",
  },
  {
    title: "Amici Ashford",
    description:
      "Built a responsive frontend UI using React with clean and reusable components.",
    tech: ["React.js", "Tailwind CSS", "React Router Dom", "UI Library"],
    github: "https://github.com/Nikhilprashar561/Amici-Ashford",
    live: "https://amiciashford.netlify.app/",
  },
  {
    title: "Online Shopping",
    description:
      "Built a static e-commerce website with product listings and a clean UI.",
    tech: ["HTML", "CSS", "Javascript", "Responsive UI"],
    github: "https://github.com/Nikhilprashar561/Online-Shopping-Store",
    live: "https://shopwithnikhil.netlify.app/",
  },
  {
    title: "Travel Booking",
    description:
      "Built a static travel booking application with destination listings and booking pages.",
    tech: ["HTML", "CSS", "Javascript", "Responsive UI"],
    github: "https://github.com/Nikhilprashar561/Travel-Website",
    live: "https://travelnikhil.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section className="py-6 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <p className=" text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A collection of full-stack, backend, and frontend projects showcasing
          real-world development experience. A showcase of work created through
          learning and real-world application.Browse the projects below.
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
