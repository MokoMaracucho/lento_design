import React from 'react'

import Header from '../../header/Header'
import WaitingPageContent from './WaitingPageContent'
import Footer from '../../footer/Footer'

import './css/WaitingPage.scss'

const WaitingPage = (props) => {
    return (
        <>
            <Header />
            <WaitingPageContent />
            <Footer />
        </>
    )
}

export default WaitingPage