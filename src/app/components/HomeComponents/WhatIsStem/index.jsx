import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const WhatIsStem = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center pt-6 sm:pt-10 md:pt-14 lg:pt-20 bg-redish'>
            <div className=' sub-div'>
<div className='flex justify-center gap-20 items-center relative'>
    <div>
        <img src='./assets/home/whatisstem.svg' alt='stem' className='max-w-xl'/>
    </div>
    <div>
        <div>
            <h1 className='text-[40px] font-semibold'>What Is Stem?</h1>
            <img src="./assets/underline.svg" alt="underline" />
        </div>
        <p className='text-[40px] font-semibold max-w-xl leading-tight text-gradiant mt-6'>It’s Never Too Early to Start Learning</p>
        <p className='max-w-lg mt-6 text-2xl'>STEM Education, at its core, simply means educating students in four specific disciplines, namely, Science, Technology, Engineering, and Mathematics (collectively shortened as STEM).</p>
        <button className='text-blue text-base mt-6 '>Read More...</button>

        <button className='bg-green py-3 px-6 flex items-center gap-2 w-fit rounded-xl text-white mt-6'>Explore More <FiArrowRight /></button>

    </div>

    <img className='absolute top-10 left-0' src='./assets/home/space-roc.svg' alt='whatisstem'/>
    <img className='absolute top-0 right-0 w-[98px] h-auto' src='./assets/home/spaceship.svg' alt='whatisstem'/>
    <img className='absolute  left-1/2 -translate-x-1/2 top-0 ' src='./assets/home/mars1.svg' alt='whatisstem'/>
    <img className='absolute -bottom-20 w-[120px] h-[120px] left-1/4' src='./assets/home/mars2.svg' alt='whatisstem'/>
    <img className='absolute right-0 bottom-0' src='./assets/home/commas.svg' alt='whatisstem'/>
</div>
<div className='flex flex-col justify-center items-center mt-32 gap-6 '>
    <div className='relative'>
    <h1 className='text-[40px] font-medium'>
        Academy Highlights
    </h1>
    <img src='./assets/home/flower.svg' alt='flower' className='absolute -right-16 -top-10' />
    </div>
    <p className='text-2xl text-center max-w-5xl'>
    Stem Wizards Academia is a non-profit organization that has been providing continuing STEM Education for both schools and individuals in Pakistan. The purpose of our organization is to improve the future of our students and to promote individual well-being through enhanced learning, knowledge-sharing, and sustainable development.  Our aim is to teach kids between 10-13-year-old age groups with higher learning academic capabilities. We teach in areas of cutting-edge technology and non-traditional learning methods
    </p>

</div>
            </div>
        </div>
    )
}

export default WhatIsStem