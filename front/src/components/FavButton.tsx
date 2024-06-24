import { useUser } from '@/contexts/UserContext'
import { URL_BACK } from '@/services/api'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { FavButtonProps } from '@/types'


export default function FavButton({
  movieId,
  title,
  voteAverage,
  originalLanguage,
  posterPath
}: FavButtonProps) {
  const { Email, Favoritos } = useUser()

  const [favFilmes, setFavFilmes] = useState<any[]>([])

  useEffect(() => {
    if (Email != null) {
      axios.get(`${URL_BACK}/favorite_movies/${Email}`)
        .then(res => {
          setFavFilmes(res.data)
        })
    }
  }, [Email, Favoritos])

  function addFav() {
    if (Email != null) {
      axios.post(`${URL_BACK}/add_favorite`, {
        email: Email,
        movie_id: movieId,
        title: title,
        vote_average: voteAverage,
        original_language: originalLanguage,
        poster_path: posterPath
      })
      .then(res => {
        console.log('Deu bom')
      })
      .catch(error => console.error('Deu ruim: ', error))
    }
  }

  if (favFilmes && favFilmes.some(fav => (fav.title == title))) {
    return (
      <button className='bg-transparent' >
        <FaHeart className='fill-red-500' onClick={ () => addFav() }/>
      </button>
    )

  } else {
    return (
      <button className='bg-transparent' >
        <FaRegHeart className='fill-red-500' onClick={ () => addFav() }/>
      </button>
    )
  }
}
