import React from "react";

export const SectionHeading = ({ heading, subHeading, cls }) => {
  return (
    <div className={`${cls ? cls : ""}`}>
      <h2 className="text-2xl text-grassGreen-300 text-center font-semibold">
        {heading}
      </h2>
      <h2 className="text-xl text-slate-300 text-center font-semibold my-5">
        {subHeading}
      </h2>
    </div>
  );
};
