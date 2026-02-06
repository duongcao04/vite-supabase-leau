import { Button, Card, CardBody, CardFooter, CardHeader } from '@heroui/react'
import { Link } from '@tanstack/react-router'
import {
 ArrowRight,
 Droplet,
 Factory,
 Filter,
 Flame,
 Mail,
 Phone,
 Sprout,
} from 'lucide-react'
import { INTERNAL_URLS } from '../../lib'

// --- Data Definition ---
const INDUSTRIES = [
 {
  id: 1,
  title: 'Waterworks',
  icon: Droplet,
  description:
   'Critical components for drinking water, stormwater and wastewater infrastructure, upholding the highest standards in health and safety.',
  link: '/products?industry=Waterworks',
  color: 'text-blue-500',
  bg: 'bg-blue-50',
 },
 {
  id: 2,
  title: 'Irrigation',
  icon: Sprout,
  description:
   'Designed to optimise yield and efficiency for single properties or expansive projects spanning across Aotearoa.',
  link: '/products?industry=Irrigation',
  color: 'text-green-500',
  bg: 'bg-green-50',
 },
 {
  id: 3,
  title: 'Fire Protection',
  icon: Flame,
  description:
   'Robust fire protection solutions tailored for high-risk environments. Meticulously crafted for critical applications.',
  link: '/products?industry=Fire Protection',
  color: 'text-red-500',
  bg: 'bg-red-50',
 },
 {
  id: 4,
  title: 'Building and Industry',
  icon: Factory,
  description:
   'Standard products for modern building projects and customised solutions for demanding industrial applications.',
  link: '/products?industry=Building and Industry',
  color: 'text-slate-600',
  bg: 'bg-slate-100',
 },
 {
  id: 5,
  title: 'Filtration',
  icon: Filter,
  description:
   'Advanced filtration systems for agricultural, industrial, and municipal water treatment applications.',
  link: '/products?category=Filtration',
  color: 'text-cyan-600',
  bg: 'bg-cyan-50',
 },
]

// --- Components ---

const IndustryCard = ({
 title,
 description,
 icon: Icon,
 link,
 color,
 bg,
}: any) => (
 <Card
  className="h-full w-full hover:scale-[1.02] transition-transform select-none flex flex-col"
  shadow="sm"
 >
  <CardHeader className="flex gap-3 pt-8 px-8 shrink-0">
   <div className={`p-4 rounded-xl ${bg} ${color}`}>
    <Icon size={32} strokeWidth={1.5} />
   </div>
   <h3 className="text-2xl font-bold text-primary leading-tight self-center">
    {title}
   </h3>
  </CardHeader>

  <CardBody className="px-8 py-4 grow">
   <p className="text-slate-600 text-base leading-relaxed">{description}</p>
  </CardBody>

  <CardFooter className="px-8 pb-8 pt-0 shrink-0 mt-auto">
   <Link to={link} className="w-full">
    <Button
     variant="light"
     className={`w-full justify-between font-bold text-lg ${color}`}
     endContent={<ArrowRight size={20} />}
    >
     View Products
    </Button>
   </Link>
  </CardFooter>
 </Card>
)

export function ProductsIndustriesSection() {
 return (
  <section className="py-20 bg-slate-50 min-h-[80vh] flex flex-col justify-center">
   <div className="container h-full flex flex-col">
    {/* Section Header */}
    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 shrink-0">
     <div>
      <h2 className="text-4xl font-bold text-[#1B365D]">
       Our Products & Industries
      </h2>
      <div className="h-1.5 w-24 bg-[#F37021] mt-5"></div>
     </div>
     <Link
      to="/products"
      className="hidden md:block text-[#F37021] font-bold text-lg hover:underline"
     >
      View All Products
     </Link>
    </div>

    {/* Layout Container - Flex for Sidebar, Grid for Content */}
    <div className="flex flex-col xl:flex-row gap-8 grow h-full items-stretch">
     {/* 1. FIXED LEFT: Technical Support Card */}
     <div className="w-full xl:w-100 shrink-0 flex flex-col">
      <Card
       className="h-full bg-white border-l-8 border-l-[#F37021] min-h-125"
       shadow="md"
      >
       <CardHeader className="pb-0 pt-10 px-10 flex-col items-start">
        <h3 className="text-3xl font-bold text-[#1B365D] mb-3">
         Technical Support
        </h3>
        <p className="text-slate-600 text-base font-medium">
         Our knowledgeable professionals are here to support you.
        </p>
       </CardHeader>

       <CardBody className="px-10 py-8">
        <p className="text-slate-600 text-base leading-relaxed mb-8">
         We provide expert assistance to resolve technical issues and answer
         questions about our products, minimizing downtime and maximizing
         productivity.
        </p>

        <div className="space-y-6">
         <div className="flex items-center gap-4 text-[#1B365D] font-bold text-lg group cursor-pointer">
          <div className="p-3 bg-slate-100 rounded-full group-hover:bg-orange-100 group-hover:text-secondary transition-colors">
           <Phone size={24} />
          </div>
          <a
           href="tel:0862248332"
           className="hover:text-secondary! transition-colors"
          >
           +84 862 248 332
          </a>
         </div>
         <div className="flex items-center gap-4 text-[#1B365D] font-bold text-lg group cursor-pointer">
          <div className="p-3 bg-slate-100 rounded-full group-hover:bg-orange-100 group-hover:text-secondary transition-colors">
           <Mail size={24} />
          </div>
          <a
           href="mailto:service@isovalve.app"
           className="hover:text-secondary! transition-colors"
          >
           service@isovalve.app
          </a>
         </div>
        </div>
       </CardBody>

       <CardFooter className="px-10 pb-10 pt-0 mt-auto">
        <Link to={INTERNAL_URLS.contact} className="w-full">
         <Button
          className="w-full text-white font-bold text-lg py-6 shadow-xl shadow-secondary-200"
          color="secondary"
          size="lg"
         >
          Contact Support
         </Button>
        </Link>
       </CardFooter>
      </Card>
     </div>

     {/* 2. RIGHT CONTENT: Product Grid (No Carousel) */}
     <div className="grow w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
       {INDUSTRIES.map((industry) => (
        <IndustryCard
         key={industry.id}
         title={industry.title}
         icon={industry.icon}
         description={industry.description}
         link={industry.link}
         color={industry.color}
         bg={industry.bg}
        />
       ))}
      </div>
     </div>
    </div>
   </div>
  </section>
 )
}
