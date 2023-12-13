import React from 'react'
import Hero from './layouts/Hero/Hero'
import PlansSection from './layouts/PlansSection/PlansSection'
import ServicesSection from './layouts/ServicesSection/ServicesSection'
import FaqSection from './layouts/FaqSection/FaqSection'
import RegisterItem from './components/RegisterItem/RegisterItem'
import Footer from './layouts/Footer/Footer'

const App = () => {
  return (
    <main>
        <Hero></Hero>
        <div className='Container'>
            <PlansSection/>
            <ServicesSection/>
            <FaqSection/>
            <RegisterItem id="RegisterSection"/>
            <Footer/>
        </div>
    </main>
  )
}

export default App
