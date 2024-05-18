
import React from 'react'
import Header from '../../components/Header'
import AboutHero from '@/app/components/AboutComponent/AboutHero'
import MissionStatement from '@/app/components/AboutComponent/MissionStatement'
import Footer from '@/app/components/Footer'
import Philosphy from '@/app/components/AboutComponent/Philosphy'

const About = () => {
  return (
    <div className="overflow-hidden">
       <Header bgColor='bg-redish' />
       <AboutHero/>
       <MissionStatement/>
      <Philosphy/>
      <Footer/>
    </div>
  )
}

export default About
