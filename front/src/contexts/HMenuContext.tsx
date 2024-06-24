'use client'
import React, { createContext, useContext, useState } from 'react'
import { HMenuContextType, ContextProps } from '@/types'

// Estado inicial
const initialState: HMenuContextType = {
  HMenuPrincipal: false,
  HMenuIdiomas: false,
  HMenuGeneros: false,
  toggleHMenuPrincipal: () => {},
  toggleHMenuIdiomas: () => {},
  toggleHMenuGeneros: () => {}
}

// Criando o contexto
const HMenuContext = createContext<HMenuContextType>(initialState)

// Criando o provider
export const HMenuProvider: React.FC<ContextProps> = ({ children }) => {
  const [HMenuPrincipal, setHMenuPrincipal] = useState(false)
  const [HMenuIdiomas, setHMenuIdiomas] = useState(false)
  const [HMenuGeneros, setHMenuGeneros] = useState(false)

  const toggleHMenuPrincipal = () => {
    setHMenuPrincipal(!HMenuPrincipal)
  }
  const toggleHMenuIdiomas = () => {
    setHMenuIdiomas(!HMenuIdiomas)
  }
  const toggleHMenuGeneros = () => {
    setHMenuGeneros(!HMenuGeneros)
  }

  return (
    <HMenuContext.Provider value={{ HMenuPrincipal, HMenuIdiomas, HMenuGeneros, toggleHMenuPrincipal, toggleHMenuIdiomas, toggleHMenuGeneros }}>
      {children}
    </HMenuContext.Provider>
  )
}

// Hook personalizado para usar o contexto
export const useHMenu = () => useContext(HMenuContext)