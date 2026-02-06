import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AdminToursPage() {
  const tours = await prisma.tour.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Manage Tours</h1>
        <Link href="/admin/tours/new" className="rounded-full border border-white/40 bg-white/20 px-5 py-2 font-semibold backdrop-blur-md transition hover:bg-white/35">
          Create Tour
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/20">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Location</th>
              <th className="p-3">Price</th>
              <th className="p-3">Featured</th>
              <th className="p-3">Order</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour) => (
              <tr key={tour.id} className="border-t border-white/20">
                <td className="p-3">{tour.title}</td>
                <td className="p-3">{tour.location}</td>
                <td className="p-3">${tour.price.toLocaleString()}</td>
                <td className="p-3">{tour.isFeatured ? "Yes" : "No"}</td>
                <td className="p-3">{tour.featuredOrder ?? "-"}</td>
                <td className="p-3">
                  <Link href={`/admin/tours/${tour.id}`} className="underline underline-offset-2">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
            {tours.length === 0 && (
              <tr>
                <td className="p-3 text-white/70" colSpan={6}>
                  No tours found. Create your first tour.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
