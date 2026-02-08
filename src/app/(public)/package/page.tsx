import PackageIncludes from "@/components/sections/package/PackageIncludes";
import PackageExcludes from "@/components/sections/package/PackageExcludes";
import TravelPlans from "@/components/sections/package/TravelPlans";
import PackageGallery from "@/components/sections/package/PackageGallery";
import BookTour from "@/components/sections/package/BookTour";
import Image from "next/image";
import Footer from "@/components/layout/Footer";

export default function Package() {
  
  return (
    <div className="bg-white text-black max-w-screen overflow-hidden">
      <div className="relative w-full h-[60vh] overflow-hidden bg-white">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                alt="Background image"
                src="/assets/imgs/banner/beach.jpg"
                fill
                sizes="100vw"
                priority
              />

              <div className="absolute inset-0 bg-black/20" />

              <section className="absolute bottom-0 left-0 z-10 flex flex-col justify-end container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pb-10 sm:pb-16 md:pb-24 lg:pb-32">
                <h2 className="font-semibold text-white text-2xl sm:text-3xl md:text-4xl">
                  Tour Packages
                </h2>
                <p className="text-white mt-2">
                  Explore our curated selection of  amazing destinations around the world
                </p>
              </section>
            </div>
      
      <section className="[font-family:'Montserrat',Helvetica] text-lg container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-10 text-2xl font-light">
        From island-hopping escapes to laid-back beach retreats, Blue Lagoons packages are built for comfort, discovery, and memorable moments at every stop.
      </section>
      <PackageIncludes />
      <PackageExcludes />
      <TravelPlans />
      <PackageGallery />
      <BookTour />
      <Footer />
    </div>
  );
}
