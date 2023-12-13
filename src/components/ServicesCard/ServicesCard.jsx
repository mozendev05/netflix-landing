import React from 'react'
import './ServicesCard.css'

const ServicesCard = ({title, info, img}) => {
    return (
        <div className='Sc-container'>
            <h3 className='Sc-title'>{title}</h3>
            <p className='Sc-info'>{info}</p>
            <div className='Sc-imgContainer'>
                <img className='Sc-img' src={img} alt="" />
            </div>
        </div>
    )
}

export default ServicesCard