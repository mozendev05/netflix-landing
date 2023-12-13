import React from 'react'
import './PlansCard.css'


const PlansCard = ({title, info, price}) => {
    return (
        <div className='Pc-container'>
            <h3 className='Pc-title'>{title}</h3>
            <p className='Pc-info'>{info}</p>
            <span className='Pc-price'>{price}</span>
        </div>
    )
}

export default PlansCard