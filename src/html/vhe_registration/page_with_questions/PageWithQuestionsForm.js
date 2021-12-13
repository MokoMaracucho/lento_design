import React, { useState } from 'react'

import CheckBoxInput from '../../ui/forms/inputs/CheckBoxInput'
import SelectInput from '../../ui/forms/inputs/SelectInput'
import ValidButton from '../../ui/forms/buttons/ValidButton'

import './css/PageWithQuestionsForm.scss'

const PageWithQuestionsForm = (props) => {

    const [partOfAComplex, setPartOfAComplex] = useState('')
    const [residenceType, setResidenceType] = useState('')
    const [livingPlace, setLivingPlace] = useState('')

    const residence_type_ARRAY = [
        {
            value: 'appartement',
            label: 'Appartement'
        },
        {
            value: 'house',
            label: 'House'
        },
        {
            value: 'mobile_home',
            label: 'Mobile home'
        },
        {
            value: 'studio',
            label: 'Studio'
        }
    ]

    const living_place_type_ARRAY = [
        {
            value: 'bed',
            label: 'Bed'
        },
        {
            value: 'room',
            label: 'Room'
        },
        {
            value: 'residence',
            label: 'Residence'
        }
    ]

    return (
        <>
            <form>
                <p className='p-medium'>Is the residence is part of a complex?</p>
                <CheckBoxInput
                    name={'part_of_a_complex'}
                    label={'yes'}
                    /* checked={true} */
                    className={'checkboxInput_version001 p-medium'}
                    onChange={(e) => setPartOfAComplex(e.target.value)}
                />
                <SelectInput
                    text={'Residence type'}
                    name={'residence_type'}
                    items={residence_type_ARRAY}
                    onChange={(e) => setResidenceType(e.target.value)}
                />
                <SelectInput
                    text={'Living place type'}
                    name={'living_place_type'}
                    items={living_place_type_ARRAY}
                    onChange={(e) => setLivingPlace(e.target.value)}
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

export default PageWithQuestionsForm