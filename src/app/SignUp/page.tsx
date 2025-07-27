import React from "react";

function page() {
  return (
    <div className="h-screen w-full flex bg-slate-700">
      <div className="w-[40%] max-lg:hidden"></div>
      <div className=" flex flex-col items-center w-[65%] gap-12 pt-8 bg-white lg:rounded-l-3xl max-lg:grow-1">
        <div>{/* Logo Section */}</div>
        <div className=" max-md:w-[85%] md:w-[60%]">
          <div>
            <div className="text-4xl font-semibold">Get Started Now.</div>
            <span className="text-sm">Let's get you all set up so you can use your person account!</span>
          </div>

          <form action="#" className="pt-12 flex flex-col gap-6">
            <div className="flex flex-wrap justify-left gap-6">
              <div className="h-12 grow-1 min-w-30">
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
              </div>

              <div className="h-12 grow-1 min-w-30">
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
              </div>
            </div>
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

              <div className="h-12">
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
              </div>
            </div>

            {/* <span>I agree to all terms and Privacy Policies</span> */}

            <div className="h-12 grow-1">
              <button className="w-full h-full text-white bg-green-500 rounded-md hover:bg-green-400 px-5 py-2">
                Create Account
              </button>
            </div>

            <div className="text-center">
              <span>Already have an acount? Login</span>
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
    </div>
  );
}

export default page;
