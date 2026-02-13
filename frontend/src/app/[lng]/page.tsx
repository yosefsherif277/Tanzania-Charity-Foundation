import { Locale } from "@/i18n/settings";
import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import WhatsAppBtn from "@/components/ui/WhatsAppChat";

// تعريف نوع الـ params
interface PageProps {
  params: {
    lng: Locale;
  };
}
export default async function HomePage({ params }: PageProps) {
  const { lng } = await params;

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection lng={lng} />
        <MissionSection lng={lng} />
        <ProjectsSection lng={lng} />
      </main>
    </div>
  );
}