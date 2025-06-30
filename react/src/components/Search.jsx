import React from 'react'

const Search = ({searchterm,setSearchTerm}) => {
  return (
    <div className='search' >
        <div>
            <img src="search.svg" alt='search' />
            <input 
            type='text'
            placeholder='Search through movies'
            value={searchterm}
            onChange={(event)=>setSearchTerm(event.target.value)}
            />
        </div>
    </div>
  )
}

export default Search