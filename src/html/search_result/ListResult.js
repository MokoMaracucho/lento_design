import React from 'react'

import VhesManager from '../vhes/VhesManager'

const ListResult = (props) => {
    return (
        <>
            <VhesManager
                card_CLASSNAME={'square_card_CLASSNAME p-small'}
                rounded_card_BOOLEAN={false}
                display_list_CLASSNAME={'wrap_list_CONTAINER'}
            />
        </>
    )
}

export default ListResult