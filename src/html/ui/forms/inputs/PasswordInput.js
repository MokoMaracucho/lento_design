import React from 'react'

import './css/PasswordInput.scss'

const PasswordInput = (props) => {
    return (
        <>
            <div className={props.className}>
                <label for={props.name}>{props.label} </label>
                <input type="password" id={props.name} name={props.name} placeholder={props.placeholder} />
                <p className={props.passwordRules_CLASSNAME} style={{ display: props.passwordRules_BOOLEAN ? 'block' : 'none', marginLeft: '10px', marginTop: '5px' }}>{props.passwordRules_TEXT}</p>
            </div>
        </>
    )
}

export default PasswordInput