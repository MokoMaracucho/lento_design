import React, { createContext, useState, useContext } from 'react'

const initialValues = {
    introduction: {
        part_of_complex: '',
        is_existing_complex: '',
        existing_complex_name: '',
        residence_type: '',
        vhe_type: ''
    },
    complex: {
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
        complex_facility_types: {
            kitchen: '',
            bathroom: '',
            supermarket: '',
            fitness: '',
            common_room: '',
            reception_office: '',
            laundry: '',
            relax: ''
        }
    },
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
    },
    floorplan: [
            {
                floor: '',
                area: ''
            }
        ],
    rooms: []
}

const LivingPlaceRegistrationContext = createContext()

export const LivingPlaceRegistrationProvider = ({ children }) => {

    const [data, setData] = useState(initialValues)

    const setValues = (newDatas) => {
        setData((prevData) => ({
            ...prevData,
            ...newDatas
        }))
        setData((prevData) => ({
            ...prevData,
            ...newDatas
        }))
        console.log(data)
    }

    return (
        <LivingPlaceRegistrationContext.Provider value={{ data, setValues }}>
            { children }
        </LivingPlaceRegistrationContext.Provider>
    )
}

export const useData = () => useContext(LivingPlaceRegistrationContext)