import React from 'react';

import ToggleSwitch from './ToggleSwitch';
          
const BestSellingProduct = () => {

  return (
    <div className="bg-[#F7F7F7] w-full h-[906px] font-gilroy">
      <h1 className="w-[389px] h-[52px] absolute top-[1574px]  left-[564px] font-bold text-[38px] leading-[49.22px] text-center">Best Selling Product</h1>
      <ToggleSwitch/>
      
      <div className="">
        <button className="w-[50px] h-[50px] absolute top-[1996px] left-[129px] pt-[11.96px] gap-[10.87px]  ">
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
        
        <button className="w-[50px] h-[50px] absolute top-[1996px] left-[1294px] pt-[11.96px] gap-[10.87px]">
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
      <div className="text-center w-[123px] h-[33px] absolute top-[2330px] left-[665px] ">
        <a href="#" className="text-orange-500 font-gilroy text-[16px] leading-[33.3px]">View All<span className="ml-2">→</span></a>
      </div>
    </div>
  );
};

export default BestSellingProduct;
