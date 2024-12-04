import React from 'react'
import bag from '/bag.svg'
import DropdownMenu from './DropdownMenu'

const Navbar = () => {
  return (
    <div className=' flex justify-between mx-auto top-10  text-[#FFFFFF] '>   
      <p className='font-gilroy font-bold  text-[28px] leading-[32.81px] tracking-[0.01em] w-[78px] h-[35px] absolute top-[40px] left-[132px] '>Panto</p>
      <div className='w-[478px] h-[22px] absolute top-[41px] left-[533px] font-gilroy font-medium text-[18px] leading-[21.09px]  space-x-16 '>
      <a href="#" className=""><DropdownMenu/></a>
      <a href="#" className="">Shop</a> 
      <a href="#" className="">About Us</a> 
      <a href="#" className="">Contact</a>
      </div>
      <img src={bag} alt="Bag_icon" className='w-[34px] h-[34px] absolute top-[41px] left-[1349px] pt-[2.83px] pr-[4.25px] pb-[2.83px] pl-[4.25px]' />
    </div>
  )
}

export default Navbar