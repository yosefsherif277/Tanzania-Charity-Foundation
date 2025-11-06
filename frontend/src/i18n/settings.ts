export const fallbackLng = 'en'
export const languages = ['ar', 'en', 'sw'] as const
export const defaultNS = 'common'

export type Locale = typeof languages[number]

export function getOptions(lng: Locale = fallbackLng, ns: string = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    debug: process.env.NODE_ENV === 'development'
  }
}