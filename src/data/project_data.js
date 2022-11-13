export const PROJECT_DATA = {
  uidesign: [
    {
      _id: 0,
      label: "UI Design",
      title: "Weather App",
      img_url: "weather_app.png",
      view_link: "#",
      isActive: false,
      index: 0,
    },
    {
      _id: 1,
      label: "UI Design",
      title: "Sift App",
      img_url: "sift_app.png",
      view_link: "#",
      isActive: false,
      index: 1,
    },
  ],
  uxdesign: [
    {
      _id: 0,
      label: "UX Design",
      title: "Weather App",
      img_url: "weather_app.png",
      view_link: "#",
      isActive: false,
      index: 0,
    },
    {
      _id: 1,
      label: "UX Design",
      title: "Sift App",
      img_url: "weather_app.png",
      view_link: "#",
      isActive: false,
      index: 1,
    },
  ],
  logodesign: [
    {
      _id: 0,
      label: "Logo",
      title: "Weather App",
      img_url: "weather_app.png",
      view_link: "#",
      isActive: false,
      index: 0,
    },
  ],
};

export const getProjectDataOnTabClick = (tileCount, activeTab = "uidesign") => {
  let data = PROJECT_DATA[activeTab];
  let count = data.length < tileCount ? data.length : tileCount;
  for (let i = 0; i < count; i++) {
    data[i].isActive = true;
  }
  return data;
};

export const getActiveData = (sliderData) => {
  let data = sliderData.filter((item) => item.isActive === true);
  return data;
};
