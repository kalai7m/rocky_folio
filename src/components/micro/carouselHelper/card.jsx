import React from "react";

const Card = (props) => {
  let { img_url, title, label, index } = props;
  return typeof index === "string" && index.includes("show") ? (
    <div className="bg-transparent relative w-[44%] p-10">{""}</div>
  ) : (
    <div className="lg:w-[45%] 3xl:w-fit bg-slate-300 p-5 sm:p-10 rounded-2xl">
      <div>
        <div id="image" className="w-40 md:w-fit">
          <img src={require(`../../../assets/project/${img_url}`)} alt="" />
        </div>
      </div>
      <div className="text-white flex flex-col justify-center sm:flex-row sm:items-center sm:justify-between m-5">
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-2xl text-black font-semibold">
            {title}
          </h3>
          <p className="mt-2 text-md sm:text-lg text-slate-700">{label}</p>
        </div>
        <button className="w-full mt-3 sm:mt-0 sm:w-fit font-semibold border border-2 border-grassGreen-300 text-slate-700 px-3 py-2 hover:bg-grassGreen-300 hover:text-white">
          View
        </button>
      </div>
    </div>
  );
};

export default Card;
