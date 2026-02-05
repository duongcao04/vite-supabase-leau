// src/components/layout/header.tsx

import { Link } from '@tanstack/react-router'
import { ChevronDown, Search, ShieldQuestion, User } from 'lucide-react'
import { INTERNAL_URLS } from '../../../lib' // Adjust path as needed
import LeauLogo from '../../ui/leau-logo' // Adjust path as needed

// --- 1. Menu Data Configuration ---
const PRODUCT_CATEGORIES = [
  'Air Valves',
  'Backflow Prevention',
  'Control Valves',
  'Filtration',
  'Irrigation-Automation',
  'Metering',
  'Sprinklers',
  'Pressure Regulators',
]

const PRODUCT_BRANDS = [
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

const PRODUCT_INDUSTRIES = [
  'Waterworks',
  'Irrigation',
  'Fire Protection',
  'Building and Industry',
]

const NAV_LINKS = [
  {
    label: 'Home',
    path: INTERNAL_URLS.home,
  },
  {
    label: 'About Leau',
    path: INTERNAL_URLS.about,
  },
  {
    label: 'Product ID App',
    path: INTERNAL_URLS.productsIDApp,
  },
  {
    label: 'Contact',
    path: INTERNAL_URLS.contact,
  },
]

export function Header() {
  return (
    <header className="w-full bg-background relative z-50 font-sans">
      {/* --- Top Section: Logo, Search, Utilities --- */}
      <div className="container mx-auto py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="shrink-0">
          <Link to={INTERNAL_URLS.home}>
            <LeauLogo />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex w-full max-w-xl border-2 border-primary hover:border-secondary focus-within:border-secondary rounded-sm overflow-hidden transition-colors">
          <input
            type="text"
            placeholder="Search Site, e.g. 375LXL"
            className="grow px-4 py-2 text-sm outline-none text-text-default placeholder:text-text-muted bg-white"
          />
          <button className="bg-secondary hover:bg-secondary-600 cursor-pointer px-4 flex items-center justify-center transition-colors">
            <Search size={20} className="text-white" strokeWidth={2.5} />
          </button>
        </div>

        {/* Utility Links */}
        <div className="flex items-center gap-6 text-primary">
          <Link
            to="/login"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="bg-primary rounded-full p-1">
              <User size={20} className="text-white" fill="currentColor" />
            </div>
            <span className="font-semibold text-lg hidden lg:inline">
              Sign In
            </span>
          </Link>
          <Link
            to="/support"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="text-primary">
              <ShieldQuestion size={28} />
            </div>
            <span className="font-semibold text-lg hidden lg:inline">
              Support
            </span>
          </Link>
        </div>
      </div>

      <nav className="w-full bg-secondary text-white relative shadow-sm">
        <div className="container mx-auto">
          <ul className="flex flex-wrap items-center gap-8 font-medium text-lg min-h-12.5">
            {/* Standard Link Items */}
            {NAV_LINKS.map((it, idx) => (
              <li key={idx}>
                <Link
                  to={it.path}
                  className="hover:underline underline-offset-4 text-white block py-3"
                  activeProps={{ className: 'underline' }}
                >
                  {it.label}
                </Link>
              </li>
            ))}

            {/* --- MEGA MENU ITEM --- */}
            {/* IMPORTANT: This <li> is 'static' (default) so the dropdown inside 
                it positions relative to the <nav>, not this list item.
            */}
            <li className="group static">
              <button className="flex items-center gap-1 hover:underline underline-offset-4 cursor-pointer py-3 bg-transparent border-none text-white font-medium text-lg">
                Products{' '}
                <ChevronDown
                  size={20}
                  className="transition-transform group-hover:rotate-180"
                />
              </button>

              {/* Mega Menu Dropdown */}
              <div className="absolute top-full left-[50%] -translate-x-[50%] w-[calc(100%-64px-64px)] bg-white shadow-xl border-t-4 border-secondary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50">
                {/* Internal Container to center content matching the page width */}
                <div className="px-32 py-8 text-slate-800">
                  {/* Dropdown Header: Search & CTA */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-200 pb-6 mb-8 gap-6">
                    <div className="relative w-full max-w-lg">
                      <input
                        type="text"
                        placeholder="Search Products..."
                        className="w-full text-xl py-2 pr-10 border-b-2 border-secondary outline-none placeholder:text-slate-300 text-slate-700 bg-transparent"
                      />
                      <Search
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-secondary"
                        size={24}
                      />
                    </div>

                    <Link
                      to={INTERNAL_URLS.products}
                      className="bg-secondary text-white px-6 py-3 font-bold rounded hover:bg-orange-600 transition-colors shrink-0 shadow-md"
                    >
                      View All Products
                    </Link>
                  </div>

                  {/* Dropdown Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
                    {/* Column 1: Categories */}
                    <div>
                      <h4 className="font-bold text-xl text-primary border-b-2 border-secondary inline-block mb-6 pb-1">
                        Category
                      </h4>
                      <ul className="space-y-3">
                        {PRODUCT_CATEGORIES.map((item) => (
                          <li key={item}>
                            <Link
                              to={`/products?category=${item}`}
                              className="text-slate-600 hover:text-secondary hover:underline block transition-colors"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2: Brands */}
                    <div>
                      <h4 className="font-bold text-xl text-primary border-b-2 border-secondary inline-block mb-6 pb-1">
                        Brand
                      </h4>
                      <ul className="space-y-3">
                        {PRODUCT_BRANDS.map((item) => (
                          <li key={item}>
                            <Link
                              to={`/products?brand=${item}`}
                              className="text-slate-600 hover:text-secondary hover:underline block transition-colors"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 3: Industries */}
                    <div>
                      <h4 className="font-bold text-xl text-primary border-b-2 border-secondary inline-block mb-6 pb-1">
                        Industry
                      </h4>
                      <ul className="space-y-3">
                        {PRODUCT_INDUSTRIES.map((item) => (
                          <li key={item}>
                            <Link
                              to={`/products?industry=${item}`}
                              className="text-slate-600 hover:text-secondary hover:underline block transition-colors"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
