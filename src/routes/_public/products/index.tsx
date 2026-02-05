import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Search, ChevronDown, ChevronRight, X, Grid, List } from 'lucide-react'

// --- 1. Mock Data (Based on PDF) ---

const INDUSTRIES = [
  'Waterworks',
  'Irrigation',
  'Fire Protection',
  'Building and Industry',
]

const CATEGORIES = [
  {
    name: 'Air Valves',
    subcategories: [
      'Automatic Air Valves',
      'Combination Air Valves',
      'Wastewater Combination Air Valves',
      'Kinetic Air Valves',
    ],
  },
  { name: 'Backflow Prevention', subcategories: [] },
  { name: 'Control Valves', subcategories: [] },
  { name: 'Filtration', subcategories: [] },
  { name: 'Irrigation-Automation', subcategories: [] },
  { name: 'Metering', subcategories: [] },
  { name: 'Sprinklers', subcategories: [] },
  { name: 'Pressure Regulators', subcategories: [] },
]

const BRANDS = [
  'Sensus',
  'Bermad',
  'Zurn Wilkins',
  'Talgil',
  'Amiad / Arkal',
  'Vent-O-Mat',
  'Johnson Screens',
  'Filtersafe',
  'NaanDanJain',
  'Azud',
  'Maddalena',
  'Atom',
  'Deeco',
]

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: 'Vent-O-Mat - RBX Air Release Valves',
    image: 'https://placehold.co/300x300/f1f3f5/1B365D?text=RBX',
    brand: 'Vent-O-Mat',
  },
  {
    id: 2,
    title: 'Vent-O-Mat - RGX Air Release Valves',
    image: 'https://placehold.co/300x300/f1f3f5/1B365D?text=RGX',
    brand: 'Vent-O-Mat',
  },
  {
    id: 3,
    title: 'Vent-O-Mat - RGXII Air Release Valves',
    image: 'https://placehold.co/300x300/f1f3f5/1B365D?text=RGXII',
    brand: 'Vent-O-Mat',
  },
  {
    id: 4,
    title: 'Bermad - Model C50 Wastewater Combination Air Valve',
    image: 'https://placehold.co/300x300/f1f3f5/1B365D?text=C50',
    brand: 'Bermad',
  },
  {
    id: 5,
    title: 'Bermad - Model C10P Combination Air Valve',
    image: 'https://placehold.co/300x300/f1f3f5/1B365D?text=C10P',
    brand: 'Bermad',
  },
  {
    id: 6,
    title: 'Bermad - Model K10 Kinetic Air Valve',
    image: 'https://placehold.co/300x300/f1f3f5/1B365D?text=K10',
    brand: 'Bermad',
  },
  {
    id: 7,
    title: 'Bermad - Model A30 Automatic Air Valve',
    image: 'https://placehold.co/300x300/f1f3f5/1B365D?text=A30',
    brand: 'Bermad',
  },
  {
    id: 8,
    title: 'Bermad - Model A10 Automatic Air Valve',
    image: 'https://placehold.co/300x300/f1f3f5/1B365D?text=A10',
    brand: 'Bermad',
  },
  {
    id: 9,
    title: 'Bermad - Model C30P Combination Air Valve',
    image: 'https://placehold.co/300x300/f1f3f5/1B365D?text=C30P',
    brand: 'Bermad',
  },
]

const RECENTLY_VIEWED = [
  'Bermad Model K10 Kinetic Air Valve',
  'IOM - Bermad Model K10 Kinetic Air Valve',
  'Data Sheet - Bermad Model K10',
  'Bermad Model 720 Pressure Reducing Valve',
  'Pipestands Assembly - Zurn Wilkins 375LXL',
]

// --- 2. Route Definition ---

export const Route = createFileRoute('/_public/products/')({
  component: ProductsPage,
})

// --- 3. Page Component ---

