import { Locale } from '@/i18n/settings'
import DonateContent from '@/components/sections/DonateContent'

export default async function DonatePage({ 
  params 
}: { 
  params: Promise<{ lng: Locale }> 
}) {
  const { lng } = await params

  return (
    <div className="min-h-screen flex flex-col">
      <DonateContent lng={lng} />
    </div>
  )
}