import React, { useContext, useState, useEffect } from 'react'

import axios from 'axios'

import { useForm } from 'react-hook-form'

import { useNavigate } from 'react-router-dom'

import { Button, Select, MenuItem } from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { Info } from '@material-ui/icons'
import CancelIcon from '@mui/icons-material/Cancel'
import { blue } from '@mui/material/colors'

import { LivingPlaceRegistrationTimeline } from '../Components/Registration/index'

import { GlobalVariablesContext } from '../Context/GlobalVariablesContext'
import { useData } from '../Context/DataContext'
import LivingPlaceRegistrationTimelineState from '../Context/LivingPlaceRegistrationTimelineState'

import '../Styles/Pages/LivingPlaceRegistrationSomeQuestions.scss'
import { Box } from '@mui/system'

const LivingPlaceRegistrationSomeQuestions = () => {

    const { REACT_APP_URL } = useContext(GlobalVariablesContext)

    const navigate = useNavigate()
    const { setValues, data } = useData()

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            part_of_complex: data.part_of_complex,
            is_existing_complex: data.is_existing_complex,
            introduction: {
                existing_complex_name: data.existing_complex_name,
                residence_type: data.residence_type,
                vhe_type: data.vhe_type
            }
        }
    })
    
    const partOfAComplex = watch('part_of_complex')
    const existingComplex = watch('is_existing_complex')

    const[allData, setAllData] = useState([])
      
    const fetchComplexNames = () => {
        axios.get(process.env.REACT_APP_URL + 'vhe/complexname').then(result => {
            const response = result.data.results
            console.log(response)
            setAllData(response)
        }).catch(e => {
            console.log('Error getting data: ' + e)
        })
    }

    useEffect(() => {
        fetchComplexNames()
      }, [])

    const onSubmit = (data) => {
        navigate('/living_place_registration/complex_informations')
        LivingPlaceRegistrationTimelineState.step = 2
        setValues(data)
        console.log(data)
    }

    if(!allData) return null
    
    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='timelineFrom__container'
            >
                <LivingPlaceRegistrationTimeline />
                <h5>Questions about the residence</h5>

                {/* PART OF A COMPLEX */}
                <FormControl component='fieldset'>
                    <div id='partOfAComplex__div'>

                        <FormLabel component='legend' style={{ color: 'black'}}>Is the residence part of a complex?</FormLabel>
                        <RadioGroup
                            {...register('part_of_complex')}
                            defaultValue={data.part_of_complex}
                            style={{ display: 'initial' }}
                        >
                            <FormControlLabel value='true' control={
                                <Radio
                                    style={{ 'color': '#909090'}}
                                />
                            } label='Yes' />

                            <FormControlLabel value='false' control={
                                <Radio
                                    style={{ 'color': '#909090'}}
                                />
                            } label='No' />
                        </RadioGroup>
                    </div>
                </FormControl>


                {/* EXISTING COMPLEX */}
                {partOfAComplex && (
                    <FormControl component='fieldset'>
                        <div id='partOfAComplex__div'>

                            <FormLabel component='legend' style={{ color: 'black'}}>Does it already exist in the platform?</FormLabel>
                            <RadioGroup
                                {...register('is_existing_complex')}
                                defaultValue={data.is_existing_complex}
                                style={{ display: 'initial' }}
                            >
                                <FormControlLabel value='true' control={
                                    <Radio
                                        style={{ 'color': '#909090'}}
                                    />
                                } label='Yes' />

                                <FormControlLabel value='false' control={
                                    <Radio
                                        style={{ 'color': '#909090'}}
                                    />
                                } label='No' />
                            </RadioGroup>
                            
                        </div>
                    </FormControl>
                )}
                
                {/* CHOOSE COMPLEX */}
                {partOfAComplex && existingComplex && (
                    <FormControl>
                        <div id='existingComplexName__div'>
                            <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Choose a complex</FormLabel>
                            <div id='existingComplexNameError__div'>
                                <Select
                                    {...register('existing_complex_name', { required: true })}
                                    defaultValue={data.existing_complex_name}
                                    style={textFieldStyle}
                                >
                                    <MenuItem value=''>Choose complex name</MenuItem>
                                    {allData.map((item, index) => (
                                        <MenuItem key={index} value={item.id}>{item.complex_name}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                            <div id='existingComplexNameError__container'>
                                {errors.existing_complex_name && errors.existing_complex_name.type === 'required' && <span className='red_COLOR error_FORM'>A complex name is required</span>}
                            </div>
                        </div>
                    </FormControl>
                )}
                
                {/* RESIDENCE TYPE */}
                <FormControl>
                    <div id='residenceType__div'>
                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Residence type</FormLabel>
                        <div id='residenceTypeError__div'>
                            <Select
                                {...register('residence_type', { required: true })}
                                defaultValue={data.residence_type}
                                style={textFieldStyle}
                            >
                            {residenceTypes__array.map((item, index) => (
                                <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                            ))}
                            </Select>
                        </div>
                        <div id='residenceTypeError__container'>
                            {errors.residence_type && errors.residence_type.type === 'required' && <span className='red_COLOR error_FORM'>A residence type is madatory</span>}
                        </div>
                        
                    </div>
                </FormControl>
                
                {/* RESIDENCE TYPE */}
                <FormControl>
                    <div id='vheType__div'>
                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Living place type</FormLabel>
                        <div id='vheTypeError__div'>
                            <Select
                                {...register('vhe_type', { required: true })}
                                defaultValue={data.vhe_type}
                                style={textFieldStyle}
                            >
                            {livingPlaceTypes__array.map((item, index) => (
                                <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                            ))}
                            </Select>
                        </div>
                        <div id='vheTypeError__container'>
                            {errors.vhe_type && errors.vhe_type.type === 'required' && <span className='red_COLOR error_FORM'>A living place type is madatory</span>}
                        </div>
                        
                    </div>
                </FormControl>

                {/* NEXT */}
                <div id='someQuestionsNext__div'>
                    <Info style={{ color: '#eeeeee' }}/>
                    <Button
                        type='submit'
                        variant='contained'
                        style={{
                            backgroundColor: '#5398D4',
                            borderRadius: 50,
                            fontFamily: 'DMSansMedium',
                            boxShadow: 'unset',
                            marginLeft: '10px'
                        }}
                    >
                        Next
                    </Button>
                </div>
            </form>
        </>
    )
}

const existingComplexes__array = [
    {
        value: 'complex_1',
        label: 'Complex 1'
    },
    {
        value: 'complex_2',
        label: 'Complex 2'
    },
    {
        value: 'complex_3',
        label: 'Complex 3'
    },
    {
        value: 'complex_4',
        label: 'Complex 4'
    }
]

const residenceTypes__array = [
    {
        value: '1',
        label: 'Apartment'
    },
    {
        value: '2',
        label: 'House'
    },
    {
        value: '3',
        label: 'Mobil home'
    },
    {
        value: '4',
        label: 'Studio'
    }
]

const livingPlaceTypes__array = [
    {
        value: '1',
        label: 'Bed'
    },
    {
        value: '2',
        label: 'Room'
    },
    {
        value: '3',
        label: 'Residence'
    }
]

const textFieldStyle = {
    width: '300px',
    height: '40px',
    borderRadius: '5px',
    background: '#eee',
    paddingLeft: '15px',
    paddingTop: '5px'
}

export default LivingPlaceRegistrationSomeQuestions
