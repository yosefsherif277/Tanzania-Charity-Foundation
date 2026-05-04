import { Locale } from '@/i18n/settings'
import ContactContent from '@/components/sections/ContactContent'

export default async function ContactPage({ 
  params 
}: { 
  params: Promise<{ lng: Locale }> 
}) {
  const { lng } = await params

  return (
    <div className="min-h-screen flex flex-col">
      <ContactContent lng={lng} />
    </div>
  )
}