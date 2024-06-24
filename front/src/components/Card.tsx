import React from 'react'
import Image from 'next/image'
import { CardProps } from '@/types'
//--COMPONENTs
import Text from './Text'
import FavButton from './FavButton'
//--ASSETs
import espanhol from '../../public/espanhol.svg'
import italiano from '../../public/italiano.svg'
import frances from '../../public/frances.svg'
import alemao from '../../public/alemao.svg'
import { RxDividerVertical } from 'react-icons/rx'
import { SiPrivatedivision } from 'react-icons/si'


export const Card = ({ id, poster, titulo, ano, idioma, nota }: CardProps) => {
  let lingua
  switch (idioma) {
    case "es":
      lingua = espanhol
      break
    case "it":
      lingua = italiano
      break
    case "fr":
      lingua = frances
      break
    case "de":
      lingua = alemao
      break
  }


  return (
    <div className='
      flex flex-col justify-between
      w-[22.5rem] h-auto p-[1.5rem] gap-[0.5rem]
      bg-gradient-to-bl from-slate-500/30 to-slate-600/10 
      border-2 border-y-red-600/50 border-x-rose-500/50 
      backdrop-blur-sm shadow-md shadow-red-900 rounded-xl
      md:w-[15rem]
    '>
      
      <Image src={poster} alt={titulo} width={300} height={300} />
      <Text as='h2'> {titulo} </Text>

      <div className='flex justify-between'>
        <Text as='p'> {ano} </Text>
        <SiPrivatedivision className='fill-red-800 scale-[0.75]' />
        <Text as='p'> {nota} </Text>
        <SiPrivatedivision className='fill-red-800 scale-[0.75]' />
        <Image src={lingua} alt='.' width={20} height={20} />
      </div>

      <div className='flex justify-between mt-[0.5rem] text-xs'>
        <button>Detalhes...</button>
        <FavButton movieId={id} title={titulo} voteAverage={nota} originalLanguage={idioma} posterPath={poster} />
      </div>

    </div>
  )
}
