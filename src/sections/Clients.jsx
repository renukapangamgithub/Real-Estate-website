import React from 'react';
import { client } from '../components/export';
import { useDarkMode } from "../components/DarkModeContext";
import { FaStar } from 'react-icons/fa';

const Clients = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? "dark bg-black" : 'light bg-transparent'}`}>
      <section
        id="testimonials"
        className="lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-20 px-6 py-20 gap-20"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="text-red-500 dark:text-white">OUR CLIENTS</h1>
          <h1 className="text-black dark:text-white text-[40px] font-semibold leading-10">
            What Our Clients <br /> Saying About Us
          </h1>
        </div>
        <div
          id="clients-box"
          className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full"
        >
          {client.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full transition-all transform hover:bg-red-100 hover:scale-105 duration-300"
            >
              <div className="flex justify-start items-center w-full gap-4">
                <img
                  src={item.image}
                  alt=""
                  className="w-[70px] rounded-full transform hover:scale-110 transition-transform duration-300"
                />
                <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-xl text-black font-semibold dark:text-white">
                    {item.name}
                  </h1>
                  <h1 className="text-slate-600 dark:text-white">
                    {item.text}
                  </h1>
                </div>
              </div>
              <p className="text-md text-justify text-slate-600 dark:text-white">
                {item.feedback}
              </p>

              <div className="flex justify-start items-start gap-2 w-full">
                {[...Array(4)].map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className="text-xl text-yellow-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Clients;
