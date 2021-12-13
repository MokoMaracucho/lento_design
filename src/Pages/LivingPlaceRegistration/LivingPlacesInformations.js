import React, { useState, useEffect } from 'react'

import { Formik, Form, Field, FieldArray, getIn } from 'formik'
import * as Yup from 'yup'

import { useNavigate } from 'react-router-dom'

import PropTypes from 'prop-types'
import { Button, Box, Tabs, Tab, Typography, FormLabel, TextField, FormControl, Select, MenuItem, FormControlLabel, FormGroup, Checkbox } from '@mui/material'

import { useData } from '../../Context/LivingPlaceRegistrationContext'

import { LivingPlaceRegistrationTimeline } from '../../Components/Registration/index'
import LivingPlaceRegistrationTimelineState from '../../Context/LivingPlaceRegistrationTimelineState'

import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'
import serviceCostTerm from '../../Json/ServiceCostTerm'
import livingPlaceFacilities from '../../Json/LivingPlaceFacilities'

import maximumStayDuration from '../../Json/MaximumStayDuration'
import statusAtPointOfRegestering from '../../Json/StatusAtPointOfRegestering'

let initialValues = {
    rooms: ''
}

let livingPlacesArray = []

const livingPlace = {
    max_stay_duration: '',
    rental_price_term: '',
    description: '',
    status_at_point_of_registering: '',
    changeover_time: '',
    deposit: '',
    service_cost_term: '',
    b2b_rental_price: '',
    b2c_rental_price: '',
    vhe_facility_types: {
        welcome_pack: '',
        bed_sheets: '',
        towels: '',
        bike: '',
        weekly_cleaning: '',
        final_cleaning: '',
        kitchen_supplies: '',
        wifi: '',
        wifi_television: ''
    }
}

