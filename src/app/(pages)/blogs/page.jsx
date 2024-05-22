import BlogHero from '@/app/components/BlogComponents/BlogHero'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'

const blogs = () => {
  return (
    <div>
        <Header bgColor={'bg-gray'}/>
        <BlogHero/>
        <Footer/>
      
    </div>
  )
}

export default blogs
