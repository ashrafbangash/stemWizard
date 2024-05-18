import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const StemStartup = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center pt-6 sm:pt-10 md:pt-14   bg-redishLight'>
        <div className='relative sub-div items-center mt-4'>

<div className='flex justify-center gap-10 items-center'>

    <div className='relative '>
        <img src="./assets/stemStartup/bg.svg" alt="bg" className='max-h-[700px] w-auto' />
        <img src="./assets/stemStartup/peopple.svg" alt="bg" className='max-h-[600px] absolute -top-20 -right-20 w-auto' />



    <div className='absolute top-32 left-32'>
        <h1 className='text-[40px] font-medium'>STEM Startup School </h1>
        <img src="./assets/underline.svg" alt="underlind" className='max-w-[200px] mb-8' />
        <p className='max-w-xs'>The goal of a STEM Startup School is to help entrepreneurs turn their innovative ideas and technical expertise into successful businesses, while also promoting innovation and growth in STEM fields.</p>
        <button className='bg-green mb-28  py-3 px-6 flex items-center gap-2 w-fit rounded-xl text-white mt-10'>Explore More <FiArrowRight /></button>

    </div>

    </div>
</div>

        </div>
    <img src="./assets/stemStartup/cloud.svg" alt="bg" className='-mt-32 z-20 w-screen  object-cover min-w-full h-auto' />
    </div>
  )
}

export default StemStartup
