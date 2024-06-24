import React from 'react'
import clsx from 'clsx'

interface BtnProps {
  className?: string
  type1?: boolean
  type2?: boolean
  onClick?: () => void
  children: React.ReactNode
}
export const Btn = ({
  className,
  type1 = false,
  type2 = false,
  onClick,
  children
}: BtnProps) => {

  return (
    <button className={clsx(`
      w-full px-[1rem] py-[0.25rem] 
      shadow-md shadow-red-800 rounded-full text-center
      md:w-[9rem]
    `,
      type1 && `bg-gradient-to-br from-rose-500/50 to-red-600/50`,
      type2 && `border-2 border-y-red-600/50 border-x-rose-500/50`,
    className )} onClick={onClick}>
      {children}
    </button>
  )
}