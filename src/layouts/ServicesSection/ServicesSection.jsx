import React from 'react'

import tvImage from '../../assets/images/tv.png'
import offlineImage from '../../assets/images/offline.png'
import devicesImage from '../../assets/images/devices.png'
import childrenImage from '../../assets/images/children.png'

import ServicesCard from '../../components/ServicesCard/ServicesCard'

import './ServicesSection.css'

const ServicesSection = () => {
    const Services = [
        {
            "title": "Disfruta en tu TV", 
            "info": "Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.",
            "img": tvImage 
        },
        {
            "title": "Descarga tus series para verlas offline", 
            "info": "Guarda tu contenido favorito y siempre tendrás algo para ver.",
            "img": offlineImage 
        
        },
        {
            "title": "Disfruta donde quieras", 
            "info": "Películas y series ilimitadas en tu teléfono, tablet, laptop y TV.",
            "img": devicesImage 
        },
        {
            "title": "Crea perfiles para niños", 
            "info": "Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, gratis con tu membresía.",
            "img": childrenImage
        }
    ]

    return (
        <section className='Ss-container'>
            <h2 className='Ss-title'>Más motivos para unirte</h2>
            <div className='Ss-cards'>
            {
                Services.map ( data => {
                    return (
                        <ServicesCard key={data.title} title={data.title} info={data.info} img={data.img}/>
                    )
                })
            }
            </div>
        </section>
    )
}

export default ServicesSection
