import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/home/AboutSection";
import BookNowSection from "@/components/sections/home/BookNow";
import DiscoverSection from "@/components/sections/home/DiscoverSection";
import FeaturedTours from "@/components/sections/home/FeaturedTours";
import { prisma } from "@/lib/prisma";

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
      <DiscoverSection />
      <FeaturedTours tours={featuredTours} />
      <BookNowSection tours={regularTours} />
      <AboutSection />
      <Footer />
    </div>
  );
}
