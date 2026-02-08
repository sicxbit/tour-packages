"use client";

import Image from "next/image";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import Link from "next/link";
import type { Tour } from "@prisma/client";

const fallbackImage = "/assets/imgs/package/package.png";

export default function BookNowSection({ tours }: { tours: Tour[] }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-transparent">
      <div className="relative z-10 container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-20">
        <div className="bg-black/20 rounded-3xl p-8 sm:p-10 md:p-14 text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-left mb-10">
            <span className="text-white">Book Your </span>
            <span className="primary-color">Trip</span>
          </h2>

          <div className="relative">
            <button
              ref={prevRef}
              className="absolute -left-6 sm:-left-10 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-0 rounded-full hover:bg-black/30 hover:bg-black/60 transition"
            >
              <MdOutlineKeyboardArrowLeft className="primary-color w-10 h-10 md:w-12 md:h-12" />
            </button>

            <button
              ref={nextRef}
              className="absolute -right-6 sm:-right-10 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-0 rounded-full hover:bg-black/30 hover:bg-black/60 transition"
            >
              <MdOutlineKeyboardArrowRight className="primary-color w-10 h-10 md:w-12 md:h-12" />
            </button>

            {tours.length === 0 ? (
              <p className="text-sm text-white/70">No trips available right now.</p>
            ) : (
              <Swiper
                modules={[Navigation, Autoplay]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                onBeforeInit={(swiper) => {
                  if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                loop={true}
                spaceBetween={30}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 1.2 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="!overflow-hidden"
              >
                {tours.map((tour, index) => {
                  const isAlt = index % 2 === 1;
                  return (
                    <SwiperSlide key={tour.id}>
                      <div className="bg-transparent flex flex-col items-center text-center rounded-xl overflow-hidden">
                        <Image
                          className="w-full h-52 sm:h-56 md:h-64 rounded-xl object-cover"
                          alt={tour.title}
                          src={tour.imageUrl || fallbackImage}
                          width={320}
                          height={200}
                        />
                        <div className="mt-4 text-2xl font-bold">
                          <span className="text-white">{tour.title} </span>
                          <span className="primary-color">{tour.location}</span>
                        </div>
                        <Image
                          className="mt-2 w-[110px] h-[18px] object-contain"
                          alt="Rating"
                          src="/assets/imgs/banner/rating.png"
                          width={120}
                          height={18}
                        />
                        <Link
                          href={`/packages/details/${tour.id}`}
                          type="button"
                          className={`mt-5 w-full py-2.5 ${isAlt ? "bg-[#ffe500] text-white" : "bg-white text-[#ffe500]"} text-lg font-semibold rounded-xl hover:opacity-90 transition cursor-pointer`}
                        >
                          Explore
                        </Link>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
