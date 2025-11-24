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
      href: `/${lng}/projects/water-wells` as const, // أضف as const هنا
      stats: '50+ Wells',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
        </svg>
      )
    },
    {
      title: t('projects.education', { defaultValue: 'Education Programs' }),
      description: t('projects.educationDesc', { defaultValue: 'Providing quality education and school supplies to underprivileged children' }),
      image: '/images/edu.jfif',
      href: `/${lng}/projects` as const, // أضف as const هنا
      stats: '500+ Students',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        </svg>
      )
    }
  ] as const // أو أضف as const هنا للمصفوفة ككل

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
            href={`/${lng}/projects` as const} // أضف as const هنا أيضاً
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