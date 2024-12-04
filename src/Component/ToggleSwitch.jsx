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
    <div className="flex flex-col items-center">
      <div className="flex bg-gray-200 justify-center w-[348px] absolute top-[1680px]  h-[57px] p-[6px_0px_0px_0px] rounded-full">
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
      <div className='flex justify-center items-center w-full h-[492px] absolute   top-[1799px]'>
      <div className=" chair grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-8 ">
          <div className="bg-white p-5 space-y-2 rounded-lg shadow-md text-center w-[268px] h-[492px] ">
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
        <div className="bg-white p-5 space-y-2 rounded-lg shadow-md text-center w-[268px] h-[492px] ">
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
        <div className="bg-white p-5 space-y-2 rounded-lg shadow-md text-center w-[268px] h-[492px] ">
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
        <div className="bg-white p-5 space-y-2 rounded-lg shadow-md text-center w-[268px] h-[492px] ">
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
        </div> 
    </div>
  );
};

export default ToggleSwitch;

