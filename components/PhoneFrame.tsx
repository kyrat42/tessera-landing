interface Props {
  src:   string
  alt:   string
  width?: number
}

/** Renders an app screenshot inside a simple phone-frame outline */
export default function PhoneFrame({ src, alt, width = 280 }: Props) {
  return (
    <div
      style={{
        width,
        borderRadius: 36,
        border:       '8px solid #1C1C2E',
        overflow:     'hidden',
        boxShadow:    '0 24px 64px rgba(58,63,204,0.25)',
        lineHeight:   0,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} style={{ width: '100%', display: 'block' }} />
    </div>
  )
}
