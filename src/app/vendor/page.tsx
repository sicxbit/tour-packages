import Footer from "@/components/layout/Footer";
import VendorDetails from "@/components/sections/vendor/Vendor";
import Image from "next/image";

export default function Vendor() {
  return (
    <>
      <div className="bg-white">
        {/* Hero Image */}
        <div className="w-full h-64 overflow-hidden md:h-80">
          <Image
            src="/assets/imgs/banner/about_us 1.png"
            alt="Ocean aerial view"
            className="h-full w-full object-cover"
            width={1440}
            height={1080}
          />
        </div>
      </div>

      <VendorDetails />
      <Footer />
    </>
  );
}
