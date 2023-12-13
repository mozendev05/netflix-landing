import React, { useState } from 'react'
import FaqItem from '../../components/FaqItem/FaqItem'
import './FaqSection.css'

const FaqSection = () => {
    const Faq = [
        { 
            "title": "¿Qué es Netflix?", 
            "info":  "Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.\n \nTodo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!"
        },
        {
            "title": "¿Cuánto cuesta Netflix?", 
            "info": "Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde S/ 24.90 hasta S/ 44.90 al mes. Sin costos adicionales ni contratos."
        
        },
        {
            "title": "¿Dónde puedo ver Netflix?", 
            "info": "Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de Netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos.\n \nAdemás, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea."
        },
        {
            "title": "¿Cómo cancelo?", 
            "info": "Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras."
        },
        {
            "title": "¿Qué puedo ver en Netflix?", 
            "info": "Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras."
        },
        {
            "title": "¿Es bueno Netflix para los niños?", 
            "info": "La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.\n \nLos perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean."
        }
    ]
    const [accordion, setAccordion] = useState(null)
    
    return (
        <section className='Fs-container'>
            <h3 className='Fs-title'>Preguntas frecuentes</h3>
            <div className='Fs-group'>
                {
                    Faq.map( (data, i) => {
                        return(
                            <FaqItem title={data.title} info={data.info} key={i} index={i} accordion={accordion} setAccordion={setAccordion}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default FaqSection