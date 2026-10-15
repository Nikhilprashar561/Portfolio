"use client";

import React from "react";

interface ContactSectionProps {
  onOpenSchedule: () => void;
}

export default function ContactSection({ onOpenSchedule }: ContactSectionProps) {
  const whatsappUrl = `https://wa.me/916239130326?text=${encodeURIComponent(
    "Hi Nikhil, I saw your portfolio and would like to discuss a project."
  )}`;

  return (
    <section id="contact" className="band">
      <div className="wrap">
        <div className="cgrid">
          <div>
            <h2 className="cth">Let&apos;s work together.</h2>
            <p className="cstat">
              <span className="pdot" />
              Available for freelance projects and full-time roles
            </p>
          </div>

          <div className="crows">
            <a
              className="crow"
              href="mailto:nikhilprashar561@gmail.com?subject=Intro%20call"
              onClick={(e) => {
                e.preventDefault();
                onOpenSchedule();
              }}
              role="button"
            >
              <span className="cm">
                <span className="cl">Schedule a call</span>
                <span className="cv">30-minute intro</span>
              </span>
              <span className="cgo">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </span>
            </a>

            <a
              className="crow"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="cm">
                <span className="cl">WhatsApp</span>
                <span className="cv">Message me directly</span>
              </span>
              <span className="cgo">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </span>
            </a>

            <a className="crow" href="mailto:nikhilprashar561@gmail.com">
              <span className="cm">
                <span className="cl">Email</span>
                <span className="cv">nikhilprashar561@gmail.com</span>
              </span>
              <span className="cgo">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="foot">
          <span>© 2026 Nikhil Prashar. All rights reserved.</span>
          <nav className="fl2" aria-label="Social">
            <a
              className="lnk"
              href="https://github.com/Nikhilprashar561"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="lnk"
              href="https://www.linkedin.com/in/nikhilprashar1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="lnk"
              href="https://x.com/NikhilPrashar_"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
            <a
              className="lnk"
              href="https://nikhilprashar.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hashnode
            </a>
          </nav>
          <a className="top" href="#top">
            Back to top{" "}
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
