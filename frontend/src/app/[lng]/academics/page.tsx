import AcademicsContent from "@/components/sections/AcademicsContent";

export default async function AcademicsPage({ lng }: { lng: string }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 ">
      <AcademicsContent lng={lng} />
    </div>
  );
}
