import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://tesseraplanner.app'),
  title: 'Tessera — Piece together a life you love',
  description:
    'A mindful daily planner that helps you build balance across every area of life. Join the beta.',
  openGraph: {
    title: 'Tessera — Piece together a life you love',
    description:
      'A mindful daily planner that helps you build balance across every area of life.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tessera — Piece together a life you love',
    description:
      'A mindful daily planner that helps you build balance across every area of life.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
