'use client'

import { useState } from 'react'

type Platform = 'ios' | 'android' | null

interface Props {
  dark?: boolean
}

export default function SignupForm({ dark = false }: Props) {
  const [platform, setPlatform] = useState<Platform>(null)
  const [email,    setEmail]    = useState('')
  const [status,   setStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message,  setMsg]      = useState('')

  const helperText = platform === 'ios'
    ? 'Use your Apple ID email address'
    : platform === 'android'
    ? 'Use your Gmail address'
    : null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || status === 'loading') return
    setStatus('loading')

    try {
      const res  = await fetch('/api/signup', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email, platform }),
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

  // ── Shared style helpers ──────────────────────────────────────────────────
  const platformBtn = (value: Platform): React.CSSProperties => ({
    flex:            1,
    padding:         '10px 0',
    borderRadius:    12,
    fontSize:        14,
    fontWeight:      600,
    cursor:          'pointer',
    transition:      'all 0.15s ease',
    border:          platform === value
      ? 'none'
      : `1px solid ${dark ? 'rgba(255,255,255,0.3)' : 'rgba(123,95,255,0.25)'}`,
    backgroundColor: platform === value
      ? (dark ? '#fff' : '#7B5FFF')
      : 'transparent',
    color:           platform === value
      ? (dark ? '#7B5FFF' : '#fff')
      : (dark ? 'rgba(255,255,255,0.75)' : '#5C5C7A'),
    boxShadow:       platform === value
      ? (dark ? 'none' : '0 4px 12px rgba(123,95,255,0.3)')
      : 'none',
  })

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
    <div className="space-y-3">

      {/* Platform selector */}
      <div>
        <p
          className="text-xs font-semibold mb-2 text-left"
          style={{ color: dark ? 'rgba(255,255,255,0.65)' : '#9899A6', letterSpacing: '0.05em', textTransform: 'uppercase' }}
        >
          My device
        </p>
        <div className="flex gap-2">
          <button type="button" onClick={() => setPlatform('ios')}     style={platformBtn('ios')}>
            🍎 iOS
          </button>
          <button type="button" onClick={() => setPlatform('android')} style={platformBtn('android')}>
            🤖 Android
          </button>
        </div>
      </div>

      {/* Email input */}
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className={`w-full rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#7B5FFF]/40 transition-shadow ${dark ? 'placeholder-white/40' : ''}`}
            style={{
              backgroundColor: dark ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.75)',
              border:          `1px solid ${dark ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.85)'}`,
              color:           dark ? '#fff' : '#1C1C2E',
            }}
          />
          {helperText && (
            <p
              className="text-xs mt-1.5 text-left"
              style={{ color: dark ? 'rgba(255,255,255,0.6)' : '#9899A6' }}
            >
              {helperText}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full rounded-xl px-6 py-3 text-sm font-semibold transition-opacity"
          style={{
            backgroundColor: dark ? '#fff' : '#7B5FFF',
            color:           dark ? '#7B5FFF' : '#fff',
            opacity:         status === 'loading' ? 0.65 : 1,
            boxShadow:       dark ? 'none' : '0 4px 14px rgba(123,95,255,0.35)',
          }}
        >
          {status === 'loading' ? 'Joining…' : 'Join the Beta'}
        </button>
        <p
          className="text-xs text-center leading-relaxed"
          style={{ color: dark ? 'rgba(255,255,255,0.5)' : '#9899A6' }}
        >
          By entering your email address, you consent to be emailed by the developer regarding beta access and updates.
        </p>
      </form>

      {status === 'error' && message && (
        <p className="text-xs text-center" style={{ color: dark ? 'rgba(255,255,255,0.75)' : '#5C5C7A' }}>
          {message}
        </p>
      )}
    </div>
  )
}
