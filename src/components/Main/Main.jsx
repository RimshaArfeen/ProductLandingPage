import React from 'react';
import './Main.css';
import { NavLink } from 'react-router-dom';
import Img from './nathan-dumlao2.jpg';

const Main = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat bg-blend-multiply"
      style={{ backgroundImage: `url(${Img})` }}
    >
      <div className="bg-black bg-opacity-50 px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          A Moment of Perfect Brew
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48">
          Savor the rich aroma and exquisite flavor of our hand-crafted coffee.
          Join us for a unique experience, one cup at a time.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <NavLink
            to="/menu"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900"
          >
            Explore Our Menu
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Our Story
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Main;
{/* <section className=" body-font h-screen">
  <div className="blurImg"></div>
  <div className="bg_img"></div>
  <div className=" contain flex mx-auto  pl-5 py-16 lg:py-24 flex-col items-center h-fit absolute top-36 lg:top-20">
    <div className="w-full lg:mt-24 flex flex-col text-left  md:w-2/3 mx-auto">
      <h1 className="heading text-4xl text-left title-font lg:text-[3.4rem] mb-4 font-semibold uppercase">Nesta Coffee
      </h1>
      <p className=" para mb-8 text-sm leading-relaxed w-5/6 text-gray-400 ">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="btns flex justify-between w-3/4 md:w-2/5 ">
        <button className=" w-3/4 lg:w-2/3 inline-flex  border-0 py-2 px-6 focus:outline-none  rounded text-lg items-center justify-center"><NavLink to="/cate">Order Now</NavLink></button>
        {/* <button className="inverted ml-4 border-0 py-2 px-6 focus:outline-none rounded text-lg  items-center justify-center">Call Us</button> 
      </div>
    </div>
  </div>
</section> */}



  