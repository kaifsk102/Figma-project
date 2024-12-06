import React from 'react'
import Material1 from '/Material1.jpg'
import Material2 from '/Material2.jpg'
import Material3 from '/Material3.jpg'

const Materials = () => {
  return (
    <div className="  mx-auto flex w-screen min-h-screen mt-20 "> 
      <div className="text-section ml-20 space-y-10"> 
        <h2 className="font-gilroy font-semibold text-[18px] leading-[21.09px] tracking-[0.175em] text-left text-[#E58411]">MATERIALS</h2> 
        <h1 className="font-gilroy font-bold text-[42px] leading-[49.22px] text-left text-[#1E1E1E]">Very Serious <br /> Materials For Making <br /> Furniture</h1> 
        <p className="opacity-[0.8] w-[546px] font-gilroy font-regular text-[18px] leading-[33.3px] text-left text-[#1E1E1E]"> Because panto was very serious about designing
             furniture for our environment, using a very expensive and famous capital but at a relatively low price </p> 
        <a href="#" className=" w-[121px] h-[26px]  font-gilroy  mt-10 text-orange-500">More Info<span className="ml-2  ">→</span></a> 
    </div> 
    <div className=" flex pl-40  gap-7"> 
      <div className=''> 
      <img src={Material1} alt="Material1" className="  w-[223px] h-[250px] " />
      <img src={Material2} alt="Material2" className=" w-[223px] h-[338.42px] " />
      </div>
      <img src={Material3} alt="Material3" className=" w-[565px] h-[445px] mt-20   rounded-tl-[20px] " /> 
    </div>
    </div>
  )
}

export default Materials