"use client";
import { useTranslation } from '@/i18n/client'
import DonationForm from './DonationForm';

export default function DonateContent( { lng }: { lng: "ar" | "en" | "sw" } ) {
    const { t } = useTranslation(lng, 'common')
  return (
    <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
                {t('donate.title')}
              </h1>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                {t('donate.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Donation Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <DonationForm lng={lng} />
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="py-16 bg-section-light pattern-bg-light">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
                {t('donate.transparency', { defaultValue: 'Financial Transparency' })}
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                {t('donate.transparencyDesc', { defaultValue: 'We are committed to complete transparency in how we use your donations' })}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="card text-center">
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <h3 className="font-display text-xl font-bold text-charcoal mb-2">
                  {t('donate.programSpending', { defaultValue: 'Program Spending' })}
                </h3>
                <p className="text-charcoal/70 text-sm">
                  {t('donate.programSpendingDesc', { defaultValue: 'Directly supports our projects and beneficiaries' })}
                </p>
              </div>

              <div className="card text-center">
                <div className="text-4xl font-bold text-primary mb-2">8%</div>
                <h3 className="font-display text-xl font-bold text-charcoal mb-2">
                  {t('donate.administration', { defaultValue: 'Administration' })}
                </h3>
                <p className="text-charcoal/70 text-sm">
                  {t('donate.administrationDesc', { defaultValue: 'Operational and management costs' })}
                </p>
              </div>

              <div className="card text-center">
                <div className="text-4xl font-bold text-primary mb-2">2%</div>
                <h3 className="font-display text-xl font-bold text-charcoal mb-2">
                  {t('donate.fundraising', { defaultValue: 'Fundraising' })}
                </h3>
                <p className="text-charcoal/70 text-sm">
                  {t('donate.fundraisingDesc', { defaultValue: 'Campaigns and donor outreach' })}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}