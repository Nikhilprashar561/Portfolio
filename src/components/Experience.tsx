import React from "react";

export default function Experience() {
  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "REST APIs",
    "Tailwind CSS",
  ];

  return (
    <section id="experience" className="wrap sec">
      <div className="split">
        {/* Left Column - Section Heading */}
        <div className="rail">
          <h2 className="rt">Experience</h2>
        </div>

        {/* Right Area - Meta & Role Details with Top Line */}
        <div className="exp-content">
          <div className="exp-grid">
            {/* Meta Sub-column (Left) */}
            <div className="exp-meta">
              <div className="exp-date">July 2026 – Present</div>
              <div className="exp-loc">Mohali, Punjab, India</div>
              <div className="exp-type">Full-time · Hybrid</div>

              <div className="exp-badge">
                <span className="exp-badge-dot" aria-hidden="true" />
                <span>Current role</span>
              </div>
            </div>

            {/* Details Sub-column (Right) */}
            <div className="exp-details">
              <h3 className="exp-title">Software Engineer</h3>
              <div className="exp-company">Lexvra Infinology Pvt. Ltd.</div>

              <p className="exp-summary">
                Full-stack software engineering for high-performance web
                applications and scalable digital products. Responsible for core
                backend architecture, REST API design, database modeling, and
                responsive, accessible user interfaces.
              </p>

              <div className="exp-bullets">
                <div className="exp-bullet-item">
                  <span className="exp-dash" aria-hidden="true">
                    —
                  </span>
                  <p className="exp-bullet-text">
                    Engineered full-stack features and high-throughput REST APIs
                    using Next.js, Node.js, and MongoDB, reducing server response
                    times and improving client data throughput.
                  </p>
                </div>

                <div className="exp-bullet-item">
                  <span className="exp-dash" aria-hidden="true">
                    —
                  </span>
                  <p className="exp-bullet-text">
                    Architected end-to-end authentication, session management,
                    and role-based access control (RBAC) pipelines ensuring
                    robust security and seamless UX.
                  </p>
                </div>

                <div className="exp-bullet-item">
                  <span className="exp-dash" aria-hidden="true">
                    —
                  </span>
                  <p className="exp-bullet-text">
                    Collaborated with cross-functional product and design teams
                    to deliver production-ready features, automated CI/CD
                    deployments, and clean, maintainable codebases.
                  </p>
                </div>
              </div>

              {/* Technology Tags */}
              <div className="exp-tags">
                {technologies.map((tech) => (
                  <span key={tech} className="exp-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
