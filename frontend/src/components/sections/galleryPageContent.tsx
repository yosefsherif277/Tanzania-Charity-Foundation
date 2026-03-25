'use client';

import { useTranslation } from "@/i18n/client";
import { Locale } from "@/i18n/settings";
import GalleryImageKit from "./GalleryImageKit";

export default function GalleryPageContent({ lng }: { lng: Locale }) {
  const { t } = useTranslation(lng, "common");

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-section-light pattern-bg-light py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
            {t("gallery.title")}
          </h1>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            {t("gallery.description")}
          </p>
        </div>
      </section>

      {/* معرض الصور */}
      <GalleryImageKit lng={lng} />
    </main>
  );
}