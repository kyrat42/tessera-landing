import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Uses the same Supabase project as the mobile app.
// Values come from .env.local — never exposed to the browser.
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!,
)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as { email?: string }
    const email = (body.email ?? '').toLowerCase().trim()

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 },
      )
    }

    const { error } = await supabase
      .from('beta_signups')
      .insert({ email })

    if (error) {
      // Postgres unique-violation code — email is already on the list
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
