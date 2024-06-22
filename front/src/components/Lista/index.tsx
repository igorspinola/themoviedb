import './styles.css';
import React, { useEffect, useState } from 'react';
import { useFiltro } from '@/contexts/FiltroContext';
import { TMDB_LANGS } from '@/services/api';
//-- COMPONENTS
import SearchBar from '../SearchBar';
import Cards from '../Cards';
//-- ASSETS
import es from '../../assets/espanhol.svg';
import it from '../../assets/italiano.svg';
import fr from '../../assets/frances.svg';
import de from '../../assets/alemao.svg';

import axios from 'axios';

interface Filme {
  id: number;
  title: string;
  poster_path: string; // Para movieList
  posterPath: string;  // Para favoriteMovies
}

export default function Lista() {
  const { Idioma, Genero } = useFiltro();
  const [filmes, setFilmes] = useState<Filme[]>([]);

  const listaFilmes = async () => {
    try {
      console.log("Genero:")
      console.log(Genero)
      console.log("Idioma:")
      console.log(Idioma)
      console.log("URL:")
      const  url = `http://localhost:3004/movie_by_genre?genre=${Genero}&language=${Idioma}`
      const data = await axios.get(url);
      console.log(data.data)
      console.log(url)
      setFilmes(data.data.results);
    } 
    catch (error) {
      const  url = `http://localhost:3004/movie_by_genre?genre=28&language=fr`
      const data = await axios.get(url);
      setFilmes(data.data.results);
      console.error('Valor padrão setado, erro ao obter filmes:', error);
    }
  }

  //const listaFilmes = (url: any) => {
  //  axios.get(url)
  //    .then(res => {
  //      const dados = res.data;
  //      console.log(dados);
  //      setFilmes(dados.results)
  //    })
  //  .catch((error) => {
  //    console.error('Erro ao listar filmes:', error)
  //  })
  //};

  useEffect(() => {
    listaFilmes();
  }, []);
  
  return (
    <section className='lista'>
      <SearchBar />

      <ul className='container-cards'>
        {filmes.map((item: any) => {
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
        {/* <Cards poster={adelman} titulo="Ms. et Mme Adelman" genero="Comédia" idioma={frances} />

        <Cards poster={lavitaebella} titulo="La vita è Bella" genero="Drama" idioma={italiano} />

        <Cards poster={encanto} titulo="Encanto" genero="Aventura" idioma={espanhol} />

        <Cards poster={freierfall} titulo="Freier Fall" genero="Drama" idioma={alemao} /> */}
      </ul>

    </section>
  )
}
