import React from "react";
import { useDarkMode } from "../components/DarkModeContext";
import heroimg from "../assets/images/hero1.webp";

const Hero = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
        <section
          id="hero"
          className="w-[95%] lg:w-[90%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
          style={{ backgroundImage: `url(${heroimg})` }}
        >
          <h1 className="text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]">
            Find Your Next Home in Las Vegas
          </h1>
          <p className="text-white text-xl lg:pr-[500px] pr-0">
            Explore the best properties in Las Vegas with exclusive listings,
            personalized services, and expert guidance. Let us help you find
            your perfect home today!
          </p>
        </section>
      </div>

      <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}>
        <div
          id="form"
          className={`${
            darkMode ? "dark bg-gray-800" : "light bg-white"
          } lg:w-[70%] w-full m-auto grid lg:grid-cols-4 lg:gap-6 lg:p-8 p-6 rounded-xl -mt-14`}
        >
          <div className="w-full lg:col-span-1">
            <h1 className="text-black font-semibold dark:text-white">
              LOCATION
            </h1>
            <input
              type="text"
              placeholder="Enter an address, state, city or pincode"
              className="bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]"
            />
          </div>
          <div className="w-full lg:col-span-1">
            <h1 className="text-black font-semibold dark:text-white">TYPE</h1>
            <select
              name="selectOption"
              id="selectOption"
              defaultValue=""
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
            >
              <option value="" disabled>
                Select Property
              </option>
              <option value="option1">Rentals</option>
              <option value="option2">Sales</option>
              <option value="option3">Commercials</option>
            </select>
          </div>
          <div className="w-full lg:col-span-1">
            <h1 className="text-black font-semibold dark:text-white">
              CATEGORY
            </h1>
            <select
              name="selectOption"
              id="selectOption"
              defaultValue=""
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
            >
              <option value="" disabled>
                PROPERTY CATEGORY
              </option>
              <option value="option1">Apartments</option>
              <option value="option2">Duplexes</option>
              <option value="option3">Condos</option>
            </select>
          </div>
          <div className="w-full lg:col-span-1">
            <button
              className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white
        dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
