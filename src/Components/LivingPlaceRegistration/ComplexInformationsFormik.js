import React, { useContext } from 'react'

import axios from 'axios'

import { Formik, Field, Form } from 'formik'

import { GlobalVariablesContext } from '../../Context/GlobalVariablesContext'

const ComplexInformations = (props) => {

    const { REACT_APP_URL } = useContext(GlobalVariablesContext)
    
    return (
        <>
            <Formik
                initialValues={{
                    complex_name: '',
                    house_number: '',
                    city: '',
                    postal_code: '',
                    phone_number: '',
                    email_address: '',
                    street: '',
                    house_number_extension: '',
                    country: '',
                    phone_number_landcode: '',
                    opening_hours: '',
                    complex_facility: []
                }}
                onSubmit={( data ) => {
                    console.log(data)
                    const res = axios.post(process.env.REACT_APP_URL + 'vhe/complex/', data)
                    res.then(res => { console.log('res', res) }).catch( error => { console.log(error) })
                    /* props.next(data) */
                }}
            >
            {({
                values,
                handleChange,
                handleBlur
            }) => (
                <Form>
                    <p>First name</p>
                    <Field name='complex_name'/>
                    
                    <p>House number</p>
                    <Field name='house_number'/>
                    
                    <p>City</p>
                    <Field name='city'/>
                    
                    <p>Postal code</p>
                    <Field name='postal_code'/>
                    
                    <p>Phone number</p>
                    <Field name='phone_number'/>
                    
                    <p>Email</p>
                    <Field name='email_address'/>
                    
                    <p>Street</p>
                    <Field name='street'/>
                    
                    <p>House number extension</p>
                    <Field name='house_number_extension'/>

                    <label htmlFor='country' style={{ display: 'block' }}>
                        Country
                    </label>
                    <select
                        name='country'
                        value={values.country}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ display: 'block' }}
                    >
                        <option value='' label='Select a country' />
                        {country__array.map((item, index) => (
                            <option key={index} value={item.value} label={item.label} />
                        ))}
                    </select>

                    <label htmlFor='phone_number_landcode' style={{ display: 'block' }}>
                        Phone number landcode
                    </label>
                    <select
                        name='phone_number_landcode'
                        value={values.phone_number_landcode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ display: 'block' }}
                    >
                        <option value='' label='Select a phone number landcode' />
                        {country__array.map((item, index) => (
                            <option key={index} value={item.value} label={item.label} />
                        ))}
                    </select>
                    
                    <p>Opening hours</p>
                    <Field name='opening_hours'/>

                    <div id='checkbox-group'>Facility types</div>
                    <div role='group' aria-labelledby='checkbox-group'>
                        {facilityTypes__array.map((item, index) => (
                            <label key={index }>
                            <Field type='checkbox' name='complex_facility' value={item.value} />
                                {item.label}
                            </label>
                        ))}
                    </div>

                    {/* <div>Facilities types</div>
                    <div>
                        {facilityTypes__array.map((item, index) => (
                            <label key={index}>
                                <Field type='checkbox' name={'complex_informations.facility_types.' + item.value} />
                                    {item.label}
                            </label>
                        ))}
                    </div> */}

                    <button type='submit'>Submit</button>
                </Form>
            )}
            </Formik>
        </>
    )
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

export default ComplexInformations
