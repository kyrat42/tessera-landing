import Link        from 'next/link'
import TesseraLogo from '@/components/TesseraLogo'
import SignupForm   from '@/components/SignupForm'
import PhoneFrame   from '@/components/PhoneFrame'
import {
  IoBriefcaseOutline,
  IoHeartOutline,
  IoPeopleOutline,
  IoColorPaletteOutline,
  IoRepeatOutline,
  IoLayersOutline,
  IoBarChartOutline,
} from 'react-icons/io5'
import type { IconType } from 'react-icons'

// ── Palette (mirrors lib/constants/palette.ts exactly) ───────────────────────
//   light = tile background tint   |   dark = icon & accent colour
const P = {
  steel:  { light: '#E8ECFF', dark: '#6B82E8' },
  forest: { light: '#D4F5E4', dark: '#2EBD6B' },
  clay:   { light: '#FFE8D6', dark: '#FF7340' },
  teal:   { light: '#D0F5F0', dark: '#00B09B' },
}

// ── Style helpers ─────────────────────────────────────────────────────────────

/** Flat pastel tile — matches the app's area-of-life block style */
const flatTile = (light: string): React.CSSProperties => ({
  borderRadius:    22,
  background:      light,
  border:          '1.5px solid rgba(255,255,255,0.65)',
  borderTopColor:  'rgba(255,255,255,0.92)',
  boxShadow:       '0 4px 12px rgba(58,95,204,0.13)',
  display:         'flex',
  flexDirection:   'column',
  alignItems:      'center',
  justifyContent:  'center',
  gap:             8,
})

/** Glass purple tile — matches the active block style in the planner */
const glassTile: React.CSSProperties = {
  borderRadius:    22,
  background:      'linear-gradient(150deg, #A48BFF 0%, #7B5FFF 45%, #5B3FDF 100%)',
  border:          '1.5px solid rgba(255,255,255,0.35)',
  borderTopColor:  'rgba(255,255,255,0.82)',
  boxShadow:       '0 12px 32px rgba(107,79,255,0.55), 0 4px 12px rgba(58,63,204,0.35)',
  display:         'flex',
  flexDirection:   'column',
  alignItems:      'center',
  justifyContent:  'center',
  gap:             8,
}

/** Small icon badge used inside feature cards */
const iconBadge = (light: string): React.CSSProperties => ({
  width:           52,
  height:          52,
  borderRadius:    14,
  background:      light,
  border:          '1.5px solid rgba(255,255,255,0.65)',
  borderTopColor:  'rgba(255,255,255,0.92)',
  boxShadow:       '0 4px 10px rgba(58,95,204,0.1)',
  display:         'flex',
  alignItems:      'center',
  justifyContent:  'center',
  marginBottom:    20,
  flexShrink:      0,
})

// ── Data ─────────────────────────────────────────────────────────────────────

interface MosaicTile {
  label:     string
  Icon:      IconType
  iconColor: string
  size:      number
  tileStyle: React.CSSProperties
}

const MOSAIC_TILES: MosaicTile[] = [
  { label: 'Work',     Icon: IoBriefcaseOutline,    iconColor: P.steel.dark,           size: 120, tileStyle: { ...flatTile('#FFFFFF'),       width: 120, height: 120 } },
  { label: 'Health',   Icon: IoHeartOutline,         iconColor: 'rgba(255,255,255,0.95)', size: 120, tileStyle: { ...glassTile,               width: 120, height: 120 } },
  { label: 'Family',   Icon: IoPeopleOutline,        iconColor: P.clay.dark,            size: 120, tileStyle: { ...flatTile(P.clay.light),   width: 120, height: 120 } },
  { label: 'Creative', Icon: IoColorPaletteOutline,  iconColor: P.forest.dark,          size: 120, tileStyle: { ...flatTile(P.forest.light), width: 120, height: 120 } },
]

interface Feature {
  Icon:      IconType
  iconColor: string
  palette:   { light: string; dark: string }
  title:     string
  body:      string
}

const FEATURES: Feature[] = [
  {
    Icon:      IoRepeatOutline,
    iconColor: P.steel.dark,
    palette:   P.steel,
    title:     'Routine without rigidity',
    body:      'Strict time-blocking breaks the moment life shifts, and suddenly the whole day feels ruined. Tessera\'s weekly template gives you a consistent rhythm without locking you into a minute-by-minute schedule.',
  },
  {
    Icon:      IoLayersOutline,
    iconColor: P.forest.dark,
    palette:   P.forest,
    title:     'One area at a time',
    body:      'Jumping between work, family, and personal goals all day is exhausting. Tessera\'s tile structure lets you focus on one area of life at a time, reducing the mental load that comes with every context switch.',
  },
  {
    Icon:      IoBarChartOutline,
    iconColor: P.clay.dark,
    palette:   P.clay,
    title:     'Priorities that flex',
    body:      'Within each tile, a task list with dynamic priority levels keeps you focused on what matters most right now instead of a rigid plan made weeks in advance.',
  },
]

