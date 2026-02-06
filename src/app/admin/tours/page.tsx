import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AdminToursPage() {
  const tours = await prisma.tour.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Manage Tours</h1>
          <Link href="/admin/tours/new" className="bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded-full font-semibold">
            Create Tour
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Title</th>
                <th className="p-3">Location</th>
                <th className="p-3">Price</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tours.map((tour) => (
                <tr key={tour.id} className="border-t">
                  <td className="p-3">{tour.title}</td>
                  <td className="p-3">{tour.location}</td>
                  <td className="p-3">${tour.price.toLocaleString()}</td>
                  <td className="p-3">
                    <Link href={`/admin/tours/${tour.id}`} className="text-blue-600 hover:underline">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
              {tours.length === 0 && (
                <tr>
                  <td className="p-3 text-gray-500" colSpan={4}>
                    No tours found. Create your first tour.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
