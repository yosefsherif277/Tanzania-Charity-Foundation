"use client";
import { useTranslation } from "@/i18n/client";
export default function AboutContent({ lng }: { lng: "ar" | "en" | "sw" }) {
  const { t } = useTranslation(lng, 'common')

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
              {t('about.title')}
              </h1>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                {t('about.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="card card-hover">
                <div className="text-accent mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-charcoal mb-4">
                  {t('ourPurpose.mission')}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {t('ourPurpose.missionText')}
                </p>
              </div>

              <div className="card card-hover">
                <div className="text-primary mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-charcoal mb-4">
                  {t('ourPurpose.vision')}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {t('ourPurpose.visionText')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-section-light pattern-bg-light">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
                {t('ourPurpose.values')}
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                {t('ourPurpose.valuesText')}
              </p>
            </div>
          </div>
        </section>
    </main>
  )
}
