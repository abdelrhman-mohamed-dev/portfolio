import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="lg:flex lg:justify-between z-50 relative">
      <h1 className="text-center text-2xl cursor-pointer font-black italic text-green-400">
        Abdelrhman Muhammad
      </h1>
      <ul className="hidden lg:flex gap-12 items-center">
        <li className="relative">
          <a
            href={"/"}
            download
            className="bg-transparent text-green-400 font-bold text-sm uppercase py-2 px-4 border border-green-400 rounded-full hover:bg-green-500 hover:text-white duration-300 ease-in-out transition-all"
          >
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
