import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const WhatIsStem = () => {
    return (
        <div className='main-div bg-redish'>
            <div className=' sub-div'>
<div className='flex justify-center gap-20 items-center relative'>
    <div>
        <img src='./assets/whatisstem.svg' alt='stem' className='max-w-xl'/>
    </div>
    <div>
        <div>
            <h1 className='text-[40px] font-semibold'>What Is Stem?</h1>
        </div>
        <p className='text-[40px] font-semibold max-w-xl leading-tight text-gradiant mt-6'>It’s Never Too Early to Start Learning</p>
        <p className='max-w-lg mt-6 text-2xl'>STEM Education, at its core, simply means educating students in four specific disciplines, namely, Science, Technology, Engineering, and Mathematics (collectively shortened as STEM).</p>
        <button className='text-blue text-base mt-6 '>Read More...</button>

        <button className='bg-green py-3 px-6 flex items-center gap-2 w-fit rounded-xl text-white mt-6'>Explore More <FiArrowRight /></button>

    </div>

    <img className='absolute top-10 left-0' src='./assets/space-roc.svg' alt='whatisstem'/>
    <img className='absolute top-0 right-0 w-[98px] h-auto' src='./assets/spaceship.svg' alt='whatisstem'/>
    <img className='absolute  left-1/2 -translate-x-1/2 top-0 ' src='./assets/mars1.svg' alt='whatisstem'/>
    <img className='absolute -bottom-20 w-[120px] h-[120px] left-1/4' src='./assets/mars2.svg' alt='whatisstem'/>
    <img className='absolute right-0 bottom-0' src='./assets/commas.svg' alt='whatisstem'/>
</div>
            </div>
        </div>
    )
}

export default WhatIsStem