function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Air Valves')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <main className="flex-grow container mx-auto py-8">
      {/* Breadcrumbs */}
      <div className="text-sm text-slate-500 mb-6 flex items-center gap-2">
        <a href="/" className="hover:text-secondary">
          Home
        </a>
        <ChevronRight size={14} />
        <span className="font-semibold text-primary">Products</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* --- SIDEBAR FILTERS --- */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
          {/* Search (Mobile/Sidebar version) */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search terms"
              className="w-full pl-4 pr-10 py-2 border border-slate-300 rounded-sm focus:border-secondary outline-none text-sm"
            />
            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={16}
            />
          </div>

          {/* Filter Group: Industries */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-primary text-lg">Industries</h3>
              <button className="text-xs text-secondary hover:underline">
                Select All
              </button>
            </div>
            <div className="space-y-2">
              {INDUSTRIES.map((industry) => (
                <label
                  key={industry}
                  className="flex items-center gap-2 text-sm text-slate-700 hover:text-primary cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="rounded border-slate-300 text-secondary focus:ring-secondary"
                  />
                  {industry}
                </label>
              ))}
            </div>
          </div>

          {/* Filter Group: Categories */}
          <div>
            <h3 className="font-bold text-primary text-lg mb-3">Categories</h3>
            <div className="space-y-1">
              {CATEGORIES.map((cat) => (
                <div key={cat.name}>
                  <button
                    onClick={() =>
                      setActiveCategory(
                        activeCategory === cat.name ? '' : cat.name,
                      )
                    }
                    className={`flex items-center justify-between w-full text-left text-sm py-1 ${activeCategory === cat.name ? 'font-bold text-secondary' : 'text-slate-700'}`}
                  >
                    {cat.name}
                    {cat.subcategories.length > 0 && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${activeCategory === cat.name ? 'rotate-180' : ''}`}
                      />
                    )}
                  </button>

                  {/* Subcategories Expansion */}
                  {activeCategory === cat.name &&
                    cat.subcategories.length > 0 && (
                      <div className="ml-2 pl-2 border-l border-slate-200 mt-1 space-y-1">
                        <button className="block text-xs text-secondary font-semibold py-1">
                          All
                        </button>
                        {cat.subcategories.map((sub) => (
                          <button
                            key={sub}
                            className="block text-xs text-slate-600 hover:text-secondary py-1 text-left w-full"
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>

          {/* Filter Group: Brands */}
          <div>
            <h3 className="font-bold text-primary text-lg mb-3">Brands</h3>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {BRANDS.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-2 text-sm text-slate-700 hover:text-primary cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="rounded border-slate-300 text-secondary focus:ring-secondary"
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>

          <button className="w-full py-2 border border-slate-300 text-slate-600 text-sm font-semibold hover:bg-slate-100 flex items-center justify-center gap-2">
            <X size={14} /> Clear All Filters
          </button>

          {/* Recently Viewed Widget */}
          <div className="pt-6 border-t border-slate-200">
            <h4 className="font-bold text-primary mb-3">Recently viewed</h4>
            <ul className="space-y-3">
              {RECENTLY_VIEWED.map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-xs text-slate-600 hover:text-secondary block leading-tight"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* --- MAIN CONTENT AREA --- */}
        <div className="flex-grow">
          {/* Toolbar */}
          <div className="bg-white p-4 border border-slate-200 rounded-sm flex flex-wrap gap-4 items-center justify-between mb-6">
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <span className="font-semibold">Products</span>
              <span className="w-px h-4 bg-slate-300"></span>
              <span>9 Results</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span>Show:</span>
                <select className="border border-slate-300 rounded px-2 py-1 outline-none focus:border-secondary">
                  <option>20</option>
                  <option>50</option>
                  <option>All</option>
                </select>
              </div>
              <div className="flex gap-1 border border-slate-300 rounded p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1 ${viewMode === 'grid' ? 'bg-slate-100 text-secondary' : 'text-slate-400'}`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1 ${viewMode === 'list' ? 'bg-slate-100 text-secondary' : 'text-slate-400'}`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div
            className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}
          >
            {MOCK_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className={`group bg-white border border-slate-200 hover:shadow-lg transition-all rounded-sm overflow-hidden flex ${viewMode === 'list' ? 'flex-row' : 'flex-col'}`}
              >
                {/* Image Container */}
                <div
                  className={`relative bg-slate-100 flex items-center justify-center p-4 ${viewMode === 'list' ? 'w-48 shrink-0' : 'aspect-square'}`}
                >
                  {/* Placeholder Logic */}
                  <div className="text-slate-300">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-w-full max-h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  {/* Hover Action */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-secondary text-white text-xs font-bold px-4 py-2 rounded shadow-sm translate-y-2 group-hover:translate-y-0 transition-transform">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                    {product.brand}
                  </span>
                  <h3 className="text-[#1B365D] font-semibold text-sm leading-snug group-hover:text-secondary transition-colors line-clamp-2">
                    {product.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination / Load More */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center border border-secondary bg-secondary text-white font-bold text-sm">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center border border-slate-300 text-slate-600 hover:bg-slate-50 text-sm">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center border border-slate-300 text-slate-600 hover:bg-slate-50 text-sm">
                3
              </button>
              <button className="w-8 h-8 flex items-center justify-center border border-slate-300 text-slate-600 hover:bg-slate-50 text-sm">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
