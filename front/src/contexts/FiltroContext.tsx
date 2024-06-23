"use client"
import { URL_BACK } from "@/services/api";
import axios from "axios";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useUser } from "./UserContext";

// Definindo o tipo do estado e das funções de controle
interface FiltroContextType {
  Idioma: any;
  Genero: number;
  Titulo: string;
  Filmes: [];
  filterIdioma: (e: any) => void;
  filterGenero: (e: any) => void;
  filterTitulo: (e: any) => void;
}

// Estado inicial
const initialState: FiltroContextType = {
  Idioma: "es",
  Genero: 28,
  Titulo: "",
  Filmes: [],
  filterIdioma: (e: any) => {},
  filterGenero: (e: any) => {},
  filterTitulo: (e: any) => {},
};
interface FiltroProps {
  children: React.ReactNode;
}
// Criando o contexto
const FiltroContext = createContext<FiltroContextType>(initialState);

// Criando o provider
export const FiltroProvider: React.FC<FiltroProps> = ({ children }) => {
  const { Email, Favoritos } = useUser();

  const [Idioma, setIdioma] = useState("es");
  const [Genero, setGenero] = useState(28);
  const [Titulo, setTitulo] = useState("");
  const [Filmes, setFilmes] = useState<[]>([]);

  const filterIdioma = (e: any) => {
    setIdioma(e)
  }

  const filterGenero = (e: any) => {
    setGenero(e);
  }

  const filterTitulo = (e: any) => {
    setTitulo(e.target.value)
  }
   
  useEffect(() => {
    if (Favoritos === true) {
      axios.get(`${URL_BACK}/get_favorite_movies/${Email}`)
      .then(response => {
        setFilmes(response.data);
        console.log('Movies retrieved successfully!');
      })
      .catch(error => {
        console.error('There was an error retrieving the movies!', error);
        console.log('Error retrieving movies.');
      });
    } else if (Titulo !== "") {
      axios.get(`${URL_BACK}/movie_by_title`, {
        params: {
          title: Titulo
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
    } else {
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
    }
  }, [Idioma, Genero, Titulo])

  return (
    <FiltroContext.Provider value={{ Idioma, Genero, Titulo, Filmes, filterIdioma, filterGenero, filterTitulo}}>
      {children}
    </FiltroContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useFiltro = () => useContext(FiltroContext);