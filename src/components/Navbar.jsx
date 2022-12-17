import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Bars } from "../assets/bars.svg";
import { ReactComponent as Close } from "../assets/close.svg";

const Navbar = () => {
  const [activeLabel, setActiveLabel] = useState("Home");
  const [showOverlay, setShowOverlay] = useState(false);

  const links = [
    {
      label: "Home",
      to: "#carousel",
    },
    {
      label: "About",
      to: "#about",
    },
    {
      label: "Services",
      to: "#service",
    },
    {
      label: "Projects",
      to: "#projects",
    },
    {
      label: "Contact",
      to: "#contact",
    },
  ];
  const onDownload = () => {
    // using Java Script method to get PDF file
    fetch("rocky_resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "rocky_resume.pdf";
        alink.click();
      });
    });
  };
  const handleClose = () => {
    setShowOverlay(false);
    document.body.style.overflow = "unset";
  };
  return (
    <div className="bg-darkBlack py-5 px-5 sm:px-10 sticky top-0 z-50 drop-shadow-xl">
      <div className="flex items-center md:max-w-[1240px] mx-auto justify-between">
        <div>
          <Logo className="h-12 sm:h-16" />
        </div>
        <div
          className="lg:hidden"
          onClick={() => {
            setShowOverlay(true);
            document.body.style.overflow = "hidden";
          }}
        >
          <Bars height={25} />
        </div>
        {/* OVERLAY */}
        {showOverlay && (
          <div className="bg-darkBlack h-screen w-full absolute top-[0px] left-[0px] z-50 overflow-hidden lg:hidden">
            <div className="flex items-center justify-between  py-5 px-5 sm:px-10">
              <div>
                <Logo className="h-12 sm:h-16" />
              </div>
              <div
                className="lg:hidden"
                onClick={() => {
                  handleClose();
                }}
              >
                <Close height={25} />
              </div>
            </div>
            {/* overlay links */}
            <div className="h-[70%] flex flex-col items-center justify-center">
              <ul className="list-none text-slate-50 w-[80%] flex flex-col items-center justify-center divide-y divide-slate-700 mb-7">
                {links.map(({ label, to, isActive }, i) => (
                  <li
                    key={i}
                    name={label}
                    className={`px-3 text-lg sm:text-2xl w-full text-center hover:text-grassGreen-300 py-4 ${
                      activeLabel === label
                        ? "text-grassGreen-300"
                        : "text-slate-50"
                    }`}
                    onClick={(e) => {
                      const name = e.target.getAttribute("name");
                      setActiveLabel(name);
                      handleClose();
                    }}
                  >
                    <a href={to}>{label}</a>
                  </li>
                ))}
              </ul>
              <div className="px-2">
                <button className="text-white text-lg sm:text-2xl bg-gradient-to-b from-grassGreen-200 to-grassGreen-100 px-4 py-2 rounded">
                  Resume
                </button>
              </div>
            </div>
          </div>
        )}
        {/* NAVITEM TOP*/}
        <ul className="list-none text-slate-50 flex items-center hidden lg:inline-flex">
          {links.map(({ label, to }, i) => (
            <li
              key={i}
              name={label}
              onClick={(e) => {
                const name = e.target.getAttribute("name");
                setActiveLabel(name);
              }}
              className={`px-3 hover:text-grassGreen-300 ${
                activeLabel === label ? "text-grassGreen-300" : "text-slate-50"
              }`}
            >
              <a
                href={to}
                name={label}
                onClick={(e) => {
                  const name = e.target.getAttribute("name");
                  setActiveLabel(name);
                }}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="px-2">
            <button
              onClick={() => onDownload()}
              className="text-white bg-gradient-to-b from-grassGreen-200 to-grassGreen-100 px-4 py-2 rounded"
            >
              Resume
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
