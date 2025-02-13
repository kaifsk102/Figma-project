import React from 'react';

const ClientCard = ({ image, name, review, rating, bgImage }) => {
  return (
    <div
      className="relative w-[370px] h-[450px] rounded-2xl overflow-hidden shadow-lg text-white flex flex-col items-center text-center p-6"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>

      {/* Client Image */}
      <div className="relative z-10 w-24 h-24 rounded-full overflow-hidden border-4 border-orange-500 shadow-md">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Client Name */}
      <h3 className="relative z-10 text-xl font-semibold mt-4">{name}</h3>

      {/* Star Ratings */}
      <div className="relative z-10 flex space-x-1 mt-2">
        {Array.from({ length: 5 }, (_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill={index < rating ? '#FFD700' : 'gray'}
            viewBox="0 0 24 24"
            stroke="none"
            className="w-5 h-5"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>

      {/* Review Text */}
      <p className="relative z-10 text-sm mt-4 px-6 opacity-90">"{review}"</p>
    </div>
  );
};

export default ClientCard;
