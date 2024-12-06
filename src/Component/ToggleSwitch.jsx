import React, { useState } from 'react';
import chair from '/chair.svg.svg'
import chair1 from '/chair-1.svg.svg'
import chair2 from '/chair-2.svg.svg'
import chair3 from '/chair-3.svg.svg'




const ToggleSwitch = () => {
  const [selected, setSelected] = useState('Chair');

  const options = ['Chair', 'Beds', 'Sofa', 'Lamp'];

  const getImage = (option) => {
    switch (option) {
      case 'Chair':
        return  ;
      case 'Beds':
        return ;
      case 'Sofa':
        return ;
      case 'Lamp':
        return ;
      default:
        return ;
    }
  };

  //

  return (
    <div className="flex flex-col w-screen h-full mx-auto py-8 items-center">
      <div className="flex bg-gray-300 justify-center w-[348px] h-[57px] p-[6px_0px_0px_0px] rounded-full">
        {options.map((option) => (
          <button
            key={option}
            className={`w-[84px] h-[45px] p-[4px_0px_0px_0px] gap-[10px] rounded-full ${
              selected === option ? 'bg-white' : ''
            }`}
            onClick={() => setSelected(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className='flex justify-center  w-screen h-[494px] mt-16'>
      <button className="   ">
<span className="sr-only">Previous</span>
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_3_7607)">
<rect width="50" height="50" rx="25" transform="matrix(-1 0 0 1 70 13)" fill="white" shape-rendering="crispEdges"/>
<path d="M53.6958 38.4355H36.4857M36.4857 38.4355C36.4857 38.4355 41.364 35.2272 42.3552 32.5659M36.4857 38.4355C36.4857 38.4355 40.7983 41.45 42.3552 44.305" stroke="#1E1E1E" stroke-width="2.17391" stroke-linecap="square"/>
</g>
<defs>
<filter id="filter0_d_3_7607" x="0.46875" y="0.5" width="89.0625" height="89.0625" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="7.03125"/>
<feGaussianBlur stdDeviation="9.76562"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_7607"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_7607" result="shape"/>
</filter>
</defs>
</svg>
      </button>
      <div className=" chair grid grid-cols-4 gap-8 ">
          
        <div className="bg-white p-5 space-y-2 rounded-lg shadow-md text-center ">
            <img src={chair} alt="Sakarias Armchair" className="w-[217px] h-[255px]  mb-4" />
            <p className='font-inter text-[16.76px] font-normal leading-[20.28px] text-left text-[#8D8D8D]'>Chair</p>
            <h2 className="font-inter text-[21.33px] font-semibold leading-[25.81px] text-left text-[#0D1B39]">Sakarias Armchair</h2>
            <div className="flex ">
              <span className="text-yellow-500 text-lg ">★★★★★</span>
            </div>
          <div className=' flex justify-between py-7'>
            <p className="text-lg text-[#0D1B39] font-bold">$392</p>
            <button className="bg-blue-950 text-white py-2 px-4 rounded-full">+</button>
          </div>  
        </div>
        <div className="bg-white p-5 space-y-2 rounded-lg shadow-md text-center  ">
            <img src={chair1} alt="Baltsar Chair" className="w-[217px] h-[255px]  mb-4" />
            <p className='font-inter text-[16.76px] font-normal leading-[20.28px] text-left text-[#8D8D8D]'>Chair</p>
            <h2 className="font-inter text-[21.33px] font-semibold leading-[25.81px] text-left text-[#0D1B39]">Baltsar Chair</h2>
            <div className="flex ">
              <span className="text-yellow-500 text-lg ">★★★★★</span>
           </div>
          <div className=' flex justify-between py-7'>
            <p className="text-lg text-[#0D1B39] font-bold">$299</p>
            <button className="bg-blue-950 text-white py-2 px-4 rounded-full">+</button>
          </div>  
        </div>
        <div className="bg-white p-5 space-y-2 rounded-lg shadow-md text-center 
         ">
            <img src={chair2} alt="Anjay Chair" className="w-[217px] h-[255px]  mb-4" />
            <p className='font-inter text-[16.76px] font-normal leading-[20.28px] text-left text-[#8D8D8D]'>Chair</p>
            <h2 className="font-inter text-[21.33px] font-semibold leading-[25.81px] text-left text-[#0D1B39]">Anjay Chair</h2>
            <div className="flex ">
              <span className="text-yellow-500 text-lg ">★★★★★</span>
           </div>
          <div className=' flex justify-between py-7'>
            <p className="text-lg text-[#0D1B39] font-bold">$519</p>
            <button className="bg-blue-950 text-white py-2 px-4 rounded-full">+</button>
          </div>  
        </div>
        <div className="bg-white p-5 space-y-2 rounded-lg shadow-md text-center 
         ">
            <img src={chair3} alt="Nyantuy Chair" className="w-[217px] h-[255px]  mb-4" />
            <p className='font-inter text-[16.76px] font-normal leading-[20.28px] text-left text-[#8D8D8D]'>Chair</p>
            <h2 className="font-inter text-[21.33px] font-semibold leading-[25.81px] text-left text-[#0D1B39]">Nyantuy Chair</h2>
            <div className="flex ">
              <span className="text-yellow-500 text-lg ">★★★★★</span>
           </div>
          <div className=' flex justify-between py-7'>
            <p className="text-lg text-[#0D1B39] font-bold">$921</p>
            <button className="bg-blue-950 text-white py-2 px-4 rounded-full">+</button>
          </div>  
        </div>

        </div>
        <button className="     ">
          <span className="sr-only">Next</span>
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_3_7604)">
<rect x="20" y="13" width="50" height="50" rx="25" fill="white" shape-rendering="crispEdges"/>
<path d="M36.3042 38.4355H53.5143M53.5143 38.4355C53.5143 38.4355 48.636 35.2272 47.6448 32.5659M53.5143 38.4355C53.5143 38.4355 49.2017 41.45 47.6448 44.305" stroke="#1E1E1E" stroke-width="2.17391" stroke-linecap="square"/>
</g>
<defs>
<filter id="filter0_d_3_7604" x="0.46875" y="0.5" width="89.0625" height="89.0625" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="7.03125"/>
<feGaussianBlur stdDeviation="9.76562"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_7604"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_7604" result="shape"/>
</filter>
</defs>
</svg>
        </button>
        </div> 
        <a href="#" className="text-orange-500 mt-10  font-gilroy text-[16px] ">View All<span className="ml-2">→</span></a>

    </div>
  );
};

export default ToggleSwitch;

