"use client";
import React from "react";
import { motion } from "motion/react";
import { Toggle } from "../Toogle";
import { MenuIcon } from "lucide-react";
import LeftNav from "../LeftNav";
import { Bar } from "../Bar";



const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white">
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div
              className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                // layoutId ensures smooth animation
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-1xl overflow-hidden border border-black/[0.2] dark:border-white/[0.1] shadow-xl">
                <motion.div
                  // layout ensures smooth animation
                  layout
                  className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children
}) => {
  return (
    <nav
      // resets the state
      onMouseLeave={() => setActive(null)}
      className="relative rounded-2xl border border-zinc-500 dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-between items-center space-x-4 remove px-7 mx-4 py-3 ">
      <div className="flex items-center gap-2">
        <LeftNav />
      </div>
      {children}
      <div className="flex items-center gap-2">
        <Toggle  />
        <Bar />
      </div>
    </nav>
  );
};