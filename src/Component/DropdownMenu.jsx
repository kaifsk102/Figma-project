import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className='flex'
          onClick={toggleDropdown}
        >
          Furniture
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-24 rounded-tl-3xl rounded-br-3xl border bg-[#FFFFFF26]  ">
          <div className=" text-center" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block  py-1 text-sm rounded-tl-3xl text-gray-300 hover:bg-gray-400" role="menuitem">Chair</a>
            <a href="#" className="block  py-1 text-sm text-gray-300 hover:bg-gray-400" role="menuitem">Beds</a>
            <a href="#" className="block  py-1 text-sm rounded-br-3xl text-gray-300 hover:bg-gray-400" role="menuitem">Sofa</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
