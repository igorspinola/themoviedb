import '@/app/globals.css'
import './styles.css'
import React from 'react'
//-- CONTEXTs
import { useFiltro } from '@/contexts/FiltroContext'
import { useHMenu } from '@/contexts/HMenuContext'
import { IdProps } from '@/types'
import clsx from 'clsx'


export default function Generos({
  className,
  desktop = false,
  ...restProps
}: IdProps) {
  const { filterGenero } = useFiltro()
  const { HMenuGeneros, toggleHMenuGeneros } = useHMenu()

  if ( desktop ) {
    return (
      <form id='movie-gender' className={clsx(`hidden flex-col`, className )} {...restProps}>
  
          <input id='adventure' name='gender' type='radio' defaultChecked onClick={() => filterGenero(28)}/>
          <label htmlFor='adventure' className='adventure'>
              Aventura
          </label>
        
          <input id='comedy' name='gender' value='comedy' type='radio' onClick={() => filterGenero(35)}/>
          <label htmlFor='comedy' className='comedy'>
              Comédia
          </label>
  
          <input id='drama' name='gender' value='drama' type='radio' onClick={() => filterGenero(18)}/>
          <label htmlFor='drama' className='drama'>
            Drama
          </label>   
  
          <input id='thriller' name='gender' value='thriller' type='radio' onClick={() => filterGenero(53)}/>
          <label htmlFor='thriller' className='thriller'>
              Suspense
          </label>
  
          <div className='indicador-genero'></div>
  
      </form>
    )

  } else {
    return (
      <li className='*:w-full'>
        <button className='bg-slate-800  p-[0.5rem]' onClick={toggleHMenuGeneros}> Gêneros </button>
        {HMenuGeneros && (
          <ul>
            <li>
              <button className='
                w-full p-[0.5rem]
                transition-all duration-1000
                hover:shadow-xl hover:bg-red-800 focus:shadow-xl focus:bg-red-800
              ' onClick={ () => filterGenero(28) }>
                Aventura
              </button>

              <button className='
                w-full p-[0.5rem]
                hover:shadow-xl hover:bg-red-800 focus:shadow-xl focus:bg-red-800
              ' onClick={ () => filterGenero(35) }>
                Comédia
              </button>

              <button className='
                w-full p-[0.5rem]
                hover:shadow-xl hover:bg-red-800 focus:shadow-xl focus:bg-red-800
              ' onClick={ () => filterGenero(18) }>
                Drama
              </button>

              <button className='
                w-full p-[0.5rem]
                hover:shadow-xl hover:bg-red-800 focus:shadow-xl focus:bg-red-800
              ' onClick={ () => filterGenero(53) }>
                Suspense / Terror
              </button>
            </li>
          </ul>
        )}
      </li>
    )
  }
}
