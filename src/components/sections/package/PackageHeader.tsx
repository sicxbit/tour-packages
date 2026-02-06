"use client";
import Image from "next/image";

export default function PackageHeader() {
  return (
    <section className="relative w-full h-[700px] flex flex-col justify-center items-start py-20  bg-white overflow-hidden">
     

      <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        <h1 className="font-montserrat font-semibold text-6xl text-black pt-10">
          Blue Lagoons <span className="text-[#ffe500]">Retreat</span>
        </h1>
        <p className="mt-4 text-2xl font-semibold text-black">
          4 Nights, 5 Days
        </p>
      </div>
       <Image
        className="inset-0 w-full h-full object-cover z-0"
        alt="Package Background"
        src="/assets/imgs/package/package.png"
        width={1440}
        height={483}
        // fill
      />
    </section>
  );
}
