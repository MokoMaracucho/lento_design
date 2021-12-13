import React, { useState } from 'react'

import axios from 'axios'

/* import { Redirect } from 'react-router-dom' */

import Arrow002 from '../icons/arrows/Arrow002'

import './css/RoundedButton.scss'

const RoundedButton = (props) => {
    let response

    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (event) => {
        console.log("L'utilisateur a était soumis ")
        console.log(props.form_STATE)

        event.preventDefault()
        axios.get(process.env.REACT_APP_URL + 'vhe/VHE%20demo').then(result => {
            console.log(result)
            response = result.data
            setSubmitted(true)
            console.log(response)
        }).catch(e => {
            console.log('Error getting data: ' + e)
        })
    }

    if (submitted) {
        return (
            <>
                {/* <Redirect
                    push to={{
                        pathname: '/search_result',
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
            <button
                type='button'
                id={props.button_ID}
                className={props.button_CLASSNAME}
                onClick={(event) => {
                    if(props.redirect_BOOLEAN) {
                        handleSubmit(event)
                    }
                }}
            >
                <span className={props.span_text_CLASSNAME}>
                    {props.button_TEXT}
                    {props.redirect_BOOLEAN}
                </span>
                <Arrow002
                    display={props.Arrow002}
                />
            </button>
        </>
    )
}

export default RoundedButton