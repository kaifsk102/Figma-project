import React from 'react';

const Footer = () => {
  return (
    <footer id='contact' className="bg-[#F7F7F7] w-screen justify-items-center content-center py-10 px-5">
      <div className="space-y-14 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-28 space-y-10 md:space-y-0">
          <div className='space-y-5'>
            <h1 className='font-gilroy font-bold text-[28px]'>Panto</h1>
            <p className="opacity-[0.8] font-gilroy font-medium text-[15px] text-[#1E1E1E]">
              The advantage of hiring a workspace with us is that it gives <br /> you comfortable service
              and all-around facilities.
            </p>
          </div>
          
          <div className="space-y-5">
            <p className="font-sans text-[17px] font-normal text-[#F6973F]">Services</p>
            <ul className="space-y-3">
              <li><a className="opacity-[0.8] font-gilroy font-medium text-[15px] text-[#1E1E1E]" href="#">Email Marketing</a></li>
              <li><a className="opacity-[0.8] font-gilroy font-medium text-[15px] text-[#1E1E1E]" href="#">Campaigns</a></li>
              <li><a className="opacity-[0.8] font-gilroy font-medium text-[15px] text-[#1E1E1E]" href="#">Branding</a></li>
            </ul>
          </div>

          <div className="space-y-5">
            <p className="font-sans text-[17px] font-normal text-[#F6973F]">Furniture</p>
            <ul className="space-y-3">
              <li><a className="opacity-[0.8] font-gilroy font-medium text-[15px] text-[#1E1E1E]" href="#">Beds</a></li>
              <li><a className="opacity-[0.8] font-gilroy font-medium text-[15px] text-[#1E1E1E]" href="#">Chairs</a></li>
              <li><a className="opacity-[0.8] font-gilroy font-medium text-[15px] text-[#1E1E1E]" href="#">All</a></li>
            </ul>
          </div>

          <div className="space-y-5">
            <p className="font-sans text-[17px] font-normal text-[#F6973F]">Follow Us</p>
            <ul className="space-y-3">
              <li className='flex items-center space-x-2'>
                <i className="fa fa-facebook text-black"></i>
                <a className="opacity-[0.8] font-gilroy font-medium text-[15px] text-[#1E1E1E]" href="#">Facebook</a>
              </li>
              <li className='flex items-center space-x-2'>
                <i className="fa fa-twitter text-black"></i>
                <a className="opacity-[0.8] font-gilroy font-medium text-[15px] text-[#1E1E1E]" href="#">Twitter</a>
              </li>
              <li className='flex items-center space-x-2'>
                <i className="fa fa-instagram text-black"></i>
                <a className="opacity-[0.8] font-gilroy font-medium text-[15px] text-[#1E1E1E]" href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between text-center md:text-left space-y-5 md:space-y-0">
          <p className="opacity-[0.5] font-sans text-[15px] font-normal text-[#1E2833]">Copyright &copy; 2024</p>
          <p className="opacity-[0.8] font-gilroy text-[15px] font-normal text-[#1E2833] space-x-10">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
