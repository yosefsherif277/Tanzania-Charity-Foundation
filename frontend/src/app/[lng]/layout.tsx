import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { languages } from '@/i18n/settings'
import type { Locale } from '@/i18n/settings'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tanzania Charity Foundation',
  description: 'Bringing hope and building futures for children in East Africa',
}

// دالة لإنشاء static params
export function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

// تعريف نوع الـ params
interface LayoutProps {
  children: React.ReactNode
  params: {
    lng: Locale
  }
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps) {
  const { lng } = await params
  
  return (
    <html lang={lng} dir={lng === 'ar' ? 'rtl' : 'ltr'}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}