"use client"
import { useTranslation } from '@/i18n/client'
import { Locale } from '@/i18n/settings'
import Link from 'next/link'

interface HeroSectionProps {
  lng: Locale
}

export default function HeroSection({ lng }: HeroSectionProps) {
  const { t } = useTranslation(lng, 'common')

  return (
    <section className="relative py-20 bg-cover bg-center bg-no-repeat" 
            style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url(https://lh3.googleusercontent.com/aida-public/AB6AXuD34zBBXAsdi52SUUj1W5EeAPh1L6Dc1o3T8YbZNUarkYyNvYSAiFyk9hltRMHj_BKUleRwxAZ_IcJnYpavtOhyWuEgDEfkEYldc1wnV8NEkh0d5G8fmG1BViumkte9R4IuNXHOnzQZ4y0v-j7iAQzm43ZppUIhVVI2OocXp11wMdKtdtACh4reUImurtOpXxTKY1su-o6vMPGKi5dbTx0sUED-msoqLsB9GgE_9QSXYa4A-iodiKty-o7p2avwTbGLnS0LV0Efdaw)'}}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-black mb-6">
            {t('home.heroTitle')}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            {t('home.heroDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${lng}/donate`}
              className="btn-accent px-8 py-4 text-lg"
            >
              {t('buttons.donateNow')}
            </Link>
            <Link 
              href={`/${lng}/about`}
              className="btn-secondary px-8 py-4 text-lg"
            >
              {t('buttons.learnMore')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}