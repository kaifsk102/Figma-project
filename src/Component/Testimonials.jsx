import React from 'react';
import ClientCard from './ClientCard';
import Client1 from '/client1.png';
import Client2 from '/client2.png';
import Client3 from '/client3.png';
import Bg1 from '/cl bg1.png'; 
import Bg2 from '/cl bg2.png';
import Bg3 from '/cl bg3.png'; 

const Testimonials = () => {
  const clientReviews = [
    {
      image: Client1,
      name: 'Alice Johnson',
      review: 'I love the revolving feature of this recliner all the function are working properly and the motorized feature is amazing delivery was on time with nice packaging. Thanks Wooden stree',
      rating: 5,
      bgImage: Bg1,
    },
    {
      image: Client2,
      name: 'Michael Smith',
      review: 'I am realy happy as its fits in all my needs what I actually want I got that. Fabric of the sofa they have used in it is amazing and its of high quality very comfortable in setting. Color of the sofa is also very nice.',
      rating: 5,
      bgImage: Bg2,
    },
    {
      image: Client3,
      name: 'Sophia Lee',
      review: 'I have order from the store its really amazing and delivery to me on time without any delay. Headrest is very comfortable and plus point I like that we can adjust the backrest also very nice chair.',
      rating: 4,
      bgImage: Bg3,
    },
  ];

  return (
    <div className="w-screen min-h-screen py-10 flex flex-col items-center">
      {/* Section Title */}
      <div className="mb-14 space-y-3 text-center">
        <h2 className="font-gilroy font-semibold text-[16px] tracking-[0.175em] text-[#E58411] md:text-[18px]">TESTIMONIALS</h2>
        <h1 className="font-gilroy font-bold text-[28px] md:text-[42px] text-[#1E1E1E]">Our Client Reviews</h1>
      </div>

      {/* Client Cards in a Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 w-full max-w-6xl px-4 md:px-8">
        {clientReviews.map((client, index) => (
          <ClientCard key={index} {...client} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
