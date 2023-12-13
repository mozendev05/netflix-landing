import React from 'react'
import LanguageItem from '../../components/LanguageItem/LanguageItem'
import Logo from '../../assets/images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <header className="Hd-container">
            <img className="Hd-img" src={Logo} alt="Logo Netflix"/>
            <div className="Hd-actions">
                <LanguageItem id= "HeaderLanguage"/>
                <button className="Hd-loginingBtn">
                    Iniciar sesión
                </button>
            </div>
        </header>
    )
}
export default Header