import React from 'react'

import './css/EmailInput.scss'

const EmailInput = (props) => {
    return (
        <>
            <div className={props.className}>
                <label for={props.name}>{props.label} </label>
                <input type="email" id={props.name} name={props.name} placeholder={props.placeholder} />
            </div>
        </>
    )
}

export default EmailInput