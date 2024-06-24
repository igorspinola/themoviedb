import './globals.css'
import type { Metadata } from 'next'
import { FiltroProvider } from '@/contexts/FiltroContext'
import { ModalProvider } from '@/contexts/ModalContext'
import { Poppins } from 'next/font/google'
import { UserProvider } from '@/contexts/UserContext'
import { HMenuProvider } from '@/contexts/HMenuContext'

const poppins = Poppins({weight:  ['400', '500', '600', '700', '800', '900'], subsets: ['latin-ext']})

export const metadata: Metadata = {
  title: 'CineGlota',
  description: 'Aprenda novos idiomas com filmes e séries',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <body className={poppins.className}>

        <UserProvider>
          <FiltroProvider>
            <ModalProvider>
              <HMenuProvider>
                
                {children}

              </HMenuProvider>
            </ModalProvider>
          </FiltroProvider>
        </UserProvider>
      
      </body>
    </html>
  )
}
