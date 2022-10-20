import React from "react";
import { SectionHeading } from "./micro/sectionHeading";

export const Projects = () => {
  console.log("process env", process.env.PUBLIC_URL);
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
      img_url: "weather_app.png",
      view_link: "#",
    },
    {
      _id: "t1",
      label: "UI Design",
      title: "Sift App",
      img_url: "sift_app.png",
      view_link: "#",
    },
    // {
    //   _id: "t3",
    //   label: "Logo Design",
    //   title: "Sift App",
    //   img_url: "sift_app.png",
    //   view_link: "#",
    // },
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
      <div className="md:max-w-[1240px] mx-auto mt-8">
        <div className="flex justify-around">
          {workData.map((tile, i) => {
            return (
              <div className="w-fit bg-slate-300 p-10 rounded-2xl">
                <div>
                  <div id="image">
                    <img
                      src={require(`../assets/project/${tile.img_url}`)}
                      alt=""
                    />
                  </div>
                </div>
                <div className="text-white flex items-center justify-between m-5">
                  <div>
                    <h3 className="text-2xl text-black font-semibold">
                      {tile.title}
                    </h3>
                    <p className="mt-2 text-lg text-slate-700">{tile.label}</p>
                  </div>
                  <button className="font-semibold border border-2 border-grassGreen-300 text-slate-700 px-3 py-2 hover:bg-grassGreen-300 hover:text-white">
                    View
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* CONTENT END */}
    </section>
  );
};
