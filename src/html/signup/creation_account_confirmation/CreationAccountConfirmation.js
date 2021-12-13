import React from 'react'

import Header from '../../header/Header'
import CreationAccountConfirmationContent from './CreationAccountConfirmationContent'
import Footer from '../../footer/Footer'

import './css/CreationAccountConfirmation.scss'

const CreationAccountConfirmation = (props) => {
    return (
        <>
            <Header />
            <CreationAccountConfirmationContent />
            <Footer />
        </>
    )
}

export default CreationAccountConfirmation