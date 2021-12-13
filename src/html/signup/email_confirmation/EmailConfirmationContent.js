import React from 'react'

import EmailConfirmationDiv from './EmailConfirmationDiv'

import './css/EmailConfirmationContent.scss'

const EmailConfirmationContent = (props) => {
    return (
        <>
            <div id='emailconfirmation_CONTAINER'>
                <div id='emailconfirmation_BACKGROUND'>
                    <img src='/assets/images/bitmap/jpg/emailconfirmation_BACKGROUND.jpg' alt='' />
                </div>
                <div id='emailconfirmation_DIV'>
                    <EmailConfirmationDiv />
                </div>
            </div>
        </>
    )
}

export default EmailConfirmationContent