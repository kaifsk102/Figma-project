import React from 'react';

import ToggleSwitch from './ToggleSwitch';
          
const BestSellingProduct = () => {

  return (
    <div id='shop' className="bg-[#F7F7F7] w-screen min-h-screen font-gilroy">
      <h1 className=" font-bold text-[42px] pt-10  text-center">Best Selling Product</h1>
      <ToggleSwitch/>
  </div>
  );
};

export default BestSellingProduct;
