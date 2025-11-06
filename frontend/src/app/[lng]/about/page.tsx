import AboutContent from "@/components/sections/AboutContent";
import { Locale } from "@/i18n/settings";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lng: Locale }>;
}) {
  const { lng } = await params;
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <AboutContent lng={lng} />
      </main>
    </div>
  );
}
