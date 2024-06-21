"use client"
import './styles.css';
import React from 'react';
import { useModal } from '@/contexts/ModalContext';

export default function NavBar() {
  const { toggleModalLogin, toggleModalSignup } = useModal();

  return (
    <div className='navbar'>
      <button className='botao-login' onClick={toggleModalLogin}> Login </button>
      <button className='botao-signup' onClick={toggleModalSignup}> Sign Up </button>
    </div>
  )
};