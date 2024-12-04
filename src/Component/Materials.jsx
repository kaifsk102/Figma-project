import React from 'react'
import Material1 from '/Material1.jpg'
import Material2 from '/Material2.jpg'
import Material3 from '/Material3.jpg'

const Materials = () => {
  return (
    <div className=" container mx-auto "> 
      <div className="text-section"> 
        <h2 className=" absolute w-[117px] h-[22px] top-[3555px] left-[80px] font-gilroy font-semibold text-[18px] leading-[21.09px] tracking-[0.175em] text-left text-[#E58411]">MATERIALS</h2> 
        <h1 className=" absolute w-[413px] h-[156px] top-[3597px] left-[80px] font-gilroy font-bold text-[42px] leading-[49.22px] text-left text-[#1E1E1E]">Very serious materials for making furniture</h1> 
        <p className=" absolute w-[556px] h-[99px] top-[3773px] left-[80px] opacity-[0.8] font-gilroy font-regular text-[18px] leading-[33.3px] text-left text-[#1E1E1E]"> Because panto was very serious about designing
             furniture for our environment, using a very expensive and famous capital but at a relatively low price </p> 
        <a href="#" className=" absolute w-[121px] h-[26px] top-[3896px] font-gilroy left-[80px] text-orange-500">More Info<span className="ml-2  ">→</span></a> 
    </div> 
    <div className="  "> 
      <img src={Material1} alt="Material1" className=" absolute  w-[223px] h-[250px] top-[3490px] left-[700px]" />
      <img src={Material2} alt="Material2" className=" absolute w-[223px] h-[338.42px] top-[3730px] left-[700px]" />
      <img src={Material3} alt="Material3" className=" absolute w-[575px] h-[445px] top-[3570px] left-[952px] rounded-tl-[20px] " /> 
    </div>
    </div>
  )
}

export default Materials