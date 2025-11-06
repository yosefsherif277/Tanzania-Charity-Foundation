"use client"
import { useTranslation } from '@/i18n/client'
import { Locale } from '@/i18n/settings'
import Link from 'next/link'

interface MissionSectionProps {
  lng: Locale
}

export default function MissionSection({ lng }: MissionSectionProps) {
  const { t } = useTranslation(lng, 'common')

  const corePrinciples = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: t('ourPurpose.mission'),
      description: t('ourPurpose.missionText'),
      color: 'text-primary'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
        </svg>
      ),
      title: t('ourPurpose.vision'),
      description: t('ourPurpose.visionText'),
      color: 'text-accent'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      title: t('ourPurpose.values'),
      description: t('ourPurpose.valuesText'),
      color: 'text-primary'
    }
  ]

  return (
    <section className="py-16 bg-section-light pattern-bg-light">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
            {t('mission.ourPrinciples', { defaultValue: 'Our Core Principles' })}
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            {t('mission.principlesDescription', { defaultValue: 'Guided by our mission, vision, and values to create lasting impact' })}
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {corePrinciples.map((principle, index) => (
            <div key={index} className="card card-hover text-center">
              <div className={`mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-sand/50 mb-6 ${principle.color}`}>
                {principle.icon}
              </div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-4">
                {principle.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-charcoal/70 font-medium">
                {t('mission.wellsBuilt', { defaultValue: 'Water Wells Built' })}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-charcoal/70 font-medium">
                {t('mission.childrenSponsored', { defaultValue: 'Children Sponsored' })}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-charcoal/70 font-medium">
                {t('mission.yearsServing', { defaultValue: 'Years Serving' })}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10k+</div>
              <div className="text-sm text-charcoal/70 font-medium">
                {t('mission.livesImpacted', { defaultValue: 'Lives Impacted' })}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            href={`/${lng}/our-purpose`}
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>{t('buttons.learnMore')}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}