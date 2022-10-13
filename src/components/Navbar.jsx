import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Bars } from "../assets/bars.svg";

const Navbar = () => {
  const [activeLabel, setActiveLabel] = useState("Home");
  const links = [
    {
      label: "Home",
      to: "",
    },
    {
      label: "About",
      to: "",
    },
    {
      label: "Services",
      to: "",
    },
    {
      label: "Projects",
      to: "",
    },
    {
      label: "Contact",
      to: "",
    },
  ];
  return (
    <div className="bg-darkBlack py-5 px-5 sm:px-10">
      <div className="flex items-center md:max-w-[1240px] mx-auto justify-between">
        <div>
          <Logo className="h-12 sm:h-16" />
        </div>
        <div className="lg:hidden">
          <Bars height={35}/>
        </div>
        {/* NAVITEM */}
        <ul className="list-none text-slate-50 flex items-center hidden lg:inline-flex">
          {links.map(({ label, to, isActive }, i) => (
            <li key={i} className={`px-3 hover:text-grassGreen-300 ${activeLabel === label ? 'text-grassGreen-300' : 'text-slate-50'}`}>
              <a href={to} name={label} onClick={(e) => {
                const name = e.target.getAttribute("name");
                setActiveLabel(name);
              }}>{label}</a>
            </li>
          ))}
          <li className="px-2">
            <button className="text-white bg-gradient-to-b from-grassGreen-200 to-grassGreen-100 px-4 py-2 rounded">
              Resume
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
