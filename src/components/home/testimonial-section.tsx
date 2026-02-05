import { Quote } from 'lucide-react'

export function TestimonialSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Quote
          size={400}
          className="absolute -top-20 -left-20 text-[#1B365D]"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
        [cite_start]
        <h2 className="text-sm font-bold tracking-widest text-[#F37021] uppercase mb-8">
          What our customers say [cite: 55]
        </h2>
        <blockquote className="text-2xl md:text-3xl font-medium text-[#1B365D] leading-tight mb-10 font-serif">
          [cite_start]"Just letting you know that our testing of the Foam Deluge
          System went perfectly today thanks very much for your help, we've
          mentioned to others what an awesome job you have done" [cite: 57, 58]
        </blockquote>
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#F37021]"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
        </div>
      </div>
    </section>
  )
}
