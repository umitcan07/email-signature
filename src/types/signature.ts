export interface SignatureData {
  name: string
  role: string
  avatarPhotoUrl: string
  email: string
  bannerImageUrl: string
  disclaimerText: string
  bannerHref: string
  selectedBanner: string
  customBannerUrl: string
  customBannerHref: string
  showTelegram: boolean
  showLinkedin: boolean
  showTwitter: boolean
  telegramUsername?: string
  linkedinUsername?: string
  twitterUsername?: string
}

export interface SignatureStore {
  data: SignatureData
  selectedTemplate: string
  updateField: <K extends keyof SignatureData>(field: K, value: SignatureData[K]) => void
  updateTemplate: (template: string) => void
  resetData: () => void
}

export const defaultSignatureData: SignatureData = {
  name: 'Bruno Faviero',
  role: 'CEO',
  avatarPhotoUrl: 'https://cdn.prod.website-files.com/6611435f2e87885e52ab11a9/689a466dac1938f3cc807e35_bruno.webp',
  email: 'bruno@magna.so',
  bannerImageUrl: '/banner.png',
  disclaimerText: 'This email, including any attachments, contains information that is confidential and privileged. It is intended solely for the designated recipient(s).\n\n If you have received this email in error, any form of unauthorized use, distribution, or reproduction is strictly forbidden. Please notify the sender immediately by reply and delete this message and all attachments from your system.',
  bannerHref: 'https://magna.so',
  selectedBanner: 'no-banner',
  customBannerUrl: '',
  customBannerHref: '',
  showTelegram: true,
  showLinkedin: true,
  showTwitter: true,
  telegramUsername: 'bruno_faviero',
  linkedinUsername: 'bruno_faviero',
  twitterUsername: 'magna_digital',
}
