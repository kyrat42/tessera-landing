'use client'

import { useState } from 'react'

interface Props {
  dark?: boolean
}

export default function SignupForm({ dark = false }: Props) {
  const [email,   setEmail]  = useState('')
  const [status,  setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMsg]    = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || status === 'loading') return
    setStatus('loading')

    try {
      const res  = await fetch('/api/signup', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email }),
      })
      const data = await res.json() as { error?: string }

      if (res.ok) {
        setStatus('success')
        setMsg("You're on the list! We'll reach out when your spot is ready. 🎉")
        setEmail('')
      } else {
        setStatus('error')
        setMsg(data.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMsg('Something went wrong. Please try again.')
    }
  }

  // ── Success state ─────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div
        className="rounded-2xl px-6 py-4 text-sm font-medium text-center leading-relaxed"
        style={{
          backgroundColor: dark ? 'rgba(255,255,255,0.18)' : 'rgba(123,95,255,0.08)',
          border:          `1px solid ${dark ? 'rgba(255,255,255,0.3)' : 'rgba(123,95,255,0.2)'}`,
          color:           dark ? '#fff' : '#7B5FFF',
        }}
      >
        {message}
      </div>
    )
  }

  // ── Form ─────────────────────────────────────────────────────────────────
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className={`flex-1 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#7B5FFF]/40 transition-shadow ${dark ? 'placeholder-white/40' : ''}`}
          style={{
            backgroundColor: dark ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.75)',
            border:          `1px solid ${dark ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.85)'}`,
            color:           dark ? '#fff' : '#1C1C2E',
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-xl px-6 py-3 text-sm font-semibold transition-opacity whitespace-nowrap"
          style={{
            backgroundColor: dark ? '#fff' : '#7B5FFF',
            color:           dark ? '#7B5FFF' : '#fff',
            opacity:         status === 'loading' ? 0.65 : 1,
            boxShadow:       dark ? 'none' : '0 4px 14px rgba(123,95,255,0.35)',
          }}
        >
          {status === 'loading' ? 'Joining…' : 'Join the Beta'}
        </button>
      </form>

      {status === 'error' && message && (
        <p
          className="mt-2 text-xs text-center"
          style={{ color: dark ? 'rgba(255,255,255,0.75)' : '#5C5C7A' }}
        >
          {message}
        </p>
      )}
    </div>
  )
}
