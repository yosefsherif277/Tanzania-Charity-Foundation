import { dir } from 'i18next'
import { languages } from '@/i18n/settings'
import '@/app/globals.css'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lng: "ar" | "en" | "sw"  }>
}) {
  const { lng } = await params
  
  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <title>مجمع مدارس د. محمد حسن الزيات</title>
      </head>
      <body className={`${lng === 'ar' ? 'font-arabic' : 'font-english'}`}>
        <Header lng={lng} />
        {children}
        <Footer lng={lng} />
      </body>
    </html>
  )
}