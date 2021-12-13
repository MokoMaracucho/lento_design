import React from 'react'

import Header from '../../header/Header'
import CreateAccountContent from './CreateAccountContent'
import Footer from '../../footer/Footer'

import './css/CreateAccount.scss'

const CreateAccount = (props) => {
    return (
        <>
            <Header />
            <CreateAccountContent />
            <Footer />
        </>
    )
}

export default CreateAccount