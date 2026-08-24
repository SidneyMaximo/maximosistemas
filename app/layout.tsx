import React from "react"
import type { Metadata, Viewport } from 'next'
import { Barlow, Barlow_Condensed, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: '--font-barlow',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  variable: '--font-barlow-condensed',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: '--font-ibm-plex-mono',
})

export const metadata: Metadata = {
  title: 'Criação de Sites para Pequenos Negócios | MaximoSistemas',
  description: 'Criamos sites profissionais para lanchonetes, barbearias, salões e pequenos negócios. Facilite o contato com seus clientes e fortaleça sua presença online.',
  keywords: [
    'criação de sites para pequenos negócios',
    'site para lanchonete',
    'site para barbearia',
    'site profissional para empresa local',
    'criação de sistemas web',
    'MaximoSistemas',
    'cardápio online',
    'site para salão de beleza'
  ],
  openGraph: {
    title: 'Criação de Sites para Pequenos Negócios | MaximoSistemas',
    description: 'Criamos sites profissionais para lanchonetes, barbearias, salões e pequenos negócios. Facilite o contato com seus clientes e fortaleça sua presença online.',
    url: 'https://maximosistemas.com',
    siteName: 'MaximoSistemas',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Criação de Sites para Pequenos Negócios | MaximoSistemas',
    description: 'Criamos sites profissionais para lanchonetes, barbearias, salões e pequenos negócios. Facilite o contato com seus clientes e fortaleça sua presença online.',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${barlow.variable} ${barlowCondensed.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
