import OurPurposeContent from "@/components/sections/OurPurposeContent";
import { Locale } from "@/i18n/settings";

export default async function OurPurposePage({
  params,
}: {
  params: Promise<{ lng: Locale }>;
}) {
  const { lng } = await params;

  return (
    <div className="min-h-screen flex flex-col">
      <OurPurposeContent lng={lng} />
    </div>
  );
}
