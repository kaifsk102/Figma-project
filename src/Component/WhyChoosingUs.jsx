import React from 'react';

const WhyChoosingUs = () => {
  return (
    <div className="min-h-[404px] w-full px-6 md:px-16 lg:px-28 flex flex-col items-center font-gilroy">
      {/* Title */}
      <p className="font-bold text-[28px] md:text-[42px] text-center my-10">Why Choosing Us</p>

      {/* Content Grid (Responsive) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center md:text-left w-full max-w-5xl">
        {[
          { title: "Luxury Facilities", text: "The advantage of hiring a workspace with us is that it gives you comfortable service and all-around facilities." },
          { title: "Affordable Price", text: "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here." },
          { title: "Many Choices", text: "We provide many unique workspace choices so that you can choose the workspace to your liking." }
        ].map((item, index) => (
          <div key={index} className="space-y-4">
            <h3 className="font-bold text-[18px] md:text-[20px] text-[#1E1E1E]">{item.title}</h3>
            <p className="opacity-80 text-[14px] md:text-[16px] text-[#1E1E1E]">{item.text}</p>
            <a href="#" className="text-orange-500 text-[14px] flex items-center justify-center md:justify-start">
              More Info <span className="ml-2">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoosingUs;
