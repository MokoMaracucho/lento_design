import React from 'react'

import Valid001 from '../../ui/icons/valid/Valid001'
import RoundedButton from '../../ui/buttons/RoundedButton'

import './css/CreationAccountConfirmationDiv.scss'

const CreationAccountConfirmationDiv = (props) => {
    return (
        <>
            <div id='creationaccountconfirmationdiv_CONTAINER'>
                <div id='creationaccountconfirmationdiv_DIV'>
                    <Valid001 />
                    <h4>Account created</h4>
                    <p className='p-medium grey_COLOR'>"Your have been created."</p>
                </div>
                <div id='creationaccountconfirmationdiv_nextButton_DIV'>
                    <RoundedButton
                        button_CLASSNAME={'blue_ROUNDEDBUTTON extra_large_ROUNDEDBUTTON cursor-pointer'}
                        button_ID={'creationaccountconfirmationdiv_next_BUTTON'}
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

export default CreationAccountConfirmationDiv