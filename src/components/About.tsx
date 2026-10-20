import React from "react";

export default function About() {
  return (
    <section id="about" className="wrap sec">
      <div className="split">
        <div className="rail">
          <h2 className="rt">About</h2>
        </div>

        <div>
          <p className="stmt">
            Building software with care, clarity, and clean code.
          </p>

          <p className="ab">
            I&apos;m a Full Stack Developer who enjoys building fast, dependable
            and intuitive web applications. I work across the MERN stack and
            Next.js, from the interface to the API and database behind it.
          </p>

          <dl className="facts">
            <div className="frow">
              <dt>Education</dt>
              <dd>
                <div className="ft2">B.Sc. in Information Technology</div>
                <div className="fm">Guru Nanak Dev University, 2023 – 2026</div>
              </dd>
            </div>

            <div className="frow">
              <dt>Training</dt>
              <dd>
                <div className="ft2">Full Stack Web Development</div>
                <div className="fm">
                  Chai Code Intensive Training, Jan – Jun 2026
                </div>
              </dd>
            </div>

            <div className="frow">
              <dt>Writing</dt>
              <dd>
                <div className="ft2">54 technical articles</div>
                <div className="fm">Practical web engineering on Hashnode</div>
              </dd>
            </div>
          </dl>

          <div className="abact">
            <a
              className="btn ghost"
              href="https://nikhilprashar.vercel.app/nikhil_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
              View CV / Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
