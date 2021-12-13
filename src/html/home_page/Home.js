import React from 'react'

import Header from '../header/Header'
import HomeSection from './sections/001_home/HomeSection'
import ExploreSection from './sections/002_explore/ExploreSection'
import PreSelectionSection from './sections/003_pre_selection/PreSelectionSection'
import InterludeSection from './sections/004_interlude/InterludeSection'
import MapSection from './sections/005_map/MapSection'
import Footer from '../footer/Footer'

const Home = (props) => {
    return (
        <>
            {/* <Header /> */}
            <HomeSection />
            <ExploreSection />
            <PreSelectionSection />
            <InterludeSection />
            <MapSection />
            <Footer />
        </>
    )
}

export default Home