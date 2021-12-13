import React from 'react'

import { Formik, Form, Field, FieldArray, getIn } from 'formik'
import * as Yup from 'yup'

import { useNavigate } from 'react-router-dom'

import { Button, FormLabel, TextField } from '@mui/material'
import { Add, DeleteForever } from '@mui/icons-material/'

import { useData } from '../../Context/LivingPlaceRegistrationContext'

import { LivingPlaceRegistrationTimeline } from '../../Components/Registration/index'
import LivingPlaceRegistrationTimelineState from '../../Context/LivingPlaceRegistrationTimelineState'

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

const FloorplanInformations = () => {

    LivingPlaceRegistrationTimelineState.maxStep = 4

    const { setValues, data } = useData()

    const navigate = useNavigate()

    const previewStep = (data) => {
        setValues(data)
        LivingPlaceRegistrationTimelineState.step = 3
        navigate('/living_place_registration/residence_informations')
        console.log(data)
    }

    return (
        <>
            <LivingPlaceRegistrationTimeline />

            <h5>Floorplan informations</h5>

            <div id='complexInfos__div'>
                <p className='p-large blue_COLOR' style={{marginTop: '10px'}}>{data.complex.complex_name}</p>
                <p className='p-medium' style={{marginTop: '-10px'}}>
                    {/* Van Koetsveldstraat 25, 3532 ES Utrecht (NL) */}
                    {data.complex.street}
                    {' '}
                    {data.complex.complex_house_number}
                    {', '}
                    {data.complex.postal_code}
                    {' '}
                    {data.complex.city}
                    {' ('}
                    {data.complex.country}
                    {')'}
                </p>
            </div>

            <Formik
                initialValues={initialValues}
                /* validationSchema={validationSchema} */
                onSubmit={(data) => {
                    setValues(data)
                    LivingPlaceRegistrationTimelineState.step = 5
                    navigate('/living_place_registration/rooms_informations')
                    console.log(data)
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
                                            />
                                            <ErrorMessage name={`floorplan.${index}.floor`} />

                                            {/* AREA */}
                                            <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Area</FormLabel>
                                            <TextField
                                                name={`floorplan.${index}.area`}
                                                value={room.area}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name={`floorplan.${index}.area`} />

                                            <div className='col'>
                                                <Button variant='contained' onClick={() => remove(index)}><DeleteForever /></Button>
                                            </div>
                                        </div>
                                    ))}
                                    <Button variant='contained' onClick={() => push({ floor: '', area: '' })}><Add /></Button>
                                </div>
                            )}
                        </FieldArray>

                        {/* PREVIEW */}
                        <Button variant='contained' onClick={previewStep}>
                            Previous
                        </Button>

                        {/* NEXT */}
                        <Button variant='contained' type='submit'>
                            Next
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default FloorplanInformations