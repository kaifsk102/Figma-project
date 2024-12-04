import React from 'react'
import backgroundImage from '/bannaer.jpg'
import Navbar from '../../Component/Navbar'
import SearchBox from '../../Component/SearchBox'
import WhyChoosingUs from '../../Component/WhyChoosingUs'
import Experiences from '../../Component/Experiences'
import Materials from '../../Component/Materials'
import Testimonials from '../../Component/Testimonials'
import Footer from '../../Component/Footer'
import BestSellingProduct from '../../Component/BestSellingProduct'
import './Home.css'


const Home = () => {
  return (
    <>
    <div>
    <div className=' h-[1084px] banner  '>
    <Navbar/>
    <div className='grid items-center justify-center '>
    
      <h1 className='absolute top-[161px] left-[290px] w-[860px] h-[200px] font-gilroy font-bold text-[77px] leading-[104px] tracking-[-0.01em] text-[#FFFFFF] text-center'>Make Your Interior More Minimalistic & Modern</h1>
      <p className='absolute top-[383px] left-[418px] w-[606px] h-[76px]  opacity-[0.8] font-gilroy  text-[24px] leading-[38.4px] text-center text-[#FFFFFF]'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
    <SearchBox/>
    </div>
    </div>
    <WhyChoosingUs/>
    <BestSellingProduct/>
    <div className='AboutUs'>
      <Experiences/>
      <Materials/>
      <Testimonials/>
    </div>
    <Footer/>
    
    </div>
    

    </>
        
        
   
  )
}
export default Home