import React from 'react'
import './RegisterItem.css'
import {VscChevronRight} from 'react-icons/vsc'

const RegisterItem = ({id}) => {
    return (
        <div className="Ri-container">
            <p className="Ri-text">¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
            <div className="Ri-field">
                <div className="Ri-inputBox">
                    <input className="Ri-input" type="text" id={id} required/>
                    <label className="Ri-label" htmlFor={id}>Email</label>
                </div>
                <button className="Ri-btn">
                    <span className='Ri-span'>
                        Comenzar
                    </span>
                    <VscChevronRight className='Ri-icon'></VscChevronRight>
                </button>
            </div>
        </div>
        
    )

}

export default RegisterItem
