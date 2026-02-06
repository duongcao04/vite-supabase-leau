import {
 AqualogicImg,
 CorestreamImg,
 DuraFlowImg,
 FluidixImg,
 HydramechImg,
 LeauImg,
 TeknaImg,
 VexorImg,
} from '@/assets/our-brands'

// Mock data with placeholder logos
const BRANDS = [
 {
  name: 'Aqualogic',
  logo: AqualogicImg,
 },
 {
  name: 'Corestream',
  logo: CorestreamImg,
 },
 { name: 'Fluidix', logo: FluidixImg },
 {
  name: 'Dura Flow',
  logo: DuraFlowImg,
 },
 {
  name: 'Hydramech',
  logo: HydramechImg,
 },
 {
  name: 'Leau',
  logo: LeauImg,
 },
 {
  name: 'Tekna',
  logo: TeknaImg,
 },
 {
  name: 'Vexor',
  logo: VexorImg,
 },
]

export function BrandsSection() {
 return (
  <section className="py-20 bg-white border-y border-slate-100">
   <div className="container mx-auto px-4 md:px-6 text-center">
    <h2 className="text-2xl font-bold text-[#1B365D] mb-12 uppercase tracking-wide">
     Our Brands
    </h2>

    {/* Brands Grid */}
    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-10">
     {BRANDS.map((brand, idx) => (
      <div
       key={idx}
       className="group relative w-44 lg:w-72 h-28 flex items-center justify-center cursor-pointer overflow-hidden rounded-sm"
      >
       <img
        src={brand.logo}
        alt={`${brand.name} logo`}
        className="w-full h-full object-contain grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
       />
      </div>
     ))}
    </div>
   </div>
  </section>
 )
}
