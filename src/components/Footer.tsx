"use client";

import React from "react";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="mega" aria-hidden="true">
        NIKHIL PRASHAR
      </div>

      <footer className="wrap">
        <div className="foot">
          <span>© 2026 Nikhil Prashar. All rights reserved.</span>
          <a href="#top" onClick={scrollToTop}>
            Back to top{" "}
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="m5 12 7-7 7 7"></path>
              <path d="M12 19V5"></path>
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}
