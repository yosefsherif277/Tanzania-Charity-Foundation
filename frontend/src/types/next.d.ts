import type { Locale } from '@/i18n/settings'

declare module 'next' {
  interface LayoutProps {
    children: React.ReactNode
    params: Promise<{
      lng: Locale
    }>
  }
  
  interface PageProps {
    params: Promise<{
      lng: Locale
    }>
  }
}

export {}