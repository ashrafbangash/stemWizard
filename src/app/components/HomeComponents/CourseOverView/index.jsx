import React from 'react'

const CourseOverView = () => {
    const sections = [
        {
          title: 'Inschool Classes',
          imgSrc: './assets/OverView/school.svg',
          img1Src: './assets/OverView/school1.svg',
          description: 'We provide Subscription-based Packages for schools and provide them with Instructors and Equipment. Weekend or Week Days Two-hour Classes can be arranged for each class.',
          class:''
        },
        {
          title: 'One-To-One Live Sessions',
          imgSrc: './assets/OverView/school.svg',
          img1Src: './assets/OverView/school1.svg',
          description: 'Hands-On learning STEM Wizards Academia provides a one-on-one personalized learning experience for students. Our knowledgeable tutors offer comprehensive, hands-on learning opportunity that focuses on problem-solving and critical thinking skills to ignite a passion for STEM (Science, Technology, Engineering, and Math).',
          class:'mt-32'
        },
        {
          title: 'After School Classes',
          imgSrc: './assets/OverView/school.svg',
          img1Src: './assets/OverView/school1.svg',
          description: 'STEM Wizards Academia offers an innovative after-school program that encourages children to explore the exciting world of STEM (Science, Technology, Engineering, and Mathematics). With hands-on activities, stimulating problem-solving challenges, and engaging multimedia instruction, we cultivate a love of STEM in every student.',
          class:''
        },
      ];
    return (
        <div className='w-full flex flex-col justify-center items-center pb-6 sm:pb-10 md:pb-14   bg-white'>
            <div className='relative'>
            <img src="./assets/OverView/cloude.svg" alt="bg" className='-mt-5 z-10 w-screen relative object-cover min-w-full h-auto' />
            <img src="./assets/home/rocket.svg" alt="bg" className='  z-20  absolute top-0 left-1/2 ' />
            <img src="./assets/home/space-roc.svg" alt="bg" className='  z-20  absolute bottom-0  left-[16%]' />
            <img src="./assets/home/mars1.svg" alt="bg" className='  z-20  absolute top-0 left-3/4 h-[120px] w-[120px] ' />
            </div>
            {/* <img src="./assets/OverView/cloude.svg" alt="bg" className='absolute z-0 w-screen top-0  left-8 object-cover min-w-full h-auto' /> */}

            <div className='relative sub-div items-center mt-4'>
                <div className='flex justify-center items-center flex-col'>
                    <h1 className='text-[40px] font-medium'>Course Overview</h1>
                    <img className='ml-32 max-w-[193px]' src="./assets/underline.svg" alt="underline" />
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
    <img src="./assets/OverView/connect.svg" alt="connect" className='top-32 absolute left-1/2 -translate-x-1/2' />
  </div>

                </div>
            </div>
        </div>
    )
}

export default CourseOverView
