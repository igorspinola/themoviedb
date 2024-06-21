import './styles.css'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar() {
  return (
    <div className='searchbar'>
      <input id='pesquisar' type='text' placeholder='Pesquisar...' />
      <button form='form-searchbar' type='submit'><FaSearch /></button>
    </div>
  )
}
