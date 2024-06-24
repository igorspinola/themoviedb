'use client'
import React from 'react'
import clsx from 'clsx'
import { IdProps } from '@/types'
//-- CONTEXTs
import { useModal } from '@/contexts/ModalContext'
import { useUser } from '@/contexts/UserContext'
//-- COMPONENTs
import { Btn } from './StyledElements'
import Text from './Text'


export default function NavBar({
  className,
  desktop = false,
  ...restProps
}: IdProps) {
  const { toggleModalLogin, toggleModalSignup } = useModal()
  const { Email, filterEmail } = useUser()

  return (
    <div className={clsx(`
      flex flex-col content-center
      w-[90%] h-fit mx-[4%] gap-[0.5rem]
      text-sm font-bold
      md:ml-[1rem] md:w-fit
    `,
      desktop && `hidden md:flex`,
    className )} {...restProps}>

      {Email != null ? (
        <div className='flex flex-col gap-[0.75rem]'>
          <Text as='p'> {Email} </Text>
          <Btn type2 onClick={ () => filterEmail(null) }> Log out </Btn>
        </div>
        ) : (
        <div className='flex flex-col gap-[0.75rem]'>
          <Btn type1 onClick={toggleModalLogin}> Login </Btn>
          <Btn type2 onClick={toggleModalSignup}> Sign Up </Btn>
        </div>
      )}

    </div>
  )
}