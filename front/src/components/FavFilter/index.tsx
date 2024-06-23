import './styles.css'
import React from 'react';
import { useUser } from '@/contexts/UserContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';


export default function FavFilter() {
  const { Favoritos, filterFavoritos } = useUser()

  return (
    <button className='fav-link' onClick={() => filterFavoritos()} >
      {Favoritos === true? (
        <FaHeart className='fill-red-500' />
      ) : (
        <FaRegHeart className='fill-red-500' />
      )}
    </button>
  )
}
