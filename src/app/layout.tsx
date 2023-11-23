import type { Metadata } from 'next'
import { Montserrat, Space_Grotesk } from 'next/font/google'
import './globals.scss'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'

const mont = Montserrat({ subsets: ['latin'] })
const space = Space_Grotesk({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'RCW108',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${mont.className} ${space.className}`}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
