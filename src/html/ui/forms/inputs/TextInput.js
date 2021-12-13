import React from 'react'

import './css/TextInput.scss'

const TextInput = (props) => {
    return (
        <>
            <div className={props.className}>
                <label for={props.name}>{props.label} </label>
                <input type="text" id={props.name} name={props.name} placeholder={props.placeholder} />
            </div>
        </>
    )
}

export default TextInput