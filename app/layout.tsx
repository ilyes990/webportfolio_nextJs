import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Ilyes Sissaoui Portfolio',
  description: 'Mobile Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins`}>
        {children}
      </body>
    </html>
  )
}

