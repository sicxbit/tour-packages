import TourForm from "@/components/admin/TourForm";
import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";

interface Params {
  params: Promise<{ id: string }>;
}

export default async function EditTourPage({ params }: Params) {
  const { id } = await params;

  if (id === "new") {
    redirect("/admin/tours/new");
  }

  const tour = await prisma.tour.findUnique({ where: { id } });

  if (!tour) {
    notFound();
  }

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Edit Tour</h1>
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
          isFeatured: tour.isFeatured,
          featuredOrder: tour.featuredOrder ?? undefined,
        }}
      />
    </div>
  );
}
