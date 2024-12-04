import React from 'react'


const ChairPhoto = () => {
  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
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
  )
}

export default ChairPhoto

