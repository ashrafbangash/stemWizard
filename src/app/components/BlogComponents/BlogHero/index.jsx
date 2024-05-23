import React from 'react'
import { FaEye } from 'react-icons/fa6'
import { CiHeart } from "react-icons/ci";
import Link from 'next/link';
const BlogHero = () => {

    const data =[
        {
           id:1 
        },
        {
            id:2 
        },
        {
            id:3
        },
        {
            id:4
        }
    ]
  return (
    <div className='main bg-gray'>
        <div className="sub">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
{data.map((d,index)=>(
    <Link href={`/blogs/${d.id}`}>
    <div className="relative " key={index}>
                    <img src="./assets/blog/blgbg.svg" alt="bg" className='scale-1' />
                    <div className='absolute top-0 py-10  px-7 text-white'>
                        <div className="flex justify-between items-end mb-2">
                            <img src="./assets/blog/blgimg.svg" alt="" />
                            <div className='flex gap-4 items-center'><FaEye size={20} /><span>5 Views</span> <CiHeart size={20} /></div>
                        </div>
                        <h1 className='mb-2'><span>23 Mar 2023 2 Min</span><span>2 comments</span></h1>
                        <h1 className='text-[30px] font-semibold leading-none 2xl:leading-8 mb-2'>The Importance Of STEM Education For Kids: Why It Matters</h1>
                        <p className='leading-none 2xl:leading-1 '>The world is changing rapidly and the skills that children need to succeed are changing with it. In order to prepare children for the jobs of the future, we need to make sure they are receiving a high-quality STEM education.</p>
                    </div>
                </div>
                </Link>
))}
                
            </div>
        </div>
      
    </div>
  )
}

export default BlogHero
