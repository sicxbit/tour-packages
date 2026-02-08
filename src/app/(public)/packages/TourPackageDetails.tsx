"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Calendar, Check, Clock, Hotel, MapPin, Plane, Star, Users, Utensils } from "lucide-react";

import { TourPackage } from "@/lib/tours";

interface TourPackageDetailProps {
  tour: TourPackage;
}

const FALLBACK_TEXT = "Coming soon.";

export default function TourPackageDetail({ tour }: TourPackageDetailProps) {
  const [activeTab, setActiveTab] = useState<"itinerary" | "info">("itinerary");
  const itinerary = tour.itinerary ?? [];
  const highlights = tour.highlights ?? [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[500px] overflow-hidden">
        <Image src={tour.image} alt={tour.title} className="w-full h-full object-cover" fill priority />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute bottom-0 left-0 right-0 text-white p-8">
          <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
            {tour.featured && <div className="mb-4 inline-flex bg-yellow-500 rounded-full px-3 py-1 text-sm font-medium">Featured Tour</div>}
            <h1 className="text-4xl font-bold mb-4">{tour.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{tour.destination}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{tour.groupSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>
                  {tour.rating} ({tour.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-black mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{tour.description || FALLBACK_TEXT}</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border">
              <div className="border-b">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab("itinerary")}
                    className={`flex-1 py-3 px-4 text-center font-medium border-b-2 ${
                      activeTab === "itinerary" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Itinerary
                  </button>
                  <button
                    onClick={() => setActiveTab("info")}
                    className={`flex-1 py-3 px-4 text-center font-medium border-b-2 ${
                      activeTab === "info" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Additional Info
                  </button>
                </div>
              </div>

              <div className="p-6">
                {activeTab === "itinerary" && (
                  <div className="space-y-6">
                    {itinerary.length > 0 ? (
                      itinerary.map((day, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                              <span className="text-blue-600 text-sm font-medium">Day {day.day}</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">{day.title}</h3>
                            <p className="text-gray-600 text-sm">{day.description}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-600 text-sm">{FALLBACK_TEXT}</p>
                    )}
                  </div>
                )}

                {activeTab === "info" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Plane className="w-5 h-5 text-blue-600" />
                        Getting There
                      </h3>
                      <p className="text-sm text-gray-600">{tour.gettingThere || FALLBACK_TEXT}</p>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Hotel className="w-5 h-5 text-blue-600" />
                        Accommodation
                      </h3>
                      <p className="text-sm text-gray-600">{tour.accommodation || FALLBACK_TEXT}</p>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Utensils className="w-5 h-5 text-blue-600" />
                        Meals
                      </h3>
                      <p className="text-sm text-gray-600">{tour.meals || FALLBACK_TEXT}</p>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-3 text-gray-600">Important Notes</h3>
                      {tour.importantNotes && tour.importantNotes.length > 0 ? (
                        <ul className="space-y-2">
                          {tour.importantNotes.map((note, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="text-blue-600 mt-1">•</span>
                              <span>{note}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-600">{FALLBACK_TEXT}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-600 mb-4">Tour Highlights</h2>
                {highlights.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-600">{FALLBACK_TEXT}</p>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border sticky top-24 p-6">
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Price per person</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-blue-600">${tour.price.toLocaleString()}</span>
                  <span className="text-sm text-gray-500 line-through">${(tour.price * 1.2).toLocaleString()}</span>
                </div>
                <p className="text-xs text-green-600 mt-1">Save 20% today!</p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm text-gray-600 block mb-2">Select Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-600 block mb-2">Number of Travelers</label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>1 person</option>
                    <option>2 people</option>
                    <option>3 people</option>
                    <option>4 people</option>
                    <option>5+ people</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors mb-3">Book Now</button>

              <Link href="/packages" className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors block text-center">
                Back to Tours
              </Link>

              <div className="border-t my-6"></div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Free cancellation up to 24 hours</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Reserve now, pay later</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Secure payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
