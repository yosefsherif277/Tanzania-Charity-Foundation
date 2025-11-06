"use client";
import React from 'react'
import { useTranslation } from '@/i18n/client'
import Link from 'next/link';

export default function WaterWellsContent({ lng }: { lng: "ar" | "en" | "sw" }) {
  const { t } = useTranslation(lng, "common");

  const wells = [
    {
      type: t("waterWells.shallowWell"),
      name: "Zanzibar Village Well",
      people: 300,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBYcl3hzwLUpqp4aWXKmDYon_uNVW64UY7LXWvy9_GJBxBrD0wpbW1otUylvR7CWWQLJWf7FW_sQbVf3tq_gGJ-nT46pg5oBLrxyxCUJFkio_CS2ZAOCZDTS3PxG60mnn2MAxQZcB2QRnr9PPE0koaPZFEPfzDBAF0O9wFiWcwBI--iyibpmvkZqWomQMAMiY6e6HY4JVcu9y5jvsKQ2p-xgCbu-dKllhBNiRGAFtYcB2J5gYB7F36caihkJkTwzdyE6B3B1X4Hmk4",
    },
    {
      type: t("waterWells.deepWell"),
      name: "Dodoma Community Well",
      people: 1000,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDAWQIm2rD57LxrjL_5nH-dygTdPiTToIPwlqS6s1V59n13q_w8R9_cX1P326uzsvpk6L7PAgBSenPoj_2tN4R8nQ1aBdcPpWjhSdmZ7ynWdQaj4G0fKgHyqWGELm_xUuR2kdOFa1AvDt1obkn_HXSA6N4L8YcirCC-UGT3C1GTsOgwwaLG6gQCx3PJOu03_l68owBzndK9MEXQJcCVi6vh_sy0nmSurni5WSObbdGa0VtQkbbE9T9RBGIYWoEjtxxJP7pkgs1hKLE",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url(https://lh3.googleusercontent.com/aida-public/AB6AXuCjGczLn5SAoeWQOr8Dx25ByMw07yjdHAN9geR6MDUU7Z87mDEIWWdygmOeEO-mis1kGondS6a3nRy5uo9tLGUYjK73oqSrIvloskx5ptK1L4Im3zGaANP65i2cH14E66IxPjKlGjGam4Ht1JcV75k9RVcV37habOJ_avDbA1IlXuxalJQDP_7lFZSX3X1K0eGNZNfgrqpHlp8upiN8uIagedwWoILOakfhXUjShCxKo85WIh-lI9MiB3TzrvRVdDpWvcmUR6gzry0)",
          }}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center text-white max-w-4xl mx-auto">
              <h1 className="font-display text-4xl md:text-6xl font-black mb-6">
                {t("waterWells.title")}
              </h1>
              <p className="text-lg md:text-xl leading-relaxed">
                {t("waterWells.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Wells Gallery */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {wells.map((well, index) => (
                <div key={index} className="card card-hover overflow-hidden">
                  <div
                    className="w-full h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${well.image})` }}
                  />
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full mb-2">
                      {well.type}
                    </span>
                    <h3 className="font-display text-xl font-bold text-charcoal mb-2">
                      {well.name}
                    </h3>
                    <p className="text-charcoal/70">
                      {t("waterWells.servesPeople", { count: well.people })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              {t("home.sponsorWell")}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              {t("home.wellCost")}: $1,500 - $5,000
            </p>
            <Link href={`/${lng}/donate`} className="btn-accent inline-block">
              {t("buttons.donateNow")}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );

}
