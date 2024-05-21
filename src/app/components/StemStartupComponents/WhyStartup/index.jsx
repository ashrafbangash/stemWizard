import React from 'react'

const WhyStartup = () => {
    const sections = [
        {
          title: 'Team',
          imgSrc: './assets/OverView/school.svg',
          img1Src: './assets/startup/ico1.svg',
          description: 'We will provide a team of professionals to helpout the start-ups',
          class:''
        },
        {
          title: 'Space',
          imgSrc: './assets/OverView/school.svg',
          img1Src: './assets/startup/ico2.svg',
          description: 'We will provide the space and resources for the start-ups.',
          class:''
        },
        {
          title: 'Investor',
          imgSrc: './assets/OverView/school.svg',
          img1Src: './assets/startup/ico3.svg',
          description: 'The start-ups who perform well in the first 6 months of launch will be provided investments from foriegn investors',
          class:''
        },
      ];
    return (
        <div className='main bg-gray'>
            <img src="./assets/startup/startupfooter2.svg" alt="head" className='-mt-10 z-0 w-screen  object-cover min-w-full h-auto' />
            <div className="sub items-center relative">
            <h1 className='text-[40px] text-center font-medium uppercase '>Why STEM startup school?</h1>
            
            <img src="./assets/underline.svg " className='max-w-[193px] mb-10 ml-32' alt="underline" />

            <p className='text-base mb-8 max-w-4xl text-center mt-2'>The goal of a STEM Startup School is to help entrepreneurs turn their innovative ideas and technical expertise into successful businesses, while also promoting innovation and growth in STEM fields.</p>

            <div className='grid grid-cols-3  mt-10 relative  gap-10'>
    {sections.map((section, index) => (
      <div key={index} className={`flex flex-col items-center  min-h-[473px] ${section.class}`}>
        <div className='relative mb-16'>
          <img src={section.imgSrc} alt='' />
          <img src={section.img1Src} alt='' className='absolute top-6 left-10' />
        </div>
        <h1 className='text-[28px] font-medium'>{section.title}</h1>
        <p className='text-base text-center px-10'>{section.description}</p>
      </div>
    ))}
    <img src="./assets/startup/con1.svg" alt="connect" className='top-28 absolute left-1/3 -translate-x-1/2' />
    <img src="./assets/startup/con2.svg" alt="connect" className='top-2 absolute left-2/3 -translate-x-1/2' />
  </div>


                <img src="./assets/startup/ico7.svg" alt="icon" className='absolute -bottom-5 right-1/3' />
                <img src="./assets/startup/ico8.svg" alt="icon" className='absolute left-[5%] top-10' />
                <img src="./assets/startup/ico9.svg" alt="icon" className='absolute right-[5%] top-10' />

            </div>

        </div>
    )
}

export default WhyStartup
