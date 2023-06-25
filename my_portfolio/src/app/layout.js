import { Inter } from 'next/font/google'

import './globals.css'
import { Footer, NavBar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'dean | home',
  description: 'My portfolio home page.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />

        {children}

        <Footer />
      </body>
    </html>
  )
}
