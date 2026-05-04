"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/i18n/client";
import { languages, type Locale } from "@/i18n/settings";
import { Route } from "next";
import Image from "next/image";

interface HeaderProps {
  lng: Locale;
}

export default function Header({ lng }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation(lng, "common");
  const headerRef = useRef<HTMLElement>(null);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  // مراقبة تغيرات حجم الهيدر وتحديث المتغير CSS
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeaderHeight = () => {
      const height = header.offsetHeight;
      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`,
      );
    };

    updateHeaderHeight();
    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    resizeObserver.observe(header);

    return () => {
      resizeObserver.disconnect();
      document.documentElement.style.removeProperty("--header-height");
    };
  }, []);

  // إغلاق قائمة اللغة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target as Node)
      ) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigation = [
    { href: `/${lng}`, label: t("nav.home") },
    { href: `/${lng}/about`, label: t("nav.about") },
    { href: `/${lng}/our-purpose`, label: t("nav.ourPurpose") },
    { href: `/${lng}/projects`, label: t("nav.projects") },
    { href: `/${lng}/gallery`, label: t("nav.gallery") },
    { href: `/${lng}/contact`, label: t("nav.contact") },
  ];

  const safeLanguages = Object.entries(languages).map(([code, name]) => ({
    code: code as Locale,
    name,
    dir: code === "ar" ? "rtl" : "ltr",
  }));

  const isActive = (href: string) => {
    // الرابط الأولي (الصفحة الرئيسية) فعّال فقط بالضبط
    if (pathname === href) return true;

    // مسارات فرعية يتم التحقق منها بدقة بداية الرابط المتبوع بشرطة
    if (href === `/${lng}`) return false;

    return pathname.startsWith(href + "/");
  };

  // إغلاق القائمة عند تغيير المسار
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // منع التمرير عند فتح القائمة على الهاتف
  useEffect(() => {
    document.body.classList.toggle("no-scroll", isMobileMenuOpen);
    document.documentElement.classList.toggle("no-scroll", isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header ref={headerRef} className="sticky-header">
        {/* النصف العلوي: الشعار والأزرار */}
        <div className="border-b border-sand/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-content py-4">
              {/* الشعار */}
              <Link
                href={`/${lng}`}
                className="flex items-center gap-3 text-charcoal flex-shrink-0"
              >
                <div className="text-primary size-10">
                  <Image
                    src="/images/charityIconWithoutBG.png"
                    alt="Charity Foundation Logo"
                    width={40}
                    height={40}
                    priority
                    placeholder="blur"
                    blurDataURL="/images/charityIconWithoutBG.png"
                  />
                </div>
                <h1 className="font-display text-xl font-bold max-w-[120px] sm:max-w-none break-words sm:break-normal">
                  {t("header.title")}
                </h1>
              </Link>

              {/* الأزرار - تنمو حسب المحتوى */}
              <div className="flex items-center gap-3 flex-1 justify-end">
                {/* قائمة اختيار اللغة */}
                <div className="relative" ref={languageMenuRef}>
                  <button
                    onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                    className="flex items-center justify-center rounded-lg h-9 px-3 bg-sand text-charcoal hover:bg-sand/80 transition-colors text-sm font-medium border border-sand/50 whitespace-nowrap"
                  >
                    <span className="mr-2">
                      {
                        safeLanguages.find(
                          (safeLanguage) => safeLanguage.code === lng,
                        )?.name
                      }
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isLanguageMenuOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* قائمة اللغة المنسدلة */}
                  {isLanguageMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-sand/20 z-50 py-2">
                      {safeLanguages.map((safeLanguage) => (
                        <Link
                          key={safeLanguage.code}
                          href={
                            pathname.replace(
                              `/${lng}`,
                              `/${safeLanguage.code}`,
                            ) as Route
                          }
                          className="block px-4 py-2 text-sm text-charcoal hover:bg-sand/50 transition-colors"
                          onClick={() => setIsLanguageMenuOpen(false)}
                        >
                          {safeLanguage.name}
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
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
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
                  className={`nav-link ${isActive(item.href) ? "active" : ""}`}
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
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* رأس القائمة الجانبية */}
          <div className="flex items-center justify-between p-6 border-b border-sand/30 flex-shrink-0">
            <div className="flex items-center gap-3 text-charcoal">
              <div className="text-primary size-8">
                <Image
                    src="/images/charityIconWithoutBG.png"
                    alt="Charity Foundation Logo"
                    width={40}
                    height={40}
                    priority
                    placeholder="blur"
                    blurDataURL="/images/charityIconWithoutBG.png"
                  />
              </div>
              <h1 className="font-display text-xl font-bold">
                {t("header.title")}
              </h1>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-charcoal hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
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
                      ? "bg-primary text-primary-foreground"
                      : "text-charcoal hover:bg-sand/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* قسم اللغة في القائمة الجانبية */}
            <div className="p-6 border-t border-sand/30">
              <h3 className="text-lg font-semibold text-charcoal mb-4">
                {lng === "ar"
                  ? "اختر اللغة"
                  : lng === "en"
                    ? "Select Language"
                    : "Chagua Lugha"}
              </h3>
              <div className="space-y-2">
                {safeLanguages.map((safeLanguage) => (
                  <Link
                    key={safeLanguage.code}
                    href={
                      pathname.replace(
                        `/${lng}`,
                        `/${safeLanguage.code}`,
                      ) as Route
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 px-4 rounded-lg transition-colors text-sm ${
                      lng === safeLanguage.code
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "text-charcoal hover:bg-sand/50"
                    }`}
                  >
                    {safeLanguage.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
