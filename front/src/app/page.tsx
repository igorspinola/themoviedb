"use client"
import React from "react";
import { useModal } from "@/contexts/ModalContext";
import { useUser } from "@/contexts/UserContext";
//-- COMPONENTS
import Idiomas from "@/components/Idiomas";
import Generos from "@/components/Generos";
import FavFilter from "@/components/FavFilter";
import NavBar from "@/components/NavBar";
import Lista from "@/components/Lista";
import Logar from "@/components/Logar";
import Cadastro from "@/components/Cadastro";
import Text from '@/components/Text';


export default function Home() {
  const { ModalLogin, ModalSignup } = useModal();
  const { Email } = useUser();


  return (
    <main className="flex flex-col justify-between">

      <div className="flex flex-wrap fixed bg-black pb-4">
        <Text as='h1' className='m-6 w-min h-min font-extrabold'>
          Cine<span className="text-red-700">Glota</span>
        </Text>
        {Email && (<FavFilter />)}
        <Idiomas />
        <NavBar /> 
      </div>
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
