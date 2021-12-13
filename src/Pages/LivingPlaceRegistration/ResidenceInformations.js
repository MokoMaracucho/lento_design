import React from 'react'

import { useFormik, getIn } from 'formik'
import * as Yup from 'yup'

import { useNavigate } from 'react-router-dom'

import { Button, FormLabel, TextField, FormControl, FormGroup, FormControlLabel, Checkbox, Radio, RadioGroup} from '@mui/material'

import { useData } from '../../Context/LivingPlaceRegistrationContext'

import { LivingPlaceRegistrationTimeline } from '../../Components/Registration/index'
import LivingPlaceRegistrationTimelineState from '../../Context/LivingPlaceRegistrationTimelineState'

import residenceFacilities from '../../Json/ResidenceFacilities'

import '../../Styles/Pages/LivingPlaceRegistration.scss'

const validationSchema = Yup.object({
    residence: Yup.object({
        house_number: Yup.number().integer().required('test'),
        floor: Yup.number().integer().required('test'),
        rental_permit: Yup.boolean().required('test'),
        visible_on_platform: Yup.boolean().required('test'),
        snf_certificate_approved: Yup.boolean().required('test'),
        akf_certificate_approved: Yup.boolean().required('test'),
        number_rooms: Yup.number().integer().required('test'),
        number_rooms_with_vhes: Yup.number().integer().required('test')
    })
})

