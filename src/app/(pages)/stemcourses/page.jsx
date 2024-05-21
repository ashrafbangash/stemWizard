import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import StemCourseHero from '@/app/components/StemCoursesComponents/StemCoursehero'
import React from 'react'

const StemCourses = () => {
  return (
    <div>
      <Header bgColor={'bg-redish'} />
      <StemCourseHero/>
      <Footer/>
    </div>
  )
}

export default StemCourses