const validationSchema = Yup.object().shape({
    rooms: Yup.array().of(
        Yup.object().shape({
            vhes: Yup.array().of(
                Yup.object().shape({
                    max_stay_duration: Yup.string().required('Test'),
                    rental_price_term: Yup.string().required('Test'),
                    description: Yup.string().required('Test'),
                    status_at_point_of_registering: Yup.string().required('Test'),
                    changeover_time: Yup.number().required('Test'),
                    deposit: Yup.number().required('Test'),
                    service_cost_term: Yup.number().required('Test'),
                    b2b_rental_price: Yup.number().required('Test'),
                    b2c_rental_price: Yup.number().required('Test'),
                })).required('Test')
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

function TabPanel(props) {
    
    const { children, value, index, ...other } = props

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const LivingPlacesInformations = () => {
    
    const [value, setValue] = useState(0)

    const handleChangeTab = (event, newValue) => {
        setValue(newValue, true)
    }

    LivingPlaceRegistrationTimelineState.maxStep = 6

    const { setValues, data } = useData()

    const navigate = useNavigate()

    const previewStep = (data) => {
        LivingPlaceRegistrationTimelineState.step = 5
        navigate('/living_place_registration/rooms_informations')
    }

    const [livingPlacesArraysCreated, setLivingPlacesArraysCreated] = useState(false)
    
    let rooms = data.rooms

    const numberOfRooms = parseInt(data.residence.number_rooms_with_vhes)

    useEffect(() => {
        let numberOfLivingPlacesArray = []
        const setVhesArrays = () => {
            for(let i = 0; i < numberOfRooms; i++) {
                numberOfLivingPlacesArray.push(parseInt(data.rooms[i].number_of_living_places))
            }
            for(let i = 0; i < numberOfRooms; i++) {
                livingPlacesArray = []
                for(let j = 0; j < numberOfLivingPlacesArray[i]; j++ ){
                    livingPlacesArray.push(livingPlace)
                }
                rooms[i].vhes = livingPlacesArray
            }
        }
        setVhesArrays()
        setLivingPlacesArraysCreated(true)
    }, [numberOfRooms, data.rooms, rooms])

    if(!livingPlacesArraysCreated) return null

    initialValues.rooms = rooms

    return (
        <>
            <LivingPlaceRegistrationTimeline />

            <h5>Living places informations</h5>

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
                    LivingPlaceRegistrationTimelineState.step = 7
                    navigate('/living_place_registration/informations_sent')
                    console.log(data)
                }}
            >
                {({ values, handleChange, setFieldValue }) => (
                    <Form>
                        <FieldArray name='rooms'>
                            {() => (
                                <div>
                                    <Box sx={{ width: '100%' }}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Tabs value={value} onChange={handleChangeTab} aria-label='basic tabs example' centered>
                                                {Array.from(Array(numberOfRooms), (e, index) => {
                                                    return (
                                                        <Tab label={`Room ${index + 1}`} {...a11yProps(index)} />
                                                    )
                                                })}
                                            </Tabs>
                                        </Box>
                                        {values.rooms.length > 0 && values.rooms.map((room, roomIndex) => (
                                            <TabPanel value={value} index={roomIndex}>
                                                <FieldArray name={`rooms.${roomIndex}.vhes`}>
                                                    {() => (
                                                        <Carousel style={{ backgroundColor: 'red' }} interval={20} wrap={false}>
                                                            {values.rooms[roomIndex].vhes.map((vhe, indexVhe) => (
                                                                <Carousel.Item>

                                                                    {/* MAXIMUM STAY DURATION */}
                                                                    <div>
                                                                        <FormControl style={{ marginLeft: '150px',  marginTop: '150px',  marginBottom: '150px' }}>
                                                                            <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Maximum stay duration</FormLabel>
                                                                            <Select
                                                                                name={`rooms.${roomIndex}.vhes.${indexVhe}.max_stay_duration`}
                                                                                value={room.vhes[indexVhe].max_stay_duration}
                                                                                onChange={handleChange}
                                                                            >
                                                                                <MenuItem value=''>Choose a maximum stay duration</MenuItem>
                                                                                {maximumStayDuration.map((item, index) => (
                                                                                    <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                                                                ))}
                                                                            </Select>
                                                                        </FormControl>
                                                                        <ErrorMessage name={`rooms.${roomIndex}.vhes.${indexVhe}.max_stay_duration`} />
                                                                    </div>

                                                                    {/* RENTAL PRICE TERM */}
                                                                    <div>
                                                                        <FormControl>
                                                                            <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Service cost term</FormLabel>
                                                                            <Select
                                                                                name={`rooms.${roomIndex}.vhes.${indexVhe}.rental_price_term`}
                                                                                value={room.vhes[indexVhe].rental_price_term}
                                                                                onChange={handleChange}
                                                                            >
                                                                                <MenuItem value=''>Choose service cost term</MenuItem>
                                                                                {serviceCostTerm.map((item, index) => (
                                                                                    <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                                                                ))}
                                                                            </Select>
                                                                        </FormControl>
                                                                        <ErrorMessage name={`rooms.${roomIndex}.vhes.${indexVhe}.rental_price_term`} />
                                                                    </div>

                                                                    {/* DESCRIPTION */}
                                                                    <div>
                                                                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Description</FormLabel>
                                                                        <TextField
                                                                            name={`rooms.${roomIndex}.vhes.${indexVhe}.description`}
                                                                            value={room.vhes[indexVhe].description}
                                                                            onChange={handleChange}
                                                                        />
                                                                        <ErrorMessage name={`rooms.${roomIndex}.vhes.${indexVhe}.description`} />
                                                                    </div>

                                                                    {/* CHANGEOVER TIME */}
                                                                    <div>
                                                                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Changeover time</FormLabel>
                                                                        <TextField
                                                                            name={`rooms.${roomIndex}.vhes.${indexVhe}.changeover_time`}
                                                                            value={room.vhes[indexVhe].changeover_time}
                                                                            onChange={handleChange}
                                                                        />
                                                                        <ErrorMessage name={`rooms.${roomIndex}.vhes.${indexVhe}.changeover_time`} />
                                                                    </div>

                                                                    {/* STATUS AT POINT OF REGESTERING */}
                                                                    <div>
                                                                        <FormControl>
                                                                            <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Status at point of registering</FormLabel>
                                                                            <Select
                                                                                name={`rooms.${roomIndex}.vhes.${indexVhe}.status_at_point_of_registering`}
                                                                                value={room.vhes[indexVhe].status_at_point_of_registering}
                                                                                onChange={handleChange}
                                                                            >
                                                                                <MenuItem value=''>Choose a status</MenuItem>
                                                                                {statusAtPointOfRegestering.map((item, index) => (
                                                                                    <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                                                                ))}
                                                                            </Select>
                                                                        </FormControl>
                                                                        <ErrorMessage name={`rooms.${roomIndex}.vhes.${indexVhe}.status_at_point_of_registering`} />
                                                                    </div>

                                                                    {/* DEPOSIT */}
                                                                    <div>
                                                                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Deposit</FormLabel>
                                                                        <TextField
                                                                            name={`rooms.${roomIndex}.vhes.${indexVhe}.deposit`}
                                                                            value={room.vhes[indexVhe].deposit}
                                                                            onChange={handleChange}
                                                                        />
                                                                        <ErrorMessage name={`rooms.${roomIndex}.vhes.${indexVhe}.deposit`} />
                                                                    </div>

                                                                    {/* SERVICE COST TERM */}
                                                                    <div>
                                                                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Service cost</FormLabel>
                                                                        <TextField
                                                                            name={`rooms.${roomIndex}.vhes.${indexVhe}.service_cost_term`}
                                                                            value={room.vhes[indexVhe].service_cost_term}
                                                                            onChange={handleChange}
                                                                        />
                                                                        <ErrorMessage name={`rooms.${roomIndex}.vhes.${indexVhe}.service_cost_term`} />
                                                                    </div>

                                                                    {/* B2B RENTAL PRICE */}
                                                                    <div>
                                                                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>B2B rental price</FormLabel>
                                                                        <TextField
                                                                            name={`rooms.${roomIndex}.vhes.${indexVhe}.b2b_rental_price`}
                                                                            value={room.vhes[indexVhe].b2b_rental_price}
                                                                            onChange={handleChange}
                                                                        />
                                                                        <ErrorMessage name={`rooms.${roomIndex}.vhes.${indexVhe}.b2b_rental_price`} />
                                                                    </div>

                                                                    {/* B2C RENTAL PRICE */}
                                                                    <div>
                                                                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>B2C rental price</FormLabel>
                                                                        <TextField
                                                                            name={`rooms.${roomIndex}.vhes.${indexVhe}.b2c_rental_price`}
                                                                            value={room.vhes[indexVhe].b2c_rental_price}
                                                                            onChange={handleChange}
                                                                        />
                                                                        <ErrorMessage name={`rooms.${roomIndex}.vhes.${indexVhe}.b2c_rental_price`} />
                                                                    </div>

                                                                    {/* FACILITY TYPES */}
                                                                    <div>
                                                                        <FormGroup>
                                                                            <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Facility types</FormLabel>
                                                                            <FormGroup>
                                                                                {livingPlaceFacilities.map((item, index) => (
                                                                                    <FormControlLabel key={index}
                                                                                        control={
                                                                                            <Checkbox
                                                                                            onChange={(e) => {
                                                                                                    setFieldValue(`rooms.${roomIndex}.vhes.${indexVhe}.vhe_facility_types.${item.value}`, e.target.checked)
                                                                                                }}
                                                                                                name={`rooms.${roomIndex}.vhes.${indexVhe}.vhe_facility_types.${item.value}`}
                                                                                            />}
                                                                                        label={item.label}
                                                                                    />
                                                                                ))}
                                                                            </FormGroup>
                                                                        </FormGroup>
                                                                    </div>
                                                                </Carousel.Item>
                                                            ))}
                                                        </Carousel>
                                                    )}
                                                </FieldArray>
                                            </TabPanel>
                                        ))}
                                    </Box>
                                </div>
                            )}
                        </FieldArray>

                        {/* PREVIEW */}
                        <Button type='submit' variant='contained' onClick={previewStep}>
                            Previous
                        </Button>

                        {/* NEXT */}
                        <Button type='submit' color='primary' variant='contained'>
                            Next
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default LivingPlacesInformations