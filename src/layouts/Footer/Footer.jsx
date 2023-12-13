import React from 'react'
import './Footer.css'
import LanguageItem from '../../components/LanguageItem/LanguageItem'

const Footer = () => {
    return (
        <footer className='Ft-container'>
            <p className='Ft-text'>¿Preguntas? Llama al <a className='Ft-link' href="">0-800-52352</a></p>
            <ul className='Ft-list'>
                <li className='Ft-item'><a className='Ft-link' href="">Preguntas frecuentes</a></li>
                <li className='Ft-item'><a className='Ft-link' href="">Centro de ayuda</a></li>
                <li className='Ft-item'><a className='Ft-link' href="">Cuenta</a></li>
                <li className='Ft-item'><a className='Ft-link' href="">Prensa</a></li>
                <li className='Ft-item'><a className='Ft-link' href="">Relaciones con inversionistas</a></li>
                <li className='Ft-item'><a className='Ft-link' href="">Empleo</a></li>
                <li className='Ft-item'><a className='Ft-link' href="">Canjear tarjetas de regalo</a></li>
                <li className='Ft-item'><a className='Ft-link' href="">Comprar tarjetas de regalo</a></li>
                <li className='Ft-item'><a className='Ft-link' href="">Formas de ver</a></li>
                <li className='Ft-item'><a className='Ft-link' href="">Términos de uso</a></li>
                <li className='Ft-item'><a className='Ft-link' href="">Privacidad</a></li>
                <li className='Ft-item'><a className='Ft-link' href="">Preferencias de cookies</a></li>
                <li className='Ft-item'><a className='Ft-link' href="">Información corporativa</a></li>
                <li className='Ft-item'><a className='Ft-link' href="">Contáctanos</a></li>
                <li className='Ft-item'><a className='Ft-link' href="">Prueba de velocidad</a></li>
                <li className='Ft-item'><a className='Ft-link' href="">Avisos legales</a></li>
                <li className='Ft-item'><a className='Ft-link' href="">Solo en Netflix</a></li>
            </ul>
            <LanguageItem id="FooterLanguage" />
            <span className='Ft-span'>Netflix Perú</span>
        </footer>
    )
}

export default Footer