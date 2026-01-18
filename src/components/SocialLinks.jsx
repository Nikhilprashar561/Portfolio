"use client"
import React from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { FloatingDock } from "./aceternity/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

const SocialLinks = ({ close }) => {
  const links = [
    {
      title: "Linkdin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/nikhilprashar1/",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/nikhilprashar.___",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/NikhilPrashar_",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Nikhilprashar561",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md">
      {/* GLOBAL CLOSE BUTTON (TOP RIGHT OF SCREEN) */}
      <Button
        onClick={close}
        className="
          fixed top-6 right-6 z-50
          flex h-10 w-10 items-center justify-center
          rounded-full
          cursor-pointer
        "
      >
        <X />
      </Button>

      {/* CENTERED SLIDER */}
      <div className="flex h-full items-center justify-center">
        <div className="flex items-center justify-center h-[35rem] w-full">
          <FloatingDock
            mobileClassName="translate-y-20" // only for demo, remove for production
            items={links}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
