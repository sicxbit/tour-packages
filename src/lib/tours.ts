
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

export const tours: TourPackage[] = [
  {
    id: "1",
    title: "Tropical Paradise Escape",
    destination: "Maldives",
    duration: "7 Days",
    price: 2499,
    rating: 4.9,
    reviews: 234,
    image: "/assets/imgs/package/package.png",
    groupSize: "2-8 people",
    featured: true,
    highlights: [
      "Luxury beach resort accommodation",
      "Snorkeling and diving excursions",
      "Private island tours",
      "All meals included"
    ],
  },
  {
    id: "2",
    title: "Romantic Paris Experience",
    destination: "France",
    duration: "5 Days",
    price: 1899,
    rating: 4.8,
    reviews: 456,
    image: "/assets/imgs/package/package.png",
    groupSize: "2-6 people",
    featured: true,
    highlights: [
      "Eiffel Tower skip-the-line access",
      "Seine River cruise",
      "Louvre Museum guided tour",
      "Wine tasting in Montmartre"
    ]
  },
  {
    id: "3",
    title: "Tokyo Cultural Adventure",
    destination: "Japan",
    duration: "10 Days",
    price: 3299,
    rating: 4.9,
    reviews: 312,
    image: "/assets/imgs/package/package.png",
    groupSize: "4-12 people",
    highlights: [
      "Traditional tea ceremony",
      "Mount Fuji day trip",
      "Tsukiji fish market tour",
      "Kyoto temple visits"
    ]
  },
  {
    id: "4",
    title: "Alpine Mountain Retreat",
    destination: "Switzerland",
    duration: "6 Days",
    price: 2799,
    rating: 4.7,
    reviews: 189,
    image: "/assets/imgs/package/package.png",
    groupSize: "2-10 people",
    highlights: [
      "Jungfrau railway experience",
      "Swiss chocolate factory visit",
      "Mountain hiking trails",
      "Luxury alpine lodge stay"
    ]
  },
  {
    id: "5",
    title: "Santorini Sunset Tour",
    destination: "Greece",
    duration: "4 Days",
    price: 1599,
    rating: 4.9,
    reviews: 523,
    image: "/assets/imgs/package/package.png",
    groupSize: "2-8 people",
    featured: true,
    highlights: [
      "Sunset dinner in Oia",
      "Caldera boat cruise",
      "Wine tasting tour",
      "Traditional Greek cooking class"
    ]
  },
  {
    id: "6",
    title: "Dubai Luxury Experience",
    destination: "UAE",
    duration: "5 Days",
    price: 2299,
    rating: 4.8,
    reviews: 267,
    image: "/assets/imgs/package/package.png",
    groupSize: "2-6 people",
    highlights: [
      "Burj Khalifa observation deck",
      "Desert safari with BBQ dinner",
      "Dubai Marina cruise",
      "Gold souk shopping tour"
    ]
  }
];

export function getTourById(id: string): TourPackage | undefined {
  return tours.find((tour) => tour.id === id);
}
