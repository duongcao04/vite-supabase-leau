import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  ChevronRight,
  Share2,
  Download,
  Phone,
  Settings,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  FileText,
  Link as LinkIcon,
  Menu,
  X,
  Box, // New Icon
  Maximize, // New Icon
  Search, // New Icon
} from 'lucide-react'

// --- 1. Mock Data ---

const PRODUCT_DATA = {
  title: 'Vent-O-Mat - RBX - Air Release Valves',
  brand: 'Vent-O-Mat',
  categories: ['Air Valves', 'Combination Air Valves'],
  sizeRange: '25-200mm',
  connection: '25-50mm Threaded Male BSPT\n80-200mm-Flanged to AS4087-PN16',
  description: `The Vent-O-Mat Series RBX "Anti-Shock" air release and vacuum break valve is the product of extensive research into the development of an efficient, but cost-effective solution to surge problems (both mass liquid oscillation and elastic transient phenomena) associated with any operating pipeline.`,
  features: [
    'High-capacity air discharge during pipeline filling',
    'High volume air intake for vacuum break purposes',
    'Independent third-party tested',
    'Controlled pressurized air discharge releases air when pipelines are fully-charged',
    'Surge relief prevents pipeline bursts during pump trip',
    'NSF61 approved',
  ],
  benefits: [
    'Surge pressure magnitudes reduced by slowing surge velocities',
    'Duration of oscillation reduced following a pump trip',
    'Potential for reduction in size of conventional surge protection devices',
    'Automatic protection during initial filling',
    'Virtually maintenance free',
  ],
  images: [
    'https://placehold.co/600x400/f1f3f5/1B365D?text=Vent-O-Mat+RBX+Main',
  ],
  resources: [
    {
      category: 'Data Sheets & Engineering Data',
      items: [
        {
          title: 'Data Sheet - Vent-O-Mat - RBX - Air Release Valves',
          size: '1.4 MB',
          type: 'pdf',
        },
      ],
    },
    {
      category: 'Installation, Operation and Maintenance Manuals (IOM)',
      items: [
        {
          title: 'IOM - Vent-O-Mat - RBX - Air Release Valves',
          size: '1.4 MB',
          type: 'pdf',
        },
      ],
    },
    {
      category: 'Additional Support Resources',
      items: [
        {
          title: 'Video: Maintenance - Vent-O-Mat - RBX - Air Release Valves',
          type: 'link',
        },
      ],
    },
  ],
  orderTable: [
    {
      code: 'RBX025-2511',
      size: '25mm',
      pressure: '25 Bar',
      desc: 'Antishock, Combination ARV - 265mm Height - Threaded Male BSP',
    },
    {
      code: 'RBX050-2511',
      size: '50mm',
      pressure: '25 Bar',
      desc: 'Antishock, Combination ARV - 325mm Height - Threaded Male BSP',
    },
    {
      code: 'RBX080-1641',
      size: '80mm',
      pressure: '16 Bar',
      desc: 'Antishock, Combination ARV - 425mm Height - Flanged',
    },
    {
      code: 'RBX100-1641',
      size: '100mm',
      pressure: '16 Bar',
      desc: 'Antishock, Combination ARV - 522mm Height - Flanged',
    },
    {
      code: 'RBX150-1641',
      size: '150mm',
      pressure: '16 Bar',
      desc: 'Antishock, Combination ARV - 612mm Height - Flanged',
    },
    {
      code: 'RBX200-1641',
      size: '200mm',
      pressure: '16 Bar',
      desc: 'Antishock, Combination ARV - 672mm Height - Flanged',
    },
  ],
  repairKits: [
    {
      code: 'RBX025-RK',
      size: '25mm',
      title: '25mm - Repair Kit',
      image: 'https://placehold.co/300x200/e2e8f0/1B365D?text=Gasket+Kit',
    },
    {
      code: 'RBX050-RK',
      size: '50mm',
      title: '50mm - Repair Kit',
      image: 'https://placehold.co/300x200/e2e8f0/1B365D?text=Gasket+Kit',
    },
    {
      code: 'RBX080-RK',
      size: '80mm',
      title: '80mm - Repair Kit',
      image: 'https://placehold.co/300x200/e2e8f0/1B365D?text=Gasket+Kit',
    },
    {
      code: 'RBX100-RK',
      size: '100mm',
      title: '100mm - Repair Kit',
      image: 'https://placehold.co/300x200/e2e8f0/1B365D?text=Gasket+Kit',
    },
  ],
  // New 3D CAD Data
  cadModels: {
    previewImage:
      'https://placehold.co/800x500/e2e8f0/1B365D?text=3D+CAD+Viewer+Placeholder',
    files: [
      { name: '3D - Vent-O-Mat - RBX - 25mm', type: 'step' },
      { name: '3D - Vent-O-Mat - RBX - 50mm', type: 'step' },
      { name: '3D - Vent-O-Mat - RBX - 80mm', type: 'step' },
    ],
  },
}

