import { createFileRoute, Link } from '@tanstack/react-router'
import { Phone, Mail, Clock, MapPin, Info, ChevronRight } from 'lucide-react'
import { INTERNAL_URLS } from '../../lib'

export const Route = createFileRoute('/_public/contact')({
 component: ContactPage,
})
export default function ContactPage() {
 return (
  <main className="container py-8">
   {/* Breadcrumbs [cite: 516, 517] */}
   <nav className="text-sm text-slate-500 mb-6 flex items-center gap-2">
    <Link to="/" className="hover:text-[#F37021]">
     Home
    </Link>
    <ChevronRight size={14} />
    <span className="font-semibold text-[#1B365D]">Contact Page</span>
   </nav>

   {/* Alert Banner  */}
   <div className="bg-blue-50 border-l-4 border-[#1B365D] p-4 mb-10 flex gap-4 items-start">
    <Info className="text-[#1B365D] shrink-0 mt-0.5" size={20} />
    <p className="text-sm text-[#1B365D]">
     <strong>Wellington Anniversary Day:</strong> Our Wellington office is
     closed Monday, Jan 19. No orders will be processed. For urgent support,
     please visit our{' '}
     <Link to={INTERNAL_URLS.about} className="underline font-bold">
      About Us
     </Link>{' '}
     to reach our other regional teams.
    </p>
   </div>

   <div className="flex flex-col lg:flex-row gap-12">
    {/* LEFT COLUMN: Contact Details [cite: 529 - 542] */}
    <div className="w-full lg:w-1/3 space-y-10">
     {/* Numbers & Emails */}
     <div className="space-y-8">
      <div>
       <h3 className="text-xl font-bold text-[#1B365D] mb-4 flex items-center gap-2">
        <Phone className="text-[#F37021]" size={22} /> Contact Numbers
       </h3>
       <div className="space-y-2 text-lg font-bold text-[#1B365D] pl-8">
        <a href="tel:045685293" className="block hover:text-[#F37021]">
         04 568 5293
        </a>
        <a href="tel:0800433326" className="block hover:text-[#F37021]">
         0800 433 326
        </a>
       </div>
      </div>

      <div>
       <h3 className="text-xl font-bold text-[#1B365D] mb-4 flex items-center gap-2">
        <Mail className="text-[#F37021]" size={22} /> Contact Emails
       </h3>
       <div className="space-y-4 pl-8">
        <div>
         <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">
          Orders
         </span>
         <a
          href="mailto:orders@deeco.co.nz"
          className="block font-bold text-[#1B365D] hover:text-[#F37021]"
         >
          orders@deeco.co.nz
         </a>
        </div>
        <div>
         <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">
          Accounts Inquiries
         </span>
         <a
          href="mailto:accounts@deeco.co.nz"
          className="block font-bold text-[#1B365D] hover:text-[#F37021]"
         >
          accounts@deeco.co.nz
         </a>
        </div>
        <div>
         <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">
          General Inquiries & Technical Support
         </span>
         <a
          href="mailto:service@deeco.co.nz"
          className="block font-bold text-[#1B365D] hover:text-[#F37021]"
         >
          service@deeco.co.nz
         </a>
        </div>
       </div>
      </div>

      <div>
       <h3 className="text-xl font-bold text-[#1B365D] mb-4 flex items-center gap-2">
        <Clock className="text-[#F37021]" size={22} /> Opening Hours -
        Wellington
       </h3>
       <div className="pl-8 text-[#1B365D]">
        <p className="font-bold text-lg">Monday – Friday</p>
        <p className="font-medium">08:00 – 17:30</p>
        <p className="text-sm text-slate-500 italic mt-1">
         Excluding Public Holidays
        </p>
       </div>
      </div>
     </div>

     {/* Offices  */}
     <div className="space-y-6 pt-6 border-t border-slate-200">
      <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-sm">
       <h4 className="font-black text-[#1B365D] text-lg mb-3">Wellington</h4>
       <div className="flex gap-3 text-sm text-slate-600 mb-4 font-medium">
        <MapPin size={18} className="text-[#F37021] shrink-0" />
        <p>35 Wakefield Street, Alicetown 5010</p>
       </div>
       <Link
        to="/about"
        className="text-[#F37021] text-xs font-bold hover:underline"
       >
        View on Map &rarr;
       </Link>
      </div>

      <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-sm">
       <h4 className="font-black text-[#1B365D] text-lg mb-3">Christchurch</h4>
       <div className="flex gap-3 text-sm text-slate-600 mb-4 font-medium">
        <MapPin size={18} className="text-[#F37021] shrink-0" />
        <p>Unit 1, 19 Nuttall Drive, Hillsborough, Christchurch 8022</p>
       </div>
       <Link
        to="/about"
        className="text-[#F37021] text-xs font-bold hover:underline"
       >
        View on Map &rarr;
       </Link>
      </div>
     </div>
    </div>

    {/* RIGHT COLUMN: Contact Form [cite: 543 - 551, 566] */}
    <div className="w-full lg:w-2/3">
     <div className="bg-white p-8 md:p-12 rounded-sm border border-orange-200 shadow-md">
      <h2 className="text-2xl font-bold text-[#F37021] mb-8 border-l-4 border-[#F37021] pl-4">
       Contact Form
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className="flex flex-col gap-1">
        <label className="text-xs font-black text-[#1B365D] uppercase tracking-wide">
         Full name
        </label>
        <input
         type="text"
         className="border border-slate-300 rounded-sm p-3 text-sm focus:border-[#F37021] outline-none transition-colors"
        />
       </div>

       <div className="flex flex-col gap-1">
        <label className="text-xs font-black text-[#1B365D] uppercase tracking-wide">
         Company name
        </label>
        <input
         type="text"
         className="border border-slate-300 rounded-sm p-3 text-sm focus:border-[#F37021] outline-none transition-colors"
        />
       </div>

       <div className="flex flex-col gap-1">
        <label className="text-xs font-black text-[#1B365D] uppercase tracking-wide">
         Contact number
        </label>
        <input
         type="tel"
         className="border border-slate-300 rounded-sm p-3 text-sm focus:border-[#F37021] outline-none transition-colors"
        />
       </div>

       <div className="flex flex-col gap-1">
        <label className="text-xs font-black text-[#1B365D] uppercase tracking-wide">
         Email address
        </label>
        <input
         type="email"
         className="border border-slate-300 rounded-sm p-3 text-sm focus:border-[#F37021] outline-none transition-colors"
        />
       </div>

       <div className="flex flex-col gap-1 md:col-span-2">
        <label className="text-xs font-black text-[#1B365D] uppercase tracking-wide">
         Region / Branch Location
        </label>
        <select className="border border-slate-300 rounded-sm p-3 text-sm focus:border-[#F37021] outline-none bg-white">
         <option>Select Region</option>
         <option>Wellington</option>
         <option>Christchurch</option>
         <option>Auckland</option>
         <option>Other</option>
        </select>
       </div>

       <div className="flex flex-col gap-1 md:col-span-2">
        <label className="text-xs font-black text-[#1B365D] uppercase tracking-wide">
         Subject
        </label>
        <input
         type="text"
         className="border border-slate-300 rounded-sm p-3 text-sm focus:border-[#F37021] outline-none transition-colors"
        />
       </div>

       <div className="flex flex-col gap-1 md:col-span-2">
        <label className="text-xs font-black text-[#1B365D] uppercase tracking-wide">
         Message
        </label>
        <textarea
         rows={6}
         className="border border-slate-300 rounded-sm p-3 text-sm focus:border-[#F37021] outline-none transition-colors resize-none"
        ></textarea>
       </div>

       <div className="md:col-span-2 flex justify-end mt-4">
        <button
         type="submit"
         className="bg-[#F37021] hover:bg-orange-600 text-white font-black py-4 px-10 rounded-sm shadow-lg transition-all uppercase tracking-widest text-sm"
        >
         Submit
        </button>
       </div>
      </form>
     </div>

     {/* Recently Viewed Sidebar Widget [cite: 520 - 525] */}
     <div className="mt-12 lg:hidden border-t border-slate-200 pt-8">
      <h4 className="font-bold text-[#1B365D] mb-4">Recently viewed</h4>
      <ul className="space-y-3">
       <li className="text-xs text-slate-600 hover:text-[#F37021] cursor-pointer">
        Bermad Model 720 Pressure Reducing Valve
       </li>
       <li className="text-xs text-slate-600 hover:text-[#F37021] cursor-pointer">
        3D-Pipestand Assembly - 37520 PS EP
       </li>
       {/* Add more items from source 523-525 as needed */}
      </ul>
     </div>
    </div>
   </div>
  </main>
 )
}
