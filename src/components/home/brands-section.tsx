export function BrandsSection() {
  const brands = [
    'SENSUS',
    'BERMAD',
    'ZURN',
    'TALGIL',
    'WILKINS',
    'VENT-O-MAT',
    'Johnson Screens',
    'Filtersafe',
    'NAANDANJAIN',
    'AZUD',
  ]

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        [cite_start]
        <h2 className="text-2xl font-bold text-[#1B365D] mb-10">
          Our Brands [cite: 29]
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, idx) => (
            <div key={idx} className="h-12 flex items-center justify-center">
              {/* Replace with actual logo images */}
              <span className="text-xl font-bold text-slate-300 hover:text-slate-500 cursor-default">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
