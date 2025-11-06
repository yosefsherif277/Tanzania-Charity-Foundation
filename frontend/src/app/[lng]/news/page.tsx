import NewsContent from '../../../components/sections/NewsContent'

export default async function NewsPage({ 
  params 
}: { 
  params: Promise<{ lng: string }> 
}) {
  const { lng } = await params

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-10">
        <NewsContent lng={lng} />
      </main>
    </div>
  )
}
