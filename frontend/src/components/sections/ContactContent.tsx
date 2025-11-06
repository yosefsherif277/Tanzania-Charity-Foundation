"use client";
import { useTranslation } from '@/i18n/client'
import ContactForm from '@/components/sections/ContactForm'

export default function ContactContent({ lng }: { lng: "ar" | "en" | "sw" }) {
  const { t } = useTranslation(lng, 'common')
  
  return (
    <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
                {t('contact.title')}
              </h1>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                {t('contact.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <ContactForm lng={lng} />
          </div>
        </section>

        {/* Map & Office Info */}
        <section className="py-16 bg-section-light pattern-bg-light">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Office Information */}
              <div>
                <h2 className="font-display text-3xl font-bold text-charcoal mb-8">
                  {t('contact.ourOffice')}
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-charcoal mb-1">
                        {t('contact.address', { defaultValue: 'Our Address' })}
                      </h3>
                      <p className="text-charcoal/70">
                        123 Charity Lane, Upanga<br />
                        Dar es Salaam, Tanzania
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-charcoal mb-1">
                        {t('contact.email', { defaultValue: 'Email' })}
                      </h3>
                      <p className="text-charcoal/70">
                        info@tanzaniacharity.org
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-charcoal mb-1">
                        {t('contact.phone', { defaultValue: 'Phone' })}
                      </h3>
                      <p className="text-charcoal/70">
                        +255 754 123 456
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-sand/20 rounded-xl overflow-hidden h-96 flex items-center justify-center">
                <div className="text-center text-charcoal/50">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <p>{t('contact.mapPlaceholder', { defaultValue: 'Interactive Map' })}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}