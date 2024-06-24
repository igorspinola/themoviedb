import React from 'react'
import clsx from 'clsx'
import { HMenuProps } from '@/types'
//-- COMPONENTs
import Idiomas from './Idiomas'
import Generos from './Generos'
import NavBar from './NavBar'


export default function HMenu({
  className,
  ...restProps
}: HMenuProps) {

  return (
    <ul className={clsx(`
      z-10 h-menu opacity-0 flex flex-col items-endjustify-self-end absolute z-40
      w-full mt-[5rem] 
      bg-gradient-to-bl bg-slate-700 shadow-md shadow-red-900
      transition-all duration-1000 md:hidden
    `, className )} {...restProps}>

      <Idiomas />
            
      <Generos />
      <div className='flex justify-center py-2 bg-black'>
        <NavBar className='flex' />
      </div>

    </ul>
  )
}
