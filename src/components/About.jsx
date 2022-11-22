import React from "react";
import Vector from "../assets/ux_designer.svg";
import { SectionHeading } from "./micro/sectionHeading";
const About = () => {
  return (
    <section id="about" className="py-10 bg-darkBlack">
      <SectionHeading heading={"About Me"} subHeading={"UI / UX DESIGNER"} />
      <div className="md:max-w-[1240px] mx-auto flex flex-col md:flex-row">
        {/* image */}
        <div
          className="md:w-1/2 flex justify-center items-center"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src={Vector} alt="Me" className="h-64 sm:h-80 lg:h-96" />
        </div>
        <div
          className="md:w-1/2 flex flex-col space-y-6 justify-center items-center p-6"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <p className="text-md sm:text-lg text-white">
            &nbsp;&nbsp;&nbsp;&nbsp;I am an enthusiastic User Experience
            Designer, who specializes in producing user-centric interfaces for
            web and mobile. I aim to create a meaningful and easy user
            experience by conducting research, creating personas and
            constructing a logical information architecture.
          </p>
          {/* folio grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
            <div className="py-2 px-2 sm:px-4">
              <div className="text-lg text-grassGreen-300">
                <h4>BORN IN</h4>
              </div>
              <p className="text-slate-400 pt-2">Chennai</p>
            </div>
            <div className="py-2 px-2 sm:px-4">
              <div className="text-lg text-grassGreen-300">
                <h4>EXPERIENCE</h4>
              </div>
              <p className="text-slate-400 pt-2">2+</p>
            </div>
            <div className="py-2 px-2 sm:px-4">
              <div className="text-lg text-grassGreen-300">
                <h4>BIRTH DATE</h4>
              </div>
              <p className="text-slate-400 pt-2">Feb 21, 1998</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
