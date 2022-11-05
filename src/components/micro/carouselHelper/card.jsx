import React from "react";

const Card = (props) => {
  let { img_url, title, label, index } = props;
  return index === "show" ? (
    <div className="bg-transparent relative px-72 snap-start">{""}</div>
  ) : (
    <div className="lg:w-[45%] 3xl:w-fit bg-slate-300 p-10 rounded-2xl">
      <div>
        <div id="image">
          <img src={require(`../../../assets/project/${img_url}`)} alt="" />
        </div>
      </div>
      <div className="text-white flex items-center justify-between m-5">
        <div>
          <h3 className="text-2xl text-black font-semibold">{title}</h3>
          <p className="mt-2 text-lg text-slate-700">{label}</p>
        </div>
        <button className="font-semibold border border-2 border-grassGreen-300 text-slate-700 px-3 py-2 hover:bg-grassGreen-300 hover:text-white">
          View
        </button>
      </div>
    </div>
  );
};

export default Card;
