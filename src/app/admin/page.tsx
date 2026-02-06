import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Admin Dashboard</h1>
        <p className="text-gray-600 mb-8">Manage tours and platform data.</p>

        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/admin/tours" className="p-6 border rounded-xl hover:bg-gray-50">
            <h2 className="font-semibold text-xl mb-1">Tours</h2>
            <p className="text-gray-600">Create, edit and delete tour packages.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
