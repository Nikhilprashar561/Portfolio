"use client";

import React from "react";

export default function Process() {
  return (
    <section className="wrap sec">
      <div className="sechead reveal">
        <div className="eyebrow">
          <i></i>Workflow
        </div>
        <h2 className="h2">How I work</h2>
      </div>
      <div className="steps">
        <div className="step reveal">
          <div className="snode">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
            <span className="snum mono">01</span>
          </div>
          <div className="sline drawline"></div>
          <div className="pt">Plan &amp; Scope</div>
        </div>

        <div className="step reveal">
          <div className="snode">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
              <path d="M3 9h18"></path>
              <path d="M9 21V9"></path>
            </svg>
            <span className="snum mono">02</span>
          </div>
          <div className="sline drawline"></div>
          <div className="pt">Design &amp; Model</div>
        </div>

        <div className="step reveal">
          <div className="snode">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="m16 18 6-6-6-6"></path>
              <path d="m8 6-6 6 6 6"></path>
            </svg>
            <span className="snum mono">03</span>
          </div>
          <div className="sline drawline"></div>
          <div className="pt">Build &amp; Test</div>
        </div>

        <div className="step reveal">
          <div className="snode">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
              <path d="M4 22v-7"></path>
            </svg>
            <span className="snum mono">04</span>
          </div>
          <div className="sline drawline"></div>
          <div className="pt">Deploy &amp; Support</div>
        </div>
      </div>
    </section>
  );
}
