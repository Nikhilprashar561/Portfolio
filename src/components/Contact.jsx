import { X } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Contact = ({ close }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md">
      {/* GLOBAL CLOSE BUTTON (TOP RIGHT OF SCREEN) */}
      <Button
        onClick={close}
        className="
              fixed top-6 right-6 z-50
              flex h-10 w-10 items-center justify-center
              rounded-full
              cursor-pointer
            "
      >
        <X />
      </Button>

      {/* CENTERED SLIDER */}
      <div className="flex h-full items-center justify-center">
        <div className="w-full max-w-sm rounded-md items-center justify-center py-2 px-4 bg-background">
          Contact Me
        </div>
      </div>
    </div>
  );
};

export default Contact;
