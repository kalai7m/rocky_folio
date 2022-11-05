import React from "react";

const Tab = ({ active, label, onTabClick, _id }) => {
  return (
    <li>
      <button
        name={_id}
        className={`${
          active ? "underline text-grassGreen-300" : "text-white"
        } hover:underline underline-offset-4 decoration-white font-semibold`}
        onClick={(e) => onTabClick(e)}
      >
        {label}
      </button>
    </li>
  );
};

export default Tab;
