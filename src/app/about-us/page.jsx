import React from "react";

const AboutUS = () => {
  return (
    <section className="w-full flex items-center justify-center px-6 py-20 bg-white dark:bg-black">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            About Me
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-4">
            I’m a passionate{" "}
            <span className="font-semibold text-black dark:text-white">
              Full Stack Web Developer
            </span>{" "}
            specializing in building fast, scalable, and user-friendly web
            applications. I focus on writing clean code and creating smooth user
            experiences.
          </p>

          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">
            With strong experience in the MERN stack, I enjoy turning ideas into
            real-world products. I continuously learn new technologies and
            follow best practices to deliver high-quality solutions.
          </p>

          {/* Stats */}
          <div className="flex gap-6">
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                MERN
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Stack Expertise
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                Clean
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Code Focus
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                Responsive
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                UI Design
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-8 bg-gray-50 dark:bg-zinc-900 shadow-sm">
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
              What I Do
            </h3>

            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>• Build modern full-stack web applications</li>
              <li>• Design responsive and clean UI</li>
              <li>• Develop secure backend APIs</li>
              <li>• Optimize performance & SEO</li>
              <li>• Work with startups and agencies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
