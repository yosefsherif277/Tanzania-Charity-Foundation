"use client";
import React from 'react'
import { useTranslation } from '@/i18n/client'
import SponsorGrid from '@/components/sections/SponsorGrid'

export default function SponsorContent({ lng }: { lng: "ar" | "en" | "sw" }) {
  const { t } = useTranslation(lng, 'common');

  return (
    <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-cover bg-center bg-no-repeat pattern-bg-gold" 
                style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url(https://lh3.googleusercontent.com/aida-public/AB6AXuBSV4-1Yii0HzaAqhfftbk76X8Z_rTumiUY1AvVOH6qJZIxau6Z7z1_76fkPnNgnU_kLhgPYBtkpzQPdMT_aeTXP0KUL0qUd5pYZlvx112-RvGaIWjX4zdHg3Pa8TXNnT7AT3E8AoGG0LnyGi9wq2x1PuSAgPzPzLu4Btq9asW5XIRrWDhYqsJNqwJPZiC8delHIX4MnLU4cQfPIDPKWZEMI-DFRiRCPEn1jg1pT6iI-t6aAnE1r6nLaePMpWJgz6aaBy1LnOEYhls)'}}>
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center text-white max-w-4xl mx-auto">
              <h1 className="font-display text-4xl md:text-6xl font-black mb-6">
                {t('sponsor.title')}
              </h1>
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                {t('sponsor.description')}
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 inline-block">
                <p className="text-2xl font-bold">
                  {t('sponsor.monthlyCost')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsor Grid Section */}
        <SponsorGrid lng={lng} />

        {/* Benefits Section */}
        <section className="py-16 bg-section-light">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
                {t('sponsor.benefitsTitle', { defaultValue: 'Sponsorship Benefits' })}
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                {t('sponsor.benefitsDescription', { defaultValue: 'Your sponsorship provides comprehensive support for a child in need' })}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center card-hover">
                <div className="text-primary mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal mb-4">
                  {t('sponsor.benefit1', { defaultValue: 'Education Support' })}
                </h3>
                <p className="text-charcoal/70">
                  {t('sponsor.benefit1Desc', { defaultValue: 'School fees, books, and educational materials' })}
                </p>
              </div>

              <div className="card text-center card-hover">
                <div className="text-primary mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal mb-4">
                  {t('sponsor.benefit2', { defaultValue: 'Healthcare' })}
                </h3>
                <p className="text-charcoal/70">
                  {t('sponsor.benefit2Desc', { defaultValue: 'Medical care and health monitoring' })}
                </p>
              </div>

              <div className="card text-center card-hover">
                <div className="text-primary mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal mb-4">
                  {t('sponsor.benefit3', { defaultValue: 'Personal Care' })}
                </h3>
                <p className="text-charcoal/70">
                  {t('sponsor.benefit3Desc', { defaultValue: 'Food, clothing, and personal development' })}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}