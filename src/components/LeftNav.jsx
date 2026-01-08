import { Avatar, AvatarImage } from "@/components/ui/avatar";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import ImageSlider from "./ImageSlider";

const LeftNav = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center gap-1">
      <div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Avatar>
              <AvatarImage onClick={() => setIsOpen(true)} src="https://avatars.githubusercontent.com/u/176056175?v=4" />
              {/* <AvatarFallback>CN</AvatarFallback> */}
            </Avatar>
          </TooltipTrigger>
          <TooltipContent>
            <p>View Picture</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div>
        <h1>Nikhil Prashar</h1>
        <p className="text-xs">Full Stack Developer</p>
      </div>
      {isOpen && (
      <ImageSlider close={() => setIsOpen(false)} />
    )}
    </div>
  );
};

export default LeftNav;

// <Tooltip>
//   <TooltipTrigger asChild>
//     <Button variant="outline">Hover</Button>
//   </TooltipTrigger>
//   <TooltipContent>
//     <p>Add to library</p>
//   </TooltipContent>
// </Tooltip>;
