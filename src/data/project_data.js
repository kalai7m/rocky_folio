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
    {
      _id: 2,
      label: "UI Design",
      title: "Ben 10",
      img_url: "sift_app.png",
      view_link: "#",
      isActive: false,
      index: 2,
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

export const getProjectDataOnTabClick = (
  tileCount,
  activeTab = "uidesign",
  startIndex = 0
) => {
  let data = PROJECT_DATA[activeTab];
  for (let i = 0; i < data.length; i++) {
    data[i].isActive = false;
  }
  let count = data.length < tileCount ? data.length : tileCount;
  for (let i = startIndex; i < count + startIndex; i++) {
    if (data[i] !== undefined) {
      data[i].isActive = true;
    } else {
      let j = data[i - 1].index + 1;
      let idx = `show_${j}`;
      data.push({ _id: j, index: idx, isActive: true });
    }
  }
  return data;
};

export const getActiveData = (sliderData) => {
  let data = sliderData.filter((item) => item.isActive === true);
  return data;
};
