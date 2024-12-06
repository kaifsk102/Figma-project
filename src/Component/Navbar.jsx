import React from 'react'
import bag from '/bag.svg'
import DropdownMenu from './DropdownMenu'

const Navbar = () => {
  return (
    <div className=' flex justify-between pt-12  px-20 text-[#FFFFFF] '>   
      <p className='font-gilroy font-bold  text-[28px]    '>Panto</p>
      <div className=' font-gilroy font-medium text-[18px] space-x-16 '>
      <a href="#" className=""><DropdownMenu/></a>
      <a href="#" className="">Shop</a> 
      <a href="#" className="">About Us</a> 
      <a href="#" className="">Contact</a>
      </div>
      <img src={bag} alt="Bag_icon" className='  px-[4.25px] py-[2.25px]' />
    </div>
  )
}

export default Navbar