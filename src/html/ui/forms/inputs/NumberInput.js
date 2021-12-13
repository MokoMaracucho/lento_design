import React from 'react'

const NumberInput = (props) => {
    return (
        <>
            <label className='p-medium' for={props.name}>{props.label}</label>
            <input type='number' id={props.name} name={props.name}></input>
        </>
    )
}

export default NumberInput