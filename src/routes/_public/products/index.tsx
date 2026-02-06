import { productOptions } from '@/lib'
import {
 brandsListOptions,
 categoriesListOptions,
 industriesListOptions,
} from '@/lib/queries'
import {
 Accordion,
 AccordionItem,
 BreadcrumbItem,
 Breadcrumbs,
 Button,
 Card,
 CardBody,
 CardFooter,
 Checkbox,
 CheckboxGroup,
 Chip,
 Divider,
 Image,
 Input,
} from '@heroui/react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { ChevronRight, Grid, List, Search, X } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/_public/products/')({
 component: ProductsPage,
})

function ProductsPage() {
 const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

 // Suspense-enabled data fetching
 const { data: industries } = useSuspenseQuery(industriesListOptions())
 const { data: brands } = useSuspenseQuery(brandsListOptions())
 const { data: categories } = useSuspenseQuery(categoriesListOptions())
 const { data: products } = useSuspenseQuery(productOptions.listOptions())

 return (
  <main className="container py-8">
   <Breadcrumbs className="mb-6" separator={<ChevronRight size={14} />}>
    <BreadcrumbItem href="/">Home</BreadcrumbItem>
    <BreadcrumbItem className="font-bold text-primary">Products</BreadcrumbItem>
   </Breadcrumbs>

   <div className="flex flex-col lg:flex-row gap-12">
    {/* --- SIDEBAR FILTERS --- */}
    <aside className="w-full lg:w-72 flex-shrink-0 space-y-8">
     <Input
      placeholder="Search terms"
      startContent={<Search size={18} className="text-default-400" />}
      type="search"
      variant="bordered"
      radius="sm"
     />

     <section>
      <h3 className="font-bold text-lg mb-4">Industries</h3>
      <CheckboxGroup color="secondary">
       {industries.map((ind) => (
        <Checkbox key={ind.id} value={ind.id} size="sm">
         {ind.name}
        </Checkbox>
       ))}
      </CheckboxGroup>
     </section>

     <section>
      <h3 className="font-bold text-lg mb-4">Categories</h3>
      <Accordion variant="light" selectionMode="multiple" className="px-0">
       {categories.map((cat) => (
        <AccordionItem
         key={cat.id}
         title={<span className="text-sm font-medium">{cat.name}</span>}
        >
         <div className="flex flex-col gap-2 ml-4">
          {cat.children.map((sub) => (
           <Button
            key={sub.id}
            variant="light"
            size="sm"
            className="justify-start text-default-600"
           >
            {sub.name}
           </Button>
          ))}
         </div>
        </AccordionItem>
       ))}
      </Accordion>
     </section>

     <section>
      <h3 className="font-bold text-lg mb-4">Brands</h3>
      <div className="max-h-64 overflow-y-auto custom-scrollbar pr-2">
       <CheckboxGroup color="secondary">
        {brands.map((brand) => (
         <Checkbox key={brand.id} value={brand.id} size="sm">
          {brand.name}
         </Checkbox>
        ))}
       </CheckboxGroup>
      </div>
     </section>

     <Button
      variant="bordered"
      startContent={<X size={16} />}
      fullWidth
      className="font-semibold"
     >
      Clear All Filters
     </Button>
    </aside>

    {/* --- MAIN CONTENT --- */}
    <div className="flex-grow">
     <div className="flex items-center justify-between mb-8 p-4 bg-default-50 rounded-lg">
      <div className="flex items-center gap-2">
       <span className="font-bold text-primary">Results:</span>
       <Chip variant="flat" color="secondary" size="sm">
        {products.length} Products
       </Chip>
      </div>

      <div className="flex gap-2 bg-default-200 py-1 px-1.5 rounded-xl">
       <Button
        isIconOnly
        size="sm"
        variant={viewMode === 'grid' ? 'solid' : 'light'}
        onPress={() => setViewMode('grid')}
        className={viewMode === 'grid' ? 'bg-white shadow-sm' : ''}
        disableRipple
       >
        <Grid size={18} />
       </Button>
       <Button
        disableRipple
        isIconOnly
        size="sm"
        variant={viewMode === 'list' ? 'solid' : 'light'}
        onPress={() => setViewMode('list')}
        className={viewMode === 'list' ? 'bg-white shadow-sm' : ''}
       >
        <List size={18} />
       </Button>
      </div>
     </div>

     <div
      className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}
     >
      {products.map((product) => (
       <Card
        key={product.id}
        isPressable
        radius="sm"
        className={`border-none ${viewMode === 'list' ? 'flex-row h-48' : ''}`}
       >
        <div
         className={`bg-default-100 flex items-center justify-center p-6 ${viewMode === 'list' ? 'w-64' : 'aspect-square'}`}
        >
         <Image
          src={`/images/${product.productCode}.jpg`}
          alt={product.displayName}
          className="object-contain mix-blend-multiply"
          height={viewMode === 'list' ? 150 : 250}
         />
        </div>
        <div className="flex flex-col flex-grow text-left">
         <CardBody className="py-4">
          <p className="text-tiny text-secondary font-bold uppercase mb-1">
           {product.brand.name}
          </p>
          <h4 className="font-bold text-large text-primary leading-tight">
           {product.displayName}
          </h4>
          {viewMode === 'list' && (
           <p className="text-small text-default-500 mt-2 line-clamp-2">
            {product.description}
           </p>
          )}
         </CardBody>
         <Divider />
         <CardFooter className="justify-between">
          <span className="text-default-400 text-tiny italic">
           {product.productCode}
          </span>
          <Button
           size="sm"
           color="secondary"
           variant="flat"
           className="font-bold"
          >
           View Specs
          </Button>
         </CardFooter>
        </div>
       </Card>
      ))}
     </div>
    </div>
   </div>
  </main>
 )
}
