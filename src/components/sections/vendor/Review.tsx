"use client";

import Image from "next/image";

export default function Review() {
  const reviews = [
    {
      image: "/assets/imgs/banner/reviewer.png",
      name: "Blue Lagoons",
      rating: "/assets/imgs/banner/rating.png",
      text: "Blue Lagoons creates curated island itineraries with trusted local partners, transparent planning, and smooth booking from start to finish.",
    },
    {
      image: "/assets/imgs/banner/reviewer.png",
      name: "Aarav Menon",
      rating: "/assets/imgs/banner/rating.png",
      text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      image: "/assets/imgs/banner/reviewer.png",
      name: "Nisha Rao",
      rating: "/assets/imgs/banner/rating.png",
      text: "It was popularised in the 1960s with the release of Letraset sheets containing Blue Lagoons passages.",
    },
  ];

  return (
    <section>
      {/* Reviews Section */}
      <div className="mt-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-left">
          Reviews
        </h2>

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center bg-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition"
            >
              {/* Reviewer Image */}
              <Image
                alt={review.name}
                src={review.image}
                width={90}
                height={90}
                className="rounded-full object-cover mb-4 sm:mb-0 sm:mr-4 lg:mr-0"
              />

              {/* Reviewer Info */}
              <div className="flex flex-col items-center sm:items-start lg:items-center">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  {review.name}
                </h3>
                <Image
                  alt="Rating"
                  src={review.rating}
                  width={110}
                  height={20}
                  className="mb-3"
                />
                <p className="text-sm sm:text-base font-light text-gray-200 leading-relaxed">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All link */}
        <div className="mt-12 flex justify-center justify-items-between gap-3">
          <div className="w-4 h-4 rounded-full bg-[#ffe500] flex items-center justify-center" />
          <div className="w-4 h-4 rounded-full bg-[#ffe500]/50 flex items-center justify-center" />
        </div>
      </div>
    </section>
  );
}
