"use client";

import { URL_BACK } from "@/services/api";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { UserProvider, useUser } from "./UserContext";

// Definindo o tipo do estado e das funções de controle
interface FiltroContextType {
  Idioma: string;
  Genero: number;
  Titulo: string;
  Filmes: any[];
  filterIdioma: (e: string) => void;
  filterGenero: (e: number) => void;
  filterTitulo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterFilmes: (e: any) => void;
}

// Estado inicial
const initialState: FiltroContextType = {
  Idioma: "es",
  Genero: 28,
  Titulo: "",
  Filmes: [],
  filterIdioma: () => {},
  filterGenero: () => {},
  filterTitulo: () => {},
  filterFilmes: () => {},
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
  const [Filmes, setFilmes] = useState<any[]>([]);

  const filterIdioma = (e: string) => {
    setIdioma(e);
  }

  const filterGenero = (e: number) => {
    setGenero(e);
  }

  const filterTitulo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitulo(e.target.value);
  }

  const filterFilmes = (e: any) => {
    setFilmes(e)
  }

  

  useEffect(() => {
    if (Favoritos) {
      console.log(Favoritos);
      axios.get(`${URL_BACK}/favorite_movies/${Email}`)
      .then(res => {
        filterFilmes(res.data)
        console.log('Filmes favoritos recuperados com sucesso!')
      })
      .catch(error => console.error('Erro ao recuperar filmes favoritos: ', error));
    } else if (Titulo !== "") {
      axios.get(`${URL_BACK}/movie_by_title`, {
        params: {
          title: Titulo
        }
      })
      .then(res => {
        setFilmes(res.data.results)
        console.log('Pesquisa realizada com sucesso!')
      })
      .catch(error => console.error('Erro ao realizar pesquisar: ', error))
    } else {
      axios.get(`${URL_BACK}/movie_by_genre`, {
        params: {
          genre: Genero,
          language: Idioma
        }
      })
      .then(res => {
        setFilmes(res.data.results)
        console.log('Filmes recuperados com sucesso!')
      })
    .catch(error => console.error('Erro ao recuperar filmes: ', error))
    }
  }, [Email,Favoritos, Idioma, Genero, Titulo]);

  return (
      <FiltroContext.Provider value={{ Idioma, Genero, Titulo, Filmes, filterIdioma, filterGenero, filterTitulo, filterFilmes }}>
        {children}
      </FiltroContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useFiltro = () => useContext(FiltroContext);