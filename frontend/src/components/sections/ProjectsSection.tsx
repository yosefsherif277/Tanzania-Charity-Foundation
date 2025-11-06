"use client"
import { useTranslation } from '@/i18n/client'
import { Locale } from '@/i18n/settings'
import Link from 'next/link'

interface ProjectsSectionProps {
  lng: Locale
}

export default function ProjectsSection({ lng }: ProjectsSectionProps) {
  const { t } = useTranslation(lng, 'common')

  const featuredProjects = [
    {
      title: t('waterWells.title'),
      description: t('waterWells.description'),
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjGczLn5SAoeWQOr8Dx25ByMw07yjdHAN9geR6MDUU7Z87mDEIWWdygmOeEO-mis1kGondS6a3nRy5uo9tLGUYjK73oqSrIvloskx5ptK1L4Im3zGaANP65i2cH14E66IxPjKlGjGam4Ht1JcV75k9RVcV37habOJ_avDbA1IlXuxalJQDP_7lFZSX3X1K0eGNZNfgrqpHlp8upiN8uIagedwWoILOakfhXUjShCxKo85WIh-lI9MiB3TzrvRVdDpWvcmUR6gzry0',
      href: `/${lng}/projects/water-wells`,
      stats: '50+ Wells',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
        </svg>
      )
    },
    {
      title: t('sponsor.title'),
      description: t('sponsor.description'),
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSV4-1Yii0HzaAqhfftbk76X8Z_rTumiUY1AvVOH6qJZIxau6Z7z1_76fkPnNgnU_kLhgPYBtkpzQPdMT_aeTXP0KUL0qUd5pYZlvx112-RvGaIWjX4zdHg3Pa8TXNnT7AT3E8AoGG0LnyGi9wq2x1PuSAgPzPzLu4Btq9asW5XIRrWDhYqsJNqwJPZiC8delHIX4MnLU4cQfPIDPKWZEMI-DFRiRCPEn1jg1pT6iI-t6aAnE1r6nLaePMpWJgz6aaBy1LnOEYhls',
      href: `/${lng}/sponsor`,
      stats: '100+ Children',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.01 2.01 0 0018.06 7h-.12a2 2 0 00-1.9 1.37l-.86 2.58c1.08.6 1.82 1.73 1.82 3.05v8h3zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7h4zm6.5 0v-4h1v-4c0-.82-.68-1.5-1.5-1.5h-2c-.82 0-1.5.68-1.5 1.5v4h1v4h3z"/>
        </svg>
      )
    },
    {
      title: t('projects.education', { defaultValue: 'Education Programs' }),
      description: t('projects.educationDesc', { defaultValue: 'Providing quality education and school supplies to underprivileged children' }),
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5f9vZ0Ep9ufGAG2LE6njrJ1sbWONYnAbzF1q99UK570Pn7BKgiPKEbQegQs-eqLc-27T0aqnIzKDtO8IKr8ohRn8PxYZ3m9795El9hQ3qhP69dSO_QOYtXxj7aZaDCtxj1Fd98J11FTOuUbSOCRZYyVGgMIcZf3bOaTVojixoglRYnmqssr17UyPOQgs5vrHmVtGasckkIGhAr7tsn6QiK1nvCt4DVC7QHwGKVq-ePR2HeaH6-A57CuJ8bOl409xfCmQ9dPaV69M',
      href: `/${lng}/projects`,
      stats: '500+ Students',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        </svg>
      )
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
            {t('projects.featuredProjects', { defaultValue: 'Our Featured Projects' })}
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            {t('projects.featuredDescription', { defaultValue: 'Discover how we are making a difference in communities across Tanzania' })}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Link key={index} href={project.href} className="group">
              <div className="card card-hover overflow-hidden h-full flex flex-col">
                {/* Project Image */}
                <div 
                  className="w-full h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-primary">
                      {project.icon}
                    </div>
                    <h3 className="font-display text-xl font-bold text-charcoal group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-charcoal/70 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Stats and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-sand/30">
                    <span className="text-sm font-semibold text-primary">
                      {project.stats}
                    </span>
                    <span className="text-accent font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      {t('buttons.learnMore')}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Link 
            href={`/${lng}/projects`}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <span>{t('projects.viewAllProjects', { defaultValue: 'View All Projects' })}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}