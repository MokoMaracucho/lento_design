import React, { useContext } from 'react'

import axios from 'axios'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useNavigate } from 'react-router-dom'

import { TextField, Button, Select, MenuItem, FormGroup } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { Info } from '@material-ui/icons'

import { LivingPlaceRegistrationTimeline } from '../Components/Registration/index'

import { GlobalVariablesContext } from '../Context/GlobalVariablesContext'
import { useData } from '../Context/DataContext'
import LivingPlaceRegistrationTimelineState from '../Context/LivingPlaceRegistrationTimelineState'

import '../Styles/Pages/LivingPlaceRegistrationComplexInformations.scss'

const LivingPlaceRegistrationComplexInformations = () => {

    const { REACT_APP_URL } = useContext(GlobalVariablesContext)

    LivingPlaceRegistrationTimelineState.maxStep = 2

    const { setValues, data } = useData()

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            complex_name: data.complex_name,
            house_number: data.complex_house_number,
            city: data.city,
            postal_code: data.postal_code,
            phone_number: data.phone_number,
            email: data.email,
            street: data.street,
            house_number_extension: data.house_number_extension,
            country: data.country,
            phone_number_landcode: data.phone_number_landcode,
            opening_hours: data.opening_hours,
            complex_facility_types: {
                complex_kitchen: data.kitchen,
                complex_bathroom: data.bathroom,
                complex_supermarket: data.supermarket,
                complex_fitness: data.fitness,
                complex_common_room: data.common_room,
                complex_reception_office: data.reception_office,
                complex_laundry: data.laundry,
                complex_relax: data.relax
            }
        }
    })

    const navigate = useNavigate()

    const onSubmit = (data) => {
        navigate('/living_place_registration/residence_informations')
        LivingPlaceRegistrationTimelineState.step = 3
        setValues(data)
        console.log(data)
    }

    const previewStep = (data) => {
        navigate('/living_place_registration/some_questions')
        LivingPlaceRegistrationTimelineState.step = 1
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='timelineFrom__container'
            >
                <LivingPlaceRegistrationTimeline />
                <h5>Complex informations</h5>
            
                <div id='complexInformationsPanels__div'>

                    <div id='complexInformationsLeftPanel__div'>

                        {/* COMPLEX NAME */}
                        <div id='complexNameError__container'>
                            <FormControl>
                                <div id='complexName__div'>
                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Complex name</FormLabel>
                                    <TextField
                                        {...register('complex_name', { required: true })}
                                        defaultValue={data.complex_name}
                                        placeholder='Complex name'
                                        style={textFieldStyle}
                                        InputProps={{ 
                                            disableUnderline: true
                                        }}
                                    />
                                </div>
                            </FormControl>
                            <div id='complexNameError__div'>
                                {errors.complex_name && errors.complex_name.type === "required" && <span className='red_COLOR error_FORM'>A complex name is mandatory</span>}
                            </div>
                        </div>

                        {/* HOUSE NUMBER */}
                        <div id='houseNumberError__container'>
                            <FormControl>
                                <div id='houseNumber__div'>
                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>House number</FormLabel>
                                    <TextField
                                        {...register('house_number', { required: true })}
                                        defaultValue={data.house_number}
                                        placeholder='House number'
                                        style={textFieldStyle}
                                        InputProps={{ 
                                            disableUnderline: true
                                        }}
                                    />
                                </div>
                            </FormControl>
                            <div id='houseNumberError__div'>
                                {errors.house_number && errors.house_number.type === "required" && <span className='red_COLOR error_FORM'>A house number is mandatory</span>}
                            </div>
                        </div>
                        
                        <div id='cityPostalCode__div'>

                            {/* CITY */}
                            <div id='cityError__container'>
                                <FormControl>
                                <div id='city__div'>
                                    <FormLabel component='legend' style={{ color: 'black'}}>City</FormLabel>
                                    <TextField
                                        {...register('city', { required: true })}
                                        placeholder='City'
                                        defaultValue={data.city}
                                        style={textFieldCityStyle}
                                        InputProps={{ 
                                            disableUnderline: true
                                        }}
                                    />
                                </div>
                                </FormControl>
                                <div id='cityError__div'>
                                    {errors.city && errors.city.type === "required" && <span className='red_COLOR error_FORM'>A city is mandatory</span>}
                                </div>
                            </div>

                            {/* POSTAL CODE */}
                            <div id='postalCodeError__container'>
                                <FormControl>
                                    <div id='postalCode__div'>
                                        <FormLabel component='legend' style={{ color: 'black', paddingLeft: '13px' }}>Postal code</FormLabel>
                                        <TextField
                                            {...register('postal_code', { required: true })}
                                            defaultValue={data.postal_code}
                                            style={textFieldPostalCodeStyle}
                                            InputProps={{ 
                                                disableUnderline: true
                                            }}
                                        />
                                    </div>
                                </FormControl>
                                <div id='postalCodeError__div'>
                                    {errors.postal_code && errors.postal_code.type === "required" && <span className='red_COLOR error_FORM'>Mandatory</span>}
                                </div>
                            </div>
                        </div>

                        {/* PHONE MUMBER */}
                        <div id='phoneNumberError__container'>
                            <FormControl>
                                <div id='phoneNumber__div'>
                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Phone number</FormLabel>
                                    <TextField
                                        {...register('phone_number', { required: true })}
                                        placeholder='Phone number'
                                        defaultValue={data.phone_number}
                                        style={textFieldStyle}
                                        InputProps={{ 
                                            disableUnderline: true
                                        }}
                                    />
                                </div>
                            </FormControl>
                            <div id='phoneNumberError__div'>
                                {errors.phone_number && errors.phone_number.type === "required" && <span className='red_COLOR error_FORM'>A phone number is mandatory</span>}
                            </div>
                        </div>

                        {/* EMAIL */}
                        <div id='emailError__container'>
                            <FormControl>
                                <div id='email__div'>
                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Email</FormLabel>
                                    <TextField
                                        {...register('email', { required: true })}
                                        placeholder='Email'
                                        defaultValue={data.email}
                                        style={textFieldStyle}
                                        InputProps={{ 
                                            disableUnderline: true
                                        }}
                                    />
                                </div>
                            </FormControl>
                            <div id='emailError__div'>
                                {errors.email && errors.email.type === "required" && <span className='red_COLOR error_FORM'>An email is mandatory</span>}
                            </div>
                        </div>
                    </div>

                
                    <div id='complexInformationsRightPanel__div'>

                        {/* STREET */}
                        <div id='streetError__container'>
                            <FormControl>
                                <div id='street__div'>
                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Street</FormLabel>
                                    <TextField
                                        {...register('street', { required: true })}
                                        placeholder='Street'
                                        defaultValue={data.street}
                                        style={textFieldStyle}
                                        InputProps={{ 
                                            disableUnderline: true
                                        }}
                                    />
                                </div>
                            </FormControl>
                            <div id='streetError__div'>
                                {errors.street && errors.street.type === "required" && <span className='red_COLOR error_FORM'>A street is mandatory</span>}
                            </div>
                        </div>
                            

                        {/* HOUSE NUMBER EXTENSION */}
                        <div id='houseNumberExtensionError__container'>
                            <FormControl>
                                <div id='houseNumberExtension__div'>
                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>House number extension</FormLabel>
                                    <TextField
                                        {...register('house_number_extension')}
                                        placeholder='House number extension'
                                        defaultValue={data.complex_house_number_extension}
                                        style={textFieldStyle}
                                        InputProps={{ 
                                            disableUnderline: true
                                        }}
                                    />
                                </div>
                            </FormControl>
                            <div id='houseNumberExtensionError__div'>
                                <span></span>
                            </div>
                        </div>

                        {/* COUNTRY */}
                        <div id='countryError__container'>
                            <FormControl>
                                <div id='country__div'>
                                <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Country</FormLabel>
                                    <Select
                                        {...register('country', { required: true })}
                                        placeholder='Country'
                                        defaultValue={data.country}
                                        id='country'
                                        style={textFieldStyle}
                                    >
                                    {country__array.map((item, index) => (
                                        <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </FormControl>
                            <div id='countryError__div'>
                                {errors.country && errors.country.type === "required" && <span className='red_COLOR error_FORM'>A country is mandatory</span>}
                            </div>
                        </div>

                        {/* PHONE NUMBER LANDCODE */}
                        <div id='phoneNumberLandcodeError__container'>
                            <FormControl>
                                <div id='phoneNumberLandcode__div'>
                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Phone number landcode</FormLabel>
                                    <div id='residenceTypeError__div'>
                                        <Select
                                            {...register('phone_number_landcode', { required: true })}
                                            defaultValue={data.phone_number_landcode}
                                            style={textFieldStyle}
                                        >
                                        {phoneNumberLandcode__array.map((item, index) => (
                                            <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                        ))}
                                        </Select>
                                    </div>
                                </div>
                            </FormControl>
                            <div id='phoneNumberLandcodeError__div'>
                                {errors.phone_number_landcode && errors.phone_number_landcode.type === "required" && <span className='red_COLOR error_FORM'>A phone number landcode is mandatory</span>}
                            </div>
                        </div>
                            

                        {/* OPENING HOURS */}
                        <div id='openingHoursError__container'>
                            <FormControl>
                                <div id='openingHours__div'>
                                    <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Opening hours</FormLabel>
                                    <TextField
                                        {...register('opening_hours', { required: true })}
                                        placeholder='Opening hours'
                                        defaultValue={data.opening_hours}
                                        style={textFieldStyle}
                                        InputProps={{ 
                                            disableUnderline: true
                                        }}
                                    />
                                </div>
                            </FormControl>
                            <div id='openingHoursError__div'>
                                {errors.opening_hours && errors.opening_hours.type === "required" && <span className='red_COLOR error_FORM'>Opening hours is mandatory</span>}
                            </div>
                        </div>
                    </div>
                </div>

                {/* COMPLEX FACILITY TYPES */}
                <div id='complexFacilities__div'>
                    <FormGroup>
                        <FormLabel component='legend' style={{ color: 'black', marginBottom: '10px'}}>Facility types</FormLabel>
                        <div id='complexFacilitiesTypes__div'>
                            <FormGroup>
                                {facilityTypes__array.map((item, index) => (
                                    <FormControlLabel key={index} {...register('complex_facility.' + item.value)} control={<Checkbox />}label={item.label} />
                                ))}
                            </FormGroup>
                        </div>
                    </FormGroup>    
                </div>

                <div id='complexInformationsButtons__div'>
                    {/* PREVIEW */}
                    <Button
                        type='submit'
                        variant='contained'
                        style={{
                            backgroundColor: '#5398D4',
                            borderRadius: 50,
                            fontFamily: 'DMSansMedium',
                            boxShadow: 'unset'
                        }}
                        onClick={previewStep}
                    >
                        Preview
                    </Button>

                    {/* NEXT */}
                    <div id='complexInformationsNextButton__div'>
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
                </div>
            </form>
        </>
    )
}

const textFieldStyle = {
    width: '300px',
    height: '40px',
    borderRadius: '5px',
    background: '#eee',
    paddingLeft: '15px',
    paddingTop: '5px',
    color: '#909090'
}

const textFieldCityStyle = {
    width: '195px',
    height: '40px',
    borderRadius: '5px',
    background: '#eee',
    marginRight: '5px',
    paddingLeft: '15px',
    paddingTop: '5px'
}

const textFieldPostalCodeStyle = {
    width: '95px',
    height: '40px',
    borderRadius: '5px',
    background: '#eee',
    marginLeft: '5px',
    paddingLeft: '15px',
    paddingTop: '5px'
}

const timeFieldStyle = {
    width: '140px',
    height: '40px',
    borderRadius: '5px',
    background: '#eee',
    paddingLeft: '15px',
    paddingTop: '5px'
}

const country__array = [
    {
        value: 'BE',
        label: 'Belgium'
    },
    {
        value: 'BG',
        label: 'Bulgaria'
    },
    {
        value: 'CZ',
        label: 'Czech Republic'
    },
    {
        value: 'DK',
        label: 'Denmark'
    },
    {
        value: 'DE',
        label: 'Germany'
    },
    {
        value: 'EE',
        label: 'Estonia'
    },
    {
        value: 'IE',
        label: 'Ireland'
    },
    {
        value: 'EL',
        label: 'Greece'
    },
    {
        value: 'ES',
        label: 'Spain'
    },
    {
        value: 'FR',
        label: 'France'
    },
    {
        value: 'HR',
        label: 'Croatia'
    },
    {
        value: 'IT',
        label: 'Italy'
    },
    {
        value: 'CY',
        label: 'Cyprus'
    },
    {
        value: 'LV',
        label: 'Latvia'
    },
    {
        value: 'LT',
        label: 'Lithuania'
    },
    {
        value: 'LU',
        label: 'Luxembourg'
    },
    {
        value: 'HU',
        label: 'Hungary'
    },
    {
        value: 'MT',
        label: 'Malta'
    },
    {
        value: 'NL',
        label: 'The Nederlands'
    },
    {
        value: 'AT',
        label: 'Austria'
    },
    {
        value: 'PL',
        label: 'Poland'
    },
    {
        value: 'PT',
        label: 'Portugal'
    },
    {
        value: 'RO',
        label: 'Romania'
    },
    {
        value: 'Si',
        label: 'Slovania'
    },
    {
        value: 'SK',
        label: 'Slovakia'
    },
    {
        value: 'FI',
        label: 'Finland'
    },
    {
        value: 'SE',
        label: 'Sweden'
    },
    {
        value: 'UK',
        label: 'United Kingdom'
    },
    {
        value: 'ME',
        label: 'Montenegro'
    },
    {
        value: 'IS',
        label: 'Iceland'
    },
    {
        value: 'MK',
        label: 'Macedonia'
    },
    {
        value: 'AL',
        label: 'Albania'
    },
    {
        value: 'RS',
        label: 'Serbia'
    },
    {
        value: 'TR',
        label: 'Turkey'
    },
    {
        value: 'MD',
        label: 'Moldavia'
    },
    {
        value: 'AM',
        label: 'Armenia'
    },
    {
        value: 'BY',
        label: 'Belarus'
    },
    {
        value: 'AD',
        label: 'Andorra'
    },
    {
        value: 'MC',
        label: 'Monaco'
    },
    {
        value: 'SM',
        label: 'San Marino'
    },
    {
        value: 'VA',
        label: 'Vatican City'
    },
    {
        value: 'UA',
        label: 'Ukraine'
    },
    {
        value: 'XK',
        label: 'Kosovo'
    },
    {
        value: 'BA',
        label: 'Bosnia and Herzegovina'
    },
    {
        value: 'CH',
        label: 'Switzerland'
    },
    {
        value: 'LI',
        label: 'Liechtenstein'
    },
    {
        value: 'NO',
        label: 'Norway'
    }
]

const phoneNumberLandcode__array = [
    {
        value: 'BE',
        label: 'Belgium, +32'
    },
    {
        value: 'BG',
        label: 'Bulgaria, +359'
    },
    {
        value: 'CZ',
        label: 'Czech Republic, +420'
    },
    {
        value: 'DK',
        label: 'Denmark, +45'
    },
    {
        value: 'DE',
        label: 'Germany, +49'
    },
    {
        value: 'EE',
        label: 'Estonia, +372'
    },
    {
        value: 'IE',
        label: 'Ireland, +353'
    },
    {
        value: 'EL',
        label: 'Greece, +30'
    },
    {
        value: 'ES',
        label: 'Spain, +34'
    },
    {
        value: 'FR',
        label: 'France, +33'
    },
    {
        value: 'HR',
        label: 'Croatia, +385'
    },
    {
        value: 'IT',
        label: 'Italy, +39'
    },
    {
        value: 'CY',
        label: 'Cyprus, +357'
    },
    {
        value: 'LV',
        label: 'Latvia, +371'
    },
    {
        value: 'LT',
        label: 'Lithuania, +370'
    },
    {
        value: 'LU',
        label: 'Luxembourg, +352'
    },
    {
        value: 'HU',
        label: 'Hungary, +36'
    },
    {
        value: 'MT',
        label: 'Malta, +356'
    },
    {
        value: 'NL',
        label: 'The Nederlands, +31'
    },
    {
        value: 'AT',
        label: 'Austria, +43'
    },
    {
        value: 'PL',
        label: 'Poland, +48'
    },
    {
        value: 'PT',
        label: 'Portugal, +351'
    },
    {
        value: 'RO',
        label: 'Romania, +40'
    },
    {
        value: 'Si',
        label: 'Slovania, +386'
    },
    {
        value: 'SK',
        label: 'Slovakia, +421'
    },
    {
        value: 'FI',
        label: 'Finland, +358'
    },
    {
        value: 'SE',
        label: 'Sweden, +46'
    },
    {
        value: 'UK',
        label: 'United Kingdom, +44'
    },
    {
        value: 'ME',
        label: 'Montenegro, +382'
    },
    {
        value: 'IS',
        label: 'Iceland, +354'
    },
    {
        value: 'MK',
        label: 'Macedonia, +389'
    },
    {
        value: 'AL',
        label: 'Albania, +355'
    },
    {
        value: 'RS',
        label: 'Serbia, +381'
    },
    {
        value: 'TR',
        label: 'Turkey, +90'
    },
    {
        value: 'MD',
        label: 'Moldavia, +373'
    },
    {
        value: 'AM',
        label: 'Armenia, +374'
    },
    {
        value: 'BY',
        label: 'Belarus, +375'
    },
    {
        value: 'AD',
        label: 'Andorra, +376'
    },
    {
        value: 'MC',
        label: 'Monaco, +377'
    },
    {
        value: 'SM',
        label: 'San Marino, +378'
    },
    {
        value: 'VA',
        label: 'Vatican City, +379'
    },
    {
        value: 'UA',
        label: 'Ukraine, +380'
    },
    {
        value: 'XK',
        label: 'Kosovo, +383'
    },
    {
        value: 'BA',
        label: 'Bosnia and Herzegovina, +387'
    },
    {
        value: 'CH',
        label: 'Switzerland, +41'
    },
    {
        value: 'LI',
        label: 'Liechtenstein, +423'
    },
    {
        value: 'NO',
        label: 'Norway, +47'
    }
]

const facilityTypes__array = [
    {
        value: 'complex_kitchen',
        label: 'Kitchen'
    },
    {
        value: 'complex_bathroom',
        label: 'Bathroom'
    },
    {
        value: 'complex_supermarket',
        label: 'Supermarket'
    },
    {
        value: 'complex_fitness',
        label: 'Fitness'
    },
    {
        value: 'complex_common_room',
        label: 'Common room'
    },
    {
        value: 'complex_reception_office',
        label: 'Reception / Office'
    },
    {
        value: 'complex_laundry',
        label: 'Laundry'
    },
    {
        value: 'complex_relax',
        label: 'Relax'
    }
]

export default LivingPlaceRegistrationComplexInformations
