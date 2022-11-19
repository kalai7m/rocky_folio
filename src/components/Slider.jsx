import React from "react";
import { ReactComponent as Left } from "../assets/left.svg";
import { ReactComponent as Right } from "../assets/right.svg";
import Card from "./micro/carouselHelper/card";

const Slider = (props) => {
  const { showNav, sliderData, activeData } = props;

  return (
    <div className="mt-10 relative">
      {showNav && (
        <div className="flex justify-between absolute top left w-full h-full 3xl:px-16">
          <button
            onClick={() => props.onPrevClick()}
            disabled={activeData[0]._id === 0}
            className="hover:bg-slate-800/75 text-white w-12 sm:w-16 h-full text-center opacity-70 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          >
            <Left className="h-12 sm:h-16 inline-block" fill="#2BDA80" />
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={() => props.onNextClick()}
            disabled={
              activeData[activeData.length - 1]._id === sliderData.length - 1
            }
            className="hover:bg-slate-800/75 text-white w-12 sm:w-16 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          >
            <Right className="h-12 sm:h-16 inline-block" fill="#2BDA80" />
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
