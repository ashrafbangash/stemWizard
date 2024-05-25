import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const NewsAndHeadlines = () => {

    const newsItems = [
        {
          title: 'Collegiate Program',
          date: 'March 10, 2023',
          buttonText: 'Explore More',
          imgSrc: './assets/News/collegiate.svg',
        },
        {
          title: 'STEM In-School Program',
          date: 'January 10, 2025',
          buttonText: 'Explore More',
          imgSrc: './assets/News/schoolp.svg',
        },
      ];
  return (
    <div className='main-div bg-gray' >
        <div className='sub-div items-center text-center lg:text-start'>
            <h1 className='text-2xl md:text-[40px] font-medium mb-10' >News And Headline</h1>
            <p className='text-base md:text=2xl font-medium'>“Here no Fish will be forced to fly and no Bird will be forced to swim.”</p>
            <p className='text-xs md:text-base font-medium mb-4'>Motto of Ottoman Empire schools</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
    {newsItems.map((item, index) => (
      <div key={index} className='flex flex-col '>
        <img src={item.imgSrc} alt={item.title} />
        <h1 className='text-base md:text-[28px] font-medium mt-4'>{item.title}</h1>
        <h1 className='text-base md:text-[28px] font-medium'>{item.date}</h1>
        <button className='bg-green w-fit py-3 px-6 flex items-center gap-2 rounded-xl text-white mt-6 mx-auto lg:mx-0'>{item.buttonText} <FiArrowRight /></button>
      </div>
    ))}
  </div>
        </div>
      
    </div>
  )
}

export default NewsAndHeadlines
