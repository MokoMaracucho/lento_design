import React, { useContext } from 'react'

import axios from 'axios'

import { Formik, Field, Form } from 'formik'

import { GlobalVariablesContext } from '../Context/GlobalVariablesContext'

const ResidenceInformations = (props) => {

    const { REACT_APP_URL } = useContext(GlobalVariablesContext)
    
    return (
        <>
            <Formik
                initialValues={{
                    residence_informations: {
                        house_number: '',
                        house_number_extension: '',
                        floor: '',
                        rental_permit: '',
                        always_visible_in_platform: '',
                        snf_certificate: '',
                        akf_certificate: '',
                        number_of_rooms_with_living_place: '',
                        facility_types: {
                            residence_kitchen: '',
                            residence_bathroom: '',
                            residence_common_room: ''
                        }
                    }
                }}
                onSubmit={( data ) => {
                    console.log(data)
                    const res = axios.post(REACT_APP_URL + 'vhe/registerintroduction/', data)
                    res.then(res => { console.log('res', res) }).catch( error => { console.log(error) })
                    props.next(data)
                }}
            >
            {({
                values,
                handleChange,
                handleBlur
            }) => (
                <Form>

                    <button type='submit'>Submit</button>
                </Form>
            )}
            </Formik>
        </>
    )
}

export default ResidenceInformations
