import React from 'react'

import WaitingPageDiv from './WaitingPageDiv'

import './css/WaitingPageContent.scss'

const WaitingPageContent = (props) => {
    return (
        <>
            <div id='waitingpage_CONTAINER'>
                <div id='waitingpage_BACKGROUND'>
                    <img src='/assets/images/bitmap/jpg/waitingpage_BACKGROUND.jpg' alt='' />
                </div>
                <div id='waitingpage_DIV'>
                    <WaitingPageDiv />
                </div>
            </div>
        </>
    )
}

export default WaitingPageContent