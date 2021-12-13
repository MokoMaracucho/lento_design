import React from 'react'

const FilterMapSearch = (props) => {
    return (
        <>
            <div
                id='searchForm_DIV'
                className='p-medium'
            >
                <div
                    id='location_DIV'
                    className='border-left padding'
                >
                    <p>
                        Location
                    </p>
                    <p className='input'>
                        Amsterdam
                    </p>
                </div>
                <div
                    id='propertyType_DIV'
                    className='border-left padding'
                >
                    <p>
                        Property type
                    </p>
                    <p className='input'>
                        Type
                    </p>
                </div>
                <div
                    id='range_DIV'
                    className='padding'
                >
                    <p>
                        Range
                    </p>
                    <p className='input'>
                        $1000 - $2700
                    </p>
                </div>
            </div>
        </>
    )
}

export default FilterMapSearch