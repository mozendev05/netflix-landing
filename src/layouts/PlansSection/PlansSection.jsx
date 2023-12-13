import React from 'react'
import PlansCard from '../../components/PlansCard/PlansCard'
import './PlansSection.css'
 

const PlansSection = () => {
    const Plans = [
        {
            "title": "BÁSICO", 
            "info": "Una extraordinaria forma de disfrutar de todas tus series y películas favoritas a un precio accesible.",
            "price": "S/ 24.90/mes"
        },
        {
            "title": "ESTÁNDAR", 
            "info": "Todo el entretenimiento que te encanta con calidad de video Full HD.",
            "price": "S/ 34.90/mes"
        
        },
        {
            "title": "PREMIUM", 
            "info": "Una experiencia cinematográfica con la mejor calidad de imagen y audio.",
            "price": "S/ 44.90/mes"
        }
    ]

    return (
        <section className='Ps-container'>
            <h2 className='Ps-title'>Un plan que se ajusta a tus necesidades</h2>
            <div className='Ps-cards'>
            {
                Plans.map ( data => {
                    return (
                        <PlansCard key={data.title} title={data.title} info={data.info} price={data.price}/>
                    )
                })
            }
            </div>
        </section>

    )
}

export default PlansSection