import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Tessera — Piece together a life you love.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Rebuilds components/TesseraLogo.tsx's 2x2 mosaic as flexbox (satori, the
// renderer ImageResponse uses, doesn't support CSS grid) at a fixed size
// tuned for this image instead of the component's dynamic size prop.
function LogoMark() {
  const tile = 84
  const gap = 10
  const flat = (bg: string) => ({
    width: tile,
    height: tile,
    borderRadius: 16,
    background: bg,
    border: '2px solid rgba(255,255,255,0.65)',
  })
  const glass = {
    width: tile,
    height: tile,
    borderRadius: 16,
    background: 'linear-gradient(150deg, #A48BFF 0%, #7B5FFF 45%, #5B3FDF 100%)',
    border: '2px solid rgba(255,255,255,0.35)',
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap }}>
      <div style={{ display: 'flex', gap }}>
        <div style={flat('#FFFFFF')} />
        <div style={glass} />
      </div>
      <div style={{ display: 'flex', gap }}>
        <div style={flat('#D4F5E4')} />
        <div style={flat('#FFE8D6')} />
      </div>
    </div>
  )
}

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 56,
          backgroundColor: '#F5F0E8',
        }}
      >
        <LogoMark />
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 640 }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#7B5FFF',
            }}
          >
            Tessera
          </div>
          <div
            style={{
              marginTop: 10,
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -1,
              color: '#1C1C2E',
            }}
          >
            Piece together a life you love.
          </div>
          <div style={{ marginTop: 20, fontSize: 26, color: '#5C5C7A' }}>
            A mindful daily planner that helps you build balance across every area of life.
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
