import BlurText from "@/components/common/BlurText";
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

  return (
    <div className="relative">
      <Image className="absolute inset-0 h-full w-full object-cover" alt="Background" src="/assets/imgs/banner/background_image 2.png" width={1440} height={1080} priority />
      <div className="relative min-h-screen w-full overflow-hidden bg-transparent">
        <div className="absolute inset-0 bg-black/20" />
        <section className="absolute inset-0 z-10 container mx-auto flex flex-col justify-center px-6 pb-0 sm:justify-end sm:px-10 sm:pb-16 md:px-16 md:pb-24 lg:px-24 lg:pb-32 xl:px-32">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">WEBSITE</h2>

          <h1 className="primary-color text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">TITLE</h1>

          <BlurText
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book."
            delay={20}
            animateBy="characters"
            direction="top"
            triggerOnce={false}
            className="[font-family:'Montserrat',Helvetica] max-w-3xl text-lg text-gray-200"
            animationFrom={{ filter: "blur(10px)", opacity: 0, y: -30 }}
            animationTo={[
              {
                filter: "blur(3px)",
                opacity: 0.7,
                y: -5,
              },
              {
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
              },
            ]}
          />
        </section>
      </div>
      <DiscoverSection />
      <FeaturedTours tours={featuredTours} />
      <BookNowSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
