"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";

let variant_div = {
  small_screen: {
    x: 0,
    width: "100%",
  },

  initial_signIn: {
    x: 0,
    width: "40%",
  },

  initial_signUp: {
    x: "66.67%",
    width: "60%",
  },

  move_left: {
    x: 0,
    width: "40%",
    transition: {
      duration: 1,
    },
  },

  move_right: {
    x: "66.67%",
    width: "60%",
    transition: {
      duration: 1,
    },
  },
};

let variant_div2 = {
  initial_signIn: {
    x: 0,
    width: "60%",
  },

  initial_signUp: {
    x: "-150%",
    width: "40%",
  },

  move_left: {
    x: 0,
    width: "60%",
    transition: {
      duration: 1,
    },
  },

  move_right: {
    x: "-150%",
    width: "40%",
    transition: {
      duration: 1,
    },
  },
};

//   Images

let variant_signup_grp = {
  initial: {
    scale: 0,
    opacity: 0,
  },

  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.3,
    },
  },
};

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  let [isLogin, setIsLogin] = useState(pathname == "/account/signin");
  let ac = useAnimationControls();

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: 768px)`);
    const updateMatches = () => setIsMobile(mediaQuery.matches);

    updateMatches();

    mediaQuery.addEventListener("change", updateMatches);

    return () => mediaQuery.removeEventListener("change", updateMatches);
  });

  useEffect(() => {
    !isMobile
      ? pathname == "/account/register"
        ? ac.start("move_right")
        : ac.start("move_left")
      : ac.start("small_screen");
    setIsLogin(pathname == "/account/signin");
  }, [pathname]);

  useEffect(() => {
    !isMobile ? (!isLogin ? ac.start("move_right") : ac.start("move_left")) : ac.start("small_screen");
  }, [isMobile]);

  return (
    <div className={`h-screen w-full flex justify-center ${isLogin ? "bg-[#1A4D2E]" : "bg-[#874000]"}`}>
      <motion.div
        layout
        className={`${
          !isMobile ? (isLogin ? "w-[40%] lg:rounded-r-3xl" : "w-[60%] lg:rounded-l-3xl") : "w-[100%]"
        }  max-md:w-full flex flex-col items-center gap-12 pt-8 bg-white   z-2 relative overflow-hidden`}
        variants={variant_div}
        initial={!isMobile ? (isLogin ? "initial_signIn" : "initial_signUp") : "small_screen"}
        animate={ac}
      >
        <AnimatePresence mode="wait">
          {/* <motion.div key={pathname}>{children}</motion.div> */}
          {isLogin ? <LoginForm key={pathname} /> : <SignupForm key={pathname} />}
        </AnimatePresence>
      </motion.div>
      <motion.div
        className=" max-[769px]:hidden bg-transparent w-[60%]"
        variants={variant_div2}
        animate={ac}
        initial={isLogin ? "initial_signIn" : "initial_signUp"}
      >
        <AnimatePresence>
          {isLogin ? (
            <motion.div
              className="mx-10"
              key="signup_img"
              variants={variant_signup_grp}
              initial="initial"
              animate="animate"
            >
              <img src="/SignUp_Group.svg" alt="..." className="w-full h-screen pb-15" />
            </motion.div>
          ) : (
            <motion.div
              className="relative"
              key="signin_img"
              variants={variant_signup_grp}
              initial="initial"
              animate="animate"
            >
              <img src="/SignIn_Component.svg" alt="..." className="w-full h-screen" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
