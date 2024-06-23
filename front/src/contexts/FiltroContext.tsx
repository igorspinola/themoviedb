"use client"
import { URL_BACK } from "@/services/api";
import axios from "axios";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

// Definindo o tipo do estado e das funções de controle
interface FiltroContextType {
  Idioma: any;
  Genero: number;
  Filmes: [];
  filterIdioma: (e: any) => void;
  filterGenero: (e: any) => void;
}

// Estado inicial
const initialState: FiltroContextType = {
  Idioma: "es",
  Genero: 28,
  Filmes: [],
  filterIdioma: (e: any) => {},
  filterGenero: (e: any) => {}
};
interface FiltroProps {
  children: React.ReactNode;
}
// Criando o contexto
const FiltroContext = createContext<FiltroContextType>(initialState);

// Criando o provider
export const FiltroProvider: React.FC<FiltroProps> = ({ children }) => {
  //const [Idioma, setIdioma] = useState(TMDB_LANGS);
  const [Idioma, setIdioma] = useState("es");
  const [Genero, setGenero] = useState(28);
  const [Filmes, setFilmes] = useState<[]>([]);

  const filterIdioma = (e: any) => {
    setIdioma(e)
  }

  const filterGenero = (e: any) => {
    setGenero(e);
  }
  
  useEffect(() => {
    axios.get('http://localhost:3004/movie_by_genre', {
      params: {
        genre: Genero,
        language: Idioma
      }
    })
    .then(response => {
      setFilmes(response.data.results);
      console.log('Movies retrieved successfully!');
    })
    .catch(error => {
      console.error('There was an error retrieving the movies!', error);
      console.log('Error retrieving movies.');
    });
  }, [Genero, Idioma])

  return (
    <FiltroContext.Provider value={{ Idioma, Genero, Filmes, filterIdioma, filterGenero}}>
      {children}
    </FiltroContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useFiltro = () => useContext(FiltroContext);