"use client";
import { TourPackage } from "@/lib/tours";
import { MapPin, Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



interface TourPackageCardProps {
  tour: TourPackage;
}

export function TourPackageCard({ tour }: TourPackageCardProps) {
  return (
    <div className="card overflow-hidden group hover:shadow-xl transition-shadow duration-300 rounded-3xl shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          width={800}
          height={600}
        />
        {tour.featured && (
          <div className="badge absolute top-4 left-4 rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-black">
            Featured
          </div>
        )}
        {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm">{tour.rating}</span>
          <span className="text-xs text-gray-600">({tour.reviews})</span>
        </div> */}
      </div>

      <div className="card-body p-6">
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{tour.destination}</span>
        </div>
        
        <h3 className="mb-4 text-black">{tour.title}</h3>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{tour.groupSize}</span>
          </div>
        </div>

        <div className="space-y-1 mb-4">
          {tour.highlights.slice(0, 3).map((highlight, index) => (
            <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-green-600 mt-0.5">✓</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card-footer p-6 pt-0 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-900">From</p>
          <p className="text-blue-900">
            ${tour.price.toLocaleString()}
          </p>
        </div>
        <Link href={`/packages/details/${tour.id}`}  className="mt-5 w-fit bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full transition-colors duration-200 cursor-pointer">View Details</Link>
      </div>
    </div>
  );
}
