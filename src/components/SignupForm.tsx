"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import registerUser from "@/actions/register";
import { Info, CircleCheck } from "lucide-react";
import confetti from "canvas-confetti";

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

const initialState = {
  success: false,
  message: "",
  errors: {},
};

function SignupForm() {
  const [state, formAction, pending] = useActionState(registerUser, initialState);
  const router = useRouter();

  // Redirect to signin page
  useEffect(() => {
    if (state?.success) {
      showConfettiFireworks();
      const timer = setTimeout(() => {
        router.push("/account/signin");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [state, router]);

  // Create confetti fireworks
  const showConfettiFireworks = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    }

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 100 * (timeLeft / duration);
      confetti({
        ...defaults,
        zIndex: 999,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        zIndex: 999,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

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

      <form action={formAction} className="pt-12 flex flex-col gap-8">
        <div className="flex flex-wrap justify-left gap-6">
          <motion.div className="h-12 grow-1 min-w-30" variants={stagger_childs_2}>
            <label htmlFor="first_name" className="relative">
              <input
                type="text"
                id="first_name"
                className="text-black h-full w-full text-lg px-5  border-2 rounded-lg peer border-black border-opacity-50 outline-none focus:border-amber-500 focus:text-black transition duration-200"
                required
                name="firstName"
                defaultValue={state.inputs?.firstName}
              />
              <span className=" absolute bg-white left-4 -top-6 text-sm text-black text-opacity-80 px-2 peer-focus:text-amber-500 transition duration-200">
                First Name
              </span>
              {state?.errors?.firstName && (
                <p className="text-xs text-red-500 m-1">{state.errors.firstName[0]}</p>
              )}
            </label>
          </motion.div>

          <motion.div className="h-12 grow-1 min-w-30" variants={stagger_childs_2}>
            <label htmlFor="last_name" className="relative">
              <input
                type="text"
                id="last_name"
                className="text-black h-full w-full text-lg px-5  border-2 rounded-lg peer border-black border-opacity-50 outline-none focus:border-amber-500 focus:text-black transition duration-200"
                required
                name="lastName"
                defaultValue={state.inputs?.lastName}
              />
              <span className=" absolute bg-white left-4 -top-6 text-sm text-black text-opacity-80 px-2 peer-focus:text-amber-500 transition duration-200">
                Last Name
              </span>
              {state?.errors?.lastName && (
                <p className="text-xs text-red-500 m-1">{state.errors.lastName[0]}</p>
              )}
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
                name="email"
                defaultValue={state.inputs?.email}
              />
              <span className=" absolute bg-white left-4 -top-6 text-sm text-black text-opacity-80 px-2 peer-focus:text-amber-500 transition duration-200">
                Email
              </span>
              {state?.errors?.email && (
                <p className="text-xs text-red-500 m-1">{state.errors.email[0]}</p>
              )}
            </label>
          </motion.div>

          <motion.div className="h-12" variants={stagger_childs_2}>
            <label htmlFor="password" className="relative">
              <input
                type="password"
                id="password"
                className="text-black h-full w-full text-lg px-5  border-2 rounded-lg peer border-black border-opacity-50 outline-none focus:border-amber-500 focus:text-black transition duration-200"
                required
                name="password"
                defaultValue={state.inputs?.password}
              />
              <span className=" absolute bg-white left-4 -top-6 text-sm text-black text-opacity-80 px-2 peer-focus:text-amber-500 transition duration-200">
                Password
              </span>
              {state?.errors?.password && (
                <p className="text-xs text-red-500 my-1">{state.errors.password[0]}</p>
              )}
            </label>
          </motion.div>

          <motion.div className="h-12" variants={stagger_childs_2}>
            <label htmlFor="confirmPass" className="relative">
              <input
                type="password"
                id="confirmPass"
                className="text-black h-full w-full text-lg px-5  border-2 rounded-lg peer border-black border-opacity-50 outline-none focus:border-amber-500 focus:text-black transition duration-200"
                required
                name="confirmPassword"
                defaultValue={state.inputs?.confirmPassword}
              />
              <span className=" absolute bg-white left-4 -top-6 text-sm text-black text-opacity-80 px-2 peer-focus:text-amber-500 transition duration-200">
                Confirm Password
              </span>
              {state?.errors?.confirmPassword && (
                <p className="text-xs text-red-500 mt-1">{state.errors.confirmPassword[0]}</p>
              )}
            </label>
          </motion.div>
        </div>

        <div className="flex flex-col gap-8">
          <motion.div className="h-12" variants={stagger_childs_2}>
            {state?.message && state.success && (
              <div className="flex items-start text-sm px-5 py-2 mt-2 space-x-3 border border-green-500 text-green-500 rounded-md">
                <CircleCheck className="w-5 h-5 mt-2" />
                <div>
                  <p className="font-semibold">Success</p>
                  <p>{state.message}</p>
                </div>
              </div>
            )}

            {state?.message && !state.success && (
              <div className="flex items-start text-sm px-5 py-2 mt-2 space-x-3 border border-red-500 text-red-500 rounded-md">
                <Info className="w-5 h-5 mt-2" />
                <div>
                  <p className="font-semibold">Error</p>
                  <p>{state.message}</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        <motion.div className="h-12 grow-1" variants={stagger_childs_2}>
          <button
            className="w-full h-full text-white bg-green-500 rounded-md hover:bg-green-400 px-5 py-2"
            disabled={pending}
            type="submit"
          >
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

export default SignupForm;
