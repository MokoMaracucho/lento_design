import React from 'react'

import { useFormik, getIn } from 'formik'
import * as Yup from 'yup'

import { useNavigate } from 'react-router-dom'

import { Button, FormLabel, TextField, FormControl, MenuItem, Select, FormGroup, FormControlLabel, Checkbox } from '@mui/material'

import { useData } from '../../Context/LivingPlaceRegistrationContext'

import { LivingPlaceRegistrationTimeline } from '../../Components/Registration/index'
import LivingPlaceRegistrationTimelineState from '../../Context/LivingPlaceRegistrationTimelineState'

import countries from '../../Json/Countries'
import phoneNumberLandcode from '../../Json/PhoneNumberLandcode'
import complexFacilities from '../../Json/ComplexFacilities'

const validationSchema = Yup.object({
    complex: Yup.object({
        complex_name: Yup.string().required('test'),
        house_number: Yup.number().integer().required('test'),
        city: Yup.string().required('test'),
        postal_code: Yup.string().required('test'),
        phone_number: Yup.number().required('test'),
        email_address: Yup.string().email().required('test'),
        street: Yup.string().required('test'),
        country: Yup.string().required('test'),
        phone_number_landcode: Yup.string().required('test')
    })
})

const ComplexInformations = () => {

    LivingPlaceRegistrationTimelineState.maxStep = 2

    const { setValues, data } = useData()

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: data,
        /* validationSchema: validationSchema, */
        onSubmit: (data) => {
            setValues(data)
            LivingPlaceRegistrationTimelineState.step = 3
            navigate('/living_place_registration/residence_informations')
            console.log(data)
        }
    })

    const previewStep = (data) => {
        LivingPlaceRegistrationTimelineState.step = 1
        navigate('/living_place_registration/some_questions')
    }

    return (
        <>
            <LivingPlaceRegistrationTimeline />

            <h5>Complex informations</h5>

            <form onSubmit={formik.handleSubmit} className='form_living_place_register'>

                {/* COMPLEX NAME */}
                <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Complex name</FormLabel>
                <TextField
                    name='complex.complex_name'
                    value={formik.values.complex.complex_name}
                    onChange={formik.handleChange}
                    error={getIn(formik.touched, 'complex.complex_name') && Boolean(getIn(formik.errors, 'complex.complex_name'))}
                    helperText={getIn(formik.touched, 'complex.complex_name') && getIn(formik.errors, 'complex.complex_name')}
                />

                {/* HOUSE NUMBER */}
                <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>House number</FormLabel>
                <TextField
                    name='complex.house_number'
                    value={formik.values.complex.house_number}
                    onChange={formik.handleChange}
                    error={getIn(formik.touched, 'complex.house_number') && Boolean(getIn(formik.errors, 'complex.house_number'))}
                    helperText={getIn(formik.touched, 'complex.house_number') && getIn(formik.errors, 'complex.house_number')}
                />

                {/* CITY */}
                <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>City</FormLabel>
                <TextField
                    name='complex.city'
                    value={formik.values.complex.city}
                    onChange={formik.handleChange}
                    error={getIn(formik.touched, 'complex.city') && Boolean(getIn(formik.errors, 'complex.city'))}
                    helperText={getIn(formik.touched, 'complex.city') && getIn(formik.errors, 'complex.city')}
                />

                {/* POSTAL CODE */}
                <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Postal code</FormLabel>
                <TextField
                    name='complex.postal_code'
                    value={formik.values.complex.postal_code}
                    onChange={formik.handleChange}
                    error={getIn(formik.touched, 'complex.postal_code') && Boolean(getIn(formik.errors, 'complex.postal_code'))}
                    helperText={getIn(formik.touched, 'complex.postal_code') && getIn(formik.errors, 'complex.postal_code')}
                />

                {/* PHONE NUMBER */}
                <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Phone number</FormLabel>
                <TextField
                    name='complex.phone_number'
                    value={formik.values.complex.phone_number}
                    onChange={formik.handleChange}
                    error={getIn(formik.touched, 'complex.phone_number') && Boolean(getIn(formik.errors, 'complex.phone_number'))}
                    helperText={getIn(formik.touched, 'complex.phone_number') && getIn(formik.errors, 'complex.phone_number')}
                />

                {/* EMAIL */}
                <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Email address</FormLabel>
                <TextField
                    name='complex.email_address'
                    value={formik.values.complex.email_address}
                    onChange={formik.handleChange}
                    error={getIn(formik.touched, 'complex.email_address') && Boolean(getIn(formik.errors, 'complex.email_address'))}
                    helperText={getIn(formik.touched, 'complex.email_address') && getIn(formik.errors, 'complex.email_address')}
                />

                {/* STREET */}
                <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Street</FormLabel>
                <TextField
                    name='complex.street'
                    value={formik.values.complex.street}
                    onChange={formik.handleChange}
                    error={getIn(formik.touched, 'complex.street') && Boolean(getIn(formik.errors, 'complex.street'))}
                    helperText={getIn(formik.touched, 'complex.street') && getIn(formik.errors, 'complex.street')}
                />

                {/* HOUSE NUMBER EXTENSION */}
                <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>House number extension</FormLabel>
                <TextField
                    name='complex.house_number_extension'
                    value={formik.values.house_number_extension}
                    onChange={formik.handleChange}
                    error={getIn(formik.touched, 'complex.house_number_extension') && Boolean(getIn(formik.errors, 'complex.house_number_extension'))}
                    helperText={getIn(formik.touched, 'complex.house_number_extension') && getIn(formik.errors, 'complex.house_number_extension')}
                />

                {/* COUNTRY */}
                <FormControl>
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Country</FormLabel>
                    <Select
                        name='complex.country'
                        value={formik.values.complex.country}
                        onChange={formik.handleChange}
                        error={getIn(formik.touched, 'complex.country') && Boolean(getIn(formik.errors, 'complex.country'))}
                    >
                        <MenuItem value=''>Choose a country</MenuItem>
                        {countries.map((item, index) => (
                            <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                        ))}
                    </Select>
                    {getIn(formik.touched, 'complex.country') && (
                        <div>
                            {getIn(formik.errors, 'complex.country')}
                        </div>
                    )}
                </FormControl>

                {/* PHONE NUMBER LANDCODE */}
                <FormControl>
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Phone number landcode</FormLabel>
                    <Select
                        name='complex.phone_number_landcode'
                        value={formik.values.complex.phone_number_landcode}
                        onChange={formik.handleChange}
                        error={getIn(formik.touched, 'complex.phone_number_landcode') && Boolean(getIn(formik.errors, 'complex.phone_number_landcode'))}
                    >
                        <MenuItem value=''>Choose a phone number landcode</MenuItem>
                        {phoneNumberLandcode.map((item, index) => (
                            <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                        ))}
                    </Select>
                    {getIn(formik.touched, 'complex.phone_number_landcode') && (
                        <div>
                            {getIn(formik.errors, 'complex.phone_number_landcode')}
                        </div>
                    )}
                </FormControl>

                <FormGroup>
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Facility types</FormLabel>
                    <FormGroup>
                        {complexFacilities.map((item, index) => (
                            <FormControlLabel key={index}
                                control={
                                    <Checkbox
                                        onChange={(e) => {
                                            formik.setFieldValue(`complex.complex_facility_types.${item.value}`, e.target.checked)
                                        }}
                                        name={`complex.complex_facility_types.${item.value}`}
                                    />}
                                label={item.label}
                            />
                        ))}
                    </FormGroup>
                </FormGroup>

                {/* PREVIEW */}
                <Button variant='contained' type='submit' onClick={previewStep}>
                    Previous
                </Button>

                {/* NEXT */}
                <Button color='primary' variant='contained' type='submit'>
                    Next
                </Button>
            </form>
        </>
    )
}

export default ComplexInformations
