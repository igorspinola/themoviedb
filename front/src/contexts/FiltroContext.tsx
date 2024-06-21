"use client"
import { TMDB_LANGS } from "@/services/api";
import React, { createContext, useContext, useState } from "react";

// Definindo o tipo do estado e das funções de controle
interface FiltroContextType {
  Idioma: any;
  Genero: number
  filterIdioma: (e: any) => void;
  filterGenero: (e: any) => void;
}

// Estado inicial
const initialState: FiltroContextType = {
  Idioma: "en",
  Genero: 28,
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
  const [Idioma, setIdioma] = useState("en");
  const [Genero, setGenero] = useState(28);

  const filterIdioma = (e: any) => {
    setIdioma(e)
    console.log(e)
    console.log(Idioma)
  };
  const filterGenero = (e: any) => {
    setGenero(e.target.value);
  }

  return (
    <FiltroContext.Provider value={{ Idioma, Genero, filterIdioma, filterGenero}}>
      {children}
    </FiltroContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useFiltro = () => useContext(FiltroContext);