const STEPS = [
  { num: '01', title: 'Pick your tiles', body: 'Choose the areas of life that make up your unique mosaic.' },
  { num: '02', title: 'Set your rhythm', body: 'Build a weekly template that carves out time for each area.' },
  { num: '03', title: 'Plan your day',   body: 'Start each morning with clarity on exactly where to focus.' },
]

interface WalkthroughStep {
  num:     string
  caption: string
  image:   string
  alt:     string
  frame?:  'phone' | 'card'
}

const WALKTHROUGH_STEPS: WalkthroughStep[] = [
  {
    num:     '1',
    caption: 'Set your areas of life that you want to maintain in balance.',
    image:   '/screenshots/areas-of-life.png',
    alt:     'Areas of Life settings screen showing Work, Health, Social, Family, Fun, and Household tiles',
  },
  {
    num:     '2',
    caption: 'Set your weekly routine.',
    image:   '/screenshots/weekly-template.png',
    alt:     'Weekly Template settings screen showing Monday blocks for All Day, Health, Work, Family, Health, and Bedtime',
  },
  {
    num:     '3',
    caption: 'Keep track of where you’re spending your time.',
    image:   '/screenshots/weekly-hours.jpeg',
    alt:     'Weekly Hours by Area card showing hours per week for Work, Health, Social, Family, Fun, and Household',
    frame:   'card',
  },
  {
    num:     '4',
    caption: 'Customize your priority levels if high, medium, and low isn’t your preference.',
    image:   '/screenshots/priority-levels.png',
    alt:     'Priority Levels settings screen showing Urgent and important, Important but not urgent, Urgent but not important, and Not important and not urgent',
  },
  {
    num:     '5',
    caption: 'Add a task list within your tiles. Work through this list during the time slot you set. Mark each task complete when you’re done, and watch your productivity grow.',
    image:   '/screenshots/planner-day.png',
    alt:     'Planner day view for Thursday, June 11 showing Health, Work, and Family blocks with tasks and priority numbers',
  },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
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
        <div className="flex items-center gap-3">
          <TesseraLogo size={28} />
          <span className="font-bold text-base" style={{ color: '#1C1C2E' }}>Tessera</span>
        </div>
        <a
          href="#signup"
          className="text-sm font-semibold px-4 py-2 rounded-xl text-white transition-opacity hover:opacity-85"
          style={{ backgroundColor: '#7B5FFF', boxShadow: '0 4px 14px rgba(123,95,255,0.35)' }}
        >
          Join the Beta
        </a>
      </nav>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        id="signup"
        className="flex flex-col items-center justify-center min-h-screen px-6 pt-28 pb-20 text-center"
      >
        <TesseraLogo size={128} />
        <p className="mt-8 text-xs font-bold tracking-widest uppercase" style={{ color: '#7B5FFF' }}>
          Tessera
        </p>
        <h1
          className="mt-3 text-5xl sm:text-6xl font-bold leading-tight max-w-xl"
          style={{ color: '#1C1C2E', letterSpacing: '-0.02em' }}
        >
          Piece together<br />a life you love.
        </h1>
        <p className="mt-6 text-lg max-w-md leading-relaxed" style={{ color: '#5C5C7A' }}>
          A mindful daily planner that helps you build balance across every area of life.
        </p>
        <div className="mt-10 w-full max-w-md">
          <SignupForm />
        </div>
        <p className="mt-4 text-sm" style={{ color: '#9899A6' }}>
          Android &amp; iOS beta coming soon. Be among the first to get access.
        </p>
      </section>

      {/* ── Mosaic concept ────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: 'rgba(255,255,255,0.32)' }}>
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-16">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl font-bold leading-snug"
              style={{ color: '#1C1C2E', letterSpacing: '-0.01em' }}
            >
              Your life isn&apos;t a list.<br />It&apos;s a mosaic.
            </h2>
            <p className="mt-5 text-lg leading-relaxed" style={{ color: '#5C5C7A' }}>
              A tessera is a single tile in a mosaic, with each one working harmoniously to
              create a bigger picture. Each area of your life, such as work, family, and health,
              becomes a tile. Tessera helps you keep every tile in view so you can stay balanced.
            </p>
          </div>

          {/* Visual: 2×2 tile grid */}
          <div className="flex-shrink-0">
            <div className="grid grid-cols-2 gap-3">
              {MOSAIC_TILES.map(({ label, Icon, iconColor, tileStyle }) => (
                <div key={label} style={tileStyle}>
                  <Icon size={30} color={iconColor} />
                  <span
                    className="text-xs font-semibold"
                    style={{ color: tileStyle.background?.toString().startsWith('linear') ? 'rgba(255,255,255,0.9)' : '#1C1C2E' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-3"
            style={{ color: '#1C1C2E', letterSpacing: '-0.01em' }}
          >
            Planning that works with you
          </h2>
          <p className="text-center text-lg mb-14" style={{ color: '#5C5C7A' }}>
            Most planners are built for perfect days. Tessera is built for real ones.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FEATURES.map(({ Icon, iconColor, palette, title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.55)',
                  border:          '1px solid rgba(255,255,255,0.8)',
                  borderTopColor:  'rgba(255,255,255,0.97)',
                  boxShadow:       '0 4px 24px rgba(58,95,204,0.07)',
                  backdropFilter:  'blur(8px)',
                }}
              >
                <div style={iconBadge(palette.dark)}>
                  <Icon size={24} color="#FFFFFF" />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#1C1C2E' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5C5C7A' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ backgroundColor: 'rgba(255,255,255,0.32)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl font-bold mb-3"
            style={{ color: '#1C1C2E', letterSpacing: '-0.01em' }}
          >
            How it works
          </h2>
          <p className="text-lg mb-16" style={{ color: '#5C5C7A' }}>
            Three steps to a more intentional day.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {STEPS.map(({ num, title, body }) => (
              <div key={num} className="flex flex-col items-center text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mb-5"
                  style={{ backgroundColor: 'rgba(123,95,255,0.1)', color: '#7B5FFF' }}
                >
                  {num}
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#1C1C2E' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5C5C7A' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── App walkthrough ──────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-3"
            style={{ color: '#1C1C2E', letterSpacing: '-0.01em' }}
          >
            See it in action
          </h2>
          <p className="text-center text-lg mb-16" style={{ color: '#5C5C7A' }}>
            A quick look at how Tessera fits into your day.
          </p>
          <div className="flex flex-col gap-20">
            {WALKTHROUGH_STEPS.map(({ num, caption, image, alt, frame = 'phone' }, i) => (
              <div
                key={num}
                className={`flex flex-col items-center gap-10 ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                <div className="flex-shrink-0">
                  {frame === 'phone' ? (
                    <PhoneFrame src={image} alt={alt} />
                  ) : (
                    <div style={{ width: 280, borderRadius: 24, overflow: 'hidden', boxShadow: '0 24px 64px rgba(58,63,204,0.25)', lineHeight: 0 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={image} alt={alt} style={{ width: '100%', display: 'block' }} />
                    </div>
                  )}
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mb-5 mx-auto lg:mx-0"
                    style={{ backgroundColor: 'rgba(123,95,255,0.1)', color: '#7B5FFF' }}
                  >
                    {num}
                  </div>
                  <p className="text-xl font-semibold leading-relaxed max-w-md mx-auto lg:mx-0" style={{ color: '#1C1C2E' }}>
                    {caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beta CTA ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div
          className="max-w-lg mx-auto rounded-3xl px-8 py-14 flex flex-col items-center text-center"
          style={{
            background:  'linear-gradient(150deg, #A48BFF 0%, #7B5FFF 45%, #5B3FDF 100%)',
            boxShadow:   '0 24px 64px rgba(107,79,255,0.4), 0 8px 24px rgba(58,63,204,0.25)',
          }}
        >
          <TesseraLogo size={72} />
          <h2
            className="mt-7 text-3xl font-bold text-white leading-snug"
            style={{ letterSpacing: '-0.01em' }}
          >
            Be the first to build<br />your mosaic.
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
            Tessera is in private beta. Join the waitlist and you&apos;ll be among
            the first to get access when we open the doors.
          </p>
          <div className="mt-8 w-full">
            <SignupForm dark />
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer
        className="py-10 px-6 text-center"
        style={{ borderTop: '1px solid rgba(255,255,255,0.5)' }}
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <TesseraLogo size={22} />
          <span className="font-semibold text-sm" style={{ color: '#1C1C2E' }}>Tessera</span>
        </div>
        <div className="flex justify-center mb-4">
          <a href="https://betabound.com/tessera-private-beta/" target="_blank" rel="noopener noreferrer">
            <img decoding="async" src="https://betabound.com/wp-content/uploads/2024/07/Betabound-Badge-2.png" alt="Listed on Betabound" style={{ height: 48 }} />
          </a>
        </div>
        <p className="text-sm" style={{ color: '#9899A6' }}>© 2026 Tessera. All rights reserved.</p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <Link href="/privacy" className="text-sm hover:underline" style={{ color: '#9899A6' }}>
            Privacy Policy
          </Link>
          <Link href="/account-deletion" className="text-sm hover:underline" style={{ color: '#9899A6' }}>
            Account Deletion
          </Link>
        </div>
      </footer>

    </main>
  )
}
