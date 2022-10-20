import React from "react";
import { SectionHeading } from "./micro/sectionHeading";
import img from "../assets/project/sift_app.png"

export const Projects = () => {
  const tabs = [
    {
      _id: "t1",
      label: "UI Design",
      active: true,
    },
    {
      _id: "t2",
      label: "UX Design",
      active: false,
    },
    {
      _id: "t3",
      label: "Logo Design",
      active: false,
    },
  ];
  const workData = [
    {
      _id: "t1",
      label: "UI Design",
      title: "Weather App",
      img_url: "../assets/project/weather_app.png",
      view_link: "#",
    },
    {
      _id: "t1",
      label: "UI Design",
      title: "Sift App",
      img_url: "../assets/project/sift_app.png",
      view_link: "#",
    },
    {
      _id: "t3",
      label: "Logo Design",
      title: "Sift App",
      img_url: "../assets/project/sift_app.png",
      view_link: "#",
    },
  ];
  let fetchedUrl = "./weather_app.png";
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
          {tabs.map((tab, i) => (
            <li key={i} className="">
              <button
                className={`${
                  tab.active ? "underline text-grassGreen-300" : "text-white"
                } hover:underline underline-offset-4 decoration-white font-semibold`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* TABS END*/}
      {/* CONTENT */}
      <div className="md:max-w-[1240px] mx-auto">
        {workData.map((tile, i) => (
          <div>
            <div>
              <div
                id="image"
                className="bg-[image:var(--bg-small-url)]"
                style={{
                  "var(--bg-small-url)": fetchedUrl,
                }}
              >
                <img src={"src/assets/project/sift_app.png"} alt="" />
              </div>
            </div>
            <div>
              <div>
                <h3>{tile.title}</h3>
                <p>{tile.label}</p>
              </div>
              <button>View</button>
            </div>
          </div>
        ))}
      </div>
      {/* CONTENT END */}
    </section>
  );
};
