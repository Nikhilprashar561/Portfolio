import * as React from "react";
// import { GalleryVerticalEnd } from "lucide-react"

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

// This is sample data.
const data = {
  navMain: [
    {
      title: "Full Stack Developer",
      url: "/resume",
      items: [
        { title: "Overview", url: "/resume" },
        { title: "Projects", url: "/resume/skills" },
        { title: "Authorization", url: "" },
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
      ],
    },

    {
      title: "Frontend",
      url: "/frontend",
      items: [
        { title: "HTML, CSS, JavaScript", url: "" },
        { title: "React.js", url: "/frontend/react" },
        { title: "Component Architecture", url: "" },
        { title: "State Management", url: "" },
        { title: "UI Libraries", url: "" },
      ],
    },

    {
      title: "MERN Stack",
      url: "/mern",
      items: [
        { title: "MongoDB", url: "" },
        { title: "Express", url: "" },
        { title: "React Integration", url: "" },
        { title: "Full Stack Flow", url: "" },
        { title: "Accessibility", url: "" },
      ],
    },

    {
      title: "Next.js (Full Stack)",
      url: "/nextjs",
      items: [
        { title: "App Router", url: "" },
        { title: "Server Components", url: "" },
        { title: "API Routes", url: "" },
        { title: "Authentication", url: "" },
        { title: "Deployment Guide", url: "" },
      ],
    },

    {
      title: "DevOps & Hosting",
      url: "/devops",
      items: [
        { title: "Git & GitHub", url: "" },
        { title: "CI / CD Basics", url: "" },
        { title: "Docker Basics", url: "" },
        { title: "Vercel & Netlify", url: "" },
        { title: "Production Checklist", url: "" },
      ],
    },

    {
      title: "My Journey",
      url: "/journey",
      items: [
        { title: "Learning Path", url: "" },
        { title: "Mistakes", url: "" },
        { title: "Career Goals", url: "" },
      ],
    },

    {
      title: "Project Suggestions",
      url: "/projects",
      items: [
        { title: "Beginner Projects", url: "" },
        { title: "Intermediate Projects", url: "" },
        { title: "Full Stack Projects", url: "" },
      ],
    },

    {
      title: "Language Specific",
      url: "/languages",
      items: [
        { title: "JavaScript Deep Dive", url: "" },
        { title: "TypeScript", url: "" },
        { title: "SQL Basics", url: "" },
      ],
    },

    {
      title: "Project Solutions",
      url: "/solutions",
      items: [
        { title: "Auth System", url: "" },
        { title: "Dashboard", url: "" },
        { title: "Role-Based Access", url: "" },
      ],
    },
    {
      title: "Database Design",
      url: "/database",
      items: [
        { title: "Schema Design", url: "" },
        { title: "Relations & Indexing", url: "" },
        { title: "Optimization Tips", url: "" },
      ],
    },
    {
      title: "Schema Design",
      url: "/schema-design",
      items: [
        {
          title: "Mongoose",
          url: "",
        },
        {
          title: "Prisma",
          url: "",
        },
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
                  <Link href={item.url} className="font-medium">
                    {item.title}
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <Link href={item.url}>{item.title}</Link>
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
