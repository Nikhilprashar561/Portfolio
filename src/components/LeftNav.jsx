import { Avatar, AvatarImage } from "@/components/ui/avatar";

const LeftNav = () => {
  return (
    <div className="flex items-center gap-1">
      <div>
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/176056175?v=4" />
          {/* <AvatarFallback>CN</AvatarFallback> */}
        </Avatar>
      </div>
      <div>
        <h1>Nikhil Prashar</h1>
        <p className="text-xs">Full Stack Developer</p>
      </div>
    </div>
  );
};

export default LeftNav;
