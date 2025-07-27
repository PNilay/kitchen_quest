import React from "react";

function page() {
  return (
    <div className="h-screen w-full flex bg-slate-700">
      <div className="w-[40%] flex flex-col items-center gap-12 pt-8 bg-white lg:rounded-r-3xl max-lg:grow-1">
        <div className="grow-1"></div>
        <div className="max-md:w-[85%] w-[60%] grow-2">
          <div>
            <div className="max-sm:text-3xl text-4xl font-semibold">Welcome Back</div>
            <span className="text-sm">Login to access your Kitchen Quest Account</span>
          </div>

          <form action="#" className="pt-12 flex flex-col gap-6">
            <div className="flex flex-col gap-8">
              <div className="h-12">
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
              </div>

              <div className="h-12">
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
              </div>
            </div>

            <span>Forgot Password?</span>

            <div className="h-12 grow-1">
              <button className="w-full h-full text-white bg-green-500 rounded-md hover:bg-green-400 px-5 py-2">
                Login
              </button>
            </div>

            <div className="text-center">
              <span>Not registered yet? Create new account</span>
            </div>

            <div className="text-center">Or</div>

            <div className=" flex justify-center h-12">
              <button className="h-full text-white bg-green-500 rounded-md hover:bg-green-400 px-5 py-2">
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="max-lg:hidden">
        <div>{/* Logo Section */}</div>
      </div>
    </div>
  );
}

export default page;
