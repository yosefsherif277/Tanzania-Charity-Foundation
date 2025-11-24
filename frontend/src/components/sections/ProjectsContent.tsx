"use client";
import { useTranslation } from "@/i18n/client";
import Link from "next/dist/client/link";

export default function ProjectsContent({ lng }: { lng: "ar" | "en" | "sw" | "it" }) {
      const { t } = useTranslation(lng, "common");

  const projects = [
    {
      title: t("waterWells.title"),
      description: t("waterWells.description"),
      href: `/${lng}/projects/water-wells`,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCjGczLn5SAoeWQOr8Dx25ByMw07yjdHAN9geR6MDUU7Z87mDEIWWdygmOeEO-mis1kGondS6a3nRy5uo9tLGUYjK73oqSrIvloskx5ptK1L4Im3zGaANP65i2cH14E66IxPjKlGjGam4Ht1JcV75k9RVcV37habOJ_avDbA1IlXuxalJQDP_7lFZSX3X1K0eGNZNfgrqpHlp8upiN8uIagedwWoILOakfhXUjShCxKo85WIh-lI9MiB3TzrvRVdDpWvcmUR6gzry0",
      stats: "50+ Wells Built",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
                {t("projects.title")}
              </h1>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                {t("projects.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Link key={index} href={project.href} className="group">
                  <div className="card card-hover overflow-hidden">
                    <div
                      className="w-full h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="p-6">
                      <h3 className="font-display text-2xl font-bold text-charcoal mb-2">
                        {project.title}
                      </h3>
                      <p className="text-charcoal/70 mb-4">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-semibold">
                          {project.stats}
                        </span>
                        <span className="text-accent font-semibold group-hover:translate-x-1 transition-transform">
                          {t("buttons.learnMore")} →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}