import React from 'react'

import './css/CheckBoxInput.scss'

const CheckBoxInput = (props) => {
    return (
        <>
            {/* <div className={props.className}>
                <input type="checkbox" id={props.id} name={props.name} checked />
                <label for={props.name}>{props.label}</label>
            </div> */}
            <div className={props.className}>
                <label id={props.id} name={props.name} >
                    {props.label}
                    <input type="checkbox" checked={props.checked} />
                    <span className="checkmark"></span>
                </label>
            </div>
        </>
    )
}

export default CheckBoxInput