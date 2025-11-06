import { useTranslation } from '@/i18n/client'
import { Locale } from '@/i18n/settings'
import HeroSection from '@/components/sections/HeroSection'
import MissionSection from '@/components/sections/MissionSection'
import ProjectsSection from '@/components/sections/ProjectsSection'

export default async function HomePage({ 
  params 
}: { 
  params: Promise<{ lng: Locale }> 
}) {
  const { lng } = await params

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection lng={lng} />
        <MissionSection lng={lng} />
        <ProjectsSection lng={lng} />
      </main>
    </div>
  )
}