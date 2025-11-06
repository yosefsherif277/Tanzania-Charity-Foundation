import ActivitiesContent from "../../../components/sections/ActivitiesContent";

export default async function ActivitiesPage({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 ">
      <main className="flex-1 px-4 sm:px-10 md:px-20 lg:px-40 py-12">
        <ActivitiesContent lng={lng} />
      </main>
    </div>
  );
}
