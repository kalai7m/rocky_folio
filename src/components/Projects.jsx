import React from "react";
import { SectionHeading } from "./micro/sectionHeading";

export const Projects = () => {
  const tabs = [
    {
      label: "UI Design",
      active: true,
    },
    {
      label: "UX Design",
      active: false,
    },
    {
      label: "Logo Design",
      active: false,
    },
  ];
  return (
    <section id="projects" className="pt-8 pb-14 bg-darkBlack">
      <SectionHeading
        heading={"Projects"}
        subHeading={"WORKS THAT I HAVE DONE"} cls={"pb-4"}
      />
      <div className="flex justify-center items-center">
        <ul className="flex  space-x-8 text-lg">
          {tabs.map((tab, i) => (
            <li key={i} className="">
              <button className={`${tab.active ? "underline " : ""}text-white hover:underline underline-offset-4 decoration-white`}>{tab.label}</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
