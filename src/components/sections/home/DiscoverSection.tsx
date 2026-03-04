import Image from "next/image";
import Link from "next/link";

export default function DiscoverSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-20 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="relative overflow-hidden rounded-3xl bg-black/20 p-10 sm:p-12 md:p-16">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="flex-1 text-left">
              <h3 className="primary-color text-2xl font-semibold sm:text-3xl md:text-4xl">Discover</h3>
              <h2 className="primary-color mb-6 text-xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                Lakshadweep
              </h2>
              <p className="[font-family:'Montserrat',Helvetica] mb-8 max-w-3xl text-lg text-gray-200 lg:text-left">
                Blue Lagoons designs handcrafted island getaways, balancing comfort, exploration, and local culture for unforgettable moments on every shoreline.
              </p>

              <div>
                <Link
                  href="/packages"
                  className="my-4 mt-20 cursor-pointer rounded-[20px] border border-[#ffe500] px-8 py-3 text-xl font-extralight text-[#ffe500] transition-all duration-300 hover:bg-[#ffe500] hover:text-white"
                >
                  Explore →
                </Link>
              </div>
            </div>

            <div className="relative flex w-full flex-1 items-center justify-center">
              <div className="flex w-full max-w-[540px] flex-col items-center gap-6 sm:flex-row sm:items-end">
                <Image
                  alt="Discover image 1"
                  src="/assets/imgs/banner/discover1.png"
                  width={397}
                  height={285}
                  className="w-full max-w-[260px] rounded-lg object-cover"
                />
                <Image
                  alt="Discover image 2"
                  src="/assets/imgs/banner/discover2.png"
                  width={355}
                  height={556}
                  className="w-full max-w-[240px] rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
