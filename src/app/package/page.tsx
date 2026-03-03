import PackageIncludes from "@/components/sections/package/PackageIncludes";
import PackageExcludes from "@/components/sections/package/PackageExcludes";
import TravelPlans from "@/components/sections/package/TravelPlans";
import PackageGallery from "@/components/sections/package/PackageGallery";
import BookTour from "@/components/sections/package/BookTour";
import Navbar from "@/components/layout/NavbarTwo";
import Image from "next/image";
import Footer from "@/components/layout/Footer";

export default function Package() {
  const navigationItems = [
    { label: "Home", href: "/", active: true },
    { label: "Packages", href: "/packages", active: false },
    { label: "About", href: "/about", active: false },
    { label: "Login", href: "/login", active: false },
  ];
  
  return (
    <div className="bg-white text-black max-w-screen overflow-hidden">
        <Navbar navigationItems={navigationItems} />
      <div className="relative w-full h-[60vh] overflow-hidden bg-white">
      
              {/* Background Image */}
              <Image
                className="absolute inset-0 w-full h-500 object-cover"
                alt="Background image"
                src="/assets/imgs/banner/beach.jpg"
                width={1440}
                height={500}
                priority
              />
      
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-black/20" />
      
              {/* Hero Section (aligned at bottom) */}
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
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </section>
      <PackageIncludes />
      <PackageExcludes />
      <TravelPlans />
      {/* <Testimonials /> */}
      <PackageGallery />
      <BookTour />
      <Footer />
    </div>
  );
}
