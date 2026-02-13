import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { languages } from '@/i18n/settings'
import type { Locale } from '@/i18n/settings'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import WhatsAppChat from '@/components/ui/WhatsAppChat'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tanzania Charity Foundation',
  description: 'Bringing hope and building futures for children in East Africa',
  icons: {
    icon: '/images/charityIconWithoutBGandWords.ico',
  }
}

// تعريف الأنواع
interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ lng: string }>
}

// Static params
export function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

// Layout الرئيسي
export default async function RootLayout({ children, params }: LayoutProps) {
  const { lng } = await params
  
  // تحقق مباشر مع قيمة افتراضية
  const safeLng: Locale = languages.includes(lng as Locale) 
    ? lng as Locale 
    : 'en'
  
  return (
    <html lang={safeLng} dir={safeLng === 'ar' ? 'rtl' : 'ltr'}>
      <body className={inter.className}>
        <Header lng={safeLng} />
        {children}
        <WhatsAppChat lng={safeLng} />
        <Footer lng={safeLng} />
      </body>
    </html>
  )
}