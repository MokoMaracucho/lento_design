import React from 'react'

import BedroomSVG from '../ui/icons/vhes/BedroomSVG'
import BathroomSVG from '../ui/icons/vhes/BathroomSVG'
import AreaSVG from '../ui/icons/vhes/AreaSVG'

import GoogleMap from '../map/GoogleMap'

import './css/VheDetailsSection.scss'

const VheDetailsSection = (props) => {
    return (
        <>
            <section
                id='vheDetails_SECTION'
            >
                <div id='right_searchResult_DIV'>
                    <div id='location_SearchResult_DIV'>
                        <h4>2De conifeer</h4>
                        <h4 id='search-place' className='grey_COLOR' >Oostrum, NL</h4>
                    </div>
                    <div id='images_vheDetails_DIV'>
                        <div id='mainImage_vheDetails_DIV'>
                            <img id='mainImage_vheDetails_IMG' src="/assets/images/bitmap/jpg/Venray/2019_03_KAFRA_Venray-14_A4.jpg" alt="" />
                        </div>
                        <div id='smallImages_vheDetails_DIV'>
                            <img className='smallImage_vheDetails_IMG' src="/assets/images/bitmap/jpg/Venray/KAFRA Venray (aug 2019) (1).jpg" alt="" />
                            <img className='smallImage_vheDetails_IMG' src="/assets/images/bitmap/jpg/Venray/2019_03_KAFRA_Venray-41_A4.jpg" alt="" />
                            <img className='smallImage_vheDetails_IMG' src="/assets/images/bitmap/jpg/Venray/KAFRA Venray (aug 2019) (22).jpg" alt="" />
                            <img className='smallImage_vheDetails_IMG' src="/assets/images/bitmap/jpg/Venray/KAFRA Venray (aug 2019) (31).jpg" alt="" />
                        </div>
                    </div>
                    <div id='leftPanel_vheDetails_DIV'>
                        <div id='infosVhe_vheDetails_DIV'>
                            <div id='bedroomNumber_vheDetails_DIV' className='infosVhes_vheDetails_DIVS'>
                                <BedroomSVG
                                    className={'iconsInfo_vheDetails_DIV'}
                                    width={34}
                                    height={26}
                                />
                                <p className='p-medium iconsInfo_vheDetails_DIV'>1</p>
                            </div>
                            <div id='bathroomNumber_vheDetails_DIV' className='infosVhes_vheDetails_DIVS'>
                                <BathroomSVG
                                    className={'iconsInfo_vheDetails_DIV'}
                                    width={28}
                                    height={28}
                                />
                                <p className='p-medium iconsInfo_vheDetails_DIV'>1</p>
                            </div>
                            <div id='livingArea_vheDetails_DIV' className='infosVhes_vheDetails_DIVS'>
                                <AreaSVG
                                    className={'iconsInfo_vheDetails_DIV'}
                                    width={28}
                                    height={28}
                                />
                                <p className='p-medium iconsInfo_vheDetails_DIV'>20 m2</p>
                            </div>
                        </div>
                        <div id='description_vheDetails_DIV'>
                            <p id='descriptionTitle_vheDetails_P' className='p-large'>Room for rent at Presidentstraat in Oostrum</p>
                            <p id='descriptionText_vheDetails_P' className='p-medium'>
                                New rebuild cozy shared apartment in Rotterdam North, close to shops and public transportation and 10 minute bicycle ride to the center.
                                An apartment that is shared by young professionals (20-35 years old) working for multinationals. The house is used by (in total of) four individual young professionals. The living room, bathroom and kitchen are common areas and shared by all.
                                We are looking for another young professional to join us. The available room is fully furnished, 10m2, rent is EUR 735,- per month and includes an advance payment for g/w/e and internet.
                            </p>
                        </div>
                        <div id='included_notIncluded_vheDetails_DIV'>
                            <div id='included_vheDetails_DIV'>
                                <p className='blue_COLOR p-large'>What´s included</p>
                                <div id='labels_included_vheDetails'>
                                    <div className='labels_included_DIVS'>

                                    </div>
                                    <div className='labels_included_DIVS'>
                                        
                                    </div>
                                    <div className='labels_included_DIVS'>
                                        
                                    </div>
                                    <div className='labels_included_DIVS'>
                                        
                                    </div>
                                </div>
                                <div id='checkboxes_included_vheDetails'>
                                    <div className='checkboxes_included_DIVS'>

                                    </div>
                                    <div className='checkboxes_included_DIVS'>
                                        
                                    </div>
                                    <div className='checkboxes_included_DIVS'>
                                        
                                    </div>
                                    <div className='checkboxes_included_DIVS'>
                                        
                                    </div>
                                </div>
                            </div>
                            <div id='notIncluded_vheDetails_DIV'>
                                <p className='pink_COLOR p-large'>What´s not included</p>
                                <div id='labels_notIncluded_vheDetails'>
                                    <div className='labels_notIncluded_DIVS'>

                                    </div>
                                    <div className='labels_notIncluded_DIVS'>
                                        
                                    </div>
                                    <div className='labels_notIncluded_DIVS'>
                                        
                                    </div>
                                    <div className='labels_notIncluded_DIVS'>
                                        
                                    </div>
                                </div>
                                <div id='checkboxes_notIncluded_vheDetails'>
                                    <div className='checkboxes_notIncluded_DIVS'>

                                    </div>
                                    <div className='checkboxes_notIncluded_DIVS'>
                                        
                                    </div>
                                    <div className='checkboxes_notIncluded_DIVS'>
                                        
                                    </div>
                                    <div className='checkboxes_notIncluded_DIVS'>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='calendar_vheDetails_DIV'>
                            
                        </div>
                        <div id='review_vheDetails_DIV'>
                            <div id='headerReview_vheDetails_DIV'>
                                <div id='rateStar_vheDetails_DIV'>
                                    <span id='star_vheDetails_DIV'>
                                        <svg width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_693:9753)">
                                        <path d="M0 14.8673C0.258528 14.2858 0.724728 14.104 1.33926 14.0574C3.95845 13.8587 6.57763 13.6219 9.19469 13.3977C10.7755 13.2603 12.3564 13.1123 13.9393 12.9897C14.0618 12.9906 14.1812 12.9514 14.2792 12.878C14.3772 12.8047 14.4484 12.7013 14.4818 12.5837C16.1333 8.66221 17.7897 4.74282 19.4511 0.825554C19.6481 0.358273 19.9236 0.0220845 20.4661 0.00305497C20.9704 -0.0159746 21.2947 0.225066 21.5383 0.798067C22.4806 3.01395 23.4187 5.23054 24.3525 7.44784C25.0836 9.17319 25.821 10.8985 26.5415 12.6281C26.5725 12.7332 26.6372 12.8252 26.7256 12.8901C26.814 12.955 26.9213 12.9892 27.031 12.9876C29.3726 13.1778 31.7099 13.3851 34.0494 13.5859L39.9108 14.0828C40.4024 14.1251 40.7796 14.3302 40.9428 14.825C41.106 15.3197 40.911 15.7024 40.538 16.0259C37.3509 18.7817 34.161 21.5339 30.9683 24.2827C30.8091 24.3891 30.69 24.5454 30.6298 24.7269C30.5695 24.9084 30.5716 25.1047 30.6356 25.2849C31.6082 29.3572 32.5427 33.4401 33.4984 37.5188C33.6192 38.0326 33.5811 38.4787 33.1297 38.8043C32.6784 39.1299 32.2355 39.0158 31.7884 38.7451C28.1859 36.5673 24.5729 34.4021 20.981 32.218C20.8506 32.115 20.6897 32.0579 20.5234 32.0556C20.357 32.0533 20.1946 32.1059 20.0613 32.2053C16.4589 34.4 12.8289 36.5694 9.21165 38.7599C8.89167 38.9523 8.57592 39.0834 8.19025 38.9714C7.60962 38.7916 7.34262 38.2651 7.49943 37.597C8.11396 34.954 8.72991 32.3124 9.34727 29.6722C9.70539 28.1308 10.055 26.5873 10.4259 25.0502C10.4632 24.9471 10.4654 24.8347 10.4321 24.7303C10.3987 24.6259 10.3317 24.5354 10.2415 24.4729C7.07985 21.7524 3.92312 19.0234 0.771343 16.286C0.498985 16.0202 0.243497 15.7378 0.00635699 15.4403L0 14.8673Z" fill="#ECBAA3"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_693:9753">
                                        <rect width="41" height="39" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </span>
                                    <span id='rate_vheDetails_DIV' className='p-large'>
                                        4.8 reviews
                                    </span>
                                </div>
                                <div id='arrows_vheDetails_DIV'>
                                    <span id='arrowLeft_vheDetails_DIV'>

                                    </span>
                                    <span id='arrowLeft_vheDetails_DIV'>

                                    </span>
                                </div>
                            </div>
                            <div id='comments_vheDetails_DIV'>
                                <div className='comment_vheDetails_DIVS'>
                                    <p className='commentTitle_vheDetails_PS p-large'>
                                        Great services with goof quality apartments
                                    </p>
                                    <p className='textTitle_vheDetails_PS p-small'>
                                        Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel leo nec nibh tempus congue. Morbi rhoncus bibendum enim sit amet pulvinar. Quisque lobortis commodo nunc, a rhoncus diam aliquam Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel leo nec nibh tempus congue. Morbi rhoncus bibendum enim sit amet pulvinar. Quisque lobortis commodo nunc, a rhoncus diam aliquam 
                                    </p>
                                    <div className='clientCard_vheDetails_DIV'>

                                    </div>
                                </div>
                                <div className='comment_vheDetails_DIVS'>
                                    <p className='commentTitle_vheDetails_PS p-large'>
                                        Great services with goof quality apartments
                                    </p>
                                    <p className='textTitle_vheDetails_PS p-small'>
                                        Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel leo nec nibh tempus congue. Morbi rhoncus bibendum enim sit amet pulvinar. Quisque lobortis commodo nunc, a rhoncus diam aliquam Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel leo nec nibh tempus congue. Morbi rhoncus bibendum enim sit amet pulvinar. Quisque lobortis commodo nunc, a rhoncus diam aliquam 
                                    </p>
                                    <div className='clientCard_vheDetails_DIV'>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='mapDiv_vheDetails_DIV'>
                            <div id='mapHeader_vheDetails_DIV'>
                                <p id='where_vheDetails_P' className='p-large'>
                                    Where: Oostrum
                                </p>
                                {/* <p id='city_vheDetails_P'>
                                    Oostrum
                                </p> */}
                                <div id='map_vheDetails_DIV'>
                                    <GoogleMap
                                        map_CLASSNAME={'map_home_CLASSNAME'}
                                        height={'800px'}
                                    />
                                </div>
                            </div>

                        </div>
                        <div id='hostInfos_vheDetails_DIV'>
                            <div id='hostCard_vheDetails_DIV'>

                            </div>
                            <div id='hostDetails_vheDetails_DIV'>
                                
                            </div>
                        </div>
                        {/* <div id='documents_vheDetails_DIV'>
                            <div id='houseRules_vheDetails_DIV' className='documentCard_vheDetails_DIV'>
                                <div className='documentSquare_vheDetails_DIV'>

                                </div>
                                <p id='documentName_vheDetails_DIV'>House rules</p>
                            </div>
                            <div id='contracts_vheDetails_DIV' className='documentCard_vheDetails_DIV'>
                                <div className='documentSquare_vheDetails_DIV'>

                                </div>
                                <p id='documentName_vheDetails_DIV'>Contracts</p>
                            </div>
                        </div> */}
                    </div>
                    <div id='rightPanel_vheDetails_DIV'>
                        <div id='vheCard_vheDetails_Div'>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VheDetailsSection