import React from 'react'

const StartupHero = () => {
    const data=[
        {
            img:"./assets/startup/startup1.svg",
            name:"Jamie Lane",
            role:"STEM Educator"
        },
        {
            img:"./assets/startup/startup2.svg",
            name:"Drew Carlyle",
            role:"Enterpreneurship Coordinator"
        },{
            img:"./assets/startup/startup3.svg",
            name:"Ash Marcus",
            role:"Senior Enterpreneurship Guid"
        },
    ]
  return (
    <div className='main'>
        <div className="sub items-center ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {data.map((d,index)=>(
                    <div key={index}>
                        <img src={d.img} alt="images" />
                        <h1 className='text-2xl text-center lg:text-start lg:text-[40px] font-semibold my-4'>{d.name}</h1>
                        <p className='text-base text-center lg:text-start lg:text-2xl'>{d.role}</p>
                    </div>

                ))}
            </div>


        </div>
        <img src="./assets/startup/startupfooter.svg" alt="head" className=' z-0 w-screen  object-cover min-w-full h-auto' />
      
    </div>
  )
}

export default StartupHero
