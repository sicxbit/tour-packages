import { prisma } from "@/lib/prisma";
import { mapTourToPackage } from "@/lib/tours";
import TourPackageDetail from "../../TourPackageDetails";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const tour = await prisma.tour.findUnique({ where: { id } });

  if (!tour) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tour Not Found</h1>
          <p className="text-gray-600 mb-4">The tour you&apos;re looking for doesn&apos;t exist.</p>
          <a href="/packages" className="text-blue-600 hover:underline">
            Back to Tours
          </a>
        </div>
      </div>
    );
  }

  return <TourPackageDetail tour={mapTourToPackage(tour)} />;
}
