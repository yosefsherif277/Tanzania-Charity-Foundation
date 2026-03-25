import GalleryPageContent from "@/components/sections/galleryPageContent";
import { Locale } from "@/i18n/settings";

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ lng: Locale }>;
}) {
  const { lng } = await params;
  return (
    <div className="min-h-screen flex flex-col">
      <GalleryPageContent lng={lng} />
    </div>
  );
}