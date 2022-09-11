import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav
      className="flex flex-row justify-center items-center text-center
      font-[Khumb]
    px-5
    py-1
    w-full
    text-[#D5D5D5]
    bg-[#ffffff]
  "
    >
      <div className="flex flex-row text-[#303030] justify-center items-center text-center text-base sm:text-left">
        <h1>My Portofolio</h1>
      </div>
    </nav>
  );
};

export default Navbar;
