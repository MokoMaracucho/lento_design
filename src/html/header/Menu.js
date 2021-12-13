import React from 'react'

import './css/Menu.scss'

const Menu = (props) => {
    return (
        <>
            <li
                id='menu_LI' className='cursor-pointer'
            >
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1L16 0.999999" stroke="white" strokeWidth="2"/>
                    <path d="M0 6L16 6" stroke="white" strokeWidth="2"/>
                    <path d="M0 11L16 11" stroke="white" strokeWidth="2"/>
                </svg>
            </li>
        </>
    )
}

export default Menu