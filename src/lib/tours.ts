import { Tour } from "@prisma/client";

export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  groupSize: string;
  featured?: boolean;
  highlights: string[];
  description?: string;
  itinerary?: {
    day: number;
    title: string;
    description: string;
    activities?: string[];
  }[];
  inclusions?: string[];
  exclusions?: string[];
  gettingThere?: string;
  accommodation?: string;
  meals?: string;
  importantNotes?: string[];
}

const fallbackImage = "/assets/imgs/package/package.png";

export function mapTourToPackage(tour: Tour): TourPackage {
  return {
    id: tour.id,
    title: tour.title,
    destination: tour.location,
    duration: tour.duration,
    price: tour.price,
    image: tour.imageUrl || fallbackImage,
    description: tour.description,
    rating: 4.8,
    reviews: 120,
    groupSize: "2-10 people",
    featured: tour.isFeatured,
    highlights: [
      `Discover ${tour.location}`,
      "Professional local guidance",
      "Flexible cancellation options",
    ],
    itinerary: [
      { day: 1, title: "Arrival & Welcome", description: "Arrival, check-in and welcome briefing." },
      { day: 2, title: "Main Tour Experience", description: "Enjoy curated experiences and activities." },
    ],
    gettingThere: "Airport pickup can be arranged upon request.",
    accommodation: "Comfortable accommodations included based on your package.",
    meals: "Daily breakfast included.",
    importantNotes: ["Carry valid identification.", "Final itinerary may vary due to weather."],
  };
}
