export const BANNER_OPTIONS = [
  {
    label: 'No Banner',
    value: 'no-banner',
    url: '',
    href: ''
  },
  {
    label: 'Fundraise',
    value: 'fundraise',
    url: '/banners/raise.png',
    href: 'https://magna.so/products'
  },
  {
    label: 'Demo',
    value: 'demo',
    url: '/banners/demo.png',
    href: 'https://magna.so/news'
  },
  {
    label: 'Custom Banner',
    value: 'custom',
    url: '',
    href: ''
  }
] as const

export type BannerOption = typeof BANNER_OPTIONS[number]
