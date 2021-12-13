import React from 'react'

import SelectForm from './SelectForm'
import SearchForm from './SearchForm'

import './css/HomeSearch.scss'

const Search = (props) => {
    return (
        <>
            <div
                id='search_DIV'
            >
                <SelectForm />
                <SearchForm />
            </div>
        </>
    )
}

export default Search