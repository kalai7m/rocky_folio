import React, { useState } from "react";
import { ReactComponent as Left } from "../assets/left.svg";
import { ReactComponent as Right } from "../assets/right.svg";
import Card from "./micro/carouselHelper/card";
import { getActiveData } from "../data/project_data";

const Slider = (props) => {
  const { showNav, sliderData, slidesPerView, activeData } = props;
  // let [activeData, setActiveData] = useState(getActiveData(props.sliderData));
  const [disableRight, setDisableRight] = useState(false);
  const [disableLeft, setDisableLeft] = useState(true);
  // console.log("active", activeData);
  console.log("proj data ", sliderData);

  return (
    <div className="mt-10 relative">
      {showNav && (
        <div className="flex justify-between absolute top left w-full h-full 3xl:px-16">
          <button
            // onClick={() => prevClick()}
            // disabled={disableLeft}
            className="hover:bg-slate-800/75 text-white w-16 h-full text-center opacity-70 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          >
            <Left className="h-16 inline-block" fill="#2BDA80" />
            <span className="sr-only">Prev</span>
          </button>
          <button
            // onClick={() => nextClick()}
            // disabled={disableRight}
            className="hover:bg-slate-800/75 text-white w-16 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          >
            <Right className="h-16 inline-block" fill="#2BDA80" />
            <span className="sr-only">Next</span>
          </button>
        </div>
      )}
      <div className="relative overflow-hidden md:max-w-[1280px] mx-auto">
        <div className="flex justify-around mx-20 scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
          {activeData.map((tile, i) => {
            return <Card {...tile} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
