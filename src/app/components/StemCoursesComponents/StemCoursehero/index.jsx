import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const StemCourseHero = () => {
    const data=[
        {
            title:"robotics class"
        },{
            title:"electronics class"
        },{
            title:"practical class"
        },{
            title:"space science class"
        },{
            title:"cooking class"
        },{
            title:"VR class"
        },{
            title:"game design class"
        },{
            title:"art class"
        },{
            title:"critical thinking coding class"
        },{
            title:"critical thinking class"
        },{
            title:"novella class"
        }
    ]
  return (
    <>
    <div className='main bg-redish'>
        <div className="sub items-center relative">
            <div className='relative mb-16'>
                <img src="./assets/stemcourse/courseborder.svg" alt="stemhero " />
                <img src="./assets/stemcourse/coursebg.svg" alt="stemhero" className='absolute top-0 left-7' />
                <img src="./assets/stemcourse/course.png" alt="stemhero" className='absolute top-0 p-3 left-2' />
            </div>
            <h1 className='text-[40px] font-semibold mb-6'>Engineering</h1>
            <div className='flex gap-2'>
                <p className='h-2 w-3 bg-black  rounded-r-full rounded-tl-full rounded-bl-lg '></p>
                <p className='h-2 w-3 bg-orange rounded-r-full rounded-tl-full rounded-bl-lg '></p>
                <p className='h-2 w-3 bg-black  rounded-r-full rounded-tl-full rounded-bl-lg '></p>
                <p className='h-2 w-3 bg-black  rounded-r-full rounded-tl-full rounded-bl-lg '></p>
    
            </div>
            <button className='bg-green py-3 px-6 flex items-center gap-2 w-fit rounded-xl mt-10 text-white'>Let Me In Now <FiArrowRight /></button>
            <img src="./assets/stemcourse/ico1.svg" alt="stemcourseicons" className='absolute top-[10%] left-[5%]' />
            <img src="./assets/stemcourse/ico2.svg" alt="stemcourseicons" className='absolute bottom-[10%] left-[10%]' />
            <img src="./assets/stemcourse/ico2.svg" alt="stemcourseicons" className='absolute top-[5%] right-[10%]' />
            <img src="./assets/stemcourse/ico3.svg" alt="stemcourseicons" className='absolute top-[25%] right-[5%]' />
            <img src="./assets/stemcourse/ico5.svg" alt="stemcourseicons" className='absolute bottom-[0%] right-[5%]' />


        </div>
        <img src="./assets/stemcourse/coursefooter.svg" alt="head" className=' z-0 w-screen  object-cover min-w-full h-auto' />
      
    </div>
    <div className="main bg-gray relative">
        <div className="sub mt-10">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {data.map((data,index)=>(
                <div key={index}>
                <img src="./assets/stemcourse/courses2.svg" alt="stemcourse" />
                <h1 className='text-[40px] capitalize font-semibold '>{data.title}</h1>
                </div>
            ))}

            </div>
        </div>

        <img src="./assets/stemcourse/ico4.svg" alt="stemcourseicons" className='absolute -top-[0%] right-[15%]' />
            <img src="./assets/stemcourse/ico7.svg" alt="stemcourseicons" className='absolute top-[45%] right-[5%]' />
            <img src="./assets/stemcourse/ico8.svg" alt="stemcourseicons" className='absolute bottom-[0%] right-[20%]' />
            <img src="./assets/contact/contacticon.svg" alt="stemcourseicons" className='absolute bottom-[15%] right-[5%]' />
            <img src="./assets/stemcourse/ico9.svg" alt="stemcourseicons" className='absolute -top-[6%] left-[25%]' />
            <img src="./assets/stemcourse/ico2.svg" alt="stemcourseicons" className='absolute top-[0%] left-[10%]' />



    </div>
    
    </>
  )
}

export default StemCourseHero
