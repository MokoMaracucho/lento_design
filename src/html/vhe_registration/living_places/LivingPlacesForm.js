import React, { useState } from 'react'

import TextAreaInput from '../../ui/forms/inputs/TextAreaInput'
import SelectInput from '../../ui/forms/inputs/SelectInput'
import CheckBoxInput from '../../ui/forms/inputs/CheckBoxInput'
import NumberInput from '../../ui/forms/inputs/NumberInput'
import PictureInput from '../../ui/forms/inputs/PictureInput'
import ValidButton from '../../ui/forms/buttons/ValidButton'

/* import './css/ResidenceForm.scss' */

const LivingPlacesForm = (props) => {

    const [stayDuration, setStayDuration] = useState('')
    const [rentalPriceTerm, setRentalPriceTerm] = useState('')
    const [SNFCertificate, setSNFCertificate] = useState('')
    const [AKFCertificate, setAKFCertificate] = useState('')
    const [deposit, setDeposit] = useState('')
    const [rentalPrice, setRentalPrice] = useState('')
    const [statusOfPointOfRegistering, setStatusOfPointOfRegistering] = useState('')
    const [facilitiesType, setFacilitiesType] = useState('')

    const stay_duration_type_ARRAY = [
        {
            value: 'short_stay',
            label: 'Short stay'
        },
        {
            value: 'long_stay',
            label: 'Long stay'
        }
    ]

    const rental_price_term_type_ARRAY = [
        {
            value: 'weekly',
            label: 'Weekly'
        },
        {
            value: 'every_two_weeks',
            label: 'Every 2 weeks'
        },
        {
            value: 'every_four_weeks',
            label: 'Every 4 weeks'
        },
        {
            value: 'monthly',
            label: 'Monthly'
        }
    ]

    const status_of_point_of_registering_ARRAY = [
        {
            value: 'in_process',
            label: 'In process'
        },
        {
            value: 'reserved',
            label: 'Reserved'
        },
        {
            value: 'inactive',
            label: 'Inactive'
        },
        {
            value: 'rented_out',
            label: 'rented out'
        },
        {
            value: 'available',
            label: 'Available'
        },
        {
            value: 'waiting_list',
            label: 'Waiting list'
        },
        {
            value: 'option_to_prolongate',
            label: 'option to prolongate'
        },
        {
            value: 'option_to_prolongate_at_fifty_percent',
            label: 'option to prolongate at 50%'
        },
        {
            value: 'rented_out_not_occupied',
            label: 'rented out / not occupied'
        }
    ]
    
    return (
        <>
            <form>
                <TextAreaInput
                />
                <SelectInput
                    text={'Stay duration type'}
                    name={'stay_duration_type'}
                    items={stay_duration_type_ARRAY}
                    onChange={(e) => setStayDuration(e.target.value)}
                />
                <SelectInput
                    text={'Rental price term'}
                    name={'rental_price_term'}
                    items={rental_price_term_type_ARRAY}
                    onChange={(e) => setRentalPriceTerm(e.target.value)}
                />
                <p className='p-medium'>SNF certificate?</p>
                <CheckBoxInput
                    name={'snf_certificate'}
                    label={'yes'}
                    /* checked={true} */
                    className={'checkboxInput_version001 p-medium'}
                    onChange={(e) => setSNFCertificate(e.target.value)}
                />
                {/* Upload field for document */}
                <p className='p-medium'>AKF certificate?</p>
                <CheckBoxInput
                    name={'akf_certificate'}
                    label={'yes'}
                    /* checked={true} */
                    className={'checkboxInput_version001 p-medium'}
                    onChange={(e) => setAKFCertificate(e.target.value)}
                />
                {/* Upload field for document */}
                {/* Maximum stay duration days integer ??? */}
                {/* Change over time in hours integer */}
                <NumberInput
                    label={'Deposit'}
                    name={'deposit'}
                    onChange={(e) => setDeposit(e.target.value)}
                />
                <NumberInput
                    label={'Rental price'}
                    name={'rental_price'}
                    onChange={(e) => setRentalPrice(e.target.value)}
                />
                <SelectInput
                    text={'Status of point of registering'}
                    name={'status_of_point_of_registering'}
                    items={status_of_point_of_registering_ARRAY}
                    onChange={(e) => setStatusOfPointOfRegistering(e.target.value)}
                />
                <PictureInput
                />
                <SelectInput
                    text={'Facilities type'}
                    name={'facilities_type'}
                    /* items={facilities_type_ARRAY} */
                    onChange={(e) => setFacilitiesType(e.target.value)}
                />
                <ValidButton
                    validButton_CLASSNAME={'validButton_CLASSNAME cursor-pointer'}
                    validButton_ID={'signup_VALIDBUTTON'}
                    span_text_CLASSNAME={'p-medium white_COLOR'}
                    validButton_TEXT={'Sign up'}
                    redirect_BOOLEAN={true}
                />
            </form>
        </>
    )
}

export default LivingPlacesForm