interface TikTokIconProps {
  size?: number
  className?: string
  'aria-hidden'?: boolean
}

/** Lucide doesn't ship a TikTok glyph — this mirrors its prop shape (size, aria-hidden, className) so it drops in next to the other social icons. */
export function TikTokIcon({ size = 18, className, ...rest }: TikTokIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      {...rest}
    >
      <path d="M16.6 5.82c-.98-.9-1.6-2.16-1.65-3.55h-3.02v13.9c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1 0-5.44c.28 0 .55.04.8.12V10.5a5.8 5.8 0 0 0-.8-.06 5.75 5.75 0 1 0 5.75 5.75V9.2a8.72 8.72 0 0 0 4.94 1.53V7.7a5.6 5.6 0 0 1-3.3-1.88Z" />
    </svg>
  )
}
