const includesItems = [
  "Blue Lagoons curated experience.",
  "Blue Lagoons curated experience.",
  "Blue Lagoons curated experience.",
  "Blue Lagoons curated experience.",
];

export default function PackageIncludes() {
  return (
    <section className="py-10 container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white">
      <h2 className="text-xl font-semibold text-black mb-4">Includes:</h2>
      <ul className="space-y-1 list-disc list-inside pl-6">
        {includesItems.map((item, i) => (
          <li key={i} className="text-2xl text-black font-normal [font-family:'Montserrat',Helvetica] text-lg">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
