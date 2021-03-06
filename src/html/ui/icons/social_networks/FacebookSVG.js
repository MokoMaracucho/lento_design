import React from 'react'

import './css/FacebookSVG.scss'

const FacebookSVG = (props) => {
    return (
        <>
            <div className='cursor-pointer'>
                <svg width={props.width} height={props.height} /* width="7" height="13" */ viewBox="0 0 7 13" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.31375 2.15854H6.50054V0.0915417C6.29579 0.063375 5.59162 0 4.77154 0C3.06042 0 1.88825 1.07629 1.88825 3.05446V4.875H0V7.18575H1.88825V13H4.20333V7.18629H6.01521L6.30283 4.87554H4.20279V3.28358C4.20333 2.61571 4.38317 2.15854 5.31375 2.15854Z" fill={props.color} />
                </svg>
            </div>
        </>
    )
}

export default FacebookSVG