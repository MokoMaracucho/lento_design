import React from 'react'

import Header from '../../header/Header'
import FrameworkContractContent from './FrameworkContractContent'
import Footer from '../../footer/Footer'

import './css/FrameworkContract.scss'

const FrameworkContract = (props) => {
    return (
        <>
            <Header />
            <FrameworkContractContent />
            <Footer />
        </>
    )
}

export default FrameworkContract