"use client";

import Link from 'next/link'
import { useTranslation } from '@/i18n/client'
import type { Locale } from '@/i18n/settings'

interface FooterProps {
  lng: Locale
}

export default function Footer({ lng }: FooterProps) {
  const { t } = useTranslation(lng, 'common')

  const quickLinks = [
    { href: `/${lng}/about`, label: t('nav.about') },
    { href: `/${lng}/sponsor`, label: t('nav.sponsor') },
    { href: `/${lng}/donate`, label: t('nav.donate') },
    { href: `/${lng}/contact`, label: t('nav.contact') },
  ]

  const projectLinks = [
    { href: `/${lng}/projects/water-wells`, label: t('nav.waterWells') },
    { href: `/${lng}/projects`, label: t('nav.projects') },
    { href: `/${lng}/our-purpose`, label: t('nav.ourPurpose') },
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
                  <Link href={`${link.href} as const`} className="footer-link">
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
                  <Link href={`${link.href} as const`} className="footer-link">
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
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-charcoal/70 hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-charcoal/70 hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.71 2.15 2.95 4.04 2.98-1.48 1.16-3.34 1.83-5.36 1.83-.35 0-.69-.02-1.03-.06 1.9 1.22 4.16 1.93 6.58 1.93 7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.61 1.58-1.36 2.17-2.23z"/>
              </svg>
            </a>
            <a href="#" className="text-charcoal/70 hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z"/>
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
            <Link href={`/${lng}/privacy`} className="footer-link">
              {t('footer.privacy')}
            </Link>
            <span className="text-charcoal/40">·</span>
            <Link href={`/${lng}/terms`} className="footer-link">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}