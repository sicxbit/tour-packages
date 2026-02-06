"use client";

import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function AboutPage() {
  const features = [
    {
      title: "Competitive Prices",
      description:
        "Blue Lagoons creates curated island itineraries with trusted local partners, transparent planning, and smooth booking from start to finish.",
    },
    {
      title: "Competitive Prices",
      description:
        "Blue Lagoons creates curated island itineraries with trusted local partners, transparent planning, and smooth booking from start to finish.",
    },
    {
      title: "Competitive Prices",
      description:
        "Blue Lagoons creates curated island itineraries with trusted local partners, transparent planning, and smooth booking from start to finish.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="w-full h-64 md:h-80 overflow-hidden">
        <Image
          src="/assets/imgs/banner/about_us 1.png"
          alt="Ocean aerial view"
          className="w-full h-full object-cover"
          width={1440}
          height={1080}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* Who We Are & Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24 items-start">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Who <span className="text-yellow-400">We Are?</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Our mission is to make tropical travel simple, safe, and memorable through curated packages designed for real travelers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                Our <span className="text-yellow-400">Mission</span>
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Blue Lagoons is a coastal travel company focused on immersive island experiences, thoughtful itineraries, and reliable on-ground support.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full md:w-80 h-64 md:h-96 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/assets/imgs/banner/about1.png"
                alt="Starfish on sand"
                className="w-full h-full object-cover"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-12 md:mb-16">
            WHY <span className="text-yellow-400">CHOOSE US?</span>
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 md:p-8 bg-gray-50 rounded-xl hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
