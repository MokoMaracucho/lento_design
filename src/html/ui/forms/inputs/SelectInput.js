import React, { useState, useEffect } from 'react'

const SelectInput = (props) => {

    return (
        <>
            <div className='p-medium'>
                <label for={props.name}>{props.text}</label>
                <br/>
                <select id={props.name}name={props.name}>
                    {props.items.map((item) => (
                        <option value={item.value}>{item.label}</option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default SelectInput