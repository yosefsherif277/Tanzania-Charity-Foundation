'use client'

import { useState } from 'react'
import { useTranslation } from '@/i18n/client'
import { Locale } from '@/i18n/settings'

interface DonationFormProps {
  lng: Locale
}

export default function DonationForm({ lng }: DonationFormProps) {
  const { t } = useTranslation(lng, 'common')
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time')
  const [amount, setAmount] = useState('50')
  const [customAmount, setCustomAmount] = useState('')
  const [currency, setCurrency] = useState('USD')
  const [donationCause, setDonationCause] = useState('general')

  const handleAmountSelect = (selectedAmount: string) => {
    setAmount(selectedAmount)
    if (selectedAmount !== 'custom') {
      setCustomAmount('')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle donation submission
    console.log({
      donationType,
      amount: amount === 'custom' ? customAmount : amount,
      currency,
      donationCause
    })
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Donation Type */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-3">
            {t('donate.donationType')}
          </label>
          <div className="flex rounded-lg bg-sand/30 p-1">
            <button
              type="button"
              onClick={() => setDonationType('one-time')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                donationType === 'one-time'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-charcoal/70 hover:text-charcoal'
              }`}
            >
              {t('donate.oneTime')}
            </button>
            <button
              type="button"
              onClick={() => setDonationType('monthly')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                donationType === 'monthly'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-charcoal/70 hover:text-charcoal'
              }`}
            >
              {t('donate.monthly')}
            </button>
          </div>
        </div>

        {/* Amount Selection */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-3">
            {t('donate.chooseAmount')}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {['50', '100', '250', 'custom'].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => handleAmountSelect(value)}
                className={`py-3 rounded-lg border text-sm font-semibold transition-colors ${
                  amount === value
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-sand text-charcoal hover:bg-sand/20'
                }`}
              >
                {value === 'custom' ? t('donate.custom') : `$${value}`}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Amount Input */}
        {amount === 'custom' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder={t('donate.enterAmount', { defaultValue: 'Enter Amount' })}
                className="w-full px-4 py-3 rounded-lg border border-sand focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-sand focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="TZS">TZS</option>
            </select>
          </div>
        )}

        {/* Donation Cause */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-3">
            {t('donate.directDonation')}
          </label>
          <select
            value={donationCause}
            onChange={(e) => setDonationCause(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-sand focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="general">{t('donate.whereNeeded')}</option>
            <option value="zakat">{t('donate.zakat')}</option>
            <option value="sadaqah">{t('donate.sadaqah')}</option>
            <option value="waterWells">{t('donate.waterWells')}</option>
            <option value="orphans">{t('donate.orphans')}</option>
            <option value="ramadan">{t('donate.ramadan')}</option>
          </select>
        </div>

        {/* Payment Methods */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-3">
            {t('donate.paymentMethod')}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              className="p-4 rounded-lg border-2 border-primary bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <div className="text-center">
                <div className="font-semibold">Stripe</div>
                <div className="text-sm opacity-70">Credit Card</div>
              </div>
            </button>
            <button
              type="button"
              className="p-4 rounded-lg border border-sand bg-white hover:bg-sand/10 transition-colors"
            >
              <div className="text-center">
                <div className="font-semibold">PayPal</div>
                <div className="text-sm opacity-70">Digital Wallet</div>
              </div>
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full btn-primary py-4 text-lg"
        >
          {t('donate.donateSecurely')}
        </button>

        {/* Security Note */}
        <div className="flex items-center justify-center gap-2 text-sm text-charcoal/60">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15.1 8H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
          </svg>
          <span>{t('donate.sslSecure')}</span>
        </div>
      </form>
    </div>
  )
}