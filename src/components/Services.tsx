import React from "react";

export default function Services() {
  return (
    <section id="services" className="wrap sec">
      <div className="split">
        <div className="rail">
          <h2 className="rt">Services</h2>
        </div>

        <div>
          <div className="svc">
            <div className="sv">
              <svg className="ic thin" viewBox="0 0 24 24" aria-hidden="true">
                <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
              </svg>
              <div>
                <div className="h3">Full-stack web apps</div>
                <p>From concept to launch</p>
              </div>
            </div>

            <div className="sv">
              <svg className="ic thin" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
              </svg>
              <div>
                <div className="h3">Frontend and UI</div>
                <p>Clean, responsive, accessible</p>
              </div>
            </div>

            <div className="sv">
              <svg className="ic thin" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="20" height="8" rx="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" />
                <path d="M6 6h.01" />
                <path d="M6 18h.01" />
              </svg>
              <div>
                <div className="h3">Backend and REST APIs</div>
                <p>Secure, with role-based auth</p>
              </div>
            </div>

            <div className="sv">
              <svg className="ic thin" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 13v8" />
                <path d="m8 17 4-4 4 4" />
                <path d="M20 16.7A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" />
              </svg>
              <div>
                <div className="h3">Deployment and setup</div>
                <p>Vercel, VPS, domains and SEO</p>
              </div>
            </div>
          </div>

          <div className="proc">
            <div className="pline" />
            <div className="pstep">
              <span className="pnode">1</span>
              <div className="pt">Plan and scope</div>
              <div className="ps">Goals, requirements, users</div>
            </div>
            <div className="pstep">
              <span className="pnode">2</span>
              <div className="pt">Design and model</div>
              <div className="ps">Wireframes, schemas, APIs</div>
            </div>
            <div className="pstep">
              <span className="pnode">3</span>
              <div className="pt">Build and test</div>
              <div className="ps">Clean code, responsive layouts</div>
            </div>
            <div className="pstep">
              <span className="pnode">4</span>
              <div className="pt">Deploy and support</div>
              <div className="ps">Hosting, domain, monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
