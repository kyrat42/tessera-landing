import TesseraLogo from '@/components/TesseraLogo'
import Link from 'next/link'

export const metadata = {
  title: 'Account Deletion — Tessera',
  description: 'How to request deletion of your Tessera account and data.',
}

export default function AccountDeletionPage() {
  return (
    <main style={{ color: '#1C1C2E' }} className="min-h-screen font-sans">

      {/* ── Nav ───────────────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4"
        style={{
          backgroundColor: 'rgba(237,241,255,0.82)',
          backdropFilter:  'blur(14px)',
          borderBottom:    '1px solid rgba(255,255,255,0.55)',
        }}
      >
        <Link href="/" className="flex items-center gap-3">
          <TesseraLogo size={28} />
          <span className="font-bold text-base" style={{ color: '#1C1C2E' }}>Tessera</span>
        </Link>
      </nav>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-6 pt-36 pb-24">

        <h1
          className="text-4xl font-bold mb-4"
          style={{ color: '#1C1C2E', letterSpacing: '-0.02em' }}
        >
          Account Deletion Request
        </h1>
        <p className="text-lg mb-12" style={{ color: '#5C5C7A' }}>
          You can request the deletion of your Tessera account and all associated
          data at any time. We will process your request within <strong>30 days</strong>.
        </p>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6" style={{ color: '#1C1C2E' }}>
            How to request account deletion
          </h2>
          <div className="space-y-4">
            {[
              {
                num: '1',
                title: 'Send us an email',
                body: <>Email <a href="mailto:admin@tesseraplanner.app" style={{ color: '#7B5FFF' }}>admin@tesseraplanner.app</a> from the address associated with your Tessera account.</>,
              },
              {
                num: '2',
                title: 'Use the subject line: "Account Deletion Request"',
                body: 'This helps us locate and process your request quickly.',
              },
              {
                num: '3',
                title: 'We\'ll confirm and process',
                body: 'You\'ll receive a confirmation email once your account and data have been deleted. This will happen within 30 days of your request.',
              },
            ].map(({ num, title, body }) => (
              <div
                key={num}
                className="flex gap-5 rounded-2xl p-5"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.55)',
                  border:          '1px solid rgba(255,255,255,0.8)',
                  borderTopColor:  'rgba(255,255,255,0.97)',
                  boxShadow:       '0 4px 24px rgba(58,95,204,0.07)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: 'rgba(123,95,255,0.1)', color: '#7B5FFF' }}
                >
                  {num}
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#1C1C2E' }}>{title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#5C5C7A' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What gets deleted */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4" style={{ color: '#1C1C2E' }}>
            What gets deleted
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#5C5C7A' }}>
            Upon confirmed deletion, the following data is permanently removed:
          </p>
          <ul className="space-y-2 text-base" style={{ color: '#5C5C7A' }}>
            {[
              'Your account credentials (email address and password)',
              'All areas of life you created',
              'Your weekly template and all schedule blocks',
              'All tasks and planner entries',
              'Your priority levels and settings',
              'All other personal data associated with your account',
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <span style={{ color: '#7B5FFF' }} className="mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What is retained */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4" style={{ color: '#1C1C2E' }}>
            What is retained and for how long
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#5C5C7A' }}>
            After your account is deleted, we may retain anonymised, non-identifiable
            usage data (such as aggregate app statistics) that cannot be linked back
            to you. No personally identifiable information is kept after deletion.
            Database backups containing your data are purged within <strong>30 days</strong> of
            your deletion request.
          </p>
        </section>

        {/* Contact */}
        <section
          className="rounded-2xl p-6"
          style={{
            backgroundColor: 'rgba(123,95,255,0.06)',
            border:          '1px solid rgba(123,95,255,0.15)',
          }}
        >
          <p className="text-base font-semibold mb-1" style={{ color: '#1C1C2E' }}>Questions?</p>
          <p className="text-sm leading-relaxed" style={{ color: '#5C5C7A' }}>
            Contact us at{' '}
            <a href="mailto:admin@tesseraplanner.app" style={{ color: '#7B5FFF' }}>
              admin@tesseraplanner.app
            </a>{' '}
            and we&apos;ll be happy to help.
          </p>
        </section>

      </div>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer
        className="py-10 px-6 text-center"
        style={{ borderTop: '1px solid rgba(255,255,255,0.5)' }}
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <TesseraLogo size={22} />
          <span className="font-semibold text-sm" style={{ color: '#1C1C2E' }}>Tessera</span>
        </div>
        <div className="flex items-center justify-center gap-4 mt-2">
          <Link href="/privacy" className="text-sm hover:underline" style={{ color: '#9899A6' }}>
            Privacy Policy
          </Link>
          <Link href="/account-deletion" className="text-sm hover:underline" style={{ color: '#9899A6' }}>
            Account Deletion
          </Link>
        </div>
        <p className="text-sm mt-3" style={{ color: '#9899A6' }}>© 2026 Tessera. All rights reserved.</p>
      </footer>

    </main>
  )
}
