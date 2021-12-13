import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { Formik, Field, Form } from 'formik'

import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'


const SomeQuestions = (props) => {

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

    if(!allData) return null

    return (
        <>
            <Formik
                initialValues={{
                    part_of_complex: '',
                    is_existing_complex: '',
                    introduction: {
                        existing_complex_name: '',
                        residence_type: '',
                        vhe_type: ''
                    }
                }}
                onSubmit={( data ) => {
                    console.log(data)
                    props.next(data)
                }}
            >
            {({
                values,
                handleChange,
                handleBlur
            }) => (
                <Form>
                    {/* <div>Part of a complex</div>
                    <div>
                        <label>
                            <Field type='radio' name='part_of_complex' value='true' />
                            Yes
                        </label>
                        <label>
                            <Field type='radio' name='part_of_complex' value='false' />
                            No
                        </label>
                    </div> */}

                    <p>Is the residence part of a complex?</p>
                    <p>
                        <input type='radio' name='part_of_complex' value='true' />
                        <label htmlFor='part_of_complex'>Yes</label>
                        <input type='radio' name='part_of_complex' value='false' />
                        <label htmlFor='part_of_complex'>No</label>
                    </p>

                    {values.part_of_complex && (
                        <>
                            <div>Existing complex</div>
                            <div>
                                <label>
                                    <Field type='radio' name='is_existing_complex' value='true' />
                                    Yes
                                </label>
                                <label>
                                    <Field type='radio' name='is_existing_complex' value='false' />
                                    No
                                </label>
                            </div>
                        </>
                    )}

                    {values.part_of_complex && values.is_existing_complex && (
                        <>
                            <label htmlFor='introduction.existing_complex_name' style={{ display: 'block' }}>
                                Complex name
                            </label>
                            <select
                                name='introduction.existing_complex_name'
                                value={values.introduction.existing_complex_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{ display: 'block' }}
                            >
                                <option value='' label='Select a complex' />
                                {allData.map((item, index) => (
                                    <option key={index} value={item.id} label={item.complex_name} />
                                ))}
                            </select>
                        </>
                    )}

                    <label htmlFor='introduction.residence_type' style={{ display: 'block' }}>
                        Complex name
                    </label>
                    <select
                        name='introduction.residence_type'
                        value={values.introduction.residence_type}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ display: 'block' }}
                    >
                        <option value='' label='Select a residence type' />
                        {residenceTypes__array.map((item, index) => (
                            <option key={index} value={item.value} label={item.label} />
                        ))}
                    </select>

                    <label htmlFor='introduction.vhe_type' style={{ display: 'block' }}>
                        Complex name
                    </label>
                    <select
                        name='introduction.vhe_type'
                        value={values.introduction.vhe_type}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{ display: 'block' }}
                    >
                        <option value='' label='Select a living place type' />
                        {livingPlaceTypes__array.map((item, index) => (
                            <option key={index} value={item.value} label={item.label} />
                        ))}
                    </select>

                    <button type='submit'>Submit</button>
                </Form>
            )}
            </Formik>
        </>
    )
}

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

export default SomeQuestions
