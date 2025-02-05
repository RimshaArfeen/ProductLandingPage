import React from 'react'
import './Main.css'
import { NavLink } from 'react-router-dom'
const Main = () => {
  return (
   
<section className=" body-font h-screen">
  <div className="blurImg"></div>
  <div className="bg_img"></div>
  <div className=" contain flex mx-auto  pl-5 py-16 lg:py-24 flex-col items-center h-fit absolute top-36 lg:top-20">
    <div className="w-full lg:mt-24 flex flex-col text-left  md:w-2/3 mx-auto">
      <h1 className="heading text-4xl text-left title-font lg:text-[3.4rem] mb-4 font-semibold uppercase">Nesta Coffee
      </h1>
      <p className=" para mb-8 text-sm leading-relaxed w-5/6 text-gray-400 ">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="btns flex justify-between w-3/4 md:w-2/5 ">
        <button className=" w-3/4 lg:w-2/3 inline-flex  border-0 py-2 px-6 focus:outline-none  rounded text-lg items-center justify-center"><NavLink to="/cate">Order Now</NavLink></button>
        {/* <button className="inverted ml-4 border-0 py-2 px-6 focus:outline-none rounded text-lg  items-center justify-center">Call Us</button> */}
      </div>
    </div>
  </div>
</section>

  )
}

export default Main;
  