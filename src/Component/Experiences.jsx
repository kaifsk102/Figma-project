import React from 'react'
import Living_Room from '/Experiences.jpg'

const Experiences = () => {
  return (
    <div className=" mx-auto  w-full min-h-screen flex   items-center "> 
 
      <img src={Living_Room} alt="Living Room" className="living-room-image w-[529px] h-[405px] rounded-tr-[20px]" /> 
   
      <div className="text-section ml-40   space-y-8"> 
        <h2 className="  font-gilroy font-semibold text-[18px] leading-[21.09px] tracking-[0.175em]  text-[#E58411] ">EXPERIENCES</h2> 
        <h1 className=" w-2/3  font-gilroy font-bold text-[42px] leading-[49.22px] ">We Provide You The Best Experience</h1> 
        <p className="w-2/3   font-gilroy text-[18px] leading-[33.3px]   text-[#1E1E1E]"> You don’t have to worry about the result because
            all of these interiors are made by people who are professionals in their
            fields with an elegant and luxurious style and with premium quality materials. </p> 
        <div>
          <a href="#" className=" text-orange-500">More Info<span className="ml-2  ">→</span></a> 
        </div> 
        
      </div> 
    
    </div>
  )
}

export default Experiences