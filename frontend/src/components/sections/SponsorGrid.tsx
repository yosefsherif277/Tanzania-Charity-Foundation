'use client'

import { useTranslation } from '@/i18n/client'
import { Locale } from '@/i18n/settings'

interface SponsorGridProps {
  lng: Locale
}

export default function SponsorGrid({ lng }: SponsorGridProps) {
  const { t } = useTranslation(lng, 'common')

  const children = [
    {
      name: 'Aisha',
      age: 7,
      interest: 'loves to draw',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7DESrArya2LopRxfKGg6V1gmbKEJzQI8aRXP3yOCoeuuZK72wokwvH3ZlchX2vxOsCKkYGAbe4zWotcNyowG-FCbSiH8hwVsooI0kJj5SB5ih20sEwVFCI4xMJLCilM497pKdXwOJK4tf-l-d3J-PM8PxCgosGfe7tsZITSVg0KczodK8zH0O61IpG6eWXMN55L2g9p7fkz8TXtSpN_dzTJp0ZB2u0AReF0aqHizrXHva1yGWfwA9TmatHD9wy21RCHM1RKgpdo8'
    },
    {
      name: 'Baraka',
      age: 9,
      interest: 'dreams of being a teacher',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeeJ7KAm5aeZsCq4PcqVbsbRAO-LJQJZdRCRIxlxcuTrPbvscfPY0Q3QLkbytUNNpI1oUOIWKRSc5YWL6yY7SWAxyb5BXmxtN_dt48v7SLokW8D5GvwJSYLfEMkz2H87QNb0k-odxDfZmD4KnU3naG3VtudZLwjUA38bB8cEbJGT31aPXkfF1LwibIKE0igBfya7rSpxmMtHyC1UwfT0isEIA2wBnA-o86E4FO-Q-wUyoItHQhrNrUThTVQfbDPlzBqblrZmO82Cc'
    },
    {
      name: 'Fatima',
      age: 6,
      interest: 'enjoys reading stories',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUL-ZsAsnSOZZ18DQi0srWVNgBHcVeZ0HGdehwvEJR0zwImWQPXxPfDx0-ZBNu7znyXDIVUSsgUwatWeDPLHbPf0AUA-x_Fr6kev_vVy7k1XiljwPKe4v5Ocl5vpwGh9YWN8IROzITx4jvyN0obkdMr4BRtV-MyqBUvNm1UOr6gPQJfSrv-Yf3HRsLDv_BQN3j9_qNNvBZIrXXnsmnMqk1JUoxjcakNRINhSwoEG5N9OxHjqRrA62w5nohBBVDu09qNao8m_Yn9qU'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
            {t('sponsor.childrenTitle', { defaultValue: 'Children Waiting for Sponsorship' })}
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            {t('sponsor.childrenDescription', { defaultValue: 'Meet some of the wonderful children waiting for a sponsor like you' })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {children.map((child, index) => (
            <div key={index} className="card card-hover overflow-hidden text-center">
              <div 
                className="w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${child.image})` }}
              />
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-charcoal mb-2">
                  {child.name}
                </h3>
                <p className="text-charcoal/70 mb-4">
                  {child.age} years old, {child.interest}
                </p>
                <div className="text-primary text-lg font-semibold mb-4">
                  {t('sponsor.monthlyCost')}
                </div>
                <button className="btn-primary w-full">
                  {t('buttons.sponsorNow')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}