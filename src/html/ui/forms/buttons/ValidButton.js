import React, { useState } from 'react'

import axios from 'axios'

/* import { Redirect } from 'react-router-dom' */

import './css/ValidButton.scss'

const ValidButton = (props) => {

    const pathname = props.pathname
    
    let response

    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (event) => {
        console.log('Form sent')

        event.preventDefault()
        axios.get(process.env.REACT_APP_URL + 'vhe/VHE%20demo').then(result => {
            console.log(result)
            response = result.data
            setSubmitted(true)
            console.log(response)
        }).catch(e => {
            console.log('Error submitting form: ' + e)
        })
    }

    if (submitted) {
        return (
            <>
                {/* <Redirect
                    push to={{
                        pathname: '/' + pathname,
                        state: {
                            location: location
                        }
                    }}
                /> */}
            </>
        )
    }

    return (
        <>
            <div className='validButton_CONTAINER'>
                <button
                    type='button'
                    id={props.validButton_ID}
                    className={props.validButton_CLASSNAME}
                    onClick={(event) => {
                        if(props.redirect_BOOLEAN) {
                            handleSubmit(event)
                        }
                    }}
                >
                    <span className={props.span_text_CLASSNAME}>
                        {props.validButton_TEXT}
                        {props.redirect_BOOLEAN}
                    </span>
                </button>
            </div>
        </>
    )
}

export default ValidButton