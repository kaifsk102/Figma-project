import React from 'react';

const WhyChoosingUs = () => {
  return (
    <div className=" h-[404px] items-center px-32 mt-20 flex font-gilroy gap-20 ">
      
          <p className='font-bold text-[42px] flex'> Why Choosing Us</p>
      <div className=" flex ml-16  gap-10">
        
        <div className=" space-y-5 ">
          <h3 className="font-bold text-[20px]   text-[#1E1E1E] ">Luxury facilities</h3>
          <p className="  opacity-80  text-[16px] text-[#1E1E1E] ">
            The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.
          </p>
          <a href="#" className="text-orange-500 flex text-[14px] items-center  ">
            More Info <span className="ml-2">→</span>
          </a>
        </div>
        <div className=" space-y-5">
          <h3 className=" font-bold text-[20px]   text-[#1E1E1E] ">Affordable Price</h3>
          <p className=" opacity-80  text-[16px]   text-[#1E1E1E]  ">
            You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.
          </p>
          <a href="#" className="text-orange-500 flex text-[14px]  items-center  ">
            More Info <span className=" ml-2">→</span>
          </a>
        </div>
        <div className=" space-y-5">
          <h3 className=" font-bold text-[20px]  text-[#1E1E1E] ">Many Choices</h3>
          <p className="  opacity-80  text-[16px]  text-[#1E1E1E]  ">
            We provide many unique workspace choices so that you can choose the workspace to your liking.
          </p>
          <a href="#" className="text-orange-500 text-[14px] flex items-center ">
            More Info <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyChoosingUs;
