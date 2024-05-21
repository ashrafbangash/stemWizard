import AdmissionForm from '@/app/components/collegiateComponents/AdmissionForm'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import CollegiateHero from '@/app/components/collegiateComponents/CollegiateHero'
import CollegiateProgram from '@/app/components/collegiateComponents/CollegiateProgram'
import React from 'react'

const Collegiate = () => {
  return (
    <div>
      <Header bgColor={'bg-white'}/>
      <CollegiateHero/>
      <CollegiateProgram/>
      <AdmissionForm/>
      <Footer/>
    </div>
  )
}

export default Collegiate
