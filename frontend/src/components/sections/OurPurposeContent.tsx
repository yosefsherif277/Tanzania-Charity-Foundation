"use client";
import { useTranslation } from "@/i18n/client";
import { Locale } from "@/i18n/settings";

export default function OurPurposeContent({ lng }: { lng: Locale }) {
  const { t } = useTranslation(lng, "common");

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(255, 255, 255, 1) 100%), url(https://lh3.googleusercontent.com/aida-public/AB6AXuD34zBBXAsdi52SUUj1W5EeAPh1L6Dc1o3T8YbZNUarkYyNvYSAiFyk9hltRMHj_BKUleRwxAZ_IcJnYpavtOhyWuEgDEfkEYldc1wnV8NEkh0d5G8fmG1BViumkte9R4IuNXHOnzQZ4y0v-j7iAQzm43ZppUIhVVI2OocXp11wMdKtdtACh4reUImurtOpXxTKY1su-o6vMPGKi5dbTx0sUED-msoqLsB9GgE_9QSXYa4A-iodiKty-o7p2avwTbGLnS0LV0Efdaw)",
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

        {/* Core Principles */}

        <div className="container mx-auto mt-10 px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="card card-hover text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-sand text-accent mb-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
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
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-sand text-accent mb-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
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
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-sand text-accent mb-4">
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
