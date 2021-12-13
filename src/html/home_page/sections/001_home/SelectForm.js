import React from 'react'

import RoundedButton from '../../../ui/buttons/RoundedButton'

import './css/SelectForm.scss'

const SelectForm = (props) => {
    return (
        <>
            <div id='select_form_DIV'>
                <RoundedButton
                    button_CLASSNAME={'blue_ROUNDEDBUTTON extra_large_ROUNDEDBUTTON cursor-pointer'}
                    button_ID={'rent_home_BUTTON'}
                    span__text_CLASSNAME={'p-medium white_TEXT'}
                    button_TEXT={'Rent'}
                    Arrow002={false}
                    redirect_BOOLEAN={false}
                />
                <RoundedButton
                    button_CLASSNAME={'transparent_ROUNDEDBUTTON large_ROUNDEDBUTTON cursor-pointer'}
                    button_ID={'rentOut_home_BUTTON'}
                    span_text_CLASSNAME={'p-medium black_TEXT'}
                    button_TEXT={'Or rent out'}
                    Arrow002={false}
                    redirect_BOOLEAN={false}
                />
            </div>
        </>
    )
}

export default SelectForm