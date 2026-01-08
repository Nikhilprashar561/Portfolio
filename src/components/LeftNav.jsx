import { Avatar, AvatarImage } from "@/components/ui/avatar";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import ImageSlider from "./ImageSlider";
import { TypewriterEffectSmooth } from "./aceternity/typewriter-effect";
import Link from "next/link";
import { FlipWords } from "./aceternity/flip-words";

const LeftNav = () => {
  const words = [
    {
      text: "Nikhil",
    },
    {
      text: "Prashar",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const wordss = [
    "Full Stack Developer",
    "Software Engineer",
    "Software Developer",
    "Frontend Developer",
    "MERN Developer",
    "Backend Developer",
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center gap-1">
      <div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Avatar>
              <AvatarImage
                onClick={() => setIsOpen(true)}
                src="https://avatars.githubusercontent.com/u/176056175?v=4"
              />
              {/* <AvatarFallback>CN</AvatarFallback> */}
            </Avatar>
          </TooltipTrigger>
          <TooltipContent>
            <p>View Picture</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="justify-center items-center px-2">
        <TypewriterEffectSmooth words={words} />
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              className="flex justify-center items-center"
              href={"/projects"}
            >
              <FlipWords words={wordss} />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Click Here</p>
          </TooltipContent>
        </Tooltip>
      </div>
      {isOpen && <ImageSlider close={() => setIsOpen(false)} />}
    </div>
  );
};

export default LeftNav;
