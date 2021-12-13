import React, { useState } from 'react'

import NumberInput from '../../ui/forms/inputs/NumberInput'
import TextInput from '../../ui/forms/inputs/TextInput'
import RadioInput from '../../ui/forms/inputs/RadioInput'
import SelectInput from '../../ui/forms/inputs/SelectInput'
import PictureInput from '../../ui/forms/inputs/PictureInput'
import ValidButton from '../../ui/forms/buttons/ValidButton'

/* import './css/ResidenceForm.scss' */

const ResidenceForm = (props) => {
    
    const [floor, setFloor] = useState('')
    const [area, setArea] = useState('')

    const area_type_ARRAY = [
        {
            value: 'living_room',
            label: 'Living room'
        },
        {
            value: 'kitchen',
            label: 'Kitchen'
        },
        {
            value: 'toilet',
            label: 'Toilet'
        },
        {
            value: 'bathroom',
            label: 'Bathroom'
        },
        {
            value: 'entrance',
            label: 'Entrance'
        },
        {
            value: 'bedroom',
            label: 'Bedroom'
        },
        {
            value: 'gallery',
            label: 'Gallery'
        },
        {
            value: 'attic',
            label: 'Attic'
        },
        {
            value: 'storage_room',
            label: 'Storage room'
        }
    ]


    return (
        <>
            <form>
                <NumberInput
                    label={'Floor'}
                    name={'floor'}
                    onChange={(e) => setFloor(e.target.value)}
                />
                <SelectInput
                    text={'Area'}
                    name={'areas'}
                    items={area_type_ARRAY}
                    onChange={(e) => setArea(e.target.value)}
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