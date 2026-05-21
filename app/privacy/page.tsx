import TesseraLogo from '@/components/TesseraLogo'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — Tessera',
  description: 'Privacy policy for the Tessera app and website.',
}

const LAST_UPDATED = 'May 21, 2026'

export default function PrivacyPage() {
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
        <Link
          href="/#signup"
          className="text-sm font-semibold px-4 py-2 rounded-xl text-white transition-opacity hover:opacity-85"
          style={{ backgroundColor: '#7B5FFF', boxShadow: '0 4px 14px rgba(123,95,255,0.35)' }}
        >
          Join the Beta
        </Link>
      </nav>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-6 pt-36 pb-24">

        <h1
          className="text-4xl font-bold mb-2"
          style={{ color: '#1C1C2E', letterSpacing: '-0.02em' }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm mb-12" style={{ color: '#9899A6' }}>
          Last updated: {LAST_UPDATED}
        </p>

        <Section title="Overview">
          <p>
            Tessera (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
            This policy explains what information we collect, how we use it, and the choices you have.
            We do not sell your personal data to anyone, ever.
          </p>
        </Section>

        <Section title="Information We Collect">
          <Subsection title="Account information">
            When you create a Tessera account, we collect your email address and a hashed
            version of your password. We never store your password in plain text.
          </Subsection>
          <Subsection title="Content you create">
            We store the data you enter in the app — including your areas of life, weekly
            template blocks, tasks, priority levels, and planner settings. This data is
            tied to your account and used solely to provide the app&apos;s functionality.
          </Subsection>
          <Subsection title="Device permissions">
            If you grant permission, we send push notifications to remind you of your
            schedule and priorities. You can revoke this permission at any time in your
            device settings.
          </Subsection>
          <Subsection title="Beta waitlist">
            If you sign up on our website, we collect your email address to notify you
            when beta access is available.
          </Subsection>
        </Section>

        <Section title="How We Use Your Information">
          <ul className="list-disc list-outside pl-5 space-y-2">
            <li>To provide and operate the Tessera app and website</li>
            <li>To sync your data across sessions and devices</li>
            <li>To send push notifications you have opted into</li>
            <li>To contact beta waitlist signups when access becomes available</li>
            <li>To improve the app based on usage patterns (no personally identifiable information is used for this)</li>
          </ul>
        </Section>

        <Section title="Data Storage & Security">
          <p>
            Your data is stored securely using Supabase, a third-party database platform
            with servers based in the United States. Supabase employs industry-standard
            encryption in transit (TLS) and at rest. You can review Supabase&apos;s own
            privacy practices at{' '}
            <a
              href="https://supabase.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#7B5FFF' }}
            >
              supabase.com/privacy
            </a>.
          </p>
        </Section>

        <Section title="Data Sharing">
          <p>
            We do not sell, rent, or share your personal information with third parties
            for marketing purposes. We may share data only in the following limited circumstances:
          </p>
          <ul className="list-disc list-outside pl-5 space-y-2 mt-3">
            <li>With service providers (such as Supabase) necessary to operate the app</li>
            <li>If required by law or to protect the rights and safety of our users</li>
          </ul>
        </Section>

        <Section title="Your Rights">
          <p>You have the right to:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 mt-3">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your account and associated data</li>
            <li>Withdraw consent for push notifications at any time via device settings</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, contact us at the email address below.
          </p>
        </Section>

        <Section title="Children's Privacy">
          <p>
            Tessera is not directed at children under the age of 13. We do not knowingly
            collect personal information from children. If you believe a child has provided
            us with their information, please contact us and we will delete it promptly.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            We may update this policy from time to time. When we do, we will update the
            &quot;Last updated&quot; date at the top of this page. Continued use of the app after
            changes constitutes acceptance of the updated policy.
          </p>
        </Section>

        <Section title="Contact Us">
          <p>
            If you have any questions or requests regarding this privacy policy, please
            contact us at{' '}
            <a
              href="mailto:privacy@tesseraplanner.app"
              style={{ color: '#7B5FFF' }}
            >
              privacy@tesseraplanner.app
            </a>.
          </p>
        </Section>

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
        <p className="text-sm" style={{ color: '#9899A6' }}>© 2026 Tessera. All rights reserved.</p>
      </footer>

    </main>
  )
}

// ── Local components ──────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2
        className="text-xl font-bold mb-4"
        style={{ color: '#1C1C2E' }}
      >
        {title}
      </h2>
      <div className="text-base leading-relaxed space-y-3" style={{ color: '#5C5C7A' }}>
        {children}
      </div>
    </section>
  )
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-1" style={{ color: '#1C1C2E' }}>{title}</h3>
      <p>{children}</p>
    </div>
  )
}
