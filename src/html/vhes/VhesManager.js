import React, { useContext, useState, useEffect } from 'react'

import axios from 'axios'

import { GlobalVariablesContext } from '../../Context/GlobalVariablesContext'

/* import ScrollBarForMore from '../home/sections/003/ScrollBarForMore' */
import Vhes from './Vhes'

import './css/VhesManager.scss'

const VhesManager = (props) => {

    const { REACT_APP_URL } = useContext(GlobalVariablesContext)
    
    const[allData, setAllData] = useState([])
    const[filteredData, setFilteredData] = useState([])
      
    const fetchVhes = () => {
        axios.get(process.env.REACT_APP_URL + 'vhe/vhe/?limit=10&offset=10').then(result => {
            const response = result.data.results
            console.log(response)
            setAllData(response)
            setFilteredData(response)
        }).catch(e => {
            console.log('Error getting data: ' + e)
        })
    }

    const handleSearch = (e) => {
        let search_value = e.target.value.toLowerCase()
        console.log(search_value)
        let filtered_result = []
        filtered_result = allData.filter((data) => {
            console.log(data.vheName.search(search_value))
            return data.vheName.search(search_value) !== -1
        })
        setFilteredData(filtered_result)
        console.log(filteredData)
    }
  
    useEffect(() => {
      fetchVhes()
    }, [])

    if(!allData) return null

    return (
        <>
            {/* <label>Search: </label>
            <input type='text' onChange={(e) => handleSearch(e)} /> */}
            <div id='vhesManager_DIV'>
                {/* <ScrollBarForMore /> */}
                <Vhes
                    data={filteredData}
                    card_CLASSNAME={props.card_CLASSNAME}
                    rounded_card_BOOLEAN={props.rounded_card_BOOLEAN}
                    display_list_CLASSNAME={props.display_list_CLASSNAME}
                />
            </div>
        </>
    )
}

export default VhesManager
