"use client"

import { MoreHorizontalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export function Bar() {

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button className={"cursor-pointer"} variant="outline" aria-label="Open menu" size="icon-sm">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="end">
          <DropdownMenuLabel className={"flex justify-center items-center"}>
            <Link href={"https://github.com/Nikhilprashar561"} target="_blank">1. Tools & Tech Stack</Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel className={"flex justify-center items-center"}>
            <Link href={"https://github.com/Nikhilprashar561"} target="_blank">GSAP & Framer.</Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel className={"flex justify-center items-center"}>
            <Link href={"https://github.com/Nikhilprashar561"} target="_blank">4. Redux</Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel className={"flex justify-center items-center"}>
            <Link href={"https://github.com/Nikhilprashar561"} target="_blank">5. Hire ME!</Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel className={"flex justify-center items-center"}>
            <Link href={"https://github.com/Nikhilprashar561"} target="_blank">6. Full Stack Feature.</Link>
          </DropdownMenuLabel>
          
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}