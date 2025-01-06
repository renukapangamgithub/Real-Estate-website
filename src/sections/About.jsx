import React from 'react';
import aboutimg from '../assets/images/about.jpg';
import { useDarkMode } from "../components/DarkModeContext";

const About = () => {
  const { darkMode } = useDarkMode();

  // Define animation styles in JavaScript objects
  const fadeInStyle = {
    animation: "fadeIn 1s ease-in-out forwards",
  };

  const delay200Style = {
    animationDelay: "0.2s",
  };

  return (
    <section
      id='about'
      className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 
      grid-cols-1 justify-center items-center gap-10`}
    >
      <div style={fadeInStyle}>
        <img src={aboutimg} alt="about image" className='rounded-2xl lg:w-[500px] lg:h-[600px]' />
      </div>
      <div className='flex flex-col justify-center items-start gap-8' style={{ ...fadeInStyle, ...delay200Style }}>
        <h1 className='text-red-500 dark:text-white'>WHO WE ARE</h1>
        <h1 className='text-black text-[40px] font-semibold leading-10 dark:text-white'>
          Welcome to Our Real Estate Company
        </h1>
        <p className='text-xl text-gray-600 dark:text-white text-justify'>
          We are dedicated to helping you find your dream home with ease. Our expert team is committed to providing you with the best service, from personalized consultations to comprehensive property listings. Whether you're buying, selling, or renting, we're here to make your real estate journey smooth and successful.
        </p>
        <button
          className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white
          dark:hover:text-black text-lg p-4 text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300"
        >
          READ MORE
        </button>
      </div>
    </section>
  );
}

export default About;
