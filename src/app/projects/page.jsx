import React from "react";


const projects = [
  {
    title: "Job Portal",
    desc: "Secure login and role-based access for users.",
    tech: ["React", "Node", "MongoDB"],
  },
  {
    title: "E-Commerce Website",
    desc: "Product listing, cart, and smooth checkout flow.",
    tech: ["React", "Express", "Stripe"],
  },
  {
    title: "Portfolio Website",
    desc: "Clean personal website to showcase work.",
    tech: ["React", "Tailwind"],
  },
];

const steps = [
  "Understanding your requirement",
  "Planning & design",
  "Development",
  "Testing & delivery",
];

const Projects = () => {
  return (
    <div className="font-sans text-gray-900 scroll-smooth">
      {/* HERO */}
      <Section className="min-h-screen flex items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto">
          I build fast, clean, and reliable websites
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Modern websites that help businesses grow online.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button dark href="#projects">
            View Projects
          </Button>
          <Button href="#contact">Contact Me</Button>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" gray>
        <Title>Projects</Title>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {projects.map((p, i) => (
            <Card key={i}>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-600">{p.desc}</p>

              <div className="flex gap-2 mt-4 text-sm">
                {p.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section>
        <Title>How the project works</Title>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {steps.map((step, i) => (
            <Card key={i} center>
              {step}
            </Card>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section gray>
        <Title>Skills</Title>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <Card center>
            <h3 className="font-semibold">Frontend</h3>
            <p className="text-gray-600 mt-2">React, Tailwind, JavaScript</p>
          </Card>
          <Card center>
            <h3 className="font-semibold">Backend</h3>
            <p className="text-gray-600 mt-2">Node, Express, MongoDB</p>
          </Card>
          <Card center>
            <h3 className="font-semibold">Features</h3>
            <p className="text-gray-600 mt-2">
              Secure login, Email verification
            </p>
          </Card>
        </div>
      </Section>

      {/* ABOUT */}
      <Section>
        <Title>About Me</Title>
        <p className="max-w-2xl mx-auto text-center text-gray-600 mt-4">
          I’m a full-stack web developer and a college student. I focus on
          building clean, fast, and user-friendly web applications.
        </p>
      </Section>

      {/* CONTACT */}
      <Section dark id="contact">
        <h2 className="text-3xl font-bold">Let’s work together</h2>
        <p className="mt-4 text-gray-300">
          Have a project in mind? Let’s talk.
        </p>

        <div className="mt-6 flex justify-center gap-6 underline">
          <a href="mailto:your@email.com">Email</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </Section>
    </div>
  );
};

/* ---------- Small Reusable Components (Same File) ---------- */

function Section({ children, gray, dark, className = "", id }) {
  return (
    <section
      id={id}
      className={`px-6 py-20 ${
        dark
          ? "bg-black text-white text-center"
          : gray
          ? "bg-gray-50"
          : "bg-white"
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

function Title({ children }) {
  return <h2 className="text-3xl font-bold text-center">{children}</h2>;
}

function Card({ children, center }) {
  return (
    <div
      className={`p-6 bg-white rounded-xl shadow ${
        center ? "text-center" : ""
      }`}
    >
      {children}
    </div>
  );
}

function Button({ children, dark, href }) {
  return (
    <a
      href={href}
      className={`px-6 py-3 rounded-xl ${
        dark ? "bg-black text-white" : "border border-black"
      }`}
    >
      {children}
    </a>
  );
}

export default Projects;
