"use client";

import { motion } from "framer-motion";
import Link from "next/link";

let stagger_effact_2 = {
  initial: {
    transition: {
      staggerDirection: 1,
      staggerChildren: 0.09,
    },
  },

  open: {
    transition: {
      staggerDirection: -1,
      // delayChildren: 0.5,
      staggerChildren: 0.09,
    },
  },
};

let stagger_childs_2 = {
  initial: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },

  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export default function SignupForm() {
  return (
    <motion.div
      key="signup"
      className=" max-md:w-[85%]"
      variants={stagger_effact_2}
      initial="initial"
      animate="open"
      exit="initial"
    >
      <motion.div variants={stagger_childs_2}>
        <div className="text-4xl font-semibold">Get Started Now.</div>
        <span className="text-sm">Let's get you all set up so you can use your person account!</span>
      </motion.div>

      <form action="#" className="pt-12 flex flex-col gap-6">
        <div className="flex flex-wrap justify-left gap-6">
          <motion.div className="h-12 grow-1 min-w-30" variants={stagger_childs_2}>
            <label htmlFor="first_name" className="relative">
              <input
                type="text"
                id="first_name"
                className="text-black h-full w-full text-lg px-5  border-2 rounded-lg peer border-black border-opacity-50 outline-none focus:border-amber-500 focus:text-black transition duration-200"
                required
              />
              <span className=" absolute bg-white left-4 -top-6 text-sm text-black text-opacity-80 px-2 peer-focus:text-amber-500 transition duration-200">
                First Name
              </span>
            </label>
          </motion.div>

          <motion.div className="h-12 grow-1 min-w-30" variants={stagger_childs_2}>
            <label htmlFor="last_name" className="relative">
              <input
                type="text"
                id="last_name"
                className="text-black h-full w-full text-lg px-5  border-2 rounded-lg peer border-black border-opacity-50 outline-none focus:border-amber-500 focus:text-black transition duration-200"
                required
              />
              <span className=" absolute bg-white left-4 -top-6 text-sm text-black text-opacity-80 px-2 peer-focus:text-amber-500 transition duration-200">
                Last Name
              </span>
            </label>
          </motion.div>
        </div>
        <div className="flex flex-col gap-8">
          <motion.div className="h-12" variants={stagger_childs_2}>
            <label htmlFor="email" className="relative">
              <input
                type="email"
                id="email"
                className="text-black h-full w-full text-lg px-5  border-2 rounded-lg peer border-black border-opacity-50 outline-none focus:border-amber-500 focus:text-black transition duration-200"
                required
              />
              <span className=" absolute bg-white left-4 -top-6 text-sm text-black text-opacity-80 px-2 peer-focus:text-amber-500 transition duration-200">
                Email
              </span>
            </label>
          </motion.div>

          <motion.div className="h-12" variants={stagger_childs_2}>
            <label htmlFor="password" className="relative">
              <input
                type="password"
                id="password"
                className="text-black h-full w-full text-lg px-5  border-2 rounded-lg peer border-black border-opacity-50 outline-none focus:border-amber-500 focus:text-black transition duration-200"
                required
              />
              <span className=" absolute bg-white left-4 -top-6 text-sm text-black text-opacity-80 px-2 peer-focus:text-amber-500 transition duration-200">
                Password
              </span>
            </label>
          </motion.div>

          <motion.div className="h-12" variants={stagger_childs_2}>
            <label htmlFor="confirmPass" className="relative">
              <input
                type="password"
                id="confirmPass"
                className="text-black h-full w-full text-lg px-5  border-2 rounded-lg peer border-black border-opacity-50 outline-none focus:border-amber-500 focus:text-black transition duration-200"
                required
              />
              <span className=" absolute bg-white left-4 -top-6 text-sm text-black text-opacity-80 px-2 peer-focus:text-amber-500 transition duration-200">
                Confirm Password
              </span>
            </label>
          </motion.div>
        </div>

        <motion.div className="h-12 grow-1" variants={stagger_childs_2}>
          <button className="w-full h-full text-white bg-green-500 rounded-md hover:bg-green-400 px-5 py-2">
            Create Account
          </button>
        </motion.div>

        <motion.div className="text-center" variants={stagger_childs_2}>
          <span>
            Already have an acount?
            <Link href="/account/signin" className="text-emerald-600">
              Login
            </Link>
          </span>
        </motion.div>

        <motion.div className="text-center" variants={stagger_childs_2}>
          Or
        </motion.div>

        <motion.div className=" flex justify-center h-12" variants={stagger_childs_2}>
          <button className="h-full text-white bg-green-500 rounded-md hover:bg-green-400 px-5 py-2">
            Google
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
}
