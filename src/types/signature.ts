export interface SignatureData {
  name: string
  role: string
  avatarPhotoUrl: string
  email: string
  companyWebsite: string
  companyLinkedin: string
  companyTwitter: string
  bannerImageUrl: string
  disclaimerText: string
  companyLogoUrl: string
  bannerHref: string
  telegram?: string
  linkedin?: string
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
  companyWebsite: 'https://magna.so',
  companyLinkedin: 'https://www.linkedin.com/company/magnatokens',
  companyTwitter: 'https://x.com/magna_digital',
  bannerImageUrl: '',
  disclaimerText: 'This communication and any attachments may contain confidential and privileged information for the intended recipient(s) only. If you are not the intended recipient, any use, dissemination, distribution, or copying of this communication is strictly prohibited.\n\nIf you have received this communication in error, please notify the sender immediately by reply email and delete the message and any attachments from your system.',
  companyLogoUrl: 'https://magna.so/logo.png',
  bannerHref: 'https://magna.so',
  telegram: '',
  linkedin: '',
}
