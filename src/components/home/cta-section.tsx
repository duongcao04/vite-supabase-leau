export function CtaSection() {
  return (
    <section className="bg-[#F37021] py-16 relative overflow-hidden">
      {/* Pattern Overlay - simplified representation of the chevron pattern in image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10 text-white">
        [cite_start]
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get in touch [cite: 62]
        </h2>
        <p className="text-xl md:text-2xl font-medium opacity-90 mb-10">
          Flow with Confidence. [cite_start]We're here to help. [cite: 63]
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-[#F37021] font-bold py-4 px-8 rounded shadow-lg hover:bg-slate-50 transition-colors transform hover:-translate-y-1"
        >
          [cite_start]View Contact Details [cite: 64]
        </a>
      </div>
    </section>
  )
}
