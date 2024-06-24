import clsx from 'clsx'
import React from 'react'
import { TextProps } from '@/types'


export default function Text({
  as: Comp= 'p',
  tipo = Comp.valueOf(),
  className,
  children,
  ...restProps
}: TextProps) {

  return (
    <Comp className={clsx('font-bold truncate',
      tipo === 'h1' && 'text-4xl md:text-4xl',
      tipo === 'h2' && 'text-2xl md:text-lg',
      tipo === 'h3' && 'text-lg md:text-base',
      tipo === 'p' && 'text-base md:text-sm',
      className )} {...restProps}>

      {children}
    
    </Comp>
  )
}
