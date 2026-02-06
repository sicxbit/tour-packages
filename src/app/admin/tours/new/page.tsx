import TourForm from "@/components/admin/TourForm";

export default function NewTourPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Create Tour</h1>
        <TourForm mode="create" />
      </div>
    </div>
  );
}
