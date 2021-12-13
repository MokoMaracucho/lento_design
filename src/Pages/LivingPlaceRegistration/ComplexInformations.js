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

import '../../Styles/Pages/LivingPlaceRegistration.scss'

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
        <div className='container_form'>
            <LivingPlaceRegistrationTimeline />

            <h5>Complex informations</h5>

            <form onSubmit={formik.handleSubmit} className='form_living_place_register two_rows'>

                <FormControl >
                    {/* COMPLEX NAME */}
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Complex name</FormLabel>
                    <TextField
                        size='small'
                        name='complex.complex_name'
                        value={formik.values.complex.complex_name}
                        onChange={formik.handleChange}
                        error={getIn(formik.touched, 'complex.complex_name') && Boolean(getIn(formik.errors, 'complex.complex_name'))}
                        helperText={getIn(formik.touched, 'complex.complex_name') && getIn(formik.errors, 'complex.complex_name')}
                    />
                </FormControl>
              
                <FormControl>
                    {/* STREET */}
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Street</FormLabel>
                    <TextField
                        size='small'
                        name='complex.street'
                        value={formik.values.complex.street}
                        onChange={formik.handleChange}
                        error={getIn(formik.touched, 'complex.street') && Boolean(getIn(formik.errors, 'complex.street'))}
                        helperText={getIn(formik.touched, 'complex.street') && getIn(formik.errors, 'complex.street')}
                    />
                </FormControl>

                <FormGroup className="formgroup-1fr-1fr">       
                    <FormControl >        
                        {/* HOUSE NUMBER */}
                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>House number</FormLabel>
                        <TextField
                            size='small'
                            name='complex.house_number'
                            value={formik.values.complex.house_number}
                            onChange={formik.handleChange}
                            error={getIn(formik.touched, 'complex.house_number') && Boolean(getIn(formik.errors, 'complex.house_number'))}
                            helperText={getIn(formik.touched, 'complex.house_number') && getIn(formik.errors, 'complex.house_number')}
                        />
                    </FormControl>

                    <FormControl >
                        {/* HOUSE NUMBER EXTENSION */}
                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Extension</FormLabel>
                        <TextField
                            size='small'
                            name='complex.house_number_extension'
                            value={formik.values.house_number_extension}
                            onChange={formik.handleChange}
                            error={getIn(formik.touched, 'complex.house_number_extension') && Boolean(getIn(formik.errors, 'complex.house_number_extension'))}
                            helperText={getIn(formik.touched, 'complex.house_number_extension') && getIn(formik.errors, 'complex.house_number_extension')}
                        />
                    </FormControl>   
                </FormGroup>
 
                <FormGroup className="formgroup-2fr-1fr">
                    <FormControl>
                        {/* CITY */}
                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>City</FormLabel>
                        <TextField
                            size='small'
                            name='complex.city'
                            value={formik.values.complex.city}
                            onChange={formik.handleChange}
                            error={getIn(formik.touched, 'complex.city') && Boolean(getIn(formik.errors, 'complex.city'))}
                            helperText={getIn(formik.touched, 'complex.city') && getIn(formik.errors, 'complex.city')}
                        />

                    </FormControl>

                    <FormControl>
                        {/* POSTAL CODE */}
                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Postal code</FormLabel>
                        <TextField
                            size='small'
                            name='complex.postal_code'
                            value={formik.values.complex.postal_code}
                            onChange={formik.handleChange}
                            error={getIn(formik.touched, 'complex.postal_code') && Boolean(getIn(formik.errors, 'complex.postal_code'))}
                            helperText={getIn(formik.touched, 'complex.postal_code') && getIn(formik.errors, 'complex.postal_code')}
                        />
                    </FormControl>
                </FormGroup>
                

               

                 {/* COUNTRY */}
                <FormControl size='small'>
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

                <FormGroup className="formgroup-1fr-4fr">
                    {/* PHONE NUMBER LANDCODE */}
                    <FormControl size='small'>
                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Landcode</FormLabel>
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
                    {/* PHONE NUMBER */}
                    <FormControl >
                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Phone number</FormLabel>
                        <TextField
                            size='small'
                            name='complex.phone_number'
                            value={formik.values.complex.phone_number}
                            onChange={formik.handleChange}
                            error={getIn(formik.touched, 'complex.phone_number') && Boolean(getIn(formik.errors, 'complex.phone_number'))}
                            helperText={getIn(formik.touched, 'complex.phone_number') && getIn(formik.errors, 'complex.phone_number')}
                        />
                    </FormControl>
                </FormGroup>

                <FormControl >     
                    {/* EMAIL */}
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Email address</FormLabel>
                    <TextField
                        size='small'
                        name='complex.email_address'
                        value={formik.values.complex.email_address}
                        onChange={formik.handleChange}
                        error={getIn(formik.touched, 'complex.email_address') && Boolean(getIn(formik.errors, 'complex.email_address'))}
                        helperText={getIn(formik.touched, 'complex.email_address') && getIn(formik.errors, 'complex.email_address')}
                    />
                </FormControl>


                <FormControl >
                    {/* OPENING HOURS */}
                    <FormLabel id='complex_opening_hours' component='legend' style={{ color: 'black', marginBottom: '10px'}}>Openings hours</FormLabel>
                    <TextField
                        size='small'
                        id='complex_opening_hours'
                        name='complex.opening_hours'
                        value={formik.values.opening_hours}
                        onChange={formik.handleChange}
                        error={getIn(formik.touched, 'complex.opening_hours') && Boolean(getIn(formik.errors, 'complex.opening_hours'))}
                        helperText={getIn(formik.touched, 'complex.opening_hours') && getIn(formik.errors, 'complex.opening_hours')}
                    />
                </FormControl>

                <FormGroup className="formgroup-fullwidth">
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Facility types</FormLabel>
                    <FormGroup className="formgroup-1fr-1fr-1fr">
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

                  <div className='button_wrapper'>
                    {/* PREVIEW */}
                    <Button variant='contained' type='submit' onClick={previewStep}>
                        Previous
                    </Button>

                    {/* NEXT */}
                    <Button color='primary' variant='contained' type='submit'>
                        Next
                    </Button>
                </div>


              

                
            </form>
        </div>
    )
}

export default ComplexInformations
