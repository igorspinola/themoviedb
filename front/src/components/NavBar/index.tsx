"use client"
import './styles.css';
import React from 'react';
import { useModal } from '@/contexts/ModalContext';
import { useUser } from '@/contexts/UserContext';

export default function NavBar() {
  const { toggleModalLogin, toggleModalSignup } = useModal();
  const { Email, filterEmail } = useUser();

  if (Email != null) {
    return (
      <div className='navbar'>
        <div className='flex gap-4'>
          <div className='w-4 h-4 bg-white rounded-full'></div>
          <p>{Email}</p>
        </div>
        <button className='botao-signup' onClick={() => filterEmail(null)}> Log out </button>
      </div>
    )
  } else {
    return (
      <div className='navbar'>
        <button className='botao-login' onClick={toggleModalLogin}> Login </button>
        <button className='botao-signup' onClick={toggleModalSignup}> Sign Up </button>
      </div>
    )
  }
};