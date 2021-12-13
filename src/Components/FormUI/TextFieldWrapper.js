import React from 'react'

import { useField } from 'formik'

import { TextField } from '@mui/material'

const TextFieldWrapper = ({
    name,
    ...otherProps
}) => {
    
    const [field, meta] = useField(name)

    const configTextField = {
        ...field,
        ...otherProps,
        fullwidth: true,
        variant: 'outlined'
    }

    if(meta && meta.touched && meta.error) {
        configTextField.error = true
        configTextField.helperText = meta.error
    }

    return (
        <>
            <TextField {...configTextField} />
        </>
    )
}

export default TextFieldWrapper
