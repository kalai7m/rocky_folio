import React from "react";

const Tab = ({ active, label }) => {
  return (
    <li>
      <button
        className={`${
          active ? "underline text-grassGreen-300" : "text-white"
        } hover:underline underline-offset-4 decoration-white font-semibold`}
      >
        {label}
      </button>
    </li>
  );
};

export default Tab;
