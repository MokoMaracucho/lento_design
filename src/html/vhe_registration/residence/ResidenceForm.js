import React, { useState } from 'react'

import NumberInput from '../../ui/forms/inputs/NumberInput'
import TextInput from '../../ui/forms/inputs/TextInput'
import RadioInput from '../../ui/forms/inputs/RadioInput'
import SelectInput from '../../ui/forms/inputs/SelectInput'
import PictureInput from '../../ui/forms/inputs/PictureInput'
import ValidButton from '../../ui/forms/buttons/ValidButton'

/* import './css/ResidenceForm.scss' */

const ResidenceForm = (props) => {

    const [houseNumber, setHouseNumber] = useState('')
    const [houseNumberExtension, setHouseNumberExtension] = useState('')
    
    
    const [floor, setFloor] = useState('')
    const [numberOfLivingPlaces, setNumberOfLivingPlaces] = useState('')
    const [facilitytype, setFacilitytype] = useState('')

    const facility_type_ARRAY = [
        {
            value: 'kitchen',
            label: 'Kitchen'
        },
        {
            value: 'bathroom',
            label: 'Bathroom'
        },
        {
            value: 'common_room',
            label: 'Common room'
        }
    ]

    return (
        <>
            <form>
                <NumberInput
                    label={'House number'}
                    name={'house_number'}
                    onChange={(e) => setHouseNumber(e.target.value)}
                />
                <TextInput
                    label={'House number extension'}
                    name={'house_number_extension'}
                    className={'textInput_version001 p-medium'}
                    onChange={(e) => setHouseNumberExtension(e.target.value)}
                />
                <p className='p-medium'>Rental permit?</p>
                <RadioInput
                /> {/* Yes */}
                <RadioInput
                /> {/* Yes */}
                <p className='p-medium'>Always visible on platform?</p>
                <RadioInput
                /> {/* Yes */}
                <RadioInput
                /> {/* Yes */}
                <NumberInput
                    label={'Floor'}
                    name={'floor'}
                    onChange={(e) => setFloor(e.target.value)}
                />
                <NumberInput
                    label={'Number of living places'}
                    name={'number_of_living_places'}
                    onChange={(e) => setNumberOfLivingPlaces(e.target.value)}
                />
                {/* Upload button for house rules */}
                <SelectInput
                    text={'Facility type'}
                    name={'facility_type'}
                    items={facility_type_ARRAY}
                    onChange={(e) => setFacilitytype(e.target.value)}
                />
                <PictureInput
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

export default ResidenceForm