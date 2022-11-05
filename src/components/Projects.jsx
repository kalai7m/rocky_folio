import React, { useState, useEffect } from "react";
import { SectionHeading } from "./micro/sectionHeading";
import { ReactComponent as Left } from "../assets/left.svg";
import { ReactComponent as Right } from "../assets/right.svg";
import Card from "./micro/carouselHelper/card";
import Tab from "./micro/carouselHelper/tab";
import { PROJECT_DATA, TAB_DATA } from "../constants";

export const Projects = () => {
  const [projectData, setProjectData] = useState(PROJECT_DATA);
  const [activeData, setActiveData] = useState([]);
  let [disableRight, setDisableRight] = useState(false);
  let [disableLeft, setDisableLeft] = useState(true);
  //constants
  let tile = 2; //tile to be shown
  let tileMove = 2; //num of tiles to move
  let totLen = projectData.length;

  useEffect(() => {
    console.log(projectData);
    let temp = projectData.filter((data) => data.isActive === true);
    setActiveData(temp);
  }, []);

  //helper function
  const updateData = (
    tempActiveData,
    tempCData,
    status = false,
    curFirstIndex,
    curLastIndex
  ) => {
    tempActiveData = [...tempCData.slice(curFirstIndex, curLastIndex + 1)];
    tempActiveData = tempActiveData.map((item) => {
      item.isActive = status;
      return item;
    });
    tempCData = [
      ...tempCData.slice(0, curFirstIndex),
      ...tempActiveData,
      ...tempCData.slice(curLastIndex + 1, totLen),
    ];
    return { tempActiveData, tempCData };
  };

  //click handlers
  let prevClick = () => {
    if (disableLeft) return;
    let tempDisableLeft = false;
    let tempActiveData = [...activeData];
    let tempProjectData = [...projectData];
    let curLastIndex = activeData[tile - 1].index;
    let curFirstIndex = activeData[0].index;
    let nextFirstIndex = curFirstIndex - tileMove;
    if (curLastIndex == "show") {
      let a = tempActiveData.slice().reverse();
      let index = a.findIndex((item) => typeof item.index == "number");
      curLastIndex = a[index].index;
    }
    //set status of all cards in activeData arr to false
    let data = updateData(
      tempActiveData,
      tempProjectData,
      false,
      curFirstIndex,
      curLastIndex
    );
    tempActiveData = data.tempActiveData;
    tempProjectData = data.tempCData;

    if (nextFirstIndex <= 0) tempDisableLeft = true;
    curLastIndex = curFirstIndex - 1;
    curFirstIndex = !tempDisableLeft ? nextFirstIndex : 0;

    data = updateData(
      tempActiveData,
      tempProjectData,
      true,
      curFirstIndex,
      curLastIndex
    );
    tempActiveData = data.tempActiveData;
    tempProjectData = data.tempCData;

    setDisableRight(false);
    setActiveData(tempActiveData);
    setProjectData(tempProjectData);
    setDisableLeft(tempDisableLeft);
  };

  const nextClick = () => {
    if (disableRight) return; //state
    let tempDisableRight = false;
    let tempActiveData = [...activeData];
    let tempProjectData = [...projectData];
    let curLastIndex = activeData[tile - 1].index;
    let curFirstIndex = activeData[0].index;
    let nextLastIndex = curLastIndex + tileMove;
    //set status of all cards in activeData arr to false
    let data = updateData(
      tempActiveData,
      tempProjectData,
      false,
      curFirstIndex,
      curLastIndex
    );
    tempActiveData = data.tempActiveData;
    tempProjectData = data.tempCData;

    if (nextLastIndex >= totLen - 1) tempDisableRight = true;
    curLastIndex = !tempDisableRight ? nextLastIndex : totLen - 1;
    curFirstIndex = curFirstIndex + tileMove;

    data = updateData(
      tempActiveData,
      tempProjectData,
      false,
      curFirstIndex,
      curLastIndex
    );
    tempActiveData = data.tempActiveData;
    tempProjectData = data.tempCData;

    if (tempActiveData.length < tile) {
      let count = tile - tempActiveData.length;
      for (let i = 0; i < count; i++) {
        tempActiveData.push({ index: "show", isActive: true });
      }
    }
    setDisableLeft(false);
    setActiveData(tempActiveData);
    setProjectData(tempProjectData);
    setDisableRight(tempDisableRight);
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
            <Tab key={i} {...tab} />
          ))}
        </ul>
      </div>
      {/* TABS END*/}
      {/* CONTENT */}
      <div className="mt-10 relative">
        <div className="flex justify-between absolute top left w-full h-full 3xl:px-16">
          <button
            onClick={() => prevClick()}
            disabled={disableLeft}
            className="hover:bg-slate-800/75 text-white w-16 h-full text-center opacity-70 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          >
            <Left className="h-16 inline-block" fill="#2BDA80" />
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={() => nextClick()}
            disabled={disableRight}
            className="hover:bg-slate-800/75 text-white w-16 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          >
            <Right className="h-16 inline-block" fill="#2BDA80" />
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div className="relative overflow-hidden md:max-w-[1280px] mx-auto">
          <div className="flex justify-around mx-20 scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
            {activeData.map((tile, i) => {
              return <Card {...tile} />;
            })}
          </div>
        </div>
      </div>
      {/* CONTENT END */}
    </section>
  );
};
