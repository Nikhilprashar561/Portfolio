"use client"

import * as React from "react"
import Link from "next/link"

import { Fredoka, Poppins } from "next/font/google";

import { useIsMobile } from "../hooks/use-mobile"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import SocialLinks from "./SocialLinks";
import Contact from "./Contact";

const poppins = Fredoka({
  subsets: ["latin"],
  weight: ["500"],
});

export function FooterMenu() {
  const isMobile = useIsMobile()
  const [isOpen, setOpen] = React.useState(false)
  const [contactOpen, setOpenContact] = React.useState(false)

  return (
    <>
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="grid grid-cols-3 flex-col  gap-1 sm:grid-cols-4 sm:gap-4">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className={poppins.className} target="_blank" href="https://drive.google.com/file/d/1GrFoR6qyh0DTLguvPfcu_a0huMqK8S7W/view?usp=sharing">Resume/CV</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link className={poppins.className} href="/about-us">About-ME</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <span onClick={() => setOpen(true)} className={`${poppins.className} cursor-pointer`}>Social Media</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden sm:block">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <span onClick={() => setOpenContact(true)} className={`${poppins.className} cursor-pointer`}>Contact</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    {isOpen && <SocialLinks  close={() => setOpen(false)} />}
    {contactOpen && <Contact close={() => setOpenContact(false)} />}

    </>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
