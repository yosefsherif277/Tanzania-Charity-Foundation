"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/client";
import { Locale } from "@/i18n/settings";

interface ContactFormProps {
  lng: Locale;
}

export default function ContactForm({ lng }: ContactFormProps) {
  const { t } = useTranslation(lng, "common");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // ✅ استخدم Access Key من Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "43dc8b7f-861a-4801-a083-50adf207b0eb", // استبدلها بالمفتاح الخاص بك
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Tanzania Charity Foundation Website",
          reply_to: formData.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="card">
            <h2 className="font-display text-2xl font-bold text-charcoal mb-6">
              {t("contact.sendMessage", { defaultValue: "Send us a Message" })}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    {t("contact.fullName")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sand focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder={t("contact.fullNamePlaceholder", {
                      defaultValue: "Your full name",
                    })}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sand focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder={t("contact.emailPlaceholder", {
                      defaultValue: "your.email@example.com",
                    })}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-charcoal mb-2"
                >
                  {t("contact.subject")}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-sand focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder={t("contact.subjectPlaceholder", {
                    defaultValue: "What is your message about?",
                  })}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-charcoal mb-2"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-sand focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder={t("contact.messagePlaceholder", {
                    defaultValue: "Write your message here...",
                  })}
                />
              </div>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                {t("buttons.sendMessage")}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="card">
            <h3 className="font-display text-xl font-bold text-charcoal mb-4">
              {t("contact.contactInfo", {
                defaultValue: "Contact Information",
              })}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-primary mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-charcoal">Email</p>
                  <p className="text-charcoal/70">info@tanzaniacf.org</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-primary mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-charcoal">Phone</p>
                  <p className="text-charcoal/70">+255 686 778 002</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-primary mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-charcoal">Address</p>
                  <p className="text-charcoal/70">
                    Tanga,
                    <br />
                    Tanzania
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-primary mt-1">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm5 4a3 3 0 100 6 3 3 0 000-6zm6-1a1 1 0 000 2h3a1 1 0 000-2h-3zm0 4a1 1 0 000 2h3a1 1 0 000-2h-3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-charcoal">
                    {t("contact.registeryId")}
                  </p>
                  <p className="text-charcoal/70">00NGO/R/2497</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="card">
            <h3 className="font-display text-xl font-bold text-charcoal mb-4">
              {t("contact.connectWithUs")}
            </h3>

            <div className="flex gap-4">
              {/* X (Twitter) */}
              <a
                href="https://x.com/tanzaniacf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal/70 hover:text-primary transition-colors"
                title="X"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.966 6.807H2.882l7.732-8.835L1.227 2.25h6.836l4.866 6.44 5.483-6.44zM17.534 20.643h1.826L6.455 3.897H4.545l13.989 16.746z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/tanzaniacharityfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal/70 hover:text-primary transition-colors"
                title="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com/profile.php?id=61588109466575"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal/70 hover:text-primary transition-colors"
                title="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@tanzaniacf21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal/70 hover:text-primary transition-colors"
                title="TikTok"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.75 2.9 2.9 0 0 1 2.31-4.64 2.88 2.88 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.01-.01z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/channel/UC_IIGGoMmqYcxsqAGPZPMTw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal/70 hover:text-primary transition-colors"
                title="YouTube"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
