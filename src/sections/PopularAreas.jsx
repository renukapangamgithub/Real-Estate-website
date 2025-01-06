import React from "react";
import { useDarkMode } from "../components/DarkModeContext";
import area1 from "../assets/images/area1.jpg";
import area2 from "../assets/images/area2.jpg";
import area3 from "../assets/images/area3.jpg";

const PopularAreas = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"} transition-opacity duration-1000 ease-in-out`}>
      <section
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20`}
      >
        <div
          id="top"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          <div>
            <h1 className="text-red-500 dark:text-white">POPULAR AREAS</h1>
            <h1 className="text-black text-5xl font-semibold leading-10 mt-4 dark:text-white">
              Explore most <br />
              popular areas
            </h1>
          </div>
          <div className="grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6">
            {[area1, area2, area3].map((area, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${area})` }}
                className="h-[400px] bg-cover bg-center rounded-xl transform transition-transform duration-300 hover:scale-105 hover:opacity-90"
              ></div>
            ))}
          </div>
        </div>
        <div id="bottom" className="w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-center gap-6">
          {["5k", "5k", "5k"].map((value, index) => (
            <div key={index} className="flex justify-center lg:items-center gap-8 w-full">
              <h1 className="text-black text-7xl font-semibold dark:text-white">{value}</h1>
              <h1 className="dark:text-white">ACTIVE <br /> LISTINGS</h1>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularAreas;
