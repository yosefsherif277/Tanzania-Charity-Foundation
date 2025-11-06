import SponsorContent from '@/components/sections/SponsorContent'
import { Locale } from '@/i18n/settings'

export default async function SponsorPage({ 
  params 
}: { 
  params: Promise<{ lng: Locale }> 
}) {
  const { lng } = await params
  return (
    <div className="min-h-screen flex flex-col">
      <SponsorContent lng={lng} />
    </div>
  )
}