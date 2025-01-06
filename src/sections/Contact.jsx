import React from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { FaMapMarkerAlt } from "react-icons/fa"; // Importing location marker icon

const Contact = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}
    >
      <section
        id="contact"
        className={`${
          darkMode ? "dark bg-black" : "light bg-red-100"
        } lg:w-[95%] w-full m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10`}
      >
        <div className="bg-white dark:bg-black p-8 flex flex-col justify-center items-start gap-4 rounded-xl">
          <h1 className="text-2xl text-black font-semibold dark:text-white">
            Send Us a Message Today
          </h1>
          <input
            type="text"
            placeholder="Enter your full name here"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Enter your valid email"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="number"
            placeholder="Enter your valid number here"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={5}
            placeholder="Enter your message here ......"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
          <button className="bg-red-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer">
            SEND EMAIL
          </button>
        </div>
        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
          <h1 className="text-red-500 dark:text-white">REACH US</h1>
          <h1 className="text-black text-[40px] font-semibold leading-10 dark:text-white">
            We’d Love to Hear From You!
          </h1>
          <p className="text-xl text-gray-600 text-justify dark:text-white">
            Whether you have questions about our services or just want to get in touch, we are here to help! 
          </p>
          <div className="flex gap-8">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-black dark:text-white">Our Location</h2>
              <p className="text-md text-gray-600 dark:text-white">
                1600 Amphitheatre Parkway, Mountain View, CA
              </p>

              {/* Location Icon Above the Map */}
              <div className="flex items-center gap-2 mt-4">
                <FaMapMarkerAlt className="text-red-600 dark:text-white" size={20} />
                <span className="text-black dark:text-white">Our Office Location</span>
              </div>

              <div className="h-[250px] w-full bg-gray-200 dark:bg-gray-800 rounded-xl mt-4">
                {/* Add a map iframe or custom map here */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.423081967016!2d-122.08409871627965!3d37.42302187982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb8a2fa78fdff%3A0xc16565b8d3bb35ea!2s1600%20Amphitheatre%20Parkway%2C%20Mountain%20View%2C%20CA!5e0!3m2!1sen!2sin!4v1634195870742!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <button className="bg-red-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer">
            SEND EMAIL
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
