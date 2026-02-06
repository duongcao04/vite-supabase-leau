import { Button } from '@heroui/react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

const TESTIMONIALS = [
 {
  id: 1,
  content:
   "Just letting you know that our testing of the Foam Deluge System went perfectly today thanks very much for your help, we've mentioned to others what an awesome job you have done.",
  author: 'Project Manager',
  company: 'Fire Systems Ltd',
 },
 {
  id: 2,
  content:
   'The technical support provided during the installation of the Bermad control valves was exceptional. It saved us days of potential downtime.',
  author: 'Operations Engineer',
  company: 'Regional Water Authority',
 },
 {
  id: 3,
  content:
   'Your Product ID App made identifying legacy spare parts in the field incredibly easy. A true game-changer for our maintenance crews.',
  author: 'Maintenance Supervisor',
  company: 'Agri-Irrigation Group',
 },
 {
  id: 4,
  content:
   'Consistent quality and reliable delivery. The Zurn Wilkins backflow preventers have performed flawlessly in all our high-hazard installations.',
  author: 'Senior Technician',
  company: 'Urban Infrastructure',
 },
 {
  id: 5,
  content:
   "The level of expertise in your Knowledge Centre is unparalleled. It's our primary resource for complex valve troubleshooting.",
  author: 'Consulting Engineer',
  company: 'Process Flow Solutions',
 },
 {
  id: 6,
  content:
   'Efficient, professional, and reliable. The custom manifold assembly was built exactly to spec and delivered ahead of schedule.',
  author: 'Procurement Officer',
  company: 'Industrial Piping Systems',
 },
 {
  id: 7,
  content:
   'The technical drawing digitization service helped us recover decades of legacy engineering data that we thought was lost forever.',
  author: 'Director of Engineering',
  company: 'Legacy Manufacturing',
 },
 {
  id: 8,
  content:
   'Outstanding service. The team went above and beyond to ensure our irrigation automation system was optimized for the new season.',
  author: 'Farm Owner',
  company: 'Canterbury Plains Estate',
 },
]

export function TestimonialSection() {
 const [current, setCurrent] = useState(0)
 const [isPaused, setIsPaused] = useState(false)

 const nextSlide = useCallback(() => {
  setCurrent((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))
 }, [])

 const prevSlide = () => {
  setCurrent((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
 }

 // Auto-play Logic
 useEffect(() => {
  if (isPaused) return

  const interval = setInterval(() => {
   nextSlide()
  }, 1500) // Change slide every 2.5 seconds

  return () => clearInterval(interval)
 }, [isPaused, nextSlide])

 return (
  <section
   className="py-24 bg-white relative overflow-hidden select-none"
   onMouseEnter={() => setIsPaused(true)}
   onMouseLeave={() => setIsPaused(false)}
  >
   {/* Background decoration */}
   <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
    <Quote size={400} className="absolute -top-20 -left-20 text-[#1B365D]" />
   </div>

   <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
    <div className="text-center mb-12">
     <h2 className="text-sm font-bold tracking-widest text-[#F37021] uppercase mb-4">
      What our customers say
     </h2>
     <div className="h-1 w-12 bg-[#F37021] mx-auto"></div>
    </div>

    <div className="relative flex items-center justify-center group">
     {/* Previous Button */}
     <Button
      isIconOnly
      variant="light"
      radius="full"
      onClick={prevSlide}
      className="absolute -left-4 md:-left-12 lg:-left-20 z-20 text-slate-400 hover:text-[#F37021] hover:bg-orange-50 transition-all opacity-0 group-hover:opacity-100"
     >
      <ChevronLeft size={40} strokeWidth={1.5} />
     </Button>

     {/* Active Testimonial Content */}
     <div className="w-full max-w-4xl text-center min-h-62.5 flex flex-col justify-center transition-opacity duration-500">
      <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#1B365D] leading-tight mb-8 font-serif italic">
       "{TESTIMONIALS[current].content}"
      </blockquote>

      <div className="space-y-1">
       <cite className="not-italic font-bold text-[#1B365D] text-lg">
        — {TESTIMONIALS[current].author}
       </cite>
       <p className="text-[#F37021] font-semibold text-sm uppercase tracking-wide">
        {TESTIMONIALS[current].company}
       </p>
      </div>
     </div>

     {/* Next Button */}
     <Button
      isIconOnly
      variant="light"
      radius="full"
      onClick={nextSlide}
      className="absolute -right-4 md:-right-12 lg:-right-20 z-20 text-slate-400 hover:text-[#F37021] hover:bg-orange-50 transition-all opacity-0 group-hover:opacity-100"
     >
      <ChevronRight size={40} strokeWidth={1.5} />
     </Button>
    </div>

    {/* Pagination Dots */}
    <div className="flex items-center justify-center gap-3 mt-12">
     {TESTIMONIALS.map((_, idx) => (
      <button
       key={idx}
       onClick={() => setCurrent(idx)}
       className={`transition-all duration-300 rounded-full ${
        idx === current
         ? 'w-8 h-2 bg-[#F37021]'
         : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
       }`}
       aria-label={`Go to testimonial ${idx + 1}`}
      />
     ))}
    </div>
   </div>
  </section>
 )
}
