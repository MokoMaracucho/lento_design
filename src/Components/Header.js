import React from 'react'

import { Logo } from '../Assets/SVG/Registration/index'
import { Nav } from './Registration/index'

import '../Styles/Components/Header.scss'

const Header = () => {

    return (
        <>
            <header>
                <Logo
                    width={190}
                    height={30}
                />
                <Nav />
            </header>
        </>
    )
}

export default Header