import { TourPackageCard } from "@/components/sections/packages/TourPackageCard";
import { mapTourToPackage } from "@/lib/tours";
import { Tour } from "@prisma/client";
import Link from "next/link";

export default function FeaturedTours({ tours }: { tours: Tour[] }) {
  if (tours.length === 0) {
    return null;
  }

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#ffe500]">Homepage Featured</p>
            <h2 className="text-3xl font-bold text-white">Featured Tours</h2>
          </div>
          <Link href="/packages" className="rounded-full border border-white/40 bg-white/10 px-5 py-2 text-white backdrop-blur-sm hover:bg-white/20">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourPackageCard key={tour.id} tour={mapTourToPackage(tour)} />
          ))}
        </div>
      </div>
    </section>
  );
}
