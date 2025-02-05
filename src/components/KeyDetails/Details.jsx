import React from 'react'
import './Details.css'
import Img from './11246933.png'
import { useState } from 'react'
import Login from '../Login/LogIn.jsx';

const Details = () => {
  const [sideBar, setSideBar] = useState(true)
  const ShowLogin = () => {
    setSideBar(!sideBar);
  };
  return (
 
    <section className="text-gray-600 body-font  pt-20 h-fit relative  bg-gray-200">
      <div className=" px-0 flex flex-wrap w-full">
        <div class="login-sidebar flex flex-col p-5 text-left items-start md:pl-16 md:text-left lg:flex-grow">
        
          <div class={`box2 ${sideBar ? 'visible' : 'hide'}`}>
           
            <div class="flex flex-col w-full">
              <button class="w-full text-md inline-flex rounded border-0 bg-none px-3  text-white focus:outline-none"><Login className="list-none" ShowLogin={ShowLogin} /></button>
            </div>
              {/* <button class="ml-10 text-md inline-flex rounded border-0 bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200 focus:outline-none"onClick={ShowLogin}>Cancel</button> */}
          </div>

    
        </div>



        <div>
          <h1 className="Why text-3xl md:text-4xl font-bold mb-0 px-5 md:mb-10 text-center mx-auto ">Why Choose Our Coffee?</h1>
          <div className="flex flex-wrap w-full justify-center md:py-10 lg:pb-0 lg:justify-end">
            <div className="lg:w-2/5 md:w-3/4 md:pr-10 lg:pr-20 md:py-6 md:px-1 pt-20 px-10 text-lg ">
              <div className="flex relative pb-10">

                <div className="bullets flex-shrink-0 w-4 h-4 rounded-full inline-flex items-center justify-center text-white relative z-10 mt-1">

                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-xl text-gray-900 mb-1 tracking-wider">Premium Quality:</h2>
                  <p className="leading-relaxed text-[15px]">Our beans are hand-picked from the finest coffee-growing regions, ensuring a superior taste experience in every cup.</p>
                </div>
              </div>
              <div className="flex relative pb-10">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="bullets flex-shrink-0 w-4 h-4 rounded-full inline-flex items-center justify-center text-white relative z-10 mt-1">

                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-xl text-gray-900 mb-1 tracking-wider">Ethical Sourcing:</h2>
                  <p className="leading-relaxed text-[15px]">We maintain direct trade relationships with farmers, promoting sustainable practices and fair compensation.</p>
                </div>
              </div>
              <div className="flex relative pb-10">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="bullets flex-shrink-0 w-4 h-4 rounded-full inline-flex items-center justify-center text-white relative z-10 mt-1">

                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-xl text-gray-900 mb-1 tracking-wider">Freshness Guaranteed:</h2>
                  <p className="leading-relaxed text-[15px]">Our beans are roasted to order and shipped promptly, ensuring you receive the freshest coffee possible.</p>
                </div>
              </div>

            </div>
            <img className="lg:w-[37%] lg:block md:hidden  md:right-0  object-cover object-center rounded-lg  " src={Img} alt="step" />

          </div>

        </div>
      </div>
    </section>

  )
}

export default Details;
