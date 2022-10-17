import React from "react";

export const MetricBox = () => {
  return (
    <div className="bg-darkBlack text-white">
      <div className="grid grid-cols-3 max-w-[1200px] mx-auto text-center">
        <div className="flex flex-col justify-center items-center space-y-4 p-8 mb-6 border border-r-0 border-white space-y-4">
          <h2 className="font-bold text-3xl sm: text-4xl">7+</h2>
          <h5 className="text-sm font-semibold sm:text-lg">YEARS OF EXPERIENCE</h5>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4 p-8 mb-6 bg-grassGreen-300 text-black">
          <h2 className="font-bold text-3xl sm:text-4xl">50+</h2>
          <h5 className="text-sm font-semibold sm:text-lg">PROJECTS COMPLETED</h5>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4 p-8 mb-6 border border-l-0 border-white">
          <h2 className="font-bold text-3xl sm: text-4xl">30+</h2>
          <h5 className="text-sm font-semibold sm:text-lg">HAPPY CLIENTS</h5>
        </div>
      </div>
    </div>
  );
};
