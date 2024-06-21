"use client"
import React, { createContext, useContext, useState } from 'react';

// Definindo o tipo do estado e das funções de controle
interface ModalContextType {
  ModalLogin: boolean;
  ModalSignup: boolean;
  toggleModalLogin: () => void;
  toggleModalSignup: () => void;
}

// Estado inicial
const initialState: ModalContextType = {
  ModalLogin: false,
  ModalSignup: false,
  toggleModalLogin: () => {},
  toggleModalSignup: () => {},
};
interface ModalProps {
  children: React.ReactNode;
}
// Criando o contexto
const ModalContext = createContext<ModalContextType>(initialState);

// Criando o provider
export const ModalProvider: React.FC<ModalProps> = ({ children }) => {
  const [ModalLogin, setModalLogin] = useState(false);
  const [ModalSignup, setModalSignup] = useState(false);

  const toggleModalLogin = () => {
    setModalLogin(!ModalLogin);
    console.log(ModalLogin);
  };
  const toggleModalSignup = () => {
    setModalSignup(!ModalSignup);
    console.log(ModalSignup);
  }

  return (
    <ModalContext.Provider value={{ ModalLogin, ModalSignup, toggleModalLogin, toggleModalSignup }}>
      {children}
    </ModalContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useModal = () => useContext(ModalContext);