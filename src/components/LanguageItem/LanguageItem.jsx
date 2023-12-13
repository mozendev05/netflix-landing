import React from 'react'
import { IoLanguage } from "react-icons/io5"
import { FaCaretDown } from "react-icons/fa"
import './LanguageItem.css'


const LanguageItem = ({id}) => {
    return (
        <div className="Li-container">
            <select className="Li-select" id={id}>
                <option className='Li-option'>Español</option>
                <option className='Li-option'>Ingles</option>
            </select>
            <FaCaretDown className='Li-iconRight'/>
            <IoLanguage className='Li-iconLeft'/>
        </div>
  )
}

export default LanguageItem