import { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'

const SLIDES = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070', // Industrial/Waterworks
    title: 'Water Process Solutions',
    subtitle: 'Innovative components for sustainable water management.',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1622340625902-6c2e36b8504d?auto=format&fit=crop&q=80&w=2070', // Irrigation
    title: 'Agricultural Efficiency',
    subtitle: 'Optimizing yield across Aotearoa with precision irrigation.',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2070', // Fire Protection
    title: 'Critical Safety Systems',
    subtitle: 'Robust fire protection for high-risk environments.',
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-[calc(100vh-163px)] bg-primary overflow-hidden flex flex-col md:flex-row">
      {/* Left Content Area (Static) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 z-10 relative bg-primary">
        {/* Decorative Wave Background for Text Area */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0 100 Q 50 50 100 100 V 0 H 0 Z" fill="white" />
          </svg>
        </div>

        <div className="relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Advanced <span className="text-[#F37021]">Water Process</span>{' '}
            Solutions
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
            From industrial waterworks to precision irrigation and fire
            protection, we provide the critical components that keep Aotearoa
            flowing.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/products"
              className="px-8 py-4 bg-[#F37021] hover:bg-orange-600 text-white font-bold rounded shadow-lg transition-all flex items-center gap-2 group"
            >
              View Products
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-slate-400 hover:border-white text-slate-300 hover:text-white font-bold rounded transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Right Content Area (Vertical Slideshow) */}
      <div className="w-full md:w-1/2 h-full relative overflow-hidden">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out`}
            style={{
              transform: `translateY(${(index - currentSlide) * 100}%)`,
              zIndex: index === currentSlide ? 1 : 0,
            }}
          >
            <div className="absolute inset-0 bg-black/20 z-10" />{' '}
            {/* Overlay for contrast */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Slide Caption (Optional) */}
            <div className="absolute bottom-8 left-8 right-8 z-20 text-white translate-y-0 transition-opacity duration-500">
              <div
                className={`bg-black/60 backdrop-blur-sm p-4 rounded border-l-4 border-[#F37021] ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <p className="text-[#F37021] font-bold text-sm uppercase tracking-wider mb-1">
                  {slide.title}
                </p>
                <p className="text-lg font-medium">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Vertical Pagination Dots */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-[#F37021] scale-125'
                  : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
