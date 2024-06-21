import '@/app/globals.css';
import './styles.css';
import React from 'react';
import { useFiltro } from '@/contexts/FiltroContext';

export default function Generos() {
  const { filterGenero } = useFiltro();

  return (
    <form id='movie-gender'>

        <input id='adventure' name='gender' value='adventure' type="radio" defaultChecked onClick={filterGenero}/>
        <label htmlFor='adventure' className="adventure">
            Aventura
        </label>
      
        <input id='comedy' name='gender' value='comedy' type="radio" onClick={filterGenero}/>
        <label htmlFor='comedy' className="comedy">
            Comédia
        </label>

        <input id='drama' name='gender' value='drama' type="radio" onClick={filterGenero}/>
        <label htmlFor='drama' className="drama">
          Drama
        </label>   

        <input id='thriller' name='gender' value='thriller' type="radio" onClick={filterGenero}/>
        <label htmlFor='thriller' className="thriller">
            Suspense
        </label>

        <div className='indicador-genero'></div>

    </form>
  )
}
