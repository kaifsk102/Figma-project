import React from 'react';
import Material1 from '/Material1.jpg';
import Material2 from '/Material2.jpg';
import Material3 from '/Material3.jpg';

const Materials = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen items-center justify-between px-6 md:px-24 space-y-10 md:space-y-0">
      {/* Text Section */}
      <div className="text-section space-y-6 md:space-y-8 max-w-xl">
        <h2 className="font-gilroy font-semibold text-[16px] md:text-[18px] tracking-[0.175em] text-[#E58411]">
          MATERIALS
        </h2>
        <h1 className="font-gilroy font-bold text-[30px] md:text-[42px] leading-[40px] md:leading-[49.22px] text-[#1E1E1E]">
          Very Serious <br className="hidden md:block" /> Materials For Making <br className="hidden md:block" /> Furniture
        </h1>
        <p className="opacity-80 w-full md:w-2/3 font-gilroy text-[16px] md:text-[18px] leading-[28px] md:leading-[33.3px] text-[#1E1E1E]">
          Because Panto was very serious about designing furniture for our environment, using a very expensive and
          famous capital but at a relatively low price.
        </p>
        <div>
          <a href="#" className="text-orange-500 font-semibold hover:text-orange-700 transition duration-300">
            More Info <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5">
        <div className="flex flex-col space-y-5">
          <img src={Material1} alt="Material1" className="w-full md:w-[423px] h-[280px] object-cover rounded-lg" />
          <img src={Material2} alt="Material2" className="w-full md:w-[423px] h-[280px] object-cover rounded-lg" />
        </div>
        <img src={Material3} alt="Material3" className="w-full md:w-[565px] h-[445px] object-cover rounded-lg rounded-tl-[20px]" />
      </div>
    </div>
  );
};

export default Materials;
