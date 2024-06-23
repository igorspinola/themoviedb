import './styles.css';
import React from 'react';
import { useFiltro } from '@/contexts/FiltroContext';
//-- COMPONENTS
import SearchBar from '../SearchBar';
import Cards from '../Cards';


export default function Lista(ref: any) {
  const { Filmes } = useFiltro();
  
  return (
    <section className='lista'>
      <SearchBar />

      <ul className='container-cards'>
        {Filmes && Filmes.length > 0? (
          Filmes.map((item: any) => (
              <li key={item.id}>
                <Cards
                  id={item.id}
                  poster={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  titulo={item.title} 
                  ano={item.release_date}
                  idioma = {item.original_language}
                  nota={item.vote_average}
                />
              </li>
          ))) : (
            <li> Nenhum item </li>
          )}
      </ul>

    </section>
  )
}
