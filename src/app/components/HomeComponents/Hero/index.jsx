import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
const Hero = () => {
  return (
    <>
    <div className=' w-full flex flex-col justify-center items-center pt-6 bg-gray'>
      <div className='flex flex-col justify-center  h-full  px-5 md:px-16 lg:px-20  w-full max-w-screen-max-screen'>
        <div className='flex flex-col xl:flex-row gap-10 justify-between items-center relative'>
          <div className='flex flex-col justify-center gap-3 text-textblack relative py-6 md:py-10 lg:py-20'>
            <h3 className='text-base md:text-[32px] font-medium text-center lg:text-start text-red'>We Bring Learning To Life</h3>
            <h1 className='text-[32px] md:text-[60px] font-semibold text-center lg:text-start'>Welcome To <span className='stem-gradiant'>STEM</span><br /> <span className='wizard-gradiant'>Wizards</span> <span className='text-blue'>Acedemia</span></h1>
            <p className='text-xs mdtext-base max-w-lg text-center lg:text-start'>STEM Education, at its core, simply means educating students in four specific disciplines, namely, Science, Technology, Engineering, and Mathematics (collectively shortened as STEM).</p>
            <button className='bg-green hidden  py-3 px-6 lg:flex items-center gap-2 w-fit rounded-xl text-white'>Let Me In Now <FiArrowRight /></button>

            <img className='absolute hidden lg:block -top-20 left-20 w-[90px] h-auto' src='./assets/home/book.svg' alt='book' />
            <img className='absolute hidden lg:block -top-20 right-0 w-[104px] h-auto' src='./assets/home/robot.svg' alt='robot' />
            <img className='absolute hidden lg:block bottom-6 right-20 w-[88px] h-auto' src='./assets/home/rocket.svg' alt='rocket' />
            <img className='absolute hidden lg:block -bottom-16 z-20 left-20 w-[77px] h-auto' src='./assets/home/crane2.svg' alt='crane1' />
          </div>
          <div className='pb-20'>
            <img src='./assets/home/heroimg.svg' alt='heroimg' className='max-w-2xl  w-[320px] md:w-auto  h-auto mt-4' />
          </div>
          <div className='absolute hidden lg:block bottom-32 left-1/2 -translate-x-1/2'>
            <div className='flex gap-4 items-center'>
              <div className='h-[103px] w-[103px] animate-pulse rounded-full flex justify-center items-center bg-pink bg-opacity-5'>
                <div className='h-[73px] w-[73px] rounded-full flex justify-center items-center bg-pink bg-opacity-20'>
                  <div className='h-[50px] w-[50px] rounded-full flex justify-center items-center bg-pink bg-opaci0'>
                    <FaPlay className='ml-1 text-white' size={25}/>
                  </div>
                </div>
              </div>
              <p className='text-base font-medium text-pink'>Play Demo</p>
            </div>

          </div>

        </div>
       
      </div>
      <img src='./assets/home/cloudefooter.svg' alt='cloud' className='relative w-screen -mt-36 z-20 object-cover min-w-full h-auto' />
<div className='flex lg:hidden justify-center items-center bg-white w-screen'>
          <button className='bg-green    py-3 px-6 flex  z-30 items-center gap-2 w-fit rounded-xl text-white'>Let Me In Now <FiArrowRight /></button>

</div>
    </div>
    <div className="main">
      <div className="sub">

      <div className='bg-white grid grid-cols-4 md:grid-cols-6 2xl:grid-cols-9 z-20   gap-4 w-full max-w-screen-max-screen '>
          <img src='./assets/home/part9.svg' alt='part9' className='col-span-4 md:col-span-6 2xl:col-span-1'/>
          <img src='./assets/home/part1.svg' alt='part1'/>
          <img src='./assets/home/part8.svg' alt='part8'/>
          <img src='./assets/home/part7.svg' alt='part7'/>
          <img src='./assets/home/part6.svg' alt='part6'/>
          <img src='./assets/home/part5.svg' alt='part5'/>
          <img src='./assets/home/part4.svg' alt='part4'/>
          <img src='./assets/home/part3.svg' alt='part3'/>
          <img src='./assets/home/part2.svg' alt='part2'/>
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Hero
