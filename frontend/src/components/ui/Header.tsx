'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from '@/i18n/client'
import type { Locale } from '@/i18n/settings'
import { Route } from 'next'
import Image from 'next/image'

interface HeaderProps {
  lng: Locale
}

export default function Header({ lng }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslation(lng, 'common')
  const headerRef = useRef<HTMLElement>(null)
  const languageMenuRef = useRef<HTMLDivElement>(null)

  // مراقبة تغيرات حجم الهيدر وتحديث المتغير CSS
  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const updateHeaderHeight = () => {
      const height = header.offsetHeight
      document.documentElement.style.setProperty('--header-height', `${height}px`)
    }

    updateHeaderHeight()
    const resizeObserver = new ResizeObserver(updateHeaderHeight)
    resizeObserver.observe(header)

    return () => {
      resizeObserver.disconnect()
      document.documentElement.style.removeProperty('--header-height')
    }
  }, [])

  // إغلاق قائمة اللغة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const navigation = [
    { href: `/${lng}`, label: t('nav.home') },
    { href: `/${lng}/about`, label: t('nav.about') },
    { href: `/${lng}/our-purpose`, label: t('nav.ourPurpose') },
    { href: `/${lng}/projects`, label: t('nav.projects') },
    { href: `/${lng}/projects/water-wells`, label: t('nav.waterWells') },
    { href: `/${lng}/sponsor`, label: t('nav.sponsor') },
    { href: `/${lng}/donate`, label: t('nav.donate') },
    { href: `/${lng}/contact`, label: t('nav.contact') },
  ]

  const languages = [
    { code: 'ar' as Locale, name: 'العربية', dir: 'rtl' },
    { code: 'en' as Locale, name: 'English', dir: 'ltr' },
    { code: 'sw' as Locale, name: 'Kiswahili', dir: 'ltr' },
  ]

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/')
  }

  // إغلاق القائمة عند تغيير المسار
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // منع التمرير عند فتح القائمة على الهاتف
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      document.documentElement.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      document.documentElement.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header ref={headerRef} className="sticky-header">
        {/* النصف العلوي: الشعار والأزرار */}
        <div className="border-b border-sand/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              {/* الشعار */}
              <Link href={`/${lng}`} className="flex items-center gap-3 text-charcoal flex-shrink-0">
                <div className="text-primary size-8">
                  <Image
                    src="/images/charityIconWithoutBG.png"
                    alt="Charity Foundation Logo"
                    width={32}
                    height={32}
                  />
                </div>
                <h1 className="font-display text-xl font-bold whitespace-nowrap">{t('header.title')}</h1>
              </Link>
              
              {/* الأزرار - تنمو حسب المحتوى */}
              <div className="flex items-center gap-3 flex-1 justify-end">
                {/* زر التبرع - يظهر على الشاشات المتوسطة والكبيرة */}
                <Link 
                  href={`/${lng}/donate`} 
                  className="hidden sm:flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors whitespace-nowrap min-w-[100px]"
                >
                  {t('buttons.donateNow')}
                </Link>
                
                {/* قائمة اختيار اللغة */}
                <div className="relative" ref={languageMenuRef}>
                  <button
                    onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                    className="flex items-center justify-center rounded-lg h-9 px-3 bg-sand text-charcoal hover:bg-sand/80 transition-colors text-sm font-medium border border-sand/50 whitespace-nowrap"
                  >
                    <span className="mr-2">
                      {lng === 'ar' ? 'العربية' : lng === 'en' ? 'English' : 'Kiswahili'}
                    </span>
                    <svg 
                      className={`w-4 h-4 transition-transform ${isLanguageMenuOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* قائمة اللغة المنسدلة */}
                  {isLanguageMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-sand/20 z-50 py-2">
                      {languages.map((language) => (
                        <Link
                          key={language.code}
                          href={pathname.replace(`/${lng}`, `/${language.code}`) as Route}
                          className="block px-4 py-2 text-sm text-charcoal hover:bg-sand/50 transition-colors"
                          onClick={() => setIsLanguageMenuOpen(false)}
                        >
                          {language.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* زر القائمة الجانبية للجوال */}
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="md:hidden p-2 text-charcoal hover:text-primary transition-colors flex-shrink-0"
                  aria-label="Open menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* النصف السفلي: التبويبات - يختفي على الهاتف */}
        <div className="hidden md:block bg-sand/10">
          <div className="container mx-auto px-4 sm:px-6">
            <nav className="flex items-center justify-center gap-8 py-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href as Route}
                  className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* القائمة الجانبية للجوال - تحتوي على كل التبويبات */}
      <div 
        className={`fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* رأس القائمة الجانبية */}
          <div className="flex items-center justify-between p-6 border-b border-sand/30 flex-shrink-0">
            <div className="flex items-center gap-3 text-charcoal">
              <div className="text-primary size-8">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fillRule="evenodd"></path>
                  <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fillRule="evenodd"></path>
                </svg>
              </div>
              <h1 className="font-display text-xl font-bold">{t('header.title')}</h1>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-charcoal hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* محتوى القائمة - قابل للتمرير */}
          <div className="flex-1 overflow-y-auto">
            <nav className="space-y-2 p-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href as Route}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-4 text-lg font-medium rounded-lg transition-colors ${
                    isActive(item.href) 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-charcoal hover:bg-sand/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* قسم اللغة في القائمة الجانبية */}
            <div className="p-6 border-t border-sand/30">
              <h3 className="text-lg font-semibold text-charcoal mb-4">
                {lng === 'ar' ? 'اختر اللغة' : lng === 'en' ? 'Select Language' : 'Chagua Lugha'}
              </h3>
              <div className="space-y-2">
                {languages.map((language) => (
                  <Link
                    key={language.code}
                    href={pathname.replace(`/${lng}`, `/${language.code}`) as Route}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 px-4 rounded-lg transition-colors text-sm ${
                      lng === language.code
                        ? 'bg-primary text-primary-foreground font-semibold'
                        : 'text-charcoal hover:bg-sand/50'
                    }`}
                  >
                    {language.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* زر التبرع في القائمة الجانبية - ثابت في الأسفل */}
          <div className="p-6 border-t border-sand/30 bg-white flex-shrink-0">
            <Link
              href={`/${lng}/donate` as Route}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-base hover:bg-primary/90 transition-colors"
            >
              {t('buttons.donateNow')}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}