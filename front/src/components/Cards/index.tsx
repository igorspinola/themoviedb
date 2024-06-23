import '../../app/globals.css';
import './styles.css';
import React from 'react';
import Image from 'next/image';
import Text from '../Text';
//-- ASSETS
import { FaRegHeart } from "react-icons/fa";
import espanhol from '../../assets/espanhol.svg';
import italiano from '../../assets/italiano.svg';
import frances from '../../assets/frances.svg';
import alemao from '../../assets/alemao.svg';
import FavButton from '../FavButton';

interface CdProps {
  id: number;
  poster?: any;
  titulo: string;
  ano: any;
  idioma: string;
  nota: number;
}


export default function Cards({ id, poster, titulo, ano, idioma, nota }: CdProps) {
  let lingua;
  switch (idioma) {
    case "es":
      lingua = espanhol;
      break;
    case "it":
      lingua = italiano;
      break;
    case "fr":
      lingua = frances;
      break;
    case "de":
      lingua = alemao;
      break;
  }

  const ano_corrigido = ano.slice(0, 4)
  const nota_corrigida = nota.toFixed(1)


  return (
    <div className='cards'>
      
      <div >
        <Image src={poster} alt={titulo} width={300} height={300} className='mb-4' />
        <Text as='h2'>{titulo}</Text>
      </div>

      <div>
        <div className='flex justify-between'>
          <Text as='p'>{ano_corrigido}</Text>
          <Image src={lingua} alt='.' width={20} height={20} />
        </div>

        <Text as='p'>{nota_corrigida}</Text>

        <div className='flex justify-between text-xs'>
          <button>Detalhes...</button>
          <FavButton movieId={id} title={titulo} voteAverage={nota} releaseDate={ano} originalLanguage={idioma} posterPath={poster} />
        </div>
      </div>

    </div>
  )
}
