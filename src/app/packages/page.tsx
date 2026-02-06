import { TourPackageCard } from "@/components/sections/packages/TourPackageCard";
import Navbar from "@/components/layout/NavbarTwo";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import { prisma } from "@/lib/prisma";
import { mapTourToPackage } from "@/lib/tours";

export default async function Packages() {
  const tours = await prisma.tour.findMany({ orderBy: { createdAt: "desc" } });
  const mappedTours = tours.map(mapTourToPackage);

  const navigationItems = [
    { label: "Home", href: "/", active: false },
    { label: "Packages", href: "/packages", active: true },
    { label: "About", href: "/about", active: false },
    { label: "Login", href: "/login", active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar navigationItems={navigationItems} />
      <div className="relative h-[400px] overflow-hidden bg-white">
        <Image className="absolute inset-0 w-full h-full object-cover" alt="Travel background" src="/assets/imgs/banner/beach.jpg" fill priority />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 pb-10">
          <h2 className="font-semibold text-white text-3xl md:text-4xl mb-2">Tour Packages</h2>
          <p className="text-white text-lg">Explore our curated selection of amazing destinations around the world</p>
        </div>
      </div>

      <main className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-8">
        <div className="mb-6">
          <p className="text-gray-600">Showing {mappedTours.length} {mappedTours.length === 1 ? "package" : "packages"}</p>
        </div>

        {mappedTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mappedTours.map((tour) => (
              <TourPackageCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-600">No tours found. Please check back soon.</div>
        )}
      </main>

      <Footer />
    </div>
  );
}
