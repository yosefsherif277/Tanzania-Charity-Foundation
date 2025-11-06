'use client'

import { useState } from 'react'
import { useTranslation } from '@/i18n/client'
import { Locale } from '@/i18n/settings'

interface ContactFormProps {
  lng: Locale
}

export default function ContactForm({ lng }: ContactFormProps) {
  const { t } = useTranslation(lng, 'common')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="card">
            <h2 className="font-display text-2xl font-bold text-charcoal mb-6">
              {t('contact.sendMessage', { defaultValue: 'Send us a Message' })}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    {t('contact.fullName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sand focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder={t('contact.fullNamePlaceholder', { defaultValue: 'Your full name' })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sand focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder={t('contact.emailPlaceholder', { defaultValue: 'your.email@example.com' })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                  {t('contact.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-sand focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder={t('contact.subjectPlaceholder', { defaultValue: 'What is your message about?' })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-sand focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder={t('contact.messagePlaceholder', { defaultValue: 'Write your message here...' })}
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full sm:w-auto"
              >
                {t('buttons.sendMessage')}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="card">
            <h3 className="font-display text-xl font-bold text-charcoal mb-4">
              {t('contact.contactInfo', { defaultValue: 'Contact Information' })}
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-primary mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-charcoal">Email</p>
                  <p className="text-charcoal/70">info@tanzaniacharity.org</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-primary mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-charcoal">Phone</p>
                  <p className="text-charcoal/70">+255 754 123 456</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-primary mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-charcoal">Address</p>
                  <p className="text-charcoal/70">
                    123 Charity Lane<br />
                    Dar es Salaam, Tanzania
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="card">
            <h3 className="font-display text-xl font-bold text-charcoal mb-4">
              {t('contact.connectWithUs')}
            </h3>
            
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-sand text-charcoal hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <span className="sr-only">{platform}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}