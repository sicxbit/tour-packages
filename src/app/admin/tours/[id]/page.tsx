import TourForm from "@/components/admin/TourForm";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface Params {
  params: Promise<{ id: string }>;
}

export default async function EditTourPage({ params }: Params) {
  const { id } = await params;
  const tour = await prisma.tour.findUnique({ where: { id } });

  if (!tour) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Edit Tour</h1>
        <TourForm
          mode="edit"
          tourId={tour.id}
          initialValues={{
            title: tour.title,
            location: tour.location,
            duration: tour.duration,
            price: tour.price,
            description: tour.description,
            imageUrl: tour.imageUrl || "",
          }}
        />
      </div>
    </div>
  );
}
