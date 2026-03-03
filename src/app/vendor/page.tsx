import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/NavbarTwo";
import VendorDetails from "@/components/sections/vendor/Vendor";
import Image from "next/image";



export default function Vendor() {
  const navigationItems = [
    { label: "Home", href: "/", active: true },
    { label: "Packages", href: "/packages", active: false },
    { label: "About", href: "/about", active: false },
    { label: "Login", href: "/login", active: false },
  ];
  return (
    <>
<div className=" bg-white">
        <Navbar navigationItems={navigationItems} />
      {/* Hero Image */}
      <div className="w-full h-64 md:h-80 overflow-hidden">
        <Image
          src="/assets/imgs/banner/about_us 1.png"
          alt="Ocean aerial view"
          className="w-full h-full object-cover"
          width={1440}
          height={1080}
        />
      </div>        <Navbar navigationItems={navigationItems} />
        {/* Image Container */}
        
      </div>

      <VendorDetails />
      <Footer/>
    </>
  );
}
