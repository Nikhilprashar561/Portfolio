import React from "react";

interface StackGroup {
  name: string;
  items: string[];
}

const stackGroups: StackGroup[] = [
  {
    name: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    name: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "shadcn/ui",
      "Responsive layouts",
    ],
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "JWT authentication",
      "Zod validation",
    ],
  },
  {
    name: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Prisma ORM", "Mongoose"],
  },
  {
    name: "Tools and DevOps",
    items: [
      "Git and GitHub",
      "Docker",
      "Postman",
      "Vercel",
      "Turborepo",
      "Cloudinary",
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="wrap sec">
      <div className="split">
        <div className="rail">
          <h2 className="rt">Stack</h2>
        </div>
        <div className="stk">
          {stackGroups.map((g) => (
            <div key={g.name} className="srow">
              <div className="sname">{g.name}</div>
              <div className="tags">
                {g.items.map((item) => (
                  <span key={item} className="tg">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
