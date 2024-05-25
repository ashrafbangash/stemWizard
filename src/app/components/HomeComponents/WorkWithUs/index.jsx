import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const WorkWithus = () => {
    const items = [
        {
            title: 'As A Instructor',
            imgSrc: './assets/work/leftwork.svg',
            cloudImgSrc: './assets/work/cloudeleft.svg',
            class: "-right-10 md:right-6 lg:right-20"
        },
        {
            title: 'Affiliate Program',
            imgSrc: './assets/work/rightwork.svg',
            cloudImgSrc: './assets/work/cloudright.svg',
            class: "lg:left-20 left-10"
        },
    ];
    const testimonials = [
        {
            text: "My son is 10 years-old and he can code and design different games",
            name: "Mother of Reyyan Habib",
            imgSrc: "./assets/work/onw.svg",
        },
        {
            text: "Since my girls joined STEM Wizards Academia, I've noticed improvements in them; they are now more self-assured and have participated in more than three tournaments.They can code games, robots and organize workshops",
            name: "Shakiba, Mother of Yumna-min-Allah",
            imgSrc: "./assets/work/two.svg",
        },
        {
            text: "Since my girls joined STEM Wizards Academia, I've noticed improvements in them; they are now more self-assured and have participated in more than three tournaments.They can code games, robots and organize workshops",
            name: "Shakiba, Mother of Yumna-min-Allah",
            imgSrc: "./assets/work/three.svg",
        },
    ];
    return (
        <div className='main-div bg-white relative' >
            <div className=' px-4 lg:px-0 items-center'>
                <div className='flex justify-center my-8 flex-col items-center'>

                    <h1 className='text-2xl lg:text-[40px] text-center font-medium'>Work With Us</h1>
                    <img src="./assets/underline.svg " className='max-w-[193px] mt-2' alt="underline" />
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
                    {items.map((item, index) => (
                        <div key={index}>
                        <div  className='relative'>
                            <img src={item.imgSrc} alt="left" />
                            <img src={item.cloudImgSrc} className='absolute bottom-0 ' alt="left" />
                            <div className={`absolute  bottom-4 ${item.class} w-52`}>
                                <h1 className='text-base md:text-[28px] text-nowrap mb-2 font-medium'>{item.title}</h1>
                                <button className='bg-green hidden py-3 px-10 lg:flex items-center gap-2 w-fit rounded-xl text-white mt-'>Explore More <FiArrowRight /></button>
                            </div>

                        </div>
                            <button className='bg-green mx-auto lg:hidden py-3 px-10 flex items-center gap-2 w-fit rounded-xl text-white mt-4'>Explore More <FiArrowRight /></button>


                        </div>
                    ))}
                </div>
            </div>
            <img src="./assets/work/header.svg" alt="bg" className='mt-20 z-10 w-screen relative object-cover min-w-full h-auto' />
            <div className='w-full flex flex-col justify-center items-center  bg-redishdark'>
                <div className='sub-div items-center relative'>
                    <h1 className='text-2xl lg:text-[40px] text-center font-medium'>Work With Us</h1>
                    <img src="./assets/underline.svg " className='max-w-[193px] mt-2' alt="underline" />

                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-8'>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className='relative'>
                                <img src="./assets/work/border.svg" alt="border" className=''/>
                                <img src={testimonial.imgSrc} alt="one" className='absolute top-0  -left-3 p-4' />
                                <p className='text-xs md:text-base text-center font-medium absolute top-1/2 px-10 pr-16 -translate-y-1/2'>{testimonial.text}</p>
                                <p className='text-xs md:text-base font-medium'>{testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                    <img src="./assets/work/robo.svg" alt="icons" className='absolute  hidden lg:block -top-8 z-10 left-[15%]' />
                    <img src="./assets/work/chatleft.svg" alt="icons" className='absolute hidden lg:block  w-[69px] h-[69px]  -top-20 z-10 left-[35%]' />
                    <img src="./assets/work/chatright.svg" alt="icons" className='absolute hidden lg:block  w-[69px] h-[69px]  top-0 z-10 left-[65%]' />
                    <img src="./assets/work/chat.svg" alt="icons" className='absolute hidden lg:block  -top-20 w-[74px] h-[74px]  z-10 left-[85%]' />
                    <img src="./assets/work/robo.svg" alt="icons" className='absolute hidden lg:block  -bottom-20 z-20 left-[35%]' />
                    <img src="./assets/work/chatleft.svg" alt="icons" className='absolute hidden lg:block  w-[69px] h-[69px] -bottom-16 z-20 left-[85%]' />
                </div>

            </div>
            <img src="./assets/work/footer.svg" alt="bg" className='drop-shadow-md z-10 w-screen relative object-cover min-w-full h-auto' />


            <img src="./assets/work/board.svg" className='top-0 left-1/4 z-10 hidden lg:block absolute' alt="" />
            <img src="./assets/work/hand.svg" className='-top-10 left-3/4 z-10 hidden lg:block absolute' alt="" />
        </div>
    )
}

export default WorkWithus
