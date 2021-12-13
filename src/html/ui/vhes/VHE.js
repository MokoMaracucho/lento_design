import React from 'react'

import BedroomSVG from '../icons/vhes/BedroomSVG'
import BathroomSVG from '../icons/vhes/BathroomSVG'
import AreaSVG from '../icons/vhes/AreaSVG'

import './css/VHE.scss'

const VHE = (props) => {
    /* const [isOpen, setIsOpen] = useState(false) */
    return (
        <>
            <div className={props.card_CLASSNAME}
                /* onclick={() => setIsOpen(!isOpen)} */
            > {/* Meilleur nom pour la balise??? */}
                <img
                    src={'/assets/images/bitmap/jpg/test/image_TEST_001.jpeg'} alt=''
                    className='card_IMG'
                />
                <div className='rentalPrice_DIV'>
                    {props.vhe.rental_price} EUR per week
                </div>
                <div className='adress_DIV'>
                    {props.vhe.house_number}
                    {props.vhe.street}
                    {props.vhe.city}
                </div>
                <div className='bedroom_bathroom_area_DIV'>
                    <div className='info_DIVS'>
                        <div className='label'>
                            <BedroomSVG
                                width={17}
                                height={13}
                            />
                            <p>{props.vhe.number_of_beds}</p>
                        </div>
                        {props.rounded_card_BOOLEAN === true ? <div>Bedroom</div> : null}
                    </div>
                    <div className='info_DIVS'>
                        <div className='label'>
                            <BathroomSVG 
                                width={14}
                                height={14}
                            />
                            <p>{props.vhe.number_of_bathrooms}</p>
                        </div>
                        {props.rounded_card_BOOLEAN === true ? <div>Bathroom</div> : null}
                    </div>
                    <div className='info_DIVS'>
                        <div className='label'>
                            <AreaSVG
                                width={14}
                                height={14}
                            />
                            <span>{props.vhe.living_area} m2</span>
                        </div>
                        {props.rounded_card_BOOLEAN === true ? <div>Living area</div> : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default VHE