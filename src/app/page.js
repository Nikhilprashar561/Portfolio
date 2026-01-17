"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../components/aceternity/Spotlight";
import { Fredoka } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { Modal, ModalTrigger } from "@/components/aceternity/animated-modal";
import { Github } from "lucide-react";
import Link from "next/link";

const fredoka = Fredoka({
  weight: ["500"],
});
const fredok = Fredoka({
  weight: ["400"],
});


export default function Home() {
  const words = [
    "View my skills",
    "view my projects",
    "for backend developer",
    "your product",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className={`relative flex h-auto sm:h-[572px] w-full ${GeistSans.className} justify-center items-center py-10 bg-white dark:bg-black`}
      >
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] dark:bg-black"></div>
        <div className="flex flex-col items-center">
          <p
            className={`relative z-20 bg-gradient-to-b bg-clip-text py-4 text-3xl ${fredoka.className} sm:text-6xl`}
          >
            Why are you here
          </p>
          <span
            className={`relative ${fredoka.className} inline-block text-2xl sm:text-5xl opacity-80 perspective-[600px]`}
          >
            <span
              key={index}
              className="
          inline-block
          whitespace-nowrap
          origin-bottom
          animate-flip
        "
            >
              {words[index]}
            </span>
          </span>
          <p
            className={`relative z-10 mx-auto max-w-lg py-4 text-center text-[15px] font-normal ${fredok.className} text-neutral-600 dark:text-neutral-400`}
          >
            💼 I'm Nikhil 👋 — a MERN Stack Developer passionate about building
            modern, user-focused web applications. I help startups and
            individuals bring their ideas to life with creative and scalable
            tech solutions.
          </p>
          <Modal>
            <ModalTrigger className="bg-black dark:bg-white dark:text-black cursor-pointer text-white flex justify-center group/modal-btn">
              <span
                className={`group-hover/modal-btn:translate-x-44 text-center transition duration-500 ${fredok.className} `}
              >
                Github Repositories
              </span>
              <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                <Link
                  href={"https://github.com/Nikhilprashar561?tab=repositories"}
                  target="_blank"
                >
                  <Github className="bg-black p-0.5 rounded-full" />
                </Link>
              </div>
            </ModalTrigger>
          </Modal>
        </div>
      </div>
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill={"#468BFF"}
      />
    </>
  );
}
