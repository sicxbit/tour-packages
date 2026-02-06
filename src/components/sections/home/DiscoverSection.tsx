import Image from "next/image";
import Link from "next/link";

export default function DiscoverSection() {
  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden bg-transparent flex items-center justify-center">
        {/* Background Image */}
        {/* <Image
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background image"
          src="/assets/imgs/banner/2.jpg"
          width={1440}
          height={4823}
          priority
        /> */}

        {/* Overlay Gradient */}
        <div className="relative z-10 container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-20">
            <div className="relative overflow-hidden bg-black/20 rounded-3xl p-10 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Section */}
                <div className="flex-1 text-left">
                    <h3 className="primary-color font-semibold text-2xl sm:text-3xl md:text-4xl">
                    Discover
                    </h3>
                    <h2 className="text-white font-extrabold primary-color text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                    Lakshadweep
                    </h2>
                    <p className="[font-family:'Montserrat',Helvetica] text-lg text-gray-200 max-w-3xl lg:text-left mb-8">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry&#39;s standard dummy
                    text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.
                    </p>

                    <div>
                      <Link href="/packages" className="mt-20 my-4 border border-[#ffe500] text-[#ffe500] text-xl font-extralight px-8 py-3 rounded-[20px] hover:bg-[#ffe500] hover:text-white transition-all duration-300 cursor-pointer">
                            Explore →

                    </Link>
                    </div>
                </div>

                {/* Image Section */}
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
    </>
  );
}
