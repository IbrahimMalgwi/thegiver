/**
 * Queen Shavah brand color tokens — the single source of truth for the palette,
 * derived from the logo (deep purple + sustainable green + warm gold).
 *
 * These values are mirrored as Tailwind v4 theme tokens in `src/index.css`
 * (the `@theme` block), which generates the utility classes used throughout the
 * UI: `bg-brand-purple`, `text-brand-gold`, `bg-surface-green`, `text-muted`,
 * `bg-success`, etc. Keep the two in sync. Import from here when a raw hex is
 * genuinely needed in TS/JS (e.g. canvas, inline SVG); prefer the Tailwind
 * classes inside components so no hex values are hardcoded there.
 */
export const colors = {
  brand: {
    purple: '#42106B',
    purpleDark: '#32104F',
    green: '#2F8734',
    greenDark: '#22662A',
    gold: '#D99A0B',
    goldDark: '#B98108',
  },
  background: {
    white: '#FFFFFF',
    warm: '#FAFAF7',
    green: '#F1F7F1',
    purple: '#F6F1F9',
    gold: '#FFF8E8',
  },
  text: {
    primary: '#242124',
    secondary: '#5F5A61',
    muted: '#858087',
  },
  status: {
    success: '#2F8734',
    warning: '#D99A0B',
    error: '#C83B3B',
    info: '#3578A8',
  },
} as const
