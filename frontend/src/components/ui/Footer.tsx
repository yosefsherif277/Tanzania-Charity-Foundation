"use client";

import Link from 'next/link'
import { useTranslation } from '@/i18n/client'
import type { Locale } from '@/i18n/settings'
import { Route } from 'next';

interface FooterProps {
  lng: Locale
}

export default function Footer({ lng }: FooterProps) {
  const { t } = useTranslation(lng, 'common')

  const quickLinks = [
  { href: `/${lng}/about` as Route, label: t('nav.about') },
  { href: `/${lng}/contact` as Route, label: t('nav.contact') },
]

  const projectLinks = [
    { href: `/${lng}/projects/water-wells` as Route, label: t('nav.waterWells') },
    { href: `/${lng}/projects` as Route, label: t('nav.projects') },
    { href: `/${lng}/our-purpose` as Route, label: t('nav.ourPurpose') },
  ]

  return (
    <footer className="bg-section-light border-t border-sand/30">
      <div className="container mx-auto py-12 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* معلومات المؤسسة */}
          <div className="md:col-span-2">
            <h5 className="font-display text-xl font-bold text-charcoal mb-4">
              Tanzania Charity Foundation
            </h5>
            <p className="text-charcoal/70 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
          
          {/* روابط سريعة */}
          <div>
            <h6 className="font-display text-lg font-bold text-charcoal mb-4">
              {t('footer.quickLinks')}
            </h6>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* المشاريع */}
          <div>
            <h6 className="font-display text-lg font-bold text-charcoal mb-4">
              {t('nav.projects')}
            </h6>
            <ul className="space-y-2">
              {projectLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* وسائل التواصل الاجتماعي */}
        <div className="mt-8 pt-8 border-t border-sand/30">
          <h6 className="font-display text-lg font-bold text-charcoal mb-4 text-center">
            {t('footer.followUs')}
          </h6>
          <div className="flex justify-center space-x-6 flex-wrap gap-4">
            {/* X (Twitter) */}
            <a href="https://x.com/tanzaniacf" target="_blank" rel="noopener noreferrer" className="text-charcoal/70 hover:text-primary transition-colors" title="X">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.966 6.807H2.882l7.732-8.835L1.227 2.25h6.836l4.866 6.44 5.483-6.44zM17.534 20.643h1.826L6.455 3.897H4.545l13.989 16.746z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com/tanzaniacharityfoundation" target="_blank" rel="noopener noreferrer" className="text-charcoal/70 hover:text-primary transition-colors" title="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://facebook.com/profile.php?id=61588109466575" target="_blank" rel="noopener noreferrer" className="text-charcoal/70 hover:text-primary transition-colors" title="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            {/* TikTok */}
            <a href="https://www.tiktok.com/@tanzaniacf21" target="_blank" rel="noopener noreferrer" className="text-charcoal/70 hover:text-primary transition-colors" title="TikTok">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.75 2.9 2.9 0 0 1 2.31-4.64 2.88 2.88 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.01-.01z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://www.youtube.com/channel/UC_IIGGoMmqYcxsqAGPZPMTw" target="_blank" rel="noopener noreferrer" className="text-charcoal/70 hover:text-primary transition-colors" title="YouTube">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* حقوق النشر */}
        <div className="mt-8 pt-8 border-t border-sand/30 text-center">
          <p className="text-charcoal/60 text-sm">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <div className="flex justify-center gap-4 mt-2 text-xs">
            <Link href={`/${lng}/privacy` as Route} className="footer-link">
              {t('footer.privacy')}
            </Link>
            <span className="text-charcoal/40">·</span>
            <Link href={`/${lng}/terms` as Route} className="footer-link">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}