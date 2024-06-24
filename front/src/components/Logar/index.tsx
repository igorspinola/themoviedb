import '../../app/globals.css'
import './styles.css'
import React, { useState } from 'react'
import clsx from 'clsx'
import { useModal } from '@/contexts/ModalContext'
import { URL_BACK } from '@/services/api'
import axios from 'axios'
import { redirect } from 'next/navigation'
import { useUser } from '@/contexts/UserContext'
import { revalidatePath } from 'next/cache'

interface CadastroProps {
  className?: string
}
//-- FUNCTION
export default function Logar({className}: CadastroProps) {
  const { toggleModalLogin } = useModal()
  const { filterEmail } = useUser()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const fFormulario = (setter: React.Dispatch<React.SetStateAction<any>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value)
  }

  const fLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${URL_BACK}/login`, { 
      email: email,
      password: password,
      })

      if (response.data.status_code === 200) {
        filterEmail(email)
        toggleModalLogin()
      }
    } catch (error) {
      console.error('Erro ao enviar os dados: ', error) 
    }
  }

  return (

    <section id='cadastro' className={clsx('efeito-modal', className )} >
      <div className='container-modal'>
        <h2 className='titulo-modal'>Log in</h2>
        
        <form className='form-modal' onSubmit={fLogin} method='post'>

          <label htmlFor='email-login' className='col-span-7 form-label'>
            E-mail :
            <input id='email-login' className='form-input' type='email' required onChange={fFormulario(setEmail)}/>
          </label>

          <label htmlFor='password-login' className='col-span-7 form-label'>
            Senha :
            <input id='password-login' className='form-input' type='password' required onChange={fFormulario(setPassword)}/>
          </label>

          <div className='botoes-form'>
            <button className='botao-enviar' type='submit'>Log in</button>
            <button className='botao-cancelar' type='button' onClick={toggleModalLogin}>Cancelar</button>
          </div>

        </form>
      
      </div>
    </section>
  )
}