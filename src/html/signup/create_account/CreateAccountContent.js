import React from 'react'

import CreateAccountForm from './CreateAccountForm'

import './css/CreateAccountContent.scss'

const CreateAccountContent = (props) => {
    return (
        <>
            <div id='signup-CONTAINER'>
                <div id='signup-BACKGROUND'>
                    <img src='/assets/images/bitmap/jpg/signUp_BACKGROUND.jpg' alt='' />
                </div>
                <div id='signup-FORM'>
                    <CreateAccountForm />
                </div>
            </div>
        </>
    )
}

export default CreateAccountContent