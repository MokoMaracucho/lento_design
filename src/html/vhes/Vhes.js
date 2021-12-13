import React, { memo } from 'react'

import VHE from '../ui/vhes/VHE'

import './css/Vhes.scss'

const Vhes = memo((props) => {
    console.log('ok')
    return (
        <>
            <div id={props.display_list_CLASSNAME}>
                {props.data.map((vhe, index) => (
                    <VHE
                        key={index}
                        vhe={vhe}
                        card_CLASSNAME={props.card_CLASSNAME}
                        rounded_card_BOOLEAN={props.rounded_card_BOOLEAN}
                    />
                ))}
            </div>
        </>
    )
})

export default Vhes