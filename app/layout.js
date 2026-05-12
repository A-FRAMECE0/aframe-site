import { Cinzel, Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '600', '700'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'A-FR&ME — The Architecture of Ideas',
  description:
    'Code. Design. Écriture. Une seule architecture, une seule signature. Studio de création digital fondé par TCHANI Wadou Djawada.',
  keywords: ['développement web', 'design', 'branding', 'écriture', 'Togo', 'Lomé', 'A-FRAME'],
  openGraph: {
    title: 'A-FR&ME — The Architecture of Ideas',
    description: 'Code. Design. Écriture. Une seule architecture.',
    url: 'https://a-frame.studio',
    siteName: 'A-FR&ME',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${cinzel.variable} ${cormorant.variable} ${montserrat.variable}`}>
      <body className="font-montserrat">
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
