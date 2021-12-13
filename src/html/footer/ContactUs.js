import React from 'react'

import RoundedButton from '../ui/buttons/RoundedButton'

import './css/ContactUs.scss'

const ContactUs = (props) => {
    return (
        <>
            <p
                className='p-medium'>CONTACT US</p>
            <h3
                id='contacUs_H3'
            >We´d love to get in contact with you
            </h3>
            <div id='getInTouch_DIV'>
                <RoundedButton
                    button_CLASSNAME={'blue_ROUNDEDBUTTON extra_large_ROUNDEDBUTTON cursor-pointer'}
                    button_ID={'services_header_BUTTON'}
                    span_text_CLASSNAME={'p-medium white_COLOR'}
                    button_TEXT={'Get in touch'}
                    Arrow002={false}
                    redirect_BOOLEAN={false}
                />
            </div>
        </>
    )
}

export default ContactUs