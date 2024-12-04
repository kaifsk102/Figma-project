import React from 'react'
import Living_Room from '/Experiences.jpg'

const Experiences = () => {
  return (
    <div className="container  "> 
    <div className=" absolute mx-auto w-[629px] h-[445px] top-[2716px] left-[-27px] rounded-tl-[20px]"> 
      <img src={Living_Room} alt="Living Room" className="living-room-image" /> 
    </div> 
      <div className="text-section"> 
        <h2 className=" absolute w-[143px] h-[22px] top-[2733px] left-[743px] font-gilroy font-semibold text-[18px] leading-[21.09px] tracking-[0.175em] text-[#E58411] ">EXPERIENCES</h2> 
        <h1 className=" absolute w-[413px] h-[104px] top-[2775px] left-[743px] font-gilroy font-bold text-[42px] leading-[49.22px] text-left">We Provide You The Best Experience</h1> 
        <p className=" absolute w-[536px] h-[132px] top-[2899px] left-[743px] font-gilroy text-[18px] leading-[33.3px] text-left text-[#1E1E1E]"> You don’t have to worry about the result because
            all of these interiors are made by people who are professionals in their
            fields with an elegant and luxurious style and with premium quality materials. </p> 
        <a href="#" className=" absolute w-[121px] h-[26px] top-[3055px] left-[743px] font-gilroy text-orange-500">More Info<span className="ml-2  ">→</span></a> 
    </div> 
    </div>
  )
}

export default Experiences