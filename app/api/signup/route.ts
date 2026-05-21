import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!,
)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as { email?: string; platform?: string }
    const email    = (body.email    ?? '').toLowerCase().trim()
    const platform = (body.platform ?? null)

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 },
      )
    }

    const { error } = await supabase
      .from('beta_signups')
      .insert({ email, platform })

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { error: "You're already on the list! We'll be in touch soon." },
          { status: 409 },
        )
      }
      throw error
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[/api/signup]', err)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    )
  }
}
