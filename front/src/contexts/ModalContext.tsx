'use client'
import React, { createContext, useContext, useState } from 'react'
import { ModalContextType, ContextProps } from '@/types'

// Estado inicial
const initialState: ModalContextType = {
  ModalLogin: false,
  ModalSignup: false,
  toggleModalLogin: () => {},
  toggleModalSignup: () => {},
}

// Criando o contexto
const ModalContext = createContext<ModalContextType>(initialState)

// Criando o provider
export const ModalProvider: React.FC<ContextProps> = ({ children }) => {
  const [ModalLogin, setModalLogin] = useState(false)
  const [ModalSignup, setModalSignup] = useState(false)

  const toggleModalLogin = () => {
    setModalLogin(!ModalLogin)
    console.log(ModalLogin)
  }
  const toggleModalSignup = () => {
    setModalSignup(!ModalSignup)
    console.log(ModalSignup)
  }

  return (
    <ModalContext.Provider value={{ ModalLogin, ModalSignup, toggleModalLogin, toggleModalSignup }}>
      {children}
    </ModalContext.Provider>
  )
}

// Hook personalizado para usar o contexto
export const useModal = () => useContext(ModalContext)