"use client"
import React from "react";
import { useModal } from "@/contexts/ModalContext";
//-- COMPONENTS
import NavBar from "@/components/NavBar";
import Lista from "@/components/Lista";
import Logar from "@/components/Logar";
import Cadastro from "@/components/Cadastro";


export default function Layout({
  children
}: Readonly<{children: React.ReactNode;}>
) {

  return (
    <main className="flex flex-col justify-between">
      
      <NavBar /> 
      
      {children}

    </main>
  );
}
