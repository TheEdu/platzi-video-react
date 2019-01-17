import React from 'react'
import './search.css'

const Search = (props) => (
  <form className="Search">
    <input 
      type="text" 
      className="Search-input"
      placeholder="Search"
    />
  </form>
)

export default Search;