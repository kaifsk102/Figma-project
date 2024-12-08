import React from 'react'

const Footer = () => {
  return (
    

<footer id='contact' className="  bg-[#F7F7F7] w-screen justify-items-center content-center h-[402px]">
  <div className="  space-y-14   ">
    <div className=" flex space-x-28 ">
      <div className=' space-y-10 '>
        <h1 className=' font-gilroy font-bold text-[28px]   '>Panto</h1>
        <p className="  opacity-[0.8] font-gilroy font-medium text-[15px]  text-[#1E1E1E]">
        The advantage of hiring a workspace with<br /> us is that  givees you comfortable service<br /> and all-around facilities.
        </p>
      </div>
      
        <div className=" space-y-5">
          <p className="font-sans text-[17px] font-normal    text-[#F6973F] ">Services</p>

          <ul className=" space-y-3  mt-5 ">
            <li>
              <a className="   opacity-[0.8] font-gilroy font-medium text-[15px]  text-[#1E1E1E]" href="#">
                Email Marketing
              </a>
            </li>

            <li>
              <a className="  opacity-[0.8] font-gilroy font-medium text-[15px]  text-[#1E1E1E]" href="#">
                Campaigns
              </a>
            </li>

            <li>
              <a className="   opacity-[0.8] font-gilroy font-medium text-[15px]  text-[#1E1E1E]" href="#">
                Branding
              </a>
            </li>

          </ul>
        </div>

        <div className="space-y-5">
          <p className="font-sans text-[17px] font-normal    text-[#F6973F]">Furniture</p>

          <ul className="  space-y-3 mt-5 ">
            <li>
              <a className="   opacity-[0.8] font-gilroy font-medium text-[15px]  text-[#1E1E1E]" href="#">
                Beds
              </a>
            </li>

            <li>
              <a className="   opacity-[0.8] font-gilroy font-medium text-[15px]  text-[#1E1E1E]" href="#"> Chair </a>
            </li>

            <li>
              <a className="   opacity-[0.8] font-gilroy font-medium text-[15px]  text-[#1E1E1E]" href="#"> All </a>
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <p className="font-sans text-[17px] font-normal   text-[#F6973F]">Follow Us</p>
          <ul className=" space-y-3 ">
          <li className=' space-x-2 flex'>
              
              <a className=" opacity-[0.8] font-gilroy font-medium text-[15px] text-[#1E1E1E]"> <i class="fa fa-facebook mr-2 text-black"></i>Facebook</a>
          </li>

          <li className='space-x-2  flex  ' >
          
              <a className="  opacity-[0.8] font-gilroy font-medium text-[15px]  text-[#1E1E1E]"> <i class="fa fa-twitter mr-2 text-black"></i>Twitter</a>
          </li>

          <li className='flex space-x-2  ' >
              
              <a className="  opacity-[0.8] font-gilroy font-medium text-[15px]  text-[#1E1E1E]"> <i class="fa fa-instagram mr-2 text-black"></i>Instagram</a>  
          </li>

          
        </ul>

          
        </div>
      
    </div>

    
      <div className=" flex justify-between  ">
        <p className=" opacity-[0.5] font-sans text-[15px] font-normal    text-[#1E2833]">
        Copyright &copy; 2024
        </p>
        <p className="opacity-[0.8]  space-x-10 font-gilroy text-[15px] font-normal   text-[#1E2833]">
             <samp> Terms & Conditions </samp>
             <samp>Privacy Policy</samp>
        </p>
      
    </div>
  </div>
</footer>
  )
}

export default Footer