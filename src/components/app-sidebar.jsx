import * as React from "react";
// import { GalleryVerticalEnd } from "lucide-react"
import { Geist, Fredoka } from "next/font/google";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";

const geist = Geist({
  weight: ["400"],
});
const poppins = Fredoka({
    subsets: ["latin"],
    weight: ["500"],
  });

// This is sample data.
const data = {
  navMain: [
    {
      title: "Full Stack Developer",
      url: "/",
      items: [
        { title: "Overview", url: "/about-us" },
        { title: "Projects", url: "/projects" },
        { title: "Your Project", url: "" },
        { title: "Let’s Talk", url: "" },
      ],
    },

    {
      title: "Language Specification",
      url: "/",
      items: [
        { title: "JavaScript", url: "" },
        { title: "TypeScript", url: "" },
        { title: "SQL", url: "" },
      ],
    },

    {
      title: "Backend",
      url: "/backend",
      items: [
        { title: "Node.js", url: "" },
        { title: "Express.js", url: "" },
        { title: "SQL & NO Sql Database", url: "" },
        { title: "Authentication (JWT)", url: "" },
        { title: "REST APIs", url: "" },
        { title: "GraphQL", url: "" },
        { title: "Schema Design", url: "" },
      ],
    },

    {
      title: "Frontend",
      url: "/frontend",
      items: [
        { title: "HTML, CSS, JavaScript", url: "" },
        { title: "React.js", url: "" },
        { title: "Typescript", url: "" },
        { title: "Next.js & Next-auth", url: "" },
        { title: "Redux Toolkit", url: "" },
        { title: "Tailwind CSS", url: "" },
        { title: "UI Libraries", url: "" },
        { title: "Component Architecture", url: "" },
      ],
    },
    {
      title: "Database",
      url: "/",
      items: [
        { title: "My SQL", url: "" },
        { title: "MongoDB", url: "" },
        { title: "Postgress SQL", url: "" },
      ],
    },

    {
      title: "Projects",
      url: "/projects",
      items: [
        { title: "SSM College", url: "" },
        { title: "Ecommerce", url: "" },
        { title: "Blinkit", url: "" },
        { title: "Mystry App", url: "" },
        { title: "Next - Auth", url: "" },
      ],
    },

    {
      title: "Next.js (Full Stack)",
      url: "/",
      items: [
        { title: "Client Components", url: "" },
        { title: "Server Components", url: "" },
        { title: "API Routes", url: "" },
        { title: "Authentication", url: "" },
        { title: "SEO Optimization", url: "" },
      ],
    },

    {
      title: "DevOps & Hosting",
      url: "/",
      items: [
        { title: "End-to-End Deployment", url: "" },
        { title: "VPS Hosting", url: "" },
        { title: "Domain Setup", url: "" },
        { title: "Hosting Setup", url: "" },
      ],
    },
    {
      title: "Tools & Software",
      url: "/",
      items: [
        { title: "Git & Github", url: "" },
        { title: "Docker", url: "" },
        { title: "Postman", url: "" },
      ],
    },
    {
      title: "Application Features",
      url: "/",
      items: [
        { title: "Email Verification", url: "" },
        { title: "File Management", url: "" },
        { title: "Role-Based Access", url: "" },
        { title: "Encrypted Passwords", url: "" },
        { title: "Protected Routes", url: "" },
      ],
    },
    {
      title: "Schema Design",
      url: "/schema-design",
      items: [
        { title: "Mongoose", url: "" },
        { title: "Prisma", url: "" },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link className={`${poppins.className}`} href={item.url}>
                    {item.title}
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <Link className={`opacity-75 ${geist.className}`} href={item.url}>{item.title}</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
