import './styles.css';
import React, { useEffect, useState } from 'react';
import { useFiltro } from '@/contexts/FiltroContext';
//-- COMPONENTS
import SearchBar from '../SearchBar';
import Cards from '../Cards';


interface Filme {
  id: number;
  title: string;
  poster_path: string; // Para movieList
  posterPath: string;  // Para favoriteMovies
}

export default function Lista() {
  const { Filmes } = useFiltro();
  
  return (
    <section className='lista'>
      <SearchBar />

      <ul className='container-cards'>
        {Filmes.map((item: any) => {
            return (
              <li key={item.id}>
                <Cards
                  poster={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  titulo={item.title}
                  // const dataLancamento = data.release_date;
                  genero={item.genres}
                  idioma = {item.original_language}
                  nota={item.vote_average}
                />
              </li>
        )})}
      </ul>

    </section>
  )
}
