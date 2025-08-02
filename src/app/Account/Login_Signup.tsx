"use client";
import {AnimatePresence, motion, scale, useAnimationControls } from "framer-motion";
import React, { useEffect, useState } from "react";

function Login_Signup() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: 768px)`);
    console.log("Media Query: " + mediaQuery.matches);

    const updateMatches = () => setIsMobile(mediaQuery.matches);

    updateMatches();

    console.log("updated: " + isMobile);

    mediaQuery.addEventListener("change", updateMatches);

    return () => mediaQuery.removeEventListener("change", updateMatches);
  });

  useEffect(() => {
    console.log("Is Mobile Use Effect" + isMobile);
  }, [isMobile]);


  let [isLogin, setIsLogin] = useState(true);

  let [btn, setBtn] = useState(false);
  let ac = useAnimationControls();

  useEffect(() => {
    console.log("Small Screen Chnages");
    console.log(isMobile);
    !isMobile ? (!btn ? ac.start("move_right") : ac.start("move_left")) : ac.start("small_screen");
  }, [isMobile]);

  //   false - signUp
  //   true - Login

  let btnClicked = () => {
    !isMobile ? (btn ? ac.start("move_right") : ac.start("move_left")) : ac.start("small_screen");

    setBtn(!btn);
  };

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
        delayChildren: 0.5,
        staggerChildren: 0.09,
      },
    },
  };

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
        delayChildren: 0.5,
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

  return (
    <div className={`h-screen w-full flex justify-center ${btn ? "bg-[#1A4D2E]" : "bg-[#874000]"}`}>
      <motion.div
        layout
        className={`${
          !isMobile ? (btn ? "w-[40%] lg:rounded-r-3xl" : "w-[60%] lg:rounded-l-3xl") : "w-[100%]"
        }  max-md:w-full flex flex-col items-center gap-12 pt-8 bg-white   z-2 relative overflow-hidden`}
        variants={variant_div}
        initial={!isMobile ? (btn ? "initial_signIn" : "initial_signUp") : "small_screen"}
        animate={ac}
      >
        <AnimatePresence>
          {!btn ? (
            <motion.div
              key="signup"
              className=" max-md:w-[85%] md:w-[60%] absolute"
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
                    <button type="button" onClick={btnClicked} className="text-emerald-600">
                      Login
                    </button>
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
          ) : (
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
                      <button type="button" onClick={btnClicked} className="text-emerald-500">
                        Create new account
                      </button>
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
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        className=" max-[769px]:hidden bg-transparent w-[60%]"
        variants={variant_div2}
        animate={ac}
        initial={btn ? "initial_signIn" : "initial_signUp"}
      >
        <AnimatePresence>
          {btn ? (
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

export default Login_Signup;
