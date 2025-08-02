import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between mx-0 my-0 bg-amber-300 px-12 h-[70px] font-semibold">
      <div className="flex flex-col justify-center grow">
        <img src="/KitchenQuest_Logo.svg" alt="..." className="w-32" />
      </div>
      <div className="flex flex-col justify-center grow-2 mx-24">
        <ul className="flex flex-row justify-center">
          <li className="px-6">Home</li>
          <li className="px-6">Recipes</li>
          <li className="px-6">Meal Plan</li>
          <li className="px-6">About Us</li>
        </ul>
      </div>
      <div className="flex justify-end items-center grow">
        <div className="text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0 px-5 py-2">
          <a href="/account">Sign In</a>
        </div>
        <div className="text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0 ml-4 px-5 py-2">
          <a href="/account">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
