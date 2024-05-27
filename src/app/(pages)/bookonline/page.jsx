import BookOnlineHero from '@/app/components/BookOnlineComponents/BookOnlineHero'
import OurCourses from '@/app/components/BookOnlineComponents/OurCourses/page'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'

const BookOnline = () => {
  return (
    <div>
      <Header/>
      <BookOnlineHero/>
<OurCourses/>

      <Footer/>
    </div>
  )
}

export default BookOnline
