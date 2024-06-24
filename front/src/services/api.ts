import axios from 'axios'
import { FilterAny } from '@/types'

export const URL_BACK = `http://localhost:3004`
export const TMDB_IMG = `https://image.tmdb.org/t/p/w500`
export const TMDB_KEY = `e68628f5ff1c3314cd74c0ddba7a5819`

//-- FUNCTIONS
export const fetchFavorites = (
  email: string, 
  setFilmes: FilterAny
) => {
  axios.get(`${URL_BACK}/favorite_movies/${email}`)
    .then(response => {
      setFilmes(response.data)
      console.log('Filmes favoritos recuperados com sucesso!')
    })
    .catch(error => {
      console.error('Erro ao recuperar filmes favoritos: ', error)
    })
}

export const fetchMoviesByTitle = async (
  title: string,
  setFilmes: FilterAny
) => {
  axios.get(`${URL_BACK}/movie_by_title`, {
    params: { title }
  })
    .then(response => {
      setFilmes(response.data.results)
      console.log('Pesquisa realizada com sucesso!')
    })
    .catch(error => {
      console.error('Erro ao realizar pesquisa: ', error)
    })
}

export const fetchMoviesByGenre = async (
  genre: number,
  language: string,
  setFilmes: FilterAny
) => {
  axios.get(`${URL_BACK}/movie_by_genre`, {
    params: { genre, language }
  })
    .then(response => {
      setFilmes(response.data.results)
      console.log('Filmes recuperados com sucesso!')
    })
    .catch(error => {
      console.error('Erro ao recuperar filmes: ', error)
    })
}