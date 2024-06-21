"use client"
import React from "react";
import { useModal } from "@/contexts/ModalContext";
//-- COMPONENTS
import Idiomas from "@/components/Idiomas";
import Generos from "@/components/Generos";
import NavBar from "@/components/NavBar";
import Lista from "@/components/Lista";
import Logar from "@/components/Logar";
import Cadastro from "@/components/Cadastro";


export default function Home() {
  const { ModalLogin, ModalSignup } = useModal();

  return (
    <main className="flex flex-col justify-between">
      <Idiomas />
      <NavBar /> 
      <Generos />
            
      {/* <Lista /> */}
      <Lista />
      {ModalLogin ? (
        <Logar className='transition-opacity z-50 pointer-events-auto' />
      ) : (
        <Logar className='opacity-0 -z-10' />
      )}

      {ModalSignup  ? (
        <Cadastro className='transition-opacity z-50 pointer-events-auto' />
      ) : (
        <Cadastro className='opacity-0 -z-10' />
      )}

    </main>
  );
}
