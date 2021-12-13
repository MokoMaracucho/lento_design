import React from 'react'

import Pending001 from '../../ui/icons/pending/Pending001'
import RoundedButton from '../../ui/buttons/RoundedButton'

import './css/WaitingPageDiv.scss'

const WaitingPageDiv = (props) => {
    return (
        <>
            <div id='waitingpagediv_CONTAINER'>
                <div id='waitingpagediv_DIV'>
                    <Pending001 />
                    <h4>Pending</h4>
                    <p className='p-medium grey_COLOR'>"Your identification check is being performed.<br/>One moment please."</p>
                </div>
                <div id='waitingpagediv_nextButton_DIV'>
                    <RoundedButton
                        button_CLASSNAME={'blue_ROUNDEDBUTTON extra_large_ROUNDEDBUTTON cursor-pointer'}
                        button_ID={'emailconfirmationdiv_next_BUTTON'}
                        span_text_CLASSNAME={'p-medium white_COLOR'}
                        button_TEXT={'Next'}
                        Arrow002={false}
                        redirect_BOOLEAN={false}
                    />
                </div>
            </div>
        </>
    )
}

export default WaitingPageDiv