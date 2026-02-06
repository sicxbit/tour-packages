import TourForm from "@/components/admin/TourForm";

export default function NewTourPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Create Tour</h1>
      <TourForm mode="create" />
    </div>
  );
}
