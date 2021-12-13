import React from 'react'

import Header from '../../header/Header'
import MoreInformationsContent from './MoreInformationsContent'
import Footer from '../../footer/Footer'

import './css/MoreInformations.scss'

const MoreInformations = (props) => {
    return (
        <>
            <Header />
            <MoreInformationsContent />
            <Footer />
        </>
    )
}

export default MoreInformations