import React from 'react'

import { useFormik, getIn } from 'formik'
import * as Yup from 'yup'

import { Button, FormLabel, TextField, FormControl, FormGroup, FormControlLabel, Checkbox, Radio, RadioGroup} from '@mui/material'

import residenceFacilities from '../../Json/ResidenceFacilities'

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

const ResidenceInformations = (props) => {

    const formik = useFormik({
        initialValues: {
            residence: {
                house_number: '',
                house_number_extension: '',
                floor: '',
                rental_permit: '',
                visible_on_platform: '',
                snf_certificate_approved: '',
                akf_certificate_approved: '',
                number_rooms: '',
                number_rooms_with_vhes: '',
                residence_facility_type: {
                    kitchen: '',
                    bathroom: '',
                    common_room: ''
                }
            }
        },
        /* validationSchema: validationSchema, */
        onSubmit: (data) => {
            console.log(data)
            props.next(data)
        }
    })

    return (
        <>
            <div>
                <form onSubmit={formik.handleSubmit}>

                    {/* HOUSE NUMBER */}
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>House number</FormLabel>
                    <TextField
                        name='residence.house_number'
                        value={formik.values.residence.house_number}
                        onChange={formik.handleChange}
                        error={getIn(formik.touched, 'residence.house_number') && Boolean(getIn(formik.errors, 'residence.house_number'))}
                        helperText={getIn(formik.touched, 'residence.house_number') && getIn(formik.errors, 'residence.house_number')}
                    />

                    {/* HOUSE NUMBER EXTENSION */}
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>House number extension</FormLabel>
                    <TextField
                        name='residence.house_number_extension'
                        value={formik.values.residence.house_number_extension}
                        onChange={formik.handleChange}
                    />

                    {/* FLOOR */}
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Floor</FormLabel>
                    <TextField
                        name='residence.floor'
                        value={formik.values.residence.floor}
                        onChange={formik.handleChange}
                        error={getIn(formik.touched, 'residence.floor') && Boolean(getIn(formik.errors, 'residence.floor'))}
                        helperText={getIn(formik.touched, 'residence.floor') && getIn(formik.errors, 'residence.floor')}
                    />

                    {/* RENTAL PERMIT */}
                    <FormControl component='fieldset'>
                        <FormLabel component='legend' style={{ color: 'black'}}>Rental permit?</FormLabel>
                        <RadioGroup
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

                    {/* SNF CERTIFICATE */}
                    <FormControl component='fieldset'>
                        <FormLabel component='legend' style={{ color: 'black'}}>SNF certificate</FormLabel>
                        <RadioGroup
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
                        <FormLabel component='legend' style={{ color: 'black'}}>SNF certificate</FormLabel>
                        <RadioGroup
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

                    {/* NUMBER OF ROOMS */}
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Number of rooms</FormLabel>
                    <TextField
                        name='residence.number_rooms'
                        value={formik.values.residence.number_rooms}
                        onChange={formik.handleChange}
                        error={getIn(formik.touched, 'residence.number_rooms') && Boolean(getIn(formik.errors, 'residence.number_rooms'))}
                        helperText={getIn(formik.touched, 'residence.number_rooms') && getIn(formik.errors, 'residence.number_rooms')}
                    />

                    {/* NUMBER OF ROOMS WITH LIVING PLACES */}
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>... with living place</FormLabel>
                    <TextField
                        name='residence.number_rooms_with_vhes'
                        value={formik.values.residence.number_rooms_with_vhes}
                        onChange={formik.handleChange}
                        error={getIn(formik.touched, 'residence.number_rooms_with_vhes') && Boolean(getIn(formik.errors, 'residence.number_rooms_with_vhes'))}
                        helperText={getIn(formik.touched, 'residence.number_rooms_with_vhes') && getIn(formik.errors, 'residence.number_rooms_with_vhes')}
                    />

                    <FormGroup>
                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Facility types</FormLabel>
                        <FormGroup>
                            {residenceFacilities.map((item, index) => (
                                <FormControlLabel key={index} name={`residence.residence_facility_type.${item.value}`} onChange={formik.handleChange} control={<Checkbox />}label={item.label} />
                            ))}
                        </FormGroup>
                    </FormGroup>
                    
                    <Button color='primary' variant='contained' fullWidth type='submit'>
                        Submit
                    </Button>
                </form>
            </div>
        </>
    )
}

export default ResidenceInformations
