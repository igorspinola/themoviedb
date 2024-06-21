import '@/app/globals.css';
import './styles.css';
import React from 'react';
import Image from 'next/image';
import { useFiltro } from '@/contexts/FiltroContext';
//-- ASSETS
import espanhol from '@/assets/espanhol.svg';
import italiano from '@/assets/italiano.svg';
import frances from '@/assets/frances.svg';
import alemao from '@/assets/alemao.svg';
import { TMDB_DE, TMDB_ES, TMDB_FR, TMDB_IT } from '@/services/api';

export default function Idiomas() {
  const { filterIdioma } = useFiltro();

  return (
    <form id='movie-language'>

        <input id='spanish' name='language' value={TMDB_ES} type="radio" defaultChecked onClick={() => filterIdioma(TMDB_ES)} />
        <label htmlFor='spanish' className="spanish">
          <h2>Espanhol</h2>
          <span>
            <Image src={espanhol} width={32} height={32} alt={"."} />
          </span>
        </label>
      
        <input id='italian' name='language' value={TMDB_IT} type="radio" onClick={() => filterIdioma(TMDB_IT)}/>
        <label htmlFor='italian' className="italian">
          <h2>Italiano</h2>
          <span>
            <Image src={italiano} width={32} height={32} alt={"."} />
          </span>
        </label>

        <input id='french' name='language' value={TMDB_FR} type="radio" onClick={ () => filterIdioma(TMDB_FR) }/>
        <label htmlFor='french' className="french">
          <h2>Francês</h2>
          <span>
            <Image src={frances} width={32} height={32} alt={"."} />
          </span>
        </label>   

        <input id='german' name='language' value={TMDB_DE} type="radio" onClick={() => filterIdioma(TMDB_DE) }/>
        <label htmlFor='german' className="german">
          <h2>Alemão</h2>
          <span>
            <Image src={alemao} width={32} height={32} alt={"."} />
          </span>
        </label>

        <div className='indicador-idioma'></div>

    </form>
  )
}
