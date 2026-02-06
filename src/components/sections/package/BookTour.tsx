import { ChevronDownIcon } from "lucide-react";

export default function BookTour() {
  return (
    <section className="py-20 container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white p-3">
      <h2 className="text-3xl font-semibold text-black mb-10">Book Tour</h2>

      <form className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-200 rounded-2xl p-4">
          <label className="font-semibold text-xl">Full Name</label>
          <input
            type="text"
            className="mt-2 w-full bg-transparent [font-family:'Montserrat',Helvetica] text-lg p-3"
            placeholder="Blue Lagoons"
          />
        </div>

        <div className="bg-gray-200 rounded-2xl p-4 relative">
          <label className="font-semibold text-xl">Starting Date</label>
          <input
            type="date"
            className="mt-2 w-full bg-transparent [font-family:'Montserrat',Helvetica] text-lg p-3"
          />
          <ChevronDownIcon className="absolute right-6 top-10" />
        </div>

        <div className="bg-gray-200 rounded-2xl p-4">
          <label className="font-semibold text-xl">Number of Guests</label>
          <input
            type="number"
            className="mt-2 w-full bg-transparent [font-family:'Montserrat',Helvetica] text-lg p-3"
            placeholder="2 Adults"
          />
        </div>

        <div className="bg-gray-200 rounded-2xl p-4">
          <label className="font-semibold text-xl">
            Enter details of Guests
          </label>
        </div>
      </form>

      <div className="w-1/2 ml-auto mt-10 text-lg font-semibold  p-6 bg-white ">
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="w-1/2 text-start">Price</span>
            <span className="w-1/2 text-end">$500</span>
          </div>
          <div className="flex justify-between">
            <span className="w-1/2 text-start">Tax 15%</span>
            <span className="w-1/2 text-end">$75</span>
          </div>
          <div className="pt-2 flex justify-between">
            <span className="w-1/2 text-start">Total</span>
            <span className="w-1/2 text-end">$575</span>
          </div>
        </div>
      </div>

      <button className="mt-5 w-full py-2.5 bg-black text-white py-4 text-lg font-semibold  rounded-xl hover:opacity-90 transition cursor-pointer">
        Book Tour
      </button>
    </section>
  );
}
