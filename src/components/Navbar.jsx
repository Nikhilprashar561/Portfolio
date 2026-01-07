"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./aceternity/navbar-menu";
import { cn } from "@/lib/utils";
import { Toggle } from "./Toogle";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("relative w-full max-w-7xl mx-auto", className)}>
      <Menu setActive={setActive}>
        {/* <MenuItem active={active} item="Products"></MenuItem> */}
        <Link className="hidden sm:block" href={""}>Project</Link>
      </Menu>
    </div>
  );
}
