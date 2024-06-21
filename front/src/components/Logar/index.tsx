import '../../app/globals.css';
import './styles.css';
import React, { useState } from 'react';
import clsx from 'clsx';
import { useModal } from '@/contexts/ModalContext';

interface CadastroProps {
  className?: string;
}
//-- FUNCTION
export default function Logar({className}: CadastroProps) {
  const { toggleModalLogin } = useModal();
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [idade, setIdade] = useState<number>(0);
  const [cidade, setCidade] = useState<string>('');
  const [estado, setEstado] = useState<string>('');

  const fFormulario = (setter: React.Dispatch<React.SetStateAction<any>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };

  // const fCriar = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await criarUsuario({ email, senha, nome, idade, cidade, estado });
  //     alert('Usuario criado com sucesso!');
  //     toggleModalUm();
  //   } catch (error) {
  //     console.error('Erro ao enviar os dados: ', error);
  //   }
  // };

  return (

    <section id='cadastro' className={clsx('efeito-modal', className )} >
      <div className='container-modal'>
        <h2 className='titulo-modal'>Log in</h2>
        
        <form className='form-modal' method="post">

          <label htmlFor='email' className='col-span-7 form-label'>
            E-mail :
            <input id='email' className='form-input'onChange={fFormulario(setEmail)}/>
          </label>

          <label htmlFor='senha' className='col-span-7 form-label'>
            Senha :
            <input id='senha' className='form-input' onChange={fFormulario(setSenha)}/>
          </label>

          <div className='botoes-form'>
            <button className='botao-enviar'>Log in</button>
            <button className='botao-cancelar' onClick={toggleModalLogin}>Cancelar</button>
          </div>

        </form>
      
      </div>
    </section>
  )
};