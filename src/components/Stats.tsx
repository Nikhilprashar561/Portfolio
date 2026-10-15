"use client";

import React from "react";

export default function Stats() {
  return (
    <section className="wrap" style={{ paddingTop: "24px" }}>
      <div className="stats">
        <div className="stat">
          <div className="tile-i">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
          </div>
          <div>
            <div className="num">6</div>
            <div className="numl">Projects built</div>
          </div>
        </div>

        <div className="stat">
          <div className="tile-i">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
          </div>
          <div>
            <div className="num">54</div>
            <div className="numl">Articles written</div>
          </div>
        </div>

        <div className="stat">
          <div className="tile-i">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
              <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
              <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
            </svg>
          </div>
          <div>
            <div className="num">2</div>
            <div className="numl">Core stacks: MERN &amp; Next.js</div>
          </div>
        </div>
      </div>
    </section>
  );
}
