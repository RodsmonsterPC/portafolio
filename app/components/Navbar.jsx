import React from "react";
import Link from "next/link";
const Navbar = ({ links }) => {
  return (
    <div>
      <nav className="flex text-slate-900 h-12 drop-shadow-md fixed top-0 left-0 right-0 bg-white">
        <ul className="flex flex-row">
          {links.map((link) => (
            <li className="m-3 text-sky-700">
              <Link href={`#${link.id}`}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
