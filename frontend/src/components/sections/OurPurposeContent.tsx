"use client";
import { useTranslation } from "@/i18n/client";
import React from "react";

export default function OurPurposeContent({
  lng,
}: {
  lng: "ar" | "en" | "sw" | "it";
}) {
  const { t } = useTranslation(lng, "common");

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url(https://lh3.googleusercontent.com/aida-public/AB6AXuD34zBBXAsdi52SUUj1W5EeAPh1L6Dc1o3T8YbZNUarkYyNvYSAiFyk9hltRMHj_BKUleRwxAZ_IcJnYpavtOhyWuEgDEfkEYldc1wnV8NEkh0d5G8fmG1BViumkte9R4IuNXHOnzQZ4y0v-j7iAQzm43ZppUIhVVI2OocXp11wMdKtdtACh4reUImurtOpXxTKY1su-o6vMPGKi5dbTx0sUED-msoqLsB9GgE_9QSXYa4A-iodiKty-o7p2avwTbGLnS0LV0Efdaw)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-6xl font-black mb-6">
              {t("ourPurpose.title")}
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              {t("ourPurpose.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-charcoal mb-12">
            {t("ourPurpose.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="card card-hover text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-sand/50 text-accent mb-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-4">
                {t("ourPurpose.mission")}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {t("ourPurpose.missionText")}
              </p>
            </div>

            {/* Vision Card */}
            <div className="card card-hover text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-sand/50 text-accent mb-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-4">
                {t("ourPurpose.vision")}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {t("ourPurpose.visionText")}
              </p>
            </div>

            {/* Values Card */}
            <div className="card card-hover text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-sand/50 text-accent mb-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-4">
                {t("ourPurpose.values")}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {t("ourPurpose.valuesText")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
