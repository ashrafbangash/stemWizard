import React from 'react'

const AfterSchoolHero = () => {
  return (
    <div className='main bg-gray'>
        <div className="sub relative items-center">
        <h1 className='text-2xl lg:text-[40px] text-center font-medium uppercase '>after-school program</h1>
            
            <img src="./assets/underline.svg " className='max-w-[193px] mb-10' alt="underline" />

            <div className='grid grid-cols-1 xl:grid-cols-2 items-center gap-10'>
                <div className="flex flex-col text-center xl:text-start text-xs lg:text-base gap-4">
                    <p>STEM Wizards Academia After School Program is an educational program designed to engage and inspire students in the fields of science, technology, engineering, and mathematics (STEM). The program offers a unique learning experience for students after school hours that combines hands-on activities, projects, and experiments to build a strong foundation in STEM. ​ </p>
                    <p>The program is led by experienced educators and STEM experts who are passionate about teaching and inspiring the next generation of STEM leaders. Students will have the opportunity to learn and work collaboratively with their peers, creating a supportive and engaging environment for learning.</p>
                    
                    
                    <p>The curriculum is designed to challenge students and build their problem-solving and critical-thinking skills while also providing opportunities for creativity and innovation. The program covers a range of topics in STEM, including coding, robotics, engineering design, and environmental science. ​ </p>
                    <div className='relative xl:hidden block'>
                    <img src="./assets/ourprogram/afterborder.svg" alt="border" />
                    <img src="./assets/ourprogram/afterimg.png" alt="img" className='top-0 z-10 absolute p-3' />
                    <img src="./assets/ourprogram/bgafter.svg" alt="img" className='top-4 left-5 z-0 absolute p-3' />

                </div>
                    <p>STEM Wizards Academia After School Program also provides access to the latest technology and tools, such as 3D printers and virtual reality equipment, to provide students with a hands-on learning experience that prepares them for the future. 
                    </p>
                    
                    <p>Overall, STEM Wizards Academia After School Program offers a fun and engaging learning environment that empowers students to become confident, curious, and competent in STEM, setting them up for success in their future academic and professional endeavors.</p>
                </div>
                <div className='relative hidden xl:block'>
                    <img src="./assets/ourprogram/afterborder.svg" alt="border" />
                    <img src="./assets/ourprogram/afterimg.png" alt="img" className='top-0 z-10 absolute p-3' />
                    <img src="./assets/ourprogram/bgafter.svg" alt="img" className='top-4 left-5 z-0 absolute p-3' />

                </div>
            </div>
            <img src="./assets/ourprogram/ico3.svg" alt="icons" className='absolute hidden lg:block right-[50%] -bottom-[0%] z-10' />
        <img src="./assets/ourprogram/ico4.svg" alt="icons" className='absolute hidden lg:block right-[5%] top-[20%]' />
        <img src="./assets/ourprogram/ico1.svg" alt="icons" className='absolute hidden lg:block left-[10%] top-[10%]' />

        </div>
      
    </div>
  )
}

export default AfterSchoolHero
