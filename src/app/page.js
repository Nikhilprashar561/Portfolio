import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../components/aceternity/Spotlight";

export default function Home() {
  return (
    <>
      <div className="relative flex h-[572px] w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <h1>Beliver Me i'm developer</h1>
      </div>
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill={"#468BFF"}
      />
    </>
  );
}
