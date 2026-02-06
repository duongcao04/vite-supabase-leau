import { ArrowRight, BookOpen, Laptop, Smartphone } from 'lucide-react'

export function ResourcesSection() {
 return (
  <section className="py-20 bg-slate-50">
   <div className="max-w-7xl mx-auto px-4 md:px-6">
    <div className="text-center mb-16">
     <h2 className="text-3xl font-bold text-[#1B365D]">
      Customer Portal, Knowledge Centre, and Product ID App
     </h2>
     <div className="h-1 w-24 bg-[#F37021] mx-auto mt-6"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
     {/* Customer Portal */}
     <div className="bg-white rounded-xl shadow-sm p-8 border-t-4 border-[#F37021] hover:-translate-y-1 transition-transform duration-300">
      <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-[#F37021]">
       <Laptop size={28} />
      </div>
      <h3 className="text-xl font-bold text-[#1B365D] mb-4">Customer Portal</h3>
      <p className="text-slate-600 mb-6 text-sm leading-relaxed">
       Our Customer Portal provides customers with access to our Knowledge
       Centre, where you can find installation guides and troubleshooting
       resources. The portal also includes the ability to save favourite
       products and resources.
      </p>
      <div className="mt-auto flex gap-4">
       <a
        href="/portal"
        className="text-[#F37021] font-bold text-sm hover:underline flex items-center gap-1"
       >
        Sign In <ArrowRight size={16} />
       </a>
       <a
        href="/about-portal"
        className="text-slate-500 font-semibold text-sm hover:text-[#1B365D]"
       >
        Learn More
       </a>
      </div>
     </div>

     {/* Knowledge Centre */}
     <div className="bg-white rounded-xl shadow-sm p-8 border-t-4 border-[#1B365D] hover:-translate-y-1 transition-transform duration-300">
      <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-[#1B365D]">
       <BookOpen size={28} />
      </div>
      <h3 className="text-xl font-bold text-[#1B365D] mb-4">
       Knowledge Centre
      </h3>
      <p className="text-slate-600 mb-6 text-sm leading-relaxed">
       The Knowledge Centre is an exclusive resource for our customers,
       providing in-depth technical information. It features detailed blog
       posts, comprehensive manuals, and expert guides.
      </p>
      <a
       href="/knowledge-centre"
       className="text-[#1B365D] font-bold text-sm hover:underline flex items-center gap-1"
      >
       View Knowledge Centre
       <ArrowRight size={16} />
      </a>
     </div>

     {/* Product ID App */}
     <div className="bg-white rounded-xl shadow-sm p-8 border-t-4 border-[#F37021] hover:-translate-y-1 transition-transform duration-300">
      <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-[#F37021]">
       <Smartphone size={28} />
      </div>
      <h3 className="text-xl font-bold text-[#1B365D] mb-4">Product ID App</h3>
      <p className="text-slate-600 mb-6 text-sm leading-relaxed">
       It is your complete solution for accessing detailed information about our
       custom-built products, including the Bermad 400 & 700 Series Control
       Valves and Backflow Meter Assembly Pipestands.
      </p>
      <div className="mt-auto flex gap-4">
       <a
        href="/app-demo"
        className="text-[#F37021] font-bold text-sm hover:underline flex items-center gap-1"
       >
        View Demo <ArrowRight size={16} />
       </a>
       <a
        href="/app-info"
        className="text-slate-500 font-semibold text-sm hover:text-[#1B365D]"
       >
        Learn More
       </a>
      </div>
     </div>
    </div>
   </div>
  </section>
 )
}
