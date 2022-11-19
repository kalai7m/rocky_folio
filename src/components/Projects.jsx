import React, { useState, useEffect } from "react";
import { SectionHeading } from "./micro/sectionHeading";
import Tab from "./micro/carouselHelper/tab";
import { TAB_DATA } from "../constants";
import Slider from "./Slider";
import { getActiveData, getProjectDataOnTabClick } from "../data/project_data";

export const Projects = () => {
  const width =
    window.innerWidth > 425 ? window.innerWidth : window.screen.width;
  const tileCount = width > 1023 ? 2 : 1;
  const [projectData, setProjectData] = useState(
    getProjectDataOnTabClick(tileCount)
  );
  const [activeTab, setActiveTab] = useState("uidesign");
  const [activeData, setActiveData] = useState(getActiveData(projectData));
  const [showNav, setShowNav] = useState(projectData.length > tileCount);

  useEffect(() => {
    setProjectData(getProjectDataOnTabClick(tileCount, activeTab));
    setActiveData(getActiveData(projectData));
    setShowNav(projectData.length > tileCount);
  }, [activeTab, projectData]);

  const handleTabClick = (e) => {
    setActiveTab(e.target.name);
  };

  const handleNext = () => {
    let nextIndex = activeData[0].index + tileCount;
    setProjectData(getProjectDataOnTabClick(tileCount, activeTab, nextIndex));
    setActiveData(getActiveData(projectData));
    setShowNav(projectData.length > tileCount);
  };

  const handlePrev = () => {
    let prevIndex = activeData[0].index - tileCount;
    setProjectData(getProjectDataOnTabClick(tileCount, activeTab, prevIndex));
    setActiveData(getActiveData(projectData));
    setShowNav(projectData.length > tileCount);
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
        <ul className="flex  space-x-4 text-md sm:text-lg sm:space-x-8">
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
      <Slider
        showNav={showNav}
        sliderData={projectData}
        slidesPerView={tileCount}
        activeData={activeData}
        onNextClick={handleNext}
        onPrevClick={handlePrev}
      />
      {/* CONTENT END */}
    </section>
  );
};
