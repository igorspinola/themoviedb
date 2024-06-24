import React from 'react'
import { useUser } from '@/contexts/UserContext'
import { FaHeart, FaRegHeart } from 'react-icons/fa'


export default function FavFilter() {
  const { Favoritos, filterFavoritos } = useUser()

  return (
    <button className='
      flex 
      mt-[1rem] ml-[12rem] p-[1rem] 
      bg-gradient-to-br from-slate-500/30 to-slate-400/30 
      shadow-md shadow-red-500 rounded-full
    ' onClick={() => filterFavoritos()} >

      {Favoritos === true? (
        <FaHeart className='fill-red-500' />
        ) : (
        <FaRegHeart className='fill-red-500' />
      )}

    </button>
  )
}
