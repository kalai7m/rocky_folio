import React from "react";
import { ReactComponent as UiUx } from "../assets/service/uiux.svg";
import { ReactComponent as Metric } from "../assets/service/analytic.svg";
import { ReactComponent as VisualDesign } from "../assets/service/vd.svg";
import { SectionHeading } from "./micro/sectionHeading";

export const Services = () => {
  const serviceData = [
    {
      title: "UI/UX Design",
      icon: <UiUx className="h-32 md:h-44 2xl:h-48" />,
      content:
        "I create high fidelity layouts that highlight important insights, clarify complex data and create a narrative flow to maximize user impact.",
      animate: "fade-right",
    },
    {
      title: "Research & Testing",
      icon: <Metric className="h-32 md:h-44 2xl:h-48" />,
      content:
        "I identify problems & devise elegant solutions based on a user-centered approach, rapid testing & iterate your design on business requirements.",
      animate: "fade-up",
    },
    {
      title: "Visual Design",
      icon: <VisualDesign className="h-32 md:h-44 2xl:h-48" />,
      content:
        "I work within brand guidelines to create layouts for various interfaces that reinforce a brand's style or voice through its visual touchpoints.",
      animate: "fade-left",
    },
  ];
  return (
    <section id="service" className="pt-14 pb-4 md:pb-14 bg-darkBlack">
      <SectionHeading
        heading={"Services"}
        subHeading={"WHAT I CAN DO TO HELP BUILD YOUR PROJECT"}
        cls={"md:pb-8"}
      />
      <div className="md:max-w-[1240px] 2xl:mx-auto grid grid-rows-3 md:grid-cols-2 md:grid-rows-1 2xl:grid-cols-3 gap-0 md:gap-8 relative mx-6">
        {serviceData.map((data, i) => (
          <div
            key={i}
            className="text-white mt-16 md:mt-24 my-8 flex flex-col items-center bg-opacity-0 bg-gradient-to-b from-grassGreen-400 to-grassGreen-100 hover:from-grassGreen-400/75 hover:to-grassGreen-100/25"
            data-aos={data.animate}
            data-aos-duration="1000"
          >
            <div className="flex justify-center mt-[-15%] md:mt-[-25%]">
              {data.icon}
            </div>
            <div className="px-10 pb-10">
              <h2 className="text-2xl md:text-3xl">{data.title}</h2>
              <p className="text-md md:text-lg mt-5">{data.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
