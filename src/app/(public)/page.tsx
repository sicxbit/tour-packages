import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/home/AboutSection";
import BookNowSection from "@/components/sections/home/BookNow";
import DiscoverSection from "@/components/sections/home/DiscoverSection";
import FeaturedTours from "@/components/sections/home/FeaturedTours";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {
  const featuredTours = await prisma.tour.findMany({
    where: { isFeatured: true },
    orderBy: [{ featuredOrder: "asc" }, { createdAt: "desc" }],
    take: 6,
  });

  const regularTours = await prisma.tour.findMany({
    where: { isFeatured: false },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="relative">
      <Image
        className="absolute inset-0 h-full w-full object-cover"
        alt="Ocean shoreline background"
        src="/assets/imgs/banner/background_image 2.png"
        fill
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10">
        <DiscoverSection />
        <BookNowSection tours={regularTours} />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
}
