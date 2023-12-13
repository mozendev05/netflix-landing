import React from 'react'
import './FaqItem.css'
import { FiPlus } from "react-icons/fi"
import { MdOutlineClose } from "react-icons/md"

const FaqItem = ({title, info, index, accordion, setAccordion}) => {

    const toggle = (i) => {
        if(accordion == i) {
            setAccordion(null)
        }  else {
            setAccordion(i)
        }

    }
    return (
            <div className='Fi-container'>
                <button className='Fi-btn' onClick={()=> toggle(index)}>
                    <span className='Fi-title'>{title}</span>
                    {accordion === index ? <MdOutlineClose className='Fi-icon'/> : <FiPlus className='Fi-icon'/>}
                </button>
                <div className={accordion === index ? "Fi-infoContainer isOpen" : "Fi-infoContainer isClose"}>
                    <p className='Fi-info'>{info}</p>
                </div>
            </div>
            )
    
}

export default FaqItem
