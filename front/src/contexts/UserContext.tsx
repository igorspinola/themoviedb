"use client"
import { URL_BACK } from "@/services/api";
import axios from "axios";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useFiltro } from "./FiltroContext";

// Definindo o tipo do estado e das funções de controle
interface UserContextType {
  Email: string | null;
  Favoritos: boolean;
  filterEmail: (e: any) => void;
  filterFavoritos: () => void
}

// Estado inicial
const initialState: UserContextType = {
  Email: null,
  Favoritos: false,
  filterEmail: (e: any) => {},
  filterFavoritos: () => {}
};
interface UserProps {
  children: React.ReactNode;
}
// Criando o contexto
const UserContext = createContext<UserContextType>(initialState);

// Criando o provider
export const UserProvider: React.FC<UserProps> = ({ children }) => {
  const { filterFilmes, Genero, Idioma } = useFiltro();
  const [Email, setEmail] = useState(null);
  const [Favoritos, setFavoritos] = useState(false);

  const filterEmail = (e: any) => {
    setEmail(e)
  }

  const filterFavoritos = () => {
    setFavoritos(!Favoritos);
  }

  return (
    <UserContext.Provider value={{ Email, Favoritos, filterEmail, filterFavoritos}}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useUser = () => useContext(UserContext);