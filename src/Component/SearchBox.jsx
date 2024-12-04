import React from 'react';

const SearchBox = () => {
  return (
    <div className=" absolute flex bg-[#FFFFFF26] rounded-full w-[344px] h-[56px] top-[504px] left-[588px]
       p-[8px]  pr-[8px] py-[8px] pl-[20px]  border-[0.86px]  justify-between">
      <input
        type="text"
        placeholder="Search furniture"
        className="w-full h-full border-none outline-none text-white rounded-full bg-transparent"
        
      />
      <button type="button" className="bg-[#E58411] flex justify-center w-[40px] h-[40px] p-[11px]  rounded-full ">  
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.75 15.75L12.3855 12.3795M14.25 7.875C14.25 9.56576 13.5784 11.1873 12.3828 12.3828C11.1873 13.5784 9.56576 14.25 7.875 14.25C6.18424 14.25 4.56274 13.5784 3.36719 12.3828C2.17165 11.1873 1.5 9.56576 1.5 7.875C1.5 6.18424 2.17165 4.56274 3.36719 3.36719C4.56274 2.17165 6.18424 1.5 7.875 1.5C9.56576 1.5 11.1873 2.17165 12.3828 3.36719C13.5784 4.56274 14.25 6.18424 14.25 7.875Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>
      </button> 
    </div>
  );
};

export default SearchBox;
