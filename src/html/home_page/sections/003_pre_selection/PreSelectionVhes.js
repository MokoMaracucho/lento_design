import React from 'react'

import VhesManager from '../../../vhes/VhesManager'

import './css/PreSelectionVhes.scss'

const PreSelectionVhes = (props) => {
    return (
        <>
            <VhesManager
                card_CLASSNAME={'rounded_card_CLASSNAME p-medium'}
                rounded_card_BOOLEAN={true}
                display_list_CLASSNAME={'row_list_CONTAINER'}
            />
        </>
    )
}

export default PreSelectionVhes