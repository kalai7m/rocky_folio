import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as B1 } from "../assets/b1.svg";
import Copyright from "../assets/copyright.svg";
import Like from "../assets/heart.gif";
import Media from "./micro/media";

export const Footer = () => {
  return (
    <section
      id="footer"
      className="bg-darkBlack py-8 border-t border-slate-800 px-8"
    >
      <div className="max-w-[1240px] mx-auto text-center text-2xl text-white tracking-wide mb-0 sm:mb-6 mt-6">
        Thank you for visiting
      </div>
      <div className="max-w-[1240px] mx-auto py-8 grid grid-rows-3 xl:grid-rows-1 xl:grid-cols-3">
        <div className="order-2 xl:order-1 flex justify-center xl:justify-start py-2 xl:py-0">
          <Logo className="h-12 sm:h-16" />
        </div>
        <div className="flex justify-center items-center order-1 xl:order-2">
          <B1 className="h-8 sm:h-10" />
        </div>
        <div className="flex items-center justify-center xl:justify-end order-3">
          {/* <p className="text-slate-600 mr-4">See me on </p> */}
          <Media />
        </div>
      </div>
      <div className="flex items-center justify-center max-w-[1240px] mx-auto">
        <img src={Copyright} alt="" className="h-4 mr-2" />
        <p className="text-slate-700">2022 |&nbsp;</p>
        <img src={Like} alt="" className="h-12" />
        <p className="text-slate-700">Advenchaa</p>
      </div>
    </section>
  );
};
