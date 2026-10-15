import React from "react";

interface BlogPost {
  title: string;
  url: string;
  date: string;
  mins: string;
}

const posts: BlogPost[] = [
  {
    title: "The Node.js Event Loop Explained",
    url: "https://nikhilprashar.hashnode.dev/the-node-js-event-loop-explained",
    date: "May 10, 2026",
    mins: "5 min read",
  },
  {
    title: "REST API Design Made Simple with Express.js",
    url: "https://nikhilprashar.hashnode.dev/rest-api-design-made-simple-with-express-js",
    date: "May 10, 2026",
    mins: "5 min read",
  },
  {
    title: "Handling File Upload in Express with Multer",
    url: "https://nikhilprashar.hashnode.dev/handling-file-upload-in-express-with-multer",
    date: "May 10, 2026",
    mins: "4 min read",
  },
  {
    title: "Sessions vs JWT vs Cookies",
    url: "https://nikhilprashar.hashnode.dev/sessions-vs-jwt-vs-cookies",
    date: "May 8, 2026",
    mins: "5 min read",
  },
  {
    title: "URL Parameters vs Query String in Express.js",
    url: "https://nikhilprashar.hashnode.dev/url-parameters-vs-query-string-in-express-js",
    date: "May 8, 2026",
    mins: "4 min read",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="wrap sec">
      <div className="split">
        <div className="rail">
          <h2 className="rt">Blog</h2>
        </div>

        <div>
          <div className="bgrid">
            <a
              className="feat"
              href="https://nikhilprashar.hashnode.dev/jwt-authentication-in-node-js"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="fvis" aria-hidden="true">
                <div>
                  <span className="t1">eyJhbGciOiJIUzI1NiJ9</span>
                  <span className="td">.</span>
                </div>
                <div>
                  <span className="t2">eyJzdWIiOiJuaWtoaWwifQ</span>
                  <span className="td">.</span>
                </div>
                <div>
                  <span className="t3">x9fQ2mZ8Lk3vT7aPq1Rw0YbN</span>
                </div>
                <span className="ver">
                  <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  Verified
                </span>
              </div>
              <div className="fbody">
                <div className="fmeta">
                  <span>Apr 30, 2026</span>
                  <span>6 min read</span>
                </div>
                <h3 className="ft">JWT Authentication in Node.js</h3>
                <span className="fgo">
                  Read article{" "}
                  <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

            <div>
              <div className="qlist">
                {posts.map((q) => (
                  <a
                    key={q.title}
                    className="qrow"
                    href={q.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="qt">{q.title}</span>
                    <span className="qm">
                      <span>{q.date}</span>
                      <span>{q.mins}</span>
                    </span>
                  </a>
                ))}
              </div>
              <a
                className="qall lnk u"
                style={{ display: "inline-block", fontWeight: 600 }}
                href="https://nikhilprashar.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read all 54 articles on Hashnode
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
