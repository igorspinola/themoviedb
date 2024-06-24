import React from 'react'
import clsx from 'clsx'
//-- CONTEXTs
import { useHMenu } from '@/contexts/HMenuContext'
import { useUser } from '@/contexts/UserContext'
//-- COMPONENTs
import FavFilter from './FavFilter'
import HMenu from './HMenu'
import Idiomas from './Idiomas'
import NavBar from './NavBar'
import HMButton from './HMButton'
import SearchBar from './SearchBar'
import Text from './Text'


export default function Header() {
  const { HMenuPrincipal, toggleHMenuPrincipal } = useHMenu()
  const { Email } = useUser()

  return (
    <div className='
      z-10 fixed flex flex-col
      w-screen h-fit p-[1rem] 
      bg-black
      md:justify-start
    '>

      <div className='
        flex items-center justify-between items-end
        w-full h-fit px-[4%] gap-[1rem]
        md:flex-row md:pr-[4rem] md:pl-0
      '>
        <Text as='h1' className='w-min h-min font-extrabold'>
          Cine<span className='text-red-700'>Glota</span>
        </Text>

        {Email && (<FavFilter />)}

        <Idiomas desktop />

        <HMButton />

        <HMenu className={clsx( HMenuPrincipal && 'opacity-100 transition-all duration-1000' )} />
      </div>  

      <div className='
        justify-self-end flex flex-col justify-between items-end
        w-full h-fit px-[4%] gap-[1rem]
        md:flex-row md:pr-[4rem] md:pl-0
      '>
        <NavBar desktop />
        <SearchBar />
      </div>

    </div>
  )
}
