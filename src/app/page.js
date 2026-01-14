export default function Home() {
  return (
    <>
      <div className="font-sans text-gray-900">
        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">
              I build fast, clean, and reliable websites
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Modern websites that help businesses grow online.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-black text-white rounded-xl"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-black rounded-xl"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20 px-6 bg-gray-50">
          <h2 className="text-3xl font-bold text-center">Projects</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Job Portal",
                desc: "Secure login and role-based access for users.",
              },
              {
                title: "E-Commerce Website",
                desc: "Product listing, cart, and smooth checkout flow.",
              },
              {
                title: "Portfolio Website",
                desc: "Clean personal website to showcase projects.",
              },
            ].map((project, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow">
                <h3 className="font-semibold text-xl">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.desc}</p>

                <div className="mt-4 flex gap-3 text-sm">
                  <span className="px-3 py-1 bg-gray-100 rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full">
                    Node
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full">
                    MongoDB
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HOW I WORK */}
        <section className="py-20 px-6 text-center">
          <h2 className="text-3xl font-bold">How the project works</h2>

          <div className="mt-10 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Understanding your requirement",
              "Planning & design",
              "Development",
              "Testing & delivery",
            ].map((step, i) => (
              <div key={i} className="p-6 border rounded-xl">
                <p className="font-medium">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="py-20 px-6 bg-gray-50">
          <h2 className="text-3xl font-bold text-center">Skills</h2>

          <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-semibold">Frontend</h3>
              <p className="mt-2 text-gray-600">React, Tailwind, JavaScript</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-semibold">Backend</h3>
              <p className="mt-2 text-gray-600">Node.js, Express, MongoDB</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-semibold">Features</h3>
              <p className="mt-2 text-gray-600">
                Secure login, Email verification
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-20 px-6 text-center">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            I’m a full-stack web developer and a college student. I focus on
            building clean, fast, and user-friendly web applications.
          </p>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="py-20 px-6 bg-black text-white text-center"
        >
          <h2 className="text-3xl font-bold">Let’s work together</h2>
          <p className="mt-4 text-gray-300">
            Have a project in mind? Let’s talk.
          </p>

          <div className="mt-6 flex justify-center gap-6">
            <a href="mailto:your@email.com" className="underline">
              Email
            </a>
            <a href="#" className="underline">
              LinkedIn
            </a>
            <a href="#" className="underline">
              GitHub
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

{
  /* <ChevronRight /> */
}
