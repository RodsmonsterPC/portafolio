"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useDataContext } from "../context/context";
const Navbar = ({ links }) => {
  const mode = useDataContext();
  const { setDark, dark } = mode;

  return (
    <div>
      <nav
        className={`flex justify-between text-slate-900 h-12 drop-shadow-md fixed top-0 left-0 right-0  ${
          dark ? "bg-gradient-to-r from-zinc-400 to-zinc-400 " : "bg-white"
        }`}
      >
        <ul className="flex flex-row">
          {links.map((link) => (
            <li className={`m-3  ${dark ? "text-white" : "text-sky-700"}`}>
              <Link href={`#${link.id}`}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <label
          for="check"
          className="w-16 relative h-8 border border-[#E1E1E1] cursor-pointer mt-2 mr-4 rounded-full"
        >
          <input
            onClick={() => setDark(!dark)}
            type="checkbox"
            id="check"
            className="sr-only peer"
          />
          <div className="flex justify-between mt-1">
            <div className="ml-1">
              <Image src={"/moon.svg"} width={20} height={20} alt="Luna" />
            </div>
            <div className="mr-1">
              <Image src={"/sun.svg"} width={20} height={20} alt="Sol" />
            </div>
          </div>
          <span className="absolute h-6 w-6 rounded-full bg-sky-400 top-[3px] left-1 peer-checked:bg-sky-900 peer-checked:left-[34px] transition-all duration-500"></span>
        </label>
      </nav>
    </div>
  );
};

export default Navbar;
