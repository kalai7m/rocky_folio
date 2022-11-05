import React, { useState, useEffect } from "react";
import { SectionHeading } from "./micro/sectionHeading";
import { ReactComponent as Left } from "../assets/left.svg";
import { ReactComponent as Right } from "../assets/right.svg";
import Card from "./micro/carouselHelper/card";
import Tab from "./micro/carouselHelper/tab";
import { PROJECT_DATA, TAB_DATA } from "../constants";

export const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [activeTab, setActiveTab] = useState("t1");
  const [showNav, setShowNav] = useState(true);
  useEffect(() => {
    let data = PROJECT_DATA.filter((item) => item._id === activeTab);
    setProjectData(data);
  }, [activeTab]);
  const handleTabClick = (e) => {
    setActiveTab(e.target.name);
  };
  return (
    <section id="projects" className="pt-8 pb-14 bg-darkBlack">
      <SectionHeading
        heading={"Projects"}
        subHeading={"WORKS THAT I HAVE DONE"}
        cls={"pb-4"}
      />
      {/* TABS */}
      <div className="flex justify-center items-center">
        <ul className="flex  space-x-8 text-lg">
          {TAB_DATA.map((tab, i) => (
            <Tab
              key={i}
              {...tab}
              active={activeTab === tab._id}
              onTabClick={(e) => handleTabClick(e)}
            />
          ))}
        </ul>
      </div>
      {/* TABS END*/}
      {/* CONTENT */}
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
            {projectData.map((tile, i) => {
              return <Card {...tile} />;
            })}
          </div>
        </div>
      </div>
      {/* CONTENT END */}
    </section>
  );
};
