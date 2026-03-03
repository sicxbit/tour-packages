import BlurText from "@/components/common/BlurText";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/home/AboutSection";
import BookNowSection from "@/components/sections/home/BookNow";
import DiscoverSection from "@/components/sections/home/DiscoverSection";
import Reviews from "@/components/sections/home/Reviews";
import Image from "next/image";

export default function Home() {
  const navigationItems = [
    { label: "Home", href: "/", active: true },
    { label: "Packages", href: "/packages", active: false },
    { label: "About", href: "/about", active: false },
    { label: "Login", href: "/login", active: false },
  ];

  return (
    <div className="relative">
      {/* Background */}
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
        src="/assets/imgs/banner/background_image 2.png"
        width={1440}
        height={1080}
        priority
      />
      <div className="relative w-full min-h-screen overflow-hidden bg-transparent">
        {/* Background Image */}
        {/* <Image
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background image"
          src="/assets/imgs/banner/1.jpg"
          width={1440}
          height={4823}
          loading="lazy"
        /> */}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Navbar */}
        <Navbar navigationItems={navigationItems} />

        {/* Hero Section (aligned at bottom) */}
<section
  className="
    absolute inset-0 z-10
    flex flex-col
    justify-center sm:justify-end
    container mx-auto
    px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32
    pb-0 sm:pb-16 md:pb-24 lg:pb-32
  "
>

          <h2 className="font-semibold text-white text-2xl sm:text-3xl md:text-4xl">
            WEBSITE
          </h2>

          <h1 className="font-extrabold primary-color text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            TITLE
          </h1>

          <BlurText
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book."
            delay={20}
            animateBy="characters"
            direction="top"
            triggerOnce={false}
            className="[font-family:'Montserrat',Helvetica] text-lg text-gray-200 max-w-3xl"
            animationFrom={{
              filter: "blur(10px)",
              opacity: 0,
              y: -30,
            }}
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
      <DiscoverSection/>
      <BookNowSection/>
      {/* <Reviews/> */}
      <AboutSection/>
      <Footer/>
    </div>
  );
}
