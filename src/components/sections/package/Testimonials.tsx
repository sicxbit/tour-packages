import Image from "next/image";

const testimonials = [
  {
    name: "Blue Lagoons",
    location: "India",
    image: "/assets/imgs/banner/reviewer.png",
    text: "Blue Lagoons delivers thoughtfully planned island experiences.",
  },
  {
    name: "Blue Lagoons",
    location: "India",
    image: "/assets/imgs/banner/reviewer.png",
    text: "Blue Lagoons delivers thoughtfully planned island experiences.",
  },
  {
    name: "Blue Lagoons",
    location: "India",
    image: "/assets/imgs/banner/reviewer.png",
    text: "Blue Lagoons delivers thoughtfully planned island experiences.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white">
      <h2 className="text-3xl font-semibold text-start mb-12">
        Real stories from travelers
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-100 rounded-2xl p-6">
            <p className="text-sm sm:text-base font-light  leading-relaxed mb-6">{t.text}</p>
            <div className="flex items-center gap-4">
              <Image
                src={t.image}
                alt={t.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <div className="font-bold text-black">{t.name}</div>
                <div className="text-sm text-gray-600">{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
