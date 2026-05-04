export const fallbackLng = 'en'
// You can add more languages here and in WhatsAppChat.tsx in "timeString" const
export const languages = {
  ar: 'العربية',
  en: 'English',
  sw: 'Swahili',
  it: 'Italian',
  de: 'Deutsch',
  tr: 'Türkçe',
  fr: 'Français',
  es: 'Español',
  pt: 'Português',
  ru: 'Русский',
  zh: '中文',
  ja: '日本語'
}
export const defaultNS = 'common'

export type Locale = keyof typeof languages

export function getOptions(lng: Locale = fallbackLng, ns: string = defaultNS) {
  return {
    supportedLngs: Object.keys(languages) as Locale[],
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    debug: process.env.NODE_ENV === 'development'
  }
}