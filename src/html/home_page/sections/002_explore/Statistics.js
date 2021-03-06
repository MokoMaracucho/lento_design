import React from 'react'

import './css/Statistics.scss'

const Statistics = (props) => {
    return (
        <>
            <div className='border-right'>
                <p className='label'>
                    72M
                </p>
                <p className='grey_COLOR margin-top'>
                    Total available living places
                </p>
            </div>
            <div className='border-right'>
                <p className='label'>
                    4.5K+
                </p>
                <p className='grey_COLOR margin-top'>
                    Total registried living places
                </p>
            </div>
            <div>
                <p className='label'>
                    +200L
                </p>
                <p className='grey_COLOR margin-top'>
                    Average price
                </p>
            </div>
            {/* <div>
                <p id='label-rate'>
                    <p className='label'>
                        4.8
                    </p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.201 0.758026L12.679 6.62303L19.023 7.16803C19.463 7.20603 19.642 7.75503 19.308 8.04403L14.496 12.213L15.938 18.415C16.038 18.846 15.571 19.185 15.193 18.956L9.74101 15.668L4.28901 18.956C3.91001 19.184 3.44401 18.845 3.54401 18.415L4.98601 12.213L0.173007 8.04303C-0.160993 7.75403 0.0170071 7.20503 0.458007 7.16703L6.80201 6.62203L9.28001 0.758026C9.45201 0.350026 10.029 0.350026 10.201 0.758026Z" fill="#FEAC33"/>
                    </svg>
                </p>
                <p className='margin-top'>
                    Overall ratings
                </p>
            </div> */}
        </>
    )
}

export default Statistics