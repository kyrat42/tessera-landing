import { IoLogoApple } from 'react-icons/io5'
import { SiGoogleplay } from 'react-icons/si'

export const TESTFLIGHT_URL = 'https://testflight.apple.com/join/GMmYz8d2'
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=app.tesseraplanner'

interface Props {
  dark?: boolean
}

export default function PlatformLinks({ dark = false }: Props) {
  const btnStyle: React.CSSProperties = {
    flex:            1,
    display:         'flex',
    alignItems:      'center',
    justifyContent:  'center',
    gap:             10,
    padding:         '14px 0',
    borderRadius:    14,
    fontSize:        15,
    fontWeight:      600,
    backgroundColor: dark ? '#fff' : '#7B5FFF',
    color:           dark ? '#7B5FFF' : '#fff',
    boxShadow:       dark ? 'none' : '0 4px 14px rgba(123,95,255,0.35)',
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={TESTFLIGHT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-85"
          style={btnStyle}
        >
          <IoLogoApple size={20} />
          Get it on TestFlight
        </a>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-85"
          style={btnStyle}
        >
          <SiGoogleplay size={18} />
          Get it on Google Play
        </a>
      </div>
      <p
        className="text-xs text-center leading-relaxed"
        style={{ color: dark ? 'rgba(255,255,255,0.6)' : '#9899A6' }}
      >
        Tessera is in open beta and free to use while testing. Pricing may apply after the full launch, but you'll get a heads up before that happens.
      </p>
    </div>
  )
}
