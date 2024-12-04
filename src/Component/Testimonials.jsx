import React from 'react'
import Client1 from '/Client1.jpg'
import Client2 from '/Client2.jpg'
import Client3 from '/Client3.jpg'

const Testimonials = () => {
  return (
    <div className='mx-auto'>
        <div>
        <h2 className=" absolute w-[155px] h-[22px] top-[4285.42px] left-[631px] font-gilroy font-semibold text-[18px] leading-[21.09px] tracking-[0.175em] text-center text-[#E58411]">TESTIMONIALS</h2> 
        <h1 className=" absolute w-[413px] h-[52px] top-[4327.42px] left-[502px] font-gilroy font-bold text-[42px] leading-[49.22px] text-center text-[#1E1E1E]">Our Client Reviews</h1> 
        </div>
        <div className=''>
    
        <div className=' '>
            <img src={Client1} alt="" className=' absolute w-[370px] h-[506px] top-[4439.42px] left-[147px]' />
            <img src={Client2} alt="" className=' absolute w-[370px] h-[506px] top-[4439.42px] left-[964px]' />
            <img src={Client3} alt="" className=' absolute w-[370px] h-[506px] top-[4439.42px] left-[556px] ' />
        </div>
        <button className=" absolute w-12.5 h-12.5 top-[4583px] left-[105px] p-[11.96px_0_0_0] gap-[10.87px] rounded-tl-[26.09px] ">
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
        <button className=" absolute w-12.5 h-12.5 top-[4583px] left-[1286px] p-[11.96px_0_0_0] gap-[10.87px] rounded-tl-[26.09px] ">
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
    </div>
  )
}

export default Testimonials