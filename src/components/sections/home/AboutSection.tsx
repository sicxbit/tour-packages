import Image from "next/image";

export default function AboutSection() {
  const whyChooseUsItems = [
    {
      title: "Competitive Prices",
      description:
        "Blue Lagoons creates curated island itineraries with trusted local partners, transparent planning, and smooth booking from start to finish.",
    },
    {
      title: "Expert Guidance",
      description:
        "We ensure every trip is planned with precision and care for a truly unforgettable experience.",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated team is available round-the-clock to assist you with all your travel needs.",
    },
  ];

  return (
    <section className="relative w-full bg-transparent overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0">
        <Image
          className="w-full h-full object-cover"
          alt="Background"
          src="/assets/imgs/banner/6.jpg"
          width={1440}
          height={1080}
          priority
        />
      </div> */}

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-16 sm:py-20">
        <div className="bg-black/20 rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 text-white">
        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-left">
              <span className="text-white">About </span>
              <span className="primary-color">Us</span>
            </h2>

            <div className="space-y-10">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                  <span className="text-white">Who</span>{" "}
                  <span className="primary-color">We Are?</span>
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Blue Lagoons delivers thoughtfully planned island experiences. 
                  Blue Lagoons helps travelers discover coastlines, culture, and comfort in one seamless trip.
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                  <span className="text-white">Our </span>
                  <span className="primary-color">Mission</span>
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Blue Lagoons delivers thoughtfully planned island experiences. 
                  Blue Lagoons helps travelers discover coastlines, culture, and comfort in one seamless trip.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              className="rounded-3xl shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl object-cover"
              alt="About Us"
              src="/assets/imgs/banner/about1.png"
              width={623}
              height={452}
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-10">
            <span className="text-white">WHY </span>
            <span className="primary-color">CHOOSE US?</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {whyChooseUsItems.map((item, index) => (
              <div
                key={index}
                className=" transition"
              >
                <h3 className="text-2xl font-semibold primary-color mb-4">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