const ResidenceInformations = () => {

    LivingPlaceRegistrationTimelineState.maxStep = 3

    const { setValues, data } = useData()

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: data,
        /* validationSchema: validationSchema, */
        onSubmit: (data) => {
            setValues(data)
            LivingPlaceRegistrationTimelineState.step = 4
            navigate('/living_place_registration/floorplan_informations')
            console.log(data)
        }
    })

    const previewStep = (data) => {
        LivingPlaceRegistrationTimelineState.step = 2
        navigate('/living_place_registration/complex_informations')
    }

    return (
        <div className='container_form'>
        <LivingPlaceRegistrationTimeline />

        <h5>Residence informations</h5>

            <form onSubmit={formik.handleSubmit} className='form_living_place_register two_rows'>

                <div id='complexInfos__div' className='formgroup-fullwidth'>
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

                <FormControl >
                    {/* HOUSE NUMBER */}
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>House number</FormLabel>
                    <TextField
                        size='small'
                        name='residence.house_number'
                        value={formik.values.residence.house_number}
                        onChange={formik.handleChange}
                        error={getIn(formik.touched, 'residence.house_number') && Boolean(getIn(formik.errors, 'residence.house_number'))}
                        helperText={getIn(formik.touched, 'residence.house_number') && getIn(formik.errors, 'residence.house_number')}
                    />
                </FormControl>

                     <FormGroup className='formgroup-1fr-1fr'>
                    {/* RENTAL PERMIT */}
                    <FormControl component='fieldset'>
                        <FormLabel component='legend' style={{ color: 'black'}}>Rental permit?</FormLabel>
                        <RadioGroup
                            row
                            name='residence.rental_permit'
                            value={formik.values.residence.rental_permit}
                            onChange={formik.handleChange}
                            error={getIn(formik.touched, 'residence.rental_permit') && Boolean(getIn(formik.errors, 'residence.rental_permit'))}
                        >
                            <FormControlLabel
                                value='true'
                                control={<Radio />}
                                label='Yes'
                            />
                            <FormControlLabel
                                value='false'
                                control={<Radio />}
                                label='No'
                            />
                        </RadioGroup>
                        {getIn(formik.touched, 'residence.rental_permit') && (
                            <div>
                                {getIn(formik.errors, 'residence.rental_permit')}
                            </div>
                        )}
                    </FormControl>

                    {/* ALWAYS VISIBLE */}
                    <FormControl component='fieldset'>
                        <FormLabel component='legend' style={{ color: 'black'}}>Always visible?</FormLabel>
                        <RadioGroup
                            row
                            name='residence.visible_on_platform'
                            value={formik.values.residence.visible_on_platform}
                            onChange={formik.handleChange}
                            error={getIn(formik.touched, 'residence.visible_on_platform') && Boolean(getIn(formik.errors, 'residence.visible_on_platform'))}
                        >
                            <FormControlLabel
                                value='true'
                                control={<Radio />}
                                label='Yes'
                            />
                            <FormControlLabel
                                value='false'
                                control={<Radio />}
                                label='No'
                            />
                        </RadioGroup>
                        {getIn(formik.touched, 'residence.visible_on_platform') && (
                            <div>
                                {getIn(formik.errors, 'residence.visible_on_platform')}
                            </div>
                        )}
                    </FormControl>
                 </FormGroup>

                 <FormControl >
                    {/* HOUSE NUMBER EXTENSION */}
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>House number extension</FormLabel>
                    <TextField
                        size='small'
                        name='residence.house_number_extension'
                        value={formik.values.residence.house_number_extension}
                        onChange={formik.handleChange}
                    />
                 </FormControl>


                 <FormGroup className='formgroup-1fr-1fr'>
                    {/* SNF CERTIFICATE */}
                    <FormControl component='fieldset'>
                        <FormLabel component='legend' style={{ color: 'black'}}>SNF certificate</FormLabel>
                        <RadioGroup
                            row
                            name='residence.snf_certificate_approved'
                            value={formik.values.residence.snf_certificate_approved}
                            onChange={formik.handleChange}
                            error={getIn(formik.touched, 'residence.snf_certificate_approved') && Boolean(getIn(formik.errors, 'residence.snf_certificate_approved'))}
                        >
                            <FormControlLabel
                                value='true'
                                control={<Radio />}
                                label='Yes'
                            />
                            <FormControlLabel
                                value='false'
                                control={<Radio />}
                                label='No'
                            />
                        </RadioGroup>
                        {getIn(formik.touched, 'residence.snf_certificate_approved') && (
                            <div>
                                {getIn(formik.errors, 'residence.snf_certificate_approved')}
                            </div>
                        )}
                    </FormControl>

                    {/* AKF CERTIFICATE */}
                    <FormControl component='fieldset'>
                        <FormLabel component='legend' style={{ color: 'black'}}>AKF certificate</FormLabel>
                        <RadioGroup
                            row
                            name='residence.akf_certificate_approved'
                            value={formik.values.residence.akf_certificate_approved}
                            onChange={formik.handleChange}
                            error={getIn(formik.touched, 'residence.akf_certificate_approved') && Boolean(getIn(formik.errors, 'residence.akf_certificate_approved'))}
                        >
                            <FormControlLabel
                                value='true'
                                control={<Radio />}
                                label='Yes'
                            />
                            <FormControlLabel
                                value='false'
                                control={<Radio />}
                                label='No'
                            />
                        </RadioGroup>
                        {getIn(formik.touched, 'residence.akf_certificate_approved') && (
                            <div>
                                {getIn(formik.errors, 'residence.akf_certificate_approved')}
                            </div>
                        )}
                    </FormControl>

                 </FormGroup>

                 <FormControl >
                    {/* FLOOR */}
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Floor</FormLabel>
                    <TextField
                        size='small'
                        name='residence.floor'
                        value={formik.values.residence.floor}
                        onChange={formik.handleChange}
                        error={getIn(formik.touched, 'residence.floor') && Boolean(getIn(formik.errors, 'residence.floor'))}
                        helperText={getIn(formik.touched, 'residence.floor') && getIn(formik.errors, 'residence.floor')}
                    />
                 </FormControl>
    
                <FormControl >
                    {/* NUMBER OF ROOMS */}
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Number of rooms</FormLabel>
                    <TextField
                        size='small'
                        name='residence.number_rooms'
                        value={formik.values.residence.number_rooms}
                        onChange={formik.handleChange}
                        error={getIn(formik.touched, 'residence.number_rooms') && Boolean(getIn(formik.errors, 'residence.number_rooms'))}
                        helperText={getIn(formik.touched, 'residence.number_rooms') && getIn(formik.errors, 'residence.number_rooms')}
                    />
                </FormControl>

                <FormGroup>
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Facility types</FormLabel>
                    <FormGroup>
                        {residenceFacilities.map((item, index) => (
                            <FormControlLabel key={index}
                                control={
                                    <Checkbox
                                        onChange={(e) => {
                                            formik.setFieldValue(`residence.complex_facility_type.${item.value}`, e.target.checked)
                                        }}
                                        name={`complex.complex_facility_type.${item.value}`}
                                    />}
                                label={item.label}
                            />
                        ))}
                    </FormGroup>
                </FormGroup>

                <FormControl >
                    {/* NUMBER OF ROOMS WITH LIVING PLACES */}
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>... with living place</FormLabel>
                    <TextField
                        size='small'
                        name='residence.number_rooms_with_vhes'
                        value={formik.values.residence.number_rooms_with_vhes}
                        onChange={formik.handleChange}
                        error={getIn(formik.touched, 'residence.number_rooms_with_vhes') && Boolean(getIn(formik.errors, 'residence.number_rooms_with_vhes'))}
                        helperText={getIn(formik.touched, 'residence.number_rooms_with_vhes') && getIn(formik.errors, 'residence.number_rooms_with_vhes')}
                    />
                </FormControl>

              


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

export default ResidenceInformations
