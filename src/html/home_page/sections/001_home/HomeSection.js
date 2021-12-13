import React from 'react'

import HomeIntroduction from './HomeIntroduction'

import HomeSearch from './HomeSearch'
import ArcHome from './ArcHome'
import SocialNetworks from '../../../ui/social_networks/SocialNetworks'

import './css/HomeSection.scss'
import '../css/Sections.scss'

const HomeSection = (props) => {
    return (
        <>
            <section
                id='section001_SECTION'
                className='sections_SECTION'
            >
                <div
                    id='section001_CONTAINER'
                >
                    <div id='easyLivingBlock_search_DIV'>
                        <HomeIntroduction />
                        <HomeSearch />
                    </div>
                    <div id='arcSection001_DIV'>
                        <ArcHome />
                    </div>
                    <div id='socialNetworks_DIV'>
                        <SocialNetworks
                            socialNetworks_CLASSNAME={'vertical_socialNetworks_CLASSNAME'}
                            color={'#fff'}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeSection