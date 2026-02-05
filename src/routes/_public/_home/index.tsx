import { createFileRoute } from '@tanstack/react-router'
import { BrandsSection } from '../../../components/home/brands-section'
import { CtaSection } from '../../../components/home/cta-section'
import { ProductsIndustriesSection } from '../../../components/home/products-industries-section'
import { ResourcesSection } from '../../../components/home/resources-section'
import { TestimonialSection } from '../../../components/home/testimonial-section'
import { HeroSection } from '../../../components/home/hero-section'

export const Route = createFileRoute('/_public/_home/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <ProductsIndustriesSection />
      <BrandsSection />
      <ResourcesSection />
      <TestimonialSection />
      <CtaSection />
    </div>
  )
}
