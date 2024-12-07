import React from 'react'
import Material1 from '/Material1.jpg'
import Material2 from '/Material2.jpg'
import Material3 from '/Material3.jpg'

const Materials = () => {
  return (
    <div className="  flex w-screen min-h-screen items-center justify-between  "> 
      <div className="text-section ml-24 space-y-8"> 
        <h2 className="font-gilroy font-semibold text-[18px] leading-[21.09px] tracking-[0.175em]  text-[#E58411]">MATERIALS</h2> 
        <h1 className="font-gilroy font-bold text-[42px] leading-[49.22px]  text-[#1E1E1E]">Very Serious <br /> Materials For Making <br /> Furniture</h1> 
        <p className="opacity-[0.8] w-2/3 font-gilroy font-regular text-[18px] leading-[33.3px]  text-[#1E1E1E]"> Because panto was very serious about designing
             furniture for our environment, using a very expensive and famous capital but at a relatively low price </p> 
        <div>
        <a href="#" className=" text-orange-500">More Info<span className="ml-2  ">→</span></a> 
        </div>
    </div> 
    <div className=" flex  space-x-5"> 
      <div className=''> 
      <img src={Material1} alt="Material1" className="  w-[423px] h-[280px] " />
      <img src={Material2} alt="Material2" className=" w-[423px] h-[280.42px] " />
      </div>
      <img src={Material3} alt="Material3" className=" w-[565px] h-[445px]   rounded-tl-[20px] " /> 
    </div>
    </div>
  )
}

export default Materials