'use client'
import '@/app/globals.css'
import './styles.css'
import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { IdProps } from '@/types'
//-- CONTEXTs
import { useFiltro } from '../../contexts/FiltroContext'
import { useHMenu } from '@/contexts/HMenuContext'
//-- ASSETs
import espanhol from '../../../public/espanhol.svg'
import italiano from '../../../public/italiano.svg'
import frances from '../../../public/frances.svg'
import alemao from '../../../public/alemao.svg'



export default function Idiomas({
  className,
  desktop = false,
  ...restProps
}: IdProps) {

  const { filterIdioma } = useFiltro()
  const { HMenuIdiomas, toggleHMenuIdiomas } = useHMenu()

  if ( desktop ) {
    return (
      <form id='movie-language' {...restProps}>

          <input id='spanish' name='language' type='radio' defaultChecked onClick={() => filterIdioma('es')} />
          <label htmlFor='spanish' className='spanish'>
            <h2>Espanhol</h2>
            <span>
              <Image src={espanhol} width={32} height={32} alt={'.'} />
            </span>
          </label>
        
          <input id='italian' name='language' type='radio' onClick={() => filterIdioma('it')}/>
          <label htmlFor='italian' className='italian'>
            <h2>Italiano</h2>
            <span>
              <Image src={italiano} width={32} height={32} alt={'.'} />
            </span>
          </label>

          <input id='french' name='language' type='radio' onClick={ () => filterIdioma('fr') }/>
          <label htmlFor='french' className='french'>
            <h2>Francês</h2>
            <span>
              <Image src={frances} width={32} height={32} alt={'.'} />
            </span>
          </label>   

          <input id='german' name='language' type='radio' onClick={() => filterIdioma('de') }/>
          <label htmlFor='german' className='german'>
            <h2>Alemão</h2>
            <span>
              <Image src={alemao} width={32} height={32} alt={'.'} />
            </span>
          </label>

          <div className='indicador-idioma'></div>

      </form>
    )

  } else {
    return (
      <li className={clsx('*:w-full', className )} {...restProps}>
        <button className='bg-slate-800 p-[0.5rem]' onClick={toggleHMenuIdiomas}> Idiomas </button>
        {HMenuIdiomas && (
          <ul>
            <li>
              <button className='
                w-full p-[0.5rem]
                hover:shadow-xl hover:bg-red-800 focus:shadow-xl focus:bg-red-800
              ' onClick={ () => filterIdioma('es') }>
                Espanhol
              </button>

              <button className='
                w-full p-[0.5rem]
                hover:shadow-xl hover:bg-red-800 focus:shadow-xl focus:bg-red-800
              ' onClick={ () => filterIdioma('it') }>
                Italiano
              </button>

              <button className='
                w-full p-[0.5rem]
                hover:shadow-xl hover:bg-red-800 focus:shadow-xl focus:bg-red-800
              ' onClick={ () => filterIdioma('fr') }>
                Francês
              </button>

              <button className='
                w-full p-[0.5rem]
                hover:shadow-xl hover:bg-red-800 focus:shadow-xl focus:bg-red-800
              ' onClick={ () => filterIdioma('de') }>
                Alemão
              </button>
            </li>
          </ul>
        )}
      </li>
    )
  }
}