const RECENTLY_VIEWED = [
  'Bermad Model K10 Kinetic Air Valve',
  'IOM - Bermad Model K10 Kinetic Air Valve',
  'Data Sheet - Bermad Model K10',
  'Bermad Model 720 Pressure Reducing Valve',
  'Pipestands Assembly - Zurn Wilkins 375LXL',
]

// --- 2. Route Definition ---

export const Route = createFileRoute('/_public/products/$slug')({
  component: ProductDetailPage,
})

// --- 3. Sub-Components for Tab Content ---

function ResourceGroup({ title, items }: { title: string; items: any[] }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="border-b border-slate-200 py-6 last:border-0">
      <div
        className="flex items-center justify-between mb-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-bold text-[#1B365D]">{title}</h3>
        <button className="text-sm text-secondary hover:underline flex items-center gap-1 font-semibold">
          {isOpen ? 'Hide' : 'Show'}{' '}
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {isOpen && (
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start justify-between group">
              <div className="flex gap-4">
                <div
                  className={`p-2 rounded border ${item.type === 'pdf' ? 'bg-orange-50 border-orange-100 text-[#F37021]' : 'bg-blue-50 border-blue-100 text-[#1B365D]'}`}
                >
                  {item.type === 'pdf' ? (
                    <FileText size={24} />
                  ) : (
                    <LinkIcon size={24} />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm group-hover:text-secondary transition-colors">
                    {item.title}
                  </h4>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                {item.type === 'pdf' ? (
                  <>
                    <button className="text-sm text-secondary hover:underline flex items-center gap-1">
                      Download ({item.size}) <Download size={14} />
                    </button>
                    <button className="text-sm text-secondary hover:underline underline-offset-2">
                      View
                    </button>
                  </>
                ) : (
                  <button className="text-sm text-secondary hover:underline flex items-center gap-1">
                    View <LinkIcon size={14} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function RepairKitItem({
  kit,
  isOpen,
  onToggle,
}: {
  kit: any
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <div
        className="flex items-center justify-between py-4 cursor-pointer hover:bg-slate-50 px-2 transition-colors"
        onClick={onToggle}
      >
        <h4 className="font-bold text-slate-800 text-sm">
          {kit.code} - {kit.title}
        </h4>
        <button className="text-xs text-secondary hover:underline font-semibold flex items-center gap-1">
          {isOpen ? 'Hide' : 'Show'}{' '}
          {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      {isOpen && (
        <div className="pb-6 px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-white border border-slate-200 p-4 rounded shadow-sm w-48 h-32 flex items-center justify-center">
              <img
                src={kit.image}
                alt={kit.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="text-sm text-slate-600">
              <p>
                <strong>Code:</strong> {kit.code}
              </p>
              <p>
                <strong>Size:</strong> {kit.size}
              </p>
              <p className="mt-2 text-slate-500">
                Includes all necessary seals and gaskets for standard
                maintenance.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// --- 4. Main Page Component ---

function ProductDetailPage() {
  const [activeTab, setActiveTab] = useState('description')
  const [openRepairKit, setOpenRepairKit] = useState<string | null>('RBX025-RK') // Default open first

  // New State for Mobile Hamburger Menu
  const [isTocOpen, setIsTocOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setActiveTab(id)
    setIsTocOpen(false) // Close mobile menu on selection
    const element = document.getElementById(id)
    if (element) {
      // Offset for header + sticky tab bar
      const y = element.getBoundingClientRect().top + window.scrollY - 180
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const TABS = [
    'Description',
    'Resources',
    'How To Order',
    'Repair Kits & Spare Parts',
    '3D CAD Models',
    'Contact',
  ]

  return (
    <main className="container py-8">
      {/* Breadcrumbs */}
      <div className="text-sm text-slate-500 mb-6 flex items-center gap-2 flex-wrap">
        <Link to="/" className="hover:text-secondary">
          Home
        </Link>
        <ChevronRight size={14} />
        <Link to="/products" className="hover:text-secondary">
          Products
        </Link>
        <ChevronRight size={14} />
        <span className="font-semibold text-primary">{PRODUCT_DATA.title}</span>
      </div>

      {/* Title Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b border-slate-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1B365D]">
          {PRODUCT_DATA.title}
        </h1>
        <button className="flex items-center gap-2 text-sm font-bold text-secondary hover:text-orange-700 transition-colors">
          <Share2 size={16} /> Copy Page Link
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* --- LEFT COLUMN: Sticky Content --- */}
        <div className="flex-grow w-full lg:w-3/4">
          {/* Sticky Navigation Tabs (Table of Contents) with Hamburger */}
          <div className="sticky top-0 bg-slate-50 z-30 mb-8 border-b border-slate-200 shadow-sm lg:shadow-none">
            {/* Mobile Header Bar */}
            <div className="flex lg:hidden justify-between items-center py-3 px-2 bg-white border border-slate-200 rounded-t">
              <span className="font-bold text-[#1B365D] flex items-center gap-2">
                <FileText size={18} /> Table of Contents
              </span>
              <button
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="p-2 bg-slate-100 rounded hover:bg-slate-200 text-[#1B365D]"
              >
                {isTocOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* Nav Links Container */}
            <nav
              className={`
                ${isTocOpen ? 'flex' : 'hidden'} 
                lg:flex flex-col lg:flex-row gap-1 lg:gap-1 
                bg-white lg:bg-transparent p-2 lg:p-0 
                border-x border-b lg:border-0 border-slate-200 lg:rounded-none rounded-b
                absolute lg:static w-full left-0 shadow-lg lg:shadow-none
                overflow-x-auto no-scrollbar
              `}
            >
              {TABS.map((tab) => {
                const id = tab
                  .toLowerCase()
                  .replace(/ /g, '-')
                  .replace('&', '')
                  .replace('--', '-')
                const isActive = activeTab === id
                return (
                  <button
                    key={tab}
                    onClick={() => scrollToSection(id)}
                    className={`
                        text-left lg:text-center px-4 lg:px-6 py-3 text-sm font-bold 
                        border-l-4 lg:border-l-0 lg:border-t-4 transition-colors whitespace-nowrap
                        ${
                          isActive
                            ? 'border-secondary bg-orange-50 lg:bg-white text-secondary lg:shadow-[0_-2px_4px_rgba(0,0,0,0.05)]'
                            : 'border-transparent hover:bg-slate-100 text-slate-600'
                        }
                      `}
                  >
                    {tab}
                  </button>
                )
              })}
            </nav>
          </div>

          {/* TAB: DESCRIPTION */}
          <div id="description" className="mb-16 scroll-mt-48">
            <div className="mb-8 bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
              <img
                src={PRODUCT_DATA.images[0]}
                alt={PRODUCT_DATA.title}
                className="w-full h-auto max-h-[400px] object-contain mx-auto"
              />
            </div>
            <h2 className="text-2xl font-bold text-[#1B365D] mb-4">
              Product Description
            </h2>
            <p className="text-slate-700 leading-relaxed mb-8">
              {PRODUCT_DATA.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded border border-slate-200">
                <h3 className="font-bold text-lg text-secondary mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} /> Features
                </h3>
                <ul className="space-y-2">
                  {PRODUCT_DATA.features.map((f, i) => (
                    <li
                      key={i}
                      className="text-sm pl-4 border-l-2 border-slate-100"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded border border-slate-200">
                <h3 className="font-bold text-lg text-secondary mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} /> Benefits
                </h3>
                <ul className="space-y-2">
                  {PRODUCT_DATA.benefits.map((b, i) => (
                    <li
                      key={i}
                      className="text-sm pl-4 border-l-2 border-slate-100"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* TAB: RESOURCES */}
          <div
            id="resources"
            className="mb-16 scroll-mt-48 border-t border-slate-200 pt-8"
          >
            <h2 className="text-2xl font-bold text-[#1B365D] mb-6">
              Resources
            </h2>
            <div className="bg-white rounded border border-slate-200 px-6">
              {PRODUCT_DATA.resources.map((grp, idx) => (
                <ResourceGroup
                  key={idx}
                  title={grp.category}
                  items={grp.items}
                />
              ))}
            </div>
          </div>

          {/* TAB: HOW TO ORDER */}
          <div
            id="how-to-order"
            className="mb-16 scroll-mt-48 border-t border-slate-200 pt-8"
          >
            <h2 className="text-2xl font-bold text-[#1B365D] mb-2">
              {PRODUCT_DATA.title}
            </h2>
            <p className="text-slate-600 mb-6 text-sm">
              For water pipeline applications. High performance, full porting
              for maximum vacuum protection.
            </p>

            <div className="bg-white border border-slate-200 rounded overflow-hidden shadow-sm">
              <div className="flex bg-slate-100 border-b border-slate-200">
                <div className="w-1/4 p-4 hidden md:block">
                  <img
                    src={PRODUCT_DATA.images[0]}
                    className="mix-blend-multiply"
                  />
                  <div className="bg-[#F37021] text-white text-xs text-center py-1 mt-2">
                    Vent-O-Mat - RBX100-1641
                  </div>
                </div>
                <div className="w-full md:w-3/4">
                  <div className="flex text-xs font-bold text-slate-700 border-b border-slate-200 bg-slate-50">
                    <div className="w-1/4 p-3">Product Code</div>
                    <div className="w-1/6 p-3">Size</div>
                    <div className="w-1/4 p-3">Pressure Rating</div>
                    <div className="w-1/3 p-3">Description</div>
                  </div>
                  <div className="divide-y divide-slate-100 max-h-[300px] overflow-y-auto custom-scrollbar">
                    {PRODUCT_DATA.orderTable.map((row, idx) => (
                      <div
                        key={idx}
                        className="flex text-xs text-slate-600 hover:bg-orange-50 transition-colors"
                      >
                        <div className="w-1/4 p-3 font-medium text-slate-800">
                          {row.code}
                        </div>
                        <div className="w-1/6 p-3">{row.size}</div>
                        <div className="w-1/4 p-3">{row.pressure}</div>
                        <div className="w-1/3 p-3">{row.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TAB: REPAIR KITS */}
          <div
            id="repair-kits-spare-parts"
            className="mb-16 scroll-mt-48 border-t border-slate-200 pt-8"
          >
            <h2 className="text-2xl font-bold text-[#1B365D] mb-6">
              Repair Kits
            </h2>
            <div className="bg-slate-50 border border-slate-200 rounded-t overflow-hidden mb-6">
              <div className="flex text-xs font-bold text-slate-700 bg-slate-100 border-b border-slate-200 p-3">
                <div className="w-1/3">Product Code</div>
                <div className="w-1/3">Size</div>
                <div className="w-1/3">Description</div>
              </div>
              {PRODUCT_DATA.repairKits.map((kit, idx) => (
                <div
                  key={idx}
                  className="flex text-xs text-slate-600 p-3 border-b border-slate-200 last:border-0 bg-white"
                >
                  <div className="w-1/3 font-medium">{kit.code}</div>
                  <div className="w-1/3">{kit.size}</div>
                  <div className="w-1/3">VOM-RBX - Repair Kit</div>
                </div>
              ))}
            </div>
            <div className="bg-white border border-slate-200 rounded-b">
              {PRODUCT_DATA.repairKits.map((kit) => (
                <RepairKitItem
                  key={kit.code}
                  kit={kit}
                  isOpen={openRepairKit === kit.code}
                  onToggle={() =>
                    setOpenRepairKit(
                      openRepairKit === kit.code ? null : kit.code,
                    )
                  }
                />
              ))}
            </div>
          </div>

          {/* TAB: 3D CAD MODELS (NEW) */}
          <div
            id="3d-cad-models"
            className="mb-16 scroll-mt-48 border-t border-slate-200 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h2 className="text-2xl font-bold text-[#1B365D]">
                3D CAD Models
              </h2>
              <div className="flex gap-4">
                <button className="text-sm font-bold text-secondary hover:underline flex items-center gap-1">
                  How to Download <Box size={16} />
                </button>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
              <div className="grid lg:grid-cols-3">
                {/* Left: Viewer Area */}
                <div className="lg:col-span-2 bg-slate-100 relative min-h-[400px] flex items-center justify-center group">
                  <iframe
                    src="https://gmail6120010.autodesk360.com/shares/public/SH90d2dQT28d5b6028114c4ffb771a8766ae?mode=embed"
                    width="800"
                    height="480"
                    allowFullScreen={true}
                  ></iframe>
                </div>

                {/* Right: File List & Download */}
                <div className="lg:col-span-1 border-l border-slate-200 p-6 bg-white">
                  <h3 className="font-bold text-[#1B365D] mb-4 text-sm uppercase tracking-wider">
                    Available Files
                  </h3>
                  <div className="space-y-3 mb-8">
                    {PRODUCT_DATA.cadModels.files.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded cursor-pointer border border-transparent hover:border-slate-200 transition-all"
                      >
                        <Box size={20} className="text-slate-400" />
                        <div className="flex-grow">
                          <p className="text-xs font-bold text-slate-700">
                            {file.name}
                          </p>
                          <p className="text-[10px] text-slate-400 uppercase">
                            {file.type} File
                          </p>
                        </div>
                        <Download size={16} className="text-secondary" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TAB: CONTACT */}
          <div
            id="contact"
            className="mb-16 scroll-mt-48 border-t border-slate-200 pt-8"
          >
            <h2 className="text-2xl font-bold text-[#F37021] mb-6 border-l-4 border-[#F37021] pl-4">
              Contact Form
            </h2>
            <div className="bg-white p-8 border border-orange-200 rounded shadow-sm">
              <form className="space-y-6">
                {/* Form Inputs ... */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1B365D]">
                      Full name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-slate-300 rounded p-2 text-sm focus:border-secondary outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1B365D]">
                      Company name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-slate-300 rounded p-2 text-sm focus:border-secondary outline-none"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1B365D]">
                      Contact number
                    </label>
                    <input
                      type="text"
                      className="w-full border border-slate-300 rounded p-2 text-sm focus:border-secondary outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1B365D]">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="w-full border border-slate-300 rounded p-2 text-sm focus:border-secondary outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1B365D]">
                    Region / Branch Location
                  </label>
                  <select className="w-full border border-slate-300 rounded p-2 text-sm focus:border-secondary outline-none bg-white">
                    <option>Select Region</option>
                    <option>Auckland</option>
                    <option>Wellington</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1B365D]">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-slate-300 rounded p-2 text-sm focus:border-secondary outline-none"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#F37021] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded shadow-md transition-colors uppercase text-sm"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: Sidebar --- */}
        <aside className="w-full lg:w-1/4 flex-shrink-0 space-y-8 h-fit lg:sticky lg:top-24">
          {/* Specs Card */}
          <div className="bg-white border-t-4 border-secondary p-6 shadow-sm rounded-sm">
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Brand
                </h4>
                <p className="font-bold text-[#1B365D] text-lg">
                  {PRODUCT_DATA.brand}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Category
                </h4>
                <div className="flex flex-wrap gap-1">
                  {PRODUCT_DATA.categories.map((cat) => (
                    <span
                      key={cat}
                      className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded border border-slate-200"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Size Range
                </h4>
                <p className="text-sm font-medium">{PRODUCT_DATA.sizeRange}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Connection
                </h4>
                <p className="text-sm font-medium whitespace-pre-line">
                  {PRODUCT_DATA.connection}
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button
                onClick={() => scrollToSection('how-to-order')}
                className="w-full bg-secondary hover:bg-orange-600 text-white font-bold py-3 rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Settings size={18} /> How to Order
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full border-2 border-[#1B365D] hover:bg-[#1B365D] hover:text-white text-[#1B365D] font-bold py-3 rounded transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={18} /> Contact Us
              </button>
            </div>
          </div>

          {/* Repair Kits Link */}
          <div
            onClick={() => scrollToSection('repair-kits-spare-parts')}
            className="bg-slate-100 p-4 rounded border border-slate-200 hover:border-secondary cursor-pointer transition-colors group"
          >
            <h4 className="font-bold text-[#1B365D] flex justify-between items-center text-sm">
              Repair Kits & Spare Parts
              <ArrowRight
                size={16}
                className="text-secondary group-hover:translate-x-1 transition-transform"
              />
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Find compatible parts for this series.
            </p>
          </div>

          {/* 3D Models Link (NEW) */}
          <div
            onClick={() => scrollToSection('3d-cad-models')}
            className="bg-slate-100 p-4 rounded border border-slate-200 hover:border-secondary cursor-pointer transition-colors group"
          >
            <h4 className="font-bold text-[#1B365D] flex justify-between items-center text-sm">
              3D CAD Models
              <Box
                size={16}
                className="text-secondary group-hover:scale-110 transition-transform"
              />
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              View and download 3D files.
            </p>
          </div>

          {/* Recently Viewed */}
          <div className="border-t border-slate-200 pt-6">
            <h4 className="font-bold text-[#1B365D] mb-4 text-sm">
              Recently viewed
            </h4>
            <ul className="space-y-3">
              {RECENTLY_VIEWED.map((item, idx) => (
                <li
                  key={idx}
                  className="text-xs text-slate-600 hover:text-secondary cursor-pointer border-b border-slate-100 pb-2 last:border-0 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>
            <button className="text-xs text-secondary font-bold mt-3 hover:underline">
              Show All
            </button>
          </div>
        </aside>
      </div>
    </main>
  )
}
