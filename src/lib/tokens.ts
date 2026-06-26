/**
 * Official Claria brand tokens — light mode only.
 */
export const brand = {
  primary: '#7B61FF',
  primaryHover: '#6B4DFF',
  secondary: '#7FB7FF',
  tertiary: '#8DE8C5',
  accent: '#EAE4FF',
  background: '#FAFAFC',
  card: '#FFFFFF',
  border: '#ECEAF6',
  text: '#111827',
  textMuted: '#6B7280',
  success: '#22C55E',
  error: '#EF4444',
} as const

export type BrandToken = keyof typeof brand
