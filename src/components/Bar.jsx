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
import { useState } from "react"
import Contact from "./Contact"

export function Bar() {
  const [isOpen, setOpen] = useState(false)

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
            <Link href={"https://github.com/Nikhilprashar561"} target="_blank">Skills & Tools</Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel className={"flex justify-center items-center"}>
            <Link href={"https://github.com/Nikhilprashar561"} target="_blank">Project Discussion</Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel className={"flex justify-center items-center"}>
            <Link href={"https://github.com/Nikhilprashar561"} target="_blank">Optimize Solution</Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel className={"flex justify-center items-center"}>
            <Link href={"https://github.com/Nikhilprashar561"} target="_blank">Client Needs</Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel className={"flex justify-center items-center"}>
            <Link href={"https://github.com/Nikhilprashar561"} target="_blank">Work Process</Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel className={"flex justify-center items-center"}>
            <Link href={"https://github.com/Nikhilprashar561"} target="_blank">Feedback</Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel className={"flex justify-center items-center"}>
            <span onClick={() => setOpen(true)} className="cursor-pointer">Contact / Hire Me</span>
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
      {isOpen && <Contact close={() => setOpen(false)} />}
    </>
  )
}