"use client"
import { useTranslation } from '@/i18n/client'
import { Locale } from '@/i18n/settings'
import { useEffect, useState } from 'react'

interface HeroSectionProps {
  lng: Locale
}

export default function HeroSection({ lng }: HeroSectionProps) {
  const { t } = useTranslation(lng, 'common')
  const [currentSlide, setCurrentSlide] = useState(0)

  // إنشاء مصفوفة بالصور المرقمة من 1 إلى 7
  const slides = Array.from({ length: 7 }, (_, i) => 
    `/images/slider/${i + 1}.jpeg`
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden h-screen">
      {/* Slider Container */}
      <div 
        className="absolute inset-0 transition-transform duration-1000 ease-in-out"
        style={{
          transform: lng === 'ar' 
            ? `translateX(${currentSlide * 100}vw)` 
            : `translateX(${currentSlide * -100}vw)`,
          display: 'flex',
          width: `${slides.length * 100}vw`
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-screen h-screen flex-shrink-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url(' + slide + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
      </div>

      {/* المحتوى النصي */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 h-full flex items-center">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-black mb-6">
            {t('home.heroTitle')}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            {t('home.heroDescription')}
          </p>
        </div>
      </div>
    </section>
  )
}