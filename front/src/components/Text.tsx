import clsx from 'clsx';
import React from 'react';

interface TextProps {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  type?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Text({
  as: Comp= 'p',
  type = Comp.valueOf(),
  className,
  children,
  ...restProps
}: TextProps) {

  return (
    <Comp className={clsx('font-bold truncate',
      type === 'h1' && 'text-3xl md:text-xl',
      type === 'h2' && 'text-2xl md:text-lg',
      type === 'h3' && 'text-lg md:text-base',
      type === 'p' && 'text-base md:text-sm',
      className )} {...restProps}>

      {children}
    
    </Comp>
  )
}
