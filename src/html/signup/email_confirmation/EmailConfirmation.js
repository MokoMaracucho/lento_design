import React from 'react'

import Header from '../../header/Header'
import EmailConfirmationContent from './EmailConfirmationContent'
import Footer from '../../footer/Footer'

import './css/EmailConfirmation.scss'

const EmailConfirmation = (props) => {
    return (
        <>
            <Header />
            <EmailConfirmationContent />
            <Footer />
        </>
    )
}

export default EmailConfirmation