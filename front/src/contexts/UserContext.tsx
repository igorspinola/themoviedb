'use client'
import { URL_BACK } from '@/services/api'
import axios from 'axios'
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useFiltro } from './FiltroContext'
import { UserContextType, ContextProps } from '@/types'

// Estado inicial
const initialState: UserContextType = {
  Email: null,
  Favoritos: false,
  filterEmail: (e: any) => {},
  filterFavoritos: () => {}
}

// Criando o contexto
const UserContext = createContext<UserContextType>(initialState)

// Criando o provider
export const UserProvider: React.FC<ContextProps> = ({ children }) => {

  const [Email, setEmail] = useState(null)
  const [Favoritos, setFavoritos] = useState(false)

  const filterEmail = (e: any) => {
    setEmail(e)
  }

  const filterFavoritos = () => {
    if (Email != null) {
      setFavoritos(!Favoritos)
    }
  }

  return (
    <UserContext.Provider value={{ Email, Favoritos, filterEmail, filterFavoritos}}>
      {children}
    </UserContext.Provider>
  )
}

// Hook personalizado para usar o contexto
export const useUser = () => useContext(UserContext)