import React from 'react'

import { useField, useFormikContext } from 'formik'

import { Select, MenuItem } from '@mui/material'

const SelectWrapper = ({
    name,
    options,
    ...otherProps
}) => {
    
    const { setFieldValue } = useFormikContext()
    const [field, meta] = useField(name)

    const handleChange = (e) => {
        const { value } = e.target
        setFieldValue(name, value)
    }

    const configSelect = {
        ...field,
        ...otherProps,
        select: true,
        variant: 'outlined',
        fullWidth: true,
        onChange: handleChange
    }

    if(meta && meta.touched && meta.error) {
        configSelect.error = true
        configSelect.helperText = meta.error
    }

    return (
        <>
            
            <Select >
                {options.map((item, index) => (
                    <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                ))}
            </Select>
        </>
    )
}

export default SelectWrapper


/* <TextField {...configSelect}>
    {Object.keys(options).map((item, index) => {
        return (
            <MenuItem key={index} value={item.id}>
                {options[item.complex_name]}
            </MenuItem>
        )
    })}
</TextField> */
