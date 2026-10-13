import Link from 'next/link'
import type { Metadata } from 'next'
import TesseraLogo from '@/components/TesseraLogo'

export const metadata: Metadata = {
  title: 'Unsubscribed — Tessera',
  robots: { index: false },
}

export default function UnsubscribedPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ color: '#1C1C2E' }}
    >
      <TesseraLogo size={72} />
      <h1 className="mt-8 text-3xl font-bold" style={{ letterSpacing: '-0.01em' }}>
        You&apos;re unsubscribed
      </h1>
      <p className="mt-4 text-lg max-w-md leading-relaxed" style={{ color: '#5C5C7A' }}>
        You won&apos;t get any more emails from this series. Your Tessera account
        and data aren&apos;t affected.
      </p>
      <Link
        href="/"
        className="mt-8 text-sm font-semibold hover:underline"
        style={{ color: '#7B5FFF' }}
      >
        Back to tesseraplanner.app
      </Link>
    </main>
  )
}
