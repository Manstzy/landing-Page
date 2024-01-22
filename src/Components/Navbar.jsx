import React from "react";

const Navbar = () => {
  return (
    <div className="absolute w-full p-4 flex justify-between items-center z-[100]">
      <p className="text-red-500 text-4xl font-bold cursor-pointer">NETFLIX</p>
      <div className="flex items-center gap-4">
        <p className="text-white text-md cursor-pointer">Sign In</p>
        <p className="text-white text-md bg-red-500 p-2 px-6 rounded-md cursor-pointer">Sign Up</p>
      </div>
    </div>
  );
};

export default Navbar;
