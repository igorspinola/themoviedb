import React from 'react'
import { useFiltro } from '@/contexts/FiltroContext'
//-- COMPONENTS
import SearchBar from './SearchBar'
import { Card } from './Card'
import { TMDB_IMG } from '@/services/api'


export default function Lista(ref: any) {
  const { Filmes } = useFiltro()
  
  return (
    <section className='
      flex flex-col content-center 
      py-[12rem] gap-8
      md:py-[12rem] md:pr-[6rem] md:pl-[11rem]
    '>

      <ul className='
        flex flex-col items-center
        gap-6
        md:flex-row md:flex-wrap
      '>

        {Filmes && Filmes.length > 0? (
          Filmes.map((item: any) => (
              <li key={item.id}>
                <Card
                  id={item.id}
                  poster={`${TMDB_IMG}/${item.poster_path}`}
                  titulo={item.title} 
                  ano={item.release_date}
                  idioma = {item.original_language}
                  nota={item.vote_average.toFixed(1)}
                />
              </li>
          ))) : (
            <li> Nenhum item encontrado </li>
          )}

      </ul>

    </section>
  )
}
