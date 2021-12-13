import React, { useState, useEffect } from 'react'

import { useFormik, getIn } from 'formik'
import * as Yup from 'yup'

import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import { Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, MenuItem, Select } from '@mui/material'

import { useData } from '../../Context/LivingPlaceRegistrationContext'

import { LivingPlaceRegistrationTimeline } from '../../Components/Registration/index'
import LivingPlaceRegistrationTimelineState from '../../Context/LivingPlaceRegistrationTimelineState'

import complexNames from '../../Json/ComplexNames'
import residenceTypes from '../../Json/ResidenceTypes'
import livingPlaceTypes from '../../Json/LivingPlaceTypes'

import '../../Styles/Pages/LivingPlaceRegistration.scss'

const validationSchema = Yup.object({
    introduction: Yup.object({
        part_of_complex: Yup.boolean(),
        is_existing_complex: Yup.boolean().when('part_of_complex', {
            is: true,
            then: Yup.boolean().required('test')
        }),
        existing_complex_name: Yup.number().when('is_existing_complex', {
            is: true,
            then: Yup.number().required('test')
        }),
        residence_type: Yup.number().required('A living place type is madatory'),
        vhe_type: Yup.number().required('A living place type is madatory')
    })
})

const SomeQuestions = () => {

    LivingPlaceRegistrationTimelineState.maxStep = 1

    const { setValues, data } = useData()

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: data,
        /* validationSchema: validationSchema, */
        onSubmit: (data) => {
            setValues(data)
            navigate('/living_place_registration/complex_informations')
            console.log(data)
        }
    })

    /* const[complexNames, setComplexNames] = useState([])
      
    const fetchComplexNames = () => {
        axios.get(process.env.REACT_APP_URL + 'vhe/complexname').then(result => {
            const response = result.data.results
            console.log(response)
            setComplexNames(response)
        }).catch(e => {
            console.log('Error getting data: ' + e)
        })
    }

    useEffect(() => {
        fetchComplexNames()
    }, [])

    if(!complexNames) return null */

    return (
        <>
            <form onSubmit={formik.handleSubmit} className='form_living_place_register'>
                
                <LivingPlaceRegistrationTimeline />

                <h5>Questions about the residence</h5>

                {/* PART OF A COMPLEX */}
                <FormControl component='fieldset'>
                    <FormLabel component='legend' style={{ color: 'black'}}>Is the residence part of a complex?</FormLabel>
                    <RadioGroup
                        name='introduction.part_of_complex'
                        value={formik.values.introduction.part_of_complex}
                        onChange={formik.handleChange}
                    >
                        <FormControlLabel
                            value='true'
                            control={<Radio />}
                            label='True'
                        />
                        <FormControlLabel
                            value='false'
                            control={<Radio />}
                            label='False'
                        />
                    </RadioGroup>
                </FormControl>

                {/* EXISTING COMPLEX */}
                {formik.values.introduction.part_of_complex === 'true' && (
                    <FormControl component='fieldset'>
                        <FormLabel component='legend' style={{ color: 'black'}}>Does it already exist in the platform?</FormLabel>
                        <RadioGroup
                            name='introduction.is_existing_complex'
                            value={formik.values.introduction.is_existing_complex}
                            onChange={formik.handleChange}
                            error={getIn(formik.touched, 'introduction.is_existing_complex') && Boolean(getIn(formik.errors, 'introduction.is_existing_complex'))}
                        >
                            <FormControlLabel
                                value='true'
                                control={<Radio />}
                                label='True'
                            />
                            <FormControlLabel
                                value='false'
                                control={<Radio />}
                                label='False'
                            />
                        </RadioGroup>
                        {getIn(formik.touched, 'introduction.is_existing_complex') && (
                            <div>
                                {getIn(formik.errors, 'introduction.is_existing_complex')}
                            </div>
                        )}
                    </FormControl>
                )}
            
                {/* EXISTING COMPLEX NAME */}
                {formik.values.introduction.part_of_complex === 'true' && formik.values.introduction.is_existing_complex === 'true' && (
                    <FormControl>
                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Choose a complex</FormLabel>
                        <Select
                            name='introduction.existing_complex_name'
                            value={formik.values.introduction.existing_complex_name}
                            onChange={formik.handleChange}
                            error={getIn(formik.touched, 'introduction.existing_complex_name') && Boolean(getIn(formik.errors, 'introduction.existing_complex_name'))}
                        >
                            <MenuItem value=''>Choose a complex name</MenuItem>
                            {complexNames.map((item, index) => (
                                <MenuItem key={index} value={item.id}>{item.complex_name}</MenuItem>
                            ))}
                        </Select>
                        {getIn(formik.touched, 'introduction.existing_complex_name') && (
                            <div>
                                {getIn(formik.errors, 'introduction.existing_complex_name')}
                            </div>
                        )}
                    </FormControl>
                )}
            
                {/* RESIDENCE TYPE */}
                <FormControl>
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Residence type</FormLabel>
                    <Select
                        name='introduction.residence_type'
                        value={formik.values.introduction.residence_type}
                        onChange={formik.handleChange}
                        error={getIn(formik.touched, 'introduction.residence_type') && Boolean(getIn(formik.errors, 'introduction.residence_type'))}
                    >
                        <MenuItem value=''>Choose a residence type</MenuItem>
                        {residenceTypes.map((item, index) => (
                            <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                        ))}
                    </Select>
                    {getIn(formik.touched, 'introduction.residence_type') && (
                        <div>
                            {getIn(formik.errors, 'introduction.residence_type')}
                        </div>
                    )}
                </FormControl>
            
                {/* LIVING PLACE TYPE */}
                <FormControl>
                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Living place type</FormLabel>
                    <Select
                        name='introduction.vhe_type'
                        value={formik.values.introduction.vhe_type}
                        onChange={formik.handleChange}
                        error={getIn(formik.touched, 'introduction.vhe_type') && Boolean(getIn(formik.errors, 'introduction.vhe_type'))}
                    >
                        <MenuItem value=''>Choose a living place type</MenuItem>
                        {livingPlaceTypes.map((item, index) => (
                            <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                        ))}
                    </Select>
                    {getIn(formik.touched, 'introduction.vhe_type') && (
                        <div>
                            {getIn(formik.errors, 'introduction.vhe_type')}
                        </div>
                    )}
                </FormControl>

                {/* NEXT */}
                <Button color='primary' variant='contained' type='submit'>
                    Next
                </Button>
            </form>
        </>
    )
}

export default SomeQuestions
