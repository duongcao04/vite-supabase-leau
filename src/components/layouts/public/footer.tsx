import { INTERNAL_URLS } from '@/lib'
import { Link } from '@tanstack/react-router'
import { Linkedin, Youtube } from 'lucide-react'
import LeauLogo from '../../ui/leau-logo'
import OceanWaves from '../../ui/ocean-waves'

export function Footer() {
  return (
    <footer className='pt-32'>
      <OceanWaves />
      <div className="w-full bg-linear-180 from-primary via-primary-200 to-background pt-44 pb-44 text-text-default">
        {/* Decorative Wave Header - Approximated from image */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          {/* You can replace this with a custom SVG or CSS background to match the blue wave pattern */}
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <LeauLogo />
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link
                  to={INTERNAL_URLS.home}
                  className="hover:text-orange-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={INTERNAL_URLS.about}
                  className="hover:text-orange-500 transition-colors"
                >
                  About Leau
                </Link>
              </li>
              <li>
                <Link
                  to={INTERNAL_URLS.products}
                  className="hover:text-orange-500 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to={INTERNAL_URLS.resources}
                  className="hover:text-orange-500 transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Customer Portal
                </a>
              </li>
              <li>
                <Link
                  to={INTERNAL_URLS.contact}
                  className="hover:text-orange-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Conditions of Sale
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Product Return Form
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Credit Trading Account Application Form
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Leau - Logos & Brand Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Privacy & Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Portal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Portal</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  What is the Customer Portal?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Sign up
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="mb-4">
              <a
                href="tel:+84862248332"
                className="text-3xl font-bold text-primary-50! block"
              >
                84 (0) 862 248 332
              </a>
              <a
                href="tel:+84378439710"
                className="text-base font-semibold text-primary-50!"
              >
                84 (0) 378 439 710
              </a>
            </div>

            <div className="mb-4">
              <p className="font-bold text-sm">
                Customer Success & Technical Support
              </p>
              <a
                href="mailto:hey@leau.app"
                className="text-sm text-slate-600 hover:text-orange-500"
              >
                hey@leau.app
              </a>
            </div>

            <div className="mb-6">
              <p className="font-bold text-sm">Orders</p>
              <a
                href="mailto:orders@leau.app"
                className="text-sm text-slate-600 hover:text-orange-500"
              >
                orders@leau.app
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-900 hover:text-orange-500 transition-colors"
              >
                <Linkedin size={24} fill="currentColor" strokeWidth={0} />
              </a>
              <a
                href="#"
                className="text-slate-900 hover:text-orange-500 transition-colors"
              >
                <Youtube size={28} fill="currentColor" strokeWidth={0} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
