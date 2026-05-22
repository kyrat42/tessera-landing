interface Props {
  size?: number
}

export default function TesseraLogo({ size = 120 }: Props) {
  const gap  = Math.round(size * 0.042)
  const tile = Math.floor((size - gap) / 2)
  const r    = Math.round(tile * 0.19)

  const flatStyle = (bg: string): React.CSSProperties => ({
    width:        tile,
    height:       tile,
    borderRadius: r,
    background:   bg,
    border:       '1.5px solid rgba(255,255,255,0.65)',
    flexShrink:   0,
  })

  const glassStyle: React.CSSProperties = {
    width:        tile,
    height:       tile,
    borderRadius: r,
    background:   'linear-gradient(150deg, #A48BFF 0%, #7B5FFF 45%, #5B3FDF 100%)',
    border:       '1.5px solid rgba(255,255,255,0.35)',
    flexShrink:   0,
  }

  return (
    <div style={{
      width:               size,
      height:              size,
      display:             'grid',
      gridTemplateColumns: `${tile}px ${tile}px`,
      gridTemplateRows:    `${tile}px ${tile}px`,
      gap,
    }}>
      <div style={flatStyle('#FFFFFF')} />   {/* top-left  — white        */}
      <div style={glassStyle}           />   {/* top-right — glass purple */}
      <div style={flatStyle('#D4F5E4')} />   {/* bot-left  — forest       */}
      <div style={flatStyle('#FFE8D6')} />   {/* bot-right — clay         */}
    </div>
  )
}
