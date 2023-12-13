import React from 'react'
import RegisterItem from '../../components/RegisterItem/RegisterItem'
import Header from '../Header/Header'
import './Hero.css'

const Hero = () => {
    return (
        <section className="Hr-container">
            <Header></Header>
            <div className="Hr-content">
                <h1 className="Hr-title">Películas y series ilimitadas y mucho más</h1>
                <p className="Hr-subtitle">A partir de S/ 24.90. Cancela cuando quieras.</p>
                <RegisterItem id="HeroRegister"></RegisterItem>
            </div>
        </section>
    )
}

export default Hero

