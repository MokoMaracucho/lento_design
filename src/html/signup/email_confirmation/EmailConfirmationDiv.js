import React from 'react'

import Valid001 from '../../ui/icons/valid/Valid001'
import RoundedButton from '../../ui/buttons/RoundedButton'

import './css/EmailConfirmationDiv.scss'

const EmailConfirmationDiv = (props) => {
    return (
        <>
            <div id='emailconfirmationdiv_CONTAINER'>
                <div id='emailconfirmationdiv_DIV'>
                    <Valid001 />
                    <h4>Confirmation<br/>email</h4>
                    <p className='p-medium grey_COLOR'>"Thank you for confirming your login details"</p>
                </div>
                <div id='emailconfirmationdiv_nextButton_DIV'>
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

export default EmailConfirmationDiv