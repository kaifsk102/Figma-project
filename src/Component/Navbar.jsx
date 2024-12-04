import React from 'react'
import bag from '/bag.svg'
import DropdownMenu from './DropdownMenu'

const Navbar = () => {
  return (
    <div className=' flex justify-between text-center items-center px-24 py-10 text-[#FFFFFF] '>   
      <p className='font-gilroy font-bold  text-[28px] leading-[32.81px] tracking-[0.01em] '>Panto</p>
      <div className='w-[478px] h-[22px]  font-gilroy font-medium text-[18px] leading-[21.09px]  space-x-16 '>
      <a href="#" className="hover:underline"><DropdownMenu/></a>
      <a href="#" className="hover:underline">Shop</a> 
      <a href="#" className="hover:underline">About Us</a> 
      <a href="#" className="hover:underline">Contact</a>
      </div>
      <img src={bag} alt="Bag_icon" />
    </div>
  )
}

export default Navbar