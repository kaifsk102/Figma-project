import React from 'react'
import Navbar from '../../Component/Navbar'
import SearchBox from '../../Component/SearchBox'
import WhyChoosingUs from '../../Component/WhyChoosingUs'
import Experiences from '../../Component/Experiences'
import Materials from '../../Component/Materials'
import Testimonials from '../../Component/Testimonials'
import Footer from '../../Component/Footer'
import BestSellingProduct from '../../Component/BestSellingProduct'


const Home = () => {
  const myStyle = {
    backgroundImage:"linear-gradient(180deg, rgba(255, 255, 255, 0) 86.13%, #FFFFFF 100%), url(./bannaer.jpg)"
  }
  return (
    <>
     
    <div className=' w-full  h-full '>
    <div className=' mx-auto h-[1084px] bg-cover bg-no-repeat ' style={myStyle} >
    <Navbar/>
    <div className='flex flex-col  items-center justify-center pt-[80px] md:pt-[100px] gap-y-10 '>
      <h1 className=' font-gilroy font-bold text-[36px] md:text-[80px]  text-[#FFFFFF] text-center leading-tight'>Make Your Interior More <br /> Minimalistic & Modern</h1>
      <p className='  opacity-[0.8] font-gilroy text-[16px]  md:text-[24px]  text-center text-[#FFFFFF]'>Turn your room with panto into a lot more minimalist <br /> and modern with ease and speed</p>
    <SearchBox/>
    </div>
    </div>
    <WhyChoosingUs/>
    <BestSellingProduct />
    <div className='AboutUs ' id='aboutus'>
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
