import ProjectsContent from "@/components/sections/ProjectsContent";
import { Locale } from "@/i18n/settings";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lng: Locale }>;
}) {
  const { lng } = await params;

  return (
    <div className="min-h-screen flex flex-col">
        <ProjectsContent lng={lng} />
    </div>
  )
}
