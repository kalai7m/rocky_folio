import React from "react";
import Profile from "../assets/profile.svg";
import Rect from "../assets/rect.svg";
import Poly from "../assets/poly_right.svg";
import Poly2 from "../assets/poly_left.svg";
import CircleFill from "../assets/ellipse-fill.svg";
import CircleOutline from "../assets/ellipse-outline.svg";
import Media from "./micro/media";

const Carousel = () => {
  return (
    <div className="bg-darkBlack py-10 sm:py-16 overflow-x-hidden relative" id="carousel">
      <div className="md:max-w-[1240px] mx-auto flex items-center sm:py-10 flex-col-reverse sm:flex-row">
        {/* intro */}
        <div className="text-white sm:w-1/2 pl-10 pr-10 sm:pr-0 2xl:pl-0">
          <p className="font-semibold text-xl sm:text-2xl tracking-wide">Hello I'M a</p>
          <h1 className="text-4xl sm:text-5xl font-bold py-5 tracking-wider">
            <span>UI & UX </span>
            <span className="text-grassGreen-300">Designer.</span>
          </h1>
          <p className="text-md sm:text-lg">
            Hi, I'm Bharath Rocky, a passionate UI/UX Designer based in India
            with over 2 years of experience in crafting digital products and
            helping businesses and non-profits expand their capacity for impact.
          </p>
          <div className="mt-6">
            <Media/>
          </div>
        </div>
        {/* image */}
        <div className="sm:w-1/2 justify-center flex mb-10">
          <div className="relative">
            <img
              src={Profile}
              alt="Rocky's Profile"
              className="h-60 sm:h-72 relative z-10"
            />
            <img
              src={Rect}
              alt="Profile Background"
              className="h-72 absolute top-[-20px] left-[20px] z-0"
            />
            {/* background */}
            <img
              src={CircleFill}
              alt="bgCircleFill"
              className="h-72 absolute top-[-140px] left-[-70px] z-1"
            />
            <img
              src={CircleOutline}
              alt="bgCircleOutline"
              className="h-32 absolute top-[-20px] left-[-80px] z-1"
            />
          </div>
          <img
            src={Poly}
            alt="bgPoly-1"
            className="h-72 hidden sm:block absolute right-[-70px] 2xl:right-[0px] z-0"
          />
          <img
            src={Poly2}
            alt="bgPoly-2"
            className="h-64 absolute left-[0px] top-[370px] sm:top-[30%] z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
