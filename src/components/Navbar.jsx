"use client";
import React, { useState } from "react";
import { Menu } from "./aceternity/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

import { Fredoka, Poppins } from "next/font/google";
import { TextRevealCard } from "./aceternity/text-reveal-card";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div className={cn("relative w-full max-w-7xl mx-auto", className)}>
      <Menu setActive={setActive}>
        {/* <MenuItem active={active} item="Products"></MenuItem> */}
        <Link className="hidden sm:block" href={"/projects"}>
          <div className="flex items-center justify-center bg-[#0E0E10] rounded-2xl">
            <TextRevealCard
              text="Projects"
              revealText="Projects"
            ></TextRevealCard>
          </div>
        </Link>
      </Menu>
    </div>
  );
}
