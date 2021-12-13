import React from 'react'

import RoundedButton from '../ui/buttons/RoundedButton'

import AboutUs from './AboutUs'
import LogIn from './LogIn'
import SignUp from './SignUp'
import Menu from './Menu'

import './css/Nav.scss'

const Nav = (props) => {
    return (
        <>
            <nav>
                <ul>
                    <RoundedButton
                        button_CLASSNAME={'transparent_ROUNDEDBUTTON large_ROUNDEDBUTTON cursor-pointer'}
                        button_ID={'languages_header_BUTTON'}
                        span_text_CLASSNAME={'p-medium'}
                        button_TEXT={'EN'}
                        Arrow002={true}
                        redirect_BOOLEAN={false}
                    />
                    <AboutUs />
                    <SignUp />
                    <LogIn />
                    <RoundedButton
                        button_CLASSNAME={'blue_ROUNDEDBUTTON extra_large_ROUNDEDBUTTON cursor-pointer'}
                        button_ID={'services_header_BUTTON'}
                        span_text_CLASSNAME={'p-medium white_COLOR'}
                        button_TEXT={'Services'}
                        Arrow002={false}
                        redirect_BOOLEAN={false}
                    />
                    <Menu />
                </ul>
            </nav>
        </>
    )
}

export default Nav