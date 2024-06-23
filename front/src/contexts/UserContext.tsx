"use client"
import { URL_BACK } from "@/services/api";
import axios from "axios";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

// Definindo o tipo do estado e das funções de controle
interface UserContextType {
  Email: any;
  Favoritos: boolean;
  filterEmail: (e: any) => void;
  filterFavoritos: (e: any) => void
}

// Estado inicial
const initialState: UserContextType = {
  Email: "es",
  Favoritos: false,
  filterEmail: (e: any) => {},
  filterFavoritos: (e: any) => {}
};
interface UserProps {
  children: React.ReactNode;
}
// Criando o contexto
const UserContext = createContext<UserContextType>(initialState);

// Criando o provider
export const UserProvider: React.FC<UserProps> = ({ children }) => {
  //const [Email, setEmail] = useState(TMDB_LANGS);
  const [Email, setEmail] = useState("");
  const [Favoritos, setFavoritos] = useState(true);

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