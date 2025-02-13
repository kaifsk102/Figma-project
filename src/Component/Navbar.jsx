import React, { useState } from 'react';
import bag from '/bag.svg';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white py-6 px-6 md:px-20 flex justify-between items-center relative">
      {/* Logo */}
      <p className="font-gilroy font-bold text-[24px] md:text-[28px]">Panto</p>

      {/* Desktop Navigation */}
      <div className="hidden md:flex font-gilroy font-medium text-[16px] md:text-[18px] space-x-6 md:space-x-16">
        <a href="#"><DropdownMenu /></a>
        <a href="#shop" className="hover:text-orange-400 transition duration-300">Shop</a>
        <a href="#aboutus" className="hover:text-orange-400 transition duration-300">About Us</a>
        <a href="#contact" className="hover:text-orange-400 transition duration-300">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
        {isOpen ? (
          <span className="text-3xl font-bold">✖</span> // Close Icon
        ) : (
          <span className="text-3xl font-bold">☰</span> // Hamburger Icon
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black opacity-80 text-white flex flex-col items-center py-5 space-y-6 md:hidden">
          <a href="#" className="text-lg" onClick={() => setIsOpen(false)}><DropdownMenu /></a>
          <a href="#shop" className="text-lg hover:text-orange-400" onClick={() => setIsOpen(false)}>Shop</a>
          <a href="#aboutus" className="text-lg hover:text-orange-400" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#contact" className="text-lg hover:text-orange-400" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}

      {/* Shopping Cart Icon */}
      <img src={bag} alt="Shopping Cart" className="w-6 h-6 cursor-pointer hover:scale-105 transition-transform" />
    </nav>
  );
};

export default Navbar;
