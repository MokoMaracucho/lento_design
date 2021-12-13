import React from 'react'

import Header from '../../header/Header'
import CreationAccountErrorContent from './CreationAccountErrorContent'
import Footer from '../../footer/Footer'

import './css/CreationAccountError.scss'

const CreationAccountError = (props) => {
    return (
        <>
            <Header />
            <CreationAccountErrorContent />
            <Footer />
        </>
    )
}

export default CreationAccountError