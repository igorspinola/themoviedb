import '../../app/globals.css'
import './styles.css'
import React, { useState } from 'react'
import axios from 'axios'
import clsx from 'clsx'
import { URL_BACK } from '@/services/api'
//-- CONTEXTs
import { useModal } from '@/contexts/ModalContext'


interface CadastroProps {
  className?: string
}
//-- FUNCTION
export default function Cadastro({className}: CadastroProps) {
  const { toggleModalSignup } = useModal()
  
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [age, setAge] = useState<number>(0)

  const fFormulario = (setter: React.Dispatch<React.SetStateAction<any>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value)
    console.log(e.target.value)
  }

  const fCriar = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.post(`${URL_BACK}/user`, {
          username: username,
          email: email,
          password: password,
          age: age
      })
      alert('Usuário criado com sucesso!')
      toggleModalSignup()
    } catch (error) {
      console.error('Erro ao enviar os dados: ', error)
    }
  }

  return (

    <section id='cadastro' className={clsx('efeito-modal', className )} >
      <div className='container-modal'>
        <h2 className='titulo-modal'>Sign up</h2>
        
        <form className='form-modal' onSubmit={fCriar} method='post'>
          <label htmlFor='username' className='form-label col-span-5'>
            Username :
            <input id='username' className='form-input' type='text' required onChange={fFormulario(setUsername)}/>
          </label>

          <label htmlFor='age' className='col-span-2 form-label'>
            Idade :
            <input id='age' className='form-input' type='number' required onChange={fFormulario(setAge)}/>
          </label>

          <label htmlFor='email' className='col-span-7 form-label'>
            E-mail :
            <input id='email' className='form-input' type='email' required onChange={fFormulario(setEmail)}/>
          </label>
          <label htmlFor='password' className='col-span-7 form-label'>
            Senha :
            <input id='password' className='form-input' type='password' required onChange={fFormulario(setPassword)}/>
          </label>

          <div className='botoes-form'>
            <button className='botao-enviar' type='submit'>Sign up</button>
            <button className='botao-cancelar' type='button' onClick={toggleModalSignup}>Cancelar</button>
          </div>
        </form>
      
      </div>
    </section>
  )
}