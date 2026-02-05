import { Droplet, Sprout, Flame, Factory, Phone, Mail } from 'lucide-react'

const IndustryCard = ({ title, description, icon: Icon, image }: any) => (
  <div className="group relative overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow border border-slate-100 rounded-lg flex flex-col h-full">
    <div className="h-48 overflow-hidden bg-slate-200 relative">
      {/* Placeholder for Industry Image */}
      <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-500">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          'Image'
        )}
      </div>
      <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm text-[#F37021]">
        <Icon size={24} />
      </div>
    </div>
    <div className="p-6 flex flex-col grow">
      <h3 className="text-xl font-bold text-[#1B365D] mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-4 grow">
        {description}
      </p>
      <a
        href="#"
        className="text-[#F37021] font-semibold text-sm hover:underline mt-auto inline-block"
      >
        View Products &rarr;
      </a>
    </div>
  </div>
)

export function ProductsIndustriesSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-[#1B365D]">
              Our Products & Industries
            </h2>
            <div className="h-1 w-20 bg-[#F37021] mt-4"></div>
          </div>
          <a
            href="/products"
            className="hidden md:block text-[#F37021] font-semibold hover:underline"
          >
            View All Products
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Support Card - Special Layout */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-orange-100 flex flex-col h-full relative overflow-hidden">
            {/* Decorative background accent */}
            <div className="absolute top-0 left-0 w-2 h-full bg-[#F37021]"></div>

            <h3 className="text-2xl font-bold text-[#1B365D] mb-4">
              Technical Support
            </h3>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              Our Technical Support team provides expert assistance to resolve
              technical issues and answer questions about our products. We are
              committed to delivering prompt and effective solutions to minimise
              downtime and maximise productivity[cite: 10, 11].
            </p>
            <p className="text-slate-600 mb-8 text-sm font-medium">
              Our knowledgeable professionals are here to support you[cite: 12].
            </p>

            <div className="mt-auto space-y-4">
              <p className="text-[#F37021] font-bold text-sm">
                Get in touch with our expert team to talk about your
                requirements [cite: 13]
              </p>
              <div className="space-y-2">
                <a
                  href="tel:045685293"
                  className="flex items-center gap-3 text-[#1B365D] font-bold hover:text-[#F37021] transition-colors"
                >
                  <Phone size={18} className="text-[#F37021]" />
                  04 568 5293 [cite: 19]
                </a>
                <a
                  href="mailto:service@deeco.co.nz"
                  className="flex items-center gap-3 text-[#1B365D] font-bold hover:text-[#F37021] transition-colors"
                >
                  <Mail size={18} className="text-[#F37021]" />
                  service@deeco.co.nz [cite: 20]
                </a>
              </div>
              <a
                href="/contact"
                className="block w-full text-center bg-[#F37021] text-white font-bold py-3 rounded hover:bg-orange-600 transition-colors mt-6"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Standard Industry Cards */}
          <IndustryCard
            title="Waterworks"
            icon={Droplet}
            description="We offer critical components for drinking water, stormwater and wastewater infrastructure, upholding the highest standards in health and safety, and environmental sustainability[cite: 15]."
          />
          <IndustryCard
            title="Irrigation"
            icon={Sprout}
            description="Whether it's for a single property or expansive projects spanning across Aotearoa, our products are designed to optimise yield and efficiency while promoting positive environmental outcomes[cite: 17]."
          />
          <IndustryCard
            title="Fire Protection"
            icon={Flame}
            description="We are experts in designing and implementing robust fire protection solutions tailored for high-risk environments. Our specialised products are meticulously crafted for critical applications[cite: 23, 24]."
          />
          <IndustryCard
            title="Building and Industry"
            icon={Factory}
            description="We provide a range of standard products for modern building and industrial projects, as well as customised solutions designed to meet the unique requirements of more demanding applications[cite: 26]."
          />
        </div>
      </div>
    </section>
  )
}
