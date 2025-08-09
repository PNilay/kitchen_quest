"use client";

import { AnimatePresence, motion} from "motion/react";

import React, { useState } from "react";

let navbar_menu = [
  { id: 1, title: "Home", link: "#" },
  { id: 2, title: "Recipes", link: "#" },
  { id: 3, title: "Meal Plan", link: "#" },
  { id: 4, title: "About Us", link: "#" },
];

let menu_effact = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.3,
    },
    ease: [0.12, 0, 0.39, 0],
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
    ease: [0.22, 1, 0.36, 1],
  },
};

let link_effact = {
  initial: {
    y: "30vh",

    transition: {
      duration: 0.5,
    },
  },

  open: {
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

let ul_link_effact = {
  initial: {
    transition: {
      staggerDirection: -1,
      staggerChildren: 0.09,
    },
  },

  open: {
    transition: {
      staggerDirection: 1,
      staggerChildren: 0.09,
    },
  },
};

function Navbar() {
  let [isHamburger, setIsHamburger] = useState(false);

  let updateHamburger = () => {
    setIsHamburger(!isHamburger);
  };

  return (
    <nav>
      <div className="max-w-screen flex justify-between mx-0 my-0 bg-amber-300 px-12 max-md:px-4 h-[70px] font-semibold">
        <div className="flex flex-col justify-center grow">
          <img src="/KitchenQuest_Logo.svg" alt="..." className="w-32 max-md:w-24" />
        </div>

        <div className="hidden lg:flex flex-col justify-center grow-2 md:mx-12">
          <ul className="flex items-center justify-center gap-6">
            {navbar_menu.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden lg:flex justify-end items-center grow">
          <div className="text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0 px-5 py-2">
            <a href="/account/signin"> LogIn </a>
          </div>
          <div className="text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0 ml-4 px-5 py-2">
            <a href="/account/register">Sign Up</a>
          </div>
        </div>

        <div className="lg:hidden flex flex-col justify-center">
          <button
            aria-pressed={isHamburger ? true : false}
            className="z-11 group flex w-12 h-12 text-white-800 bg-green text-center items-center justify-center rounded shadow-[0_1px_0_theme(colors.slate.950/.04),0_1px_2px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] hover:shadow-[0_1px_0_theme(colors.slate.950/.04),0_4px_8px_theme(colors.slate.950/.12),inset_0_-2px_0_theme(colors.slate.950/.04)] transition"
            onClick={updateHamburger}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="w-6 h-6 fill-current pointer-events-none"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg]"
                y="7"
                width="9"
                height="2"
                rx="1"
              ></rect>
              <rect
                className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45"
                y="7"
                width="16"
                height="2"
                rx="1"
              ></rect>
              <rect
                className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[135deg]"
                y="7"
                width="9"
                height="2"
                rx="1"
              ></rect>
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isHamburger && (
          <motion.div
            className="origin-top absolute top-0 left-0 h-full w-full z-10"
            variants={menu_effact}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              variants={ul_link_effact}
              initial="initial"
              animate="open"
              exit="initial"
              className="text-xl font-semibold uppercase bg-green-700 text-white flex flex-col justify-center py-25 h-full"
            >
              <div className="overflow-hidden">
                <motion.div variants={link_effact} className="flex justify-center pb-10 overflow-hidden">
                  <img src="/KitchenQuest_Logo.svg" alt="..." className="w-32" />
                </motion.div>
              </div>

              <motion.ul
                className="flex flex-col gap-6 justify-around text-center"
                variants={ul_link_effact}
                initial="initial"
                animate="open"
                exit="initial"
              >
                {navbar_menu.map((item) => {
                  return (
                    <div key={item.id} className="overflow-hidden">
                      <motion.li variants={link_effact} key={item.id}>
                        <a key={item.id} href={item.link}>
                          {item.title}
                        </a>
                      </motion.li>
                    </div>
                  );
                })}
              </motion.ul>

              <div className="flex flex-col text-center gap-6 pt-10 mx-8 overflow-hidden">
                <motion.div
                  variants={link_effact}
                  className="text-white bg-green-500 rounded-md hover:bg-green-400 px-5 py-2"
                >
                  <a href="/account/signin">LogIn</a>
                </motion.div>
                <motion.div
                  variants={link_effact}
                  className="text-white bg-green-500 rounded-md hover:bg-green-400 px-5 py-2"
                >
                  <a href="/account/register"> Sign Up </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
