import React from 'react'

import SocialNetworks from '../ui/social_networks/SocialNetworks'
import ContactUs from './ContactUs'
import FooterNav from './FooterNav'

import './css/Footer.scss'

const Footer = (props) => {
    return (
        <>
            <footer>
                <div id='social_network_DIV'>
                    <SocialNetworks
                        socialNetworks_CLASSNAME={'horizontal_socialNetworks_CLASSNAME'}
                        color={'black'}
                    />
                </div>
                <div id='contactUs_DIV'>
                    <ContactUs />
                </div>
                <div id='footerNav_DIV'>
                    <FooterNav />
                </div>
            </footer>
        </>
    )
}

export default Footer