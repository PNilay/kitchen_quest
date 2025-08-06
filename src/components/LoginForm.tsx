// components/LoginForm.tsx

"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

let stagger_effact = {
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

let stagger_childs = {
  initial: {
    x: "-100%",
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

function LoginForm() {
  return (
    <motion.div
      key="login"
      className="flex"
      variants={stagger_effact}
      initial="initial"
      animate="open"
      exit="initial"
    >
      <div className="max-md:w-[85%] w-[60%] grow-2">
        <form action="#" className="pt-12 flex flex-col gap-6">
          <motion.div variants={stagger_childs}>
            <div className="max-sm:text-3xl text-4xl font-semibold">Welcome Back</div>
            <span className="text-sm">Login to access your Kitchen Quest Account</span>
          </motion.div>
          <div className="flex flex-col gap-8">
            <motion.div className="h-12" variants={stagger_childs}>
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

            <motion.div className="h-12" variants={stagger_childs}>
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
          </div>

          <motion.span variants={stagger_childs}>Forgot Password?</motion.span>

          <motion.div className="h-12 grow-1" variants={stagger_childs}>
            <button className="w-full h-full text-white bg-green-500 rounded-md hover:bg-green-400 px-5 py-2">
              Login
            </button>
          </motion.div>

          <motion.div className="text-center" variants={stagger_childs}>
            <span>
              Not registered yet?{" "}
              <Link href="/account/register" className="text-emerald-500">
                Create new account
              </Link>
            </span>
          </motion.div>

          <motion.div variants={stagger_childs} className="text-center">
            Or
          </motion.div>

          <motion.div className=" flex justify-center h-12" variants={stagger_childs}>
            <button className="h-full text-white bg-green-500 rounded-md hover:bg-green-400 px-5 py-2">
              Google
            </button>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
}

export default LoginForm;
