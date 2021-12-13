import React from 'react'

import { Formik, Form, Field, FieldArray, getIn } from 'formik'
import * as Yup from 'yup'

import { FormLabel, TextField } from '@mui/material'

const validationSchema = Yup.object().shape({
    floorplan: Yup.array().of(
        Yup.object().shape({
          floor: Yup.number().required('Test'),
          area: Yup.number().required('Test')
        })).required('Test')
})
 
const ErrorMessage = ({ name }) => (
    <Field
        name={name}
        render={({ form }) => {
            const error = getIn(form.errors, name);
            const touch = getIn(form.touched, name);
            return touch && error ? error : null;
        }}
    />
)

const initialValues = {
    floorplan: [
    {
      floor: '',
      area: ''
    }
  ]
}

const FloorplanInformations = (props) => {

    return (
        <>
            <Formik
                initialValues={initialValues}
                /* validationSchema={validationSchema} */
                onSubmit={(data) => {
                    props.next(data)
                }}
            >
                {({ values, handleChange, touched, errors }) => (
                    <Form>
                        <FieldArray name='floorplan'>
                            {({ remove, push }) => (
                                <div>
                                    {values.floorplan.length > 0 && values.floorplan.map((room, index) => (
                                        <div className='row' key={index}>

                                            {/* FLOOR */}
                                            <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Floor</FormLabel>
                                            <TextField
                                                name={`floorplan.${index}.floor`}
                                                value={room.floor}
                                                onChange={handleChange}
                                                /* error={getIn(touched, 'residence.house_number_extension') && Boolean(getIn(errors, 'residence.house_number_extension'))}
                                                helperText={getIn(touched, 'residence.house_number_extension') && getIn(errors, 'residence.house_number_extension')} */
                                            />
                                            <ErrorMessage name={`floorplan.${index}.floor`} />

                                            {/* AREA */}
                                            <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Area</FormLabel>
                                            <TextField
                                                name={`floorplan.${index}.area`}
                                                value={room.area}
                                                onChange={handleChange}
                                                /* error={getIn(formik.touched, 'residence.house_number_extension') && Boolean(getIn(formik.errors, 'residence.house_number_extension'))}
                                                helperText={getIn(formik.touched, 'residence.house_number_extension') && getIn(formik.errors, 'residence.house_number_extension')} */
                                            />
                                            <ErrorMessage name={`floorplan.${index}.area`} />

                                            <div className='col'>
                                                <button type='button' className='secondary' onClick={() => remove(index)}>X</button>
                                            </div>
                                        </div>
                                    ))}
                                    <button type='button' className='secondary' onClick={() => push({ floor: '', area: '' })}>Add room</button>
                                </div>
                            )}
                        </FieldArray>
                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default FloorplanInformations

/* https://codesandbox.io/s/f7rkz?file=/src/form.js:1198-1210 */