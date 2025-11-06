import WaterWellsContent from "@/components/sections/WaterWellsContent";
import { Locale } from "@/i18n/settings";

export default async function WaterWellsPage({
  params,
}: {
  params: Promise<{ lng: Locale }>;
}) {
  const { lng } = await params;

  return (
    <div className="min-h-screen flex flex-col">
        <WaterWellsContent lng={lng} />
    </div>
  )}
