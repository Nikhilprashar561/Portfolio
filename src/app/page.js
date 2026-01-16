"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../components/aceternity/Spotlight";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  weight: ["500"],
});

export default function Home() {
  const words = ["View my skills", "view my projects", "looking for backend developer", "your product"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative flex h-[518px] sm:h-[572px] w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] dark:bg-black"></div>
        <div className="flex flex-col justify-center items-center">
          <p
            className={`relative z-20 bg-gradient-to-b bg-clip-text py-4 text-3xl ${fredoka.className} sm:text-6xl`}
          >
            Why are you here
          </p>
          <span className={`relative ${fredoka.className} inline-block text-2xl sm:text-5xl opacity-80 perspective-[600px]`}>
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
        </div>
      </div>
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill={"#468BFF"}
      />
    </>
  );
}
