import './styles.css'
import React from 'react'
import { useFiltro } from '@/contexts/FiltroContext'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar() {
  const { filterTitulo } = useFiltro()

  return (
    <form className='searchbar'>
      <input id='pesquisar' type='text' placeholder='Pesquisar...' onChange={filterTitulo} />
      <button form='form-searchbar' type='submit'><FaSearch /></button>
    </form>
  )
}

