import React from 'react'
import { useFiltro } from '@/contexts/FiltroContext'
import { FaSearch } from 'react-icons/fa'


export default function SearchBar() {
  const { filterTitulo } = useFiltro()

  return (
    <form className='
      flex justify-between items-center
      w-full h-fit py-1 px-4 
      bg-gradient-to-bl from-slate-500/30 to-slate-600/10 
      border-2 border-y-red-600/50 border-x-rose-500/50 
      backdrop-blur-sm shadow-md shadow-red-800 rounded-full
      md:w-[17.5rem] md:m-0
    '>
      <input id='pesquisar' type='text' placeholder='Pesquisar...' onChange={filterTitulo} />
      <FaSearch />
    </form>
  )
}