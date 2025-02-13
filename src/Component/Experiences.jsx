import React from 'react'
import Living_Room from '/Experiences.jpg'

const Experiences = () => {
  return (
<div className="mx-auto w-full min-h-screen flex flex-col md:flex-row items-center px-6 md:px-0">
 
      <img src={Living_Room} alt="Living Room" className="living-room-image w-[529px] h-[405px] rounded-tr-[20px]" /> 
   
      <div className="text-section ml-40   space-y-8"> 
        <h2 className="  font-gilroy font-semibold text-[18px] leading-[21.09px] tracking-[0.175em]  text-[#E58411] ">EXPERIENCES</h2> 
        <h1 className=" max-w-lg text-center md:text-left  font-gilroy font-bold text-[42px] leading-[49.22px] ">We Provide You The Best Experience</h1> 
        <p className="max-w-lg text-center md:text-left   font-gilroy text-[18px] leading-[33.3px]   text-[#1E1E1E]"> You don’t have to worry about the result because
            all of these interiors are made by people who are professionals in their
            fields with an elegant and luxurious style and with premium quality materials. </p> 
        <div>
        <a href="#" className="text-orange-500 font-medium ">More Info <span className="ml-2">→</span></a>
        </div> 
        
      </div> 
    
    </div>
  )
}

export default Experiences