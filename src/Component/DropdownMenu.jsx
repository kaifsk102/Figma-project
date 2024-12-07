import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" inline-block text-left">
      <div>
        <button
          type="button"
          className='flex '
          onClick={toggleDropdown}
        >
          Furniture
          <i className='fa fa-angle-down ml-2 mt-1 font-bold'></i>
        </button>
      </div>

      {isOpen && (
        <div className=" absolute mt-2 w-24 rounded-tl-3xl rounded-br-3xl border bg-[#0c0a0a52]  ">
          <div className=" text-center font-sans " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block  py-1 text-sm rounded-tl-3xl text-gray-300 hover:bg-[#E58411]" role="menuitem">Chair</a>
            <a href="#" className="block  py-1 text-sm text-gray-300 hover:bg-[#E58411]" role="menuitem">Beds</a>
            <a href="#" className="block  py-1 text-sm rounded-br-3xl text-gray-300 hover:bg-[#E58411]" role="menuitem">Sofa</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
