import React from 'react'

import CreationAccountConfirmationDiv from './CreationAccountConfirmationDiv'

import './css/CreationAccountConfirmationContent.scss'

const CreationAccountConfirmationContent = (props) => {
    return (
        <>
            <div id='waitingpage_CONTAINER'>
                <div id='waitingpage_BACKGROUND'>
                    <img src='/assets/images/bitmap/jpg/waitingpage_BACKGROUND.jpg' alt='' />
                </div>
                <div id='waitingpage_DIV'>
                    <CreationAccountConfirmationDiv />
                </div>
            </div>
        </>
    )
}

export default CreationAccountConfirmationContent