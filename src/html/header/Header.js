import React from 'react'

import LogoSVG from '../ui/logo/LogoSVG'
import Nav from './Nav'

import './css/Header.scss'

const Header = (props) => {
    return (
        <>
            <header>
                <LogoSVG
                    width={190}
                    height={30}
                />
                <Nav />
            </header>
        </>
    )
}

export default Header