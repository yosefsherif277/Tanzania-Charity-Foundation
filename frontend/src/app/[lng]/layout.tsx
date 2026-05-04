import { languages, type Locale } from "@/i18n/settings";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import WhatsAppChat from "@/components/ui/WhatsAppChat";

// توليد جميع المسارات الممكنة للغات
export function generateStaticParams() {
  return (Object.keys(languages) as Locale[]).map((lng) => ({ lng }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[lng]">) {
  const resolvedParams = (await params) as { lng: Locale };
  const { lng } = resolvedParams;

  return (
    <>
      <Header lng={lng} />
      {children}
      <WhatsAppChat lng={lng} />
      <Footer lng={lng} />
    </>
  );
}
