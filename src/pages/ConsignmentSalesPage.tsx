import { Clock, MapPin, ShieldCheck, Award, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParallaxBackground from '../components/ParallaxBackground';
import Divider from '../components/Divider';

export default function ConsignmentSalesPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col relative">
      <ParallaxBackground isHoneycomb speed={0.05} />

      {/* Page Header Mini-Hero */}
      <section className="relative py-20 lg:py-32 flex items-center justify-center overflow-hidden mb-16 lg:mb-24">
        <div className="absolute inset-0 z-0">
          <img src="/apexheropic1.jpg" alt="Consignment Sales Background" className="w-full h-full object-cover object-center opacity-60 grayscale" />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h4 className="flex items-center justify-center gap-2 text-white/50 font-serif text-sm tracking-[0.3em] uppercase mb-4">
            <span className="text-primary font-black">///</span> Apex Marine & Motors
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white uppercase font-serif tracking-wide mb-6">
            CONSIGNMENT <span className="text-primary">SALES</span>
          </h1>
          <Divider className="justify-center mx-auto" />
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full flex-grow">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl font-bold text-white font-serif uppercase tracking-wider mb-6">
              STRESS-FREE <span className="text-primary">SELLING</span>
            </h2>
            
            <div className="prose prose-invert prose-lg max-w-none text-gray-300">
              <p className="leading-relaxed font-light text-lg">
                Selling a high-value boat or vehicle can be a time-consuming and frustrating process. At Apex Marine & Motors, our Consignment Sales program is designed to take the hassle out of the equation while maximizing your return. We handle everything from professional detailing and photography to marketing and negotiations.
              </p>
              
              <p className="leading-relaxed font-light mt-6">
                Leveraging our extensive network and prime location in Kenner, LA, we put your asset in front of qualified, serious buyers. Our reputation for excellence ensures that buyers trust the quality of the inventory we represent, helping you secure the best possible price without the stress of private selling.
              </p>

              <div className="bg-dark-bg/80 border-l-4 border-primary p-6 mt-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                 <p className="italic text-white text-xl font-serif">
                   "We treat every consignment as if it were our own, ensuring a seamless, transparent, and profitable transaction for our clients."
                 </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
               <div className="flex flex-col gap-3">
                 <Award className="text-primary w-8 h-8" />
                 <h4 className="text-white font-bold tracking-wide uppercase">Maximized Value</h4>
                 <p className="text-gray-400 text-sm">Professional presentation to command top dollar.</p>
               </div>
               <div className="flex flex-col gap-3">
                 <ShieldCheck className="text-primary w-8 h-8" />
                 <h4 className="text-white font-bold tracking-wide uppercase">Secure Transactions</h4>
                 <p className="text-gray-400 text-sm">Safe, vetted buyers and secure paperwork handling.</p>
               </div>
               <div className="flex flex-col gap-3">
                 <ThumbsUp className="text-primary w-8 h-8" />
                 <h4 className="text-white font-bold tracking-wide uppercase">Zero Hassle</h4>
                 <p className="text-gray-400 text-sm">We manage the calls, viewings, and negotiations.</p>
               </div>
            </div>
          </div>

          {/* Hours & Location Sidebar */}
          <div className="lg:col-span-5 relative group/sidebar">
             {/* Cyberpunk corner accents */}
             <div className="absolute -top-1 -left-1 w-8 h-8 border-t-[3px] border-l-[3px] border-primary z-20 pointer-events-none transition-transform duration-500 group-hover/sidebar:-translate-x-1 group-hover/sidebar:-translate-y-1"></div>
             <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-[3px] border-r-[3px] border-primary z-20 pointer-events-none transition-transform duration-500 group-hover/sidebar:translate-x-1 group-hover/sidebar:translate-y-1"></div>

             <div 
               className="bg-dark-bg/90 border border-white/10 p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative"
               style={{ clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))' }}
             >
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none z-0"></div>
               
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                     <MapPin className="w-6 h-6 text-primary" />
                   </div>
                   <div>
                     <h3 className="text-white font-bold font-serif uppercase tracking-wider mb-1 text-lg">Store Location</h3>
                     <p className="text-gray-400">11 West 23rd Street<br/>Kenner, LA 70062</p>
                   </div>
                 </div>

                 <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                     <Clock className="w-6 h-6 text-primary" />
                   </div>
                   <h3 className="text-white font-bold font-serif uppercase tracking-wider text-lg">Sales Hours</h3>
                 </div>

                 <ul className="space-y-4">
                   <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                     <span className="text-gray-400 uppercase tracking-widest font-bold">Monday</span>
                     <span className="text-white">9:00am – 5:00pm</span>
                   </li>
                   <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                     <span className="text-gray-400 uppercase tracking-widest font-bold">Tuesday</span>
                     <span className="text-white">9:00am – 5:00pm</span>
                   </li>
                   <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                     <span className="text-gray-400 uppercase tracking-widest font-bold">Wednesday</span>
                     <span className="text-white">9:00am – 5:00pm</span>
                   </li>
                   <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                     <span className="text-gray-400 uppercase tracking-widest font-bold">Thursday</span>
                     <span className="text-white">9:00am – 5:00pm</span>
                   </li>
                   <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                     <span className="text-gray-400 uppercase tracking-widest font-bold">Friday</span>
                     <span className="text-white">9:00am – 5:00pm</span>
                   </li>
                   <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                     <span className="text-primary uppercase tracking-widest font-bold">Saturday</span>
                     <span className="text-white">Appointment only</span>
                   </li>
                   <li className="flex justify-between items-center text-sm">
                     <span className="text-gray-600 uppercase tracking-widest font-bold">Sunday</span>
                     <span className="text-gray-500">Closed</span>
                   </li>
                 </ul>
               </div>

             </div>
          </div>
        </div>

      </section>

      {/* Call To Action */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/apexmandmcarpic3.jpg" alt="CTA Background" className="w-full h-full object-cover object-center opacity-40 grayscale mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-dark-bg/80 to-black"></div>
          <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-serif uppercase tracking-wider mb-6 drop-shadow-lg">
            Ready to experience <span className="text-primary">Perfection?</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Contact us today to schedule your consultation or to inquire about our current inventory.
          </p>
          <Link to="/contact" className="inline-block bg-primary hover:bg-primary-hover text-white px-12 py-4 rounded-none btn-swipe font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(255,102,0,0.3)] hover:shadow-[0_0_30px_rgba(255,102,0,0.5)]">
            GET IN TOUCH
          </Link>
        </div>
      </section>

    </div>
  );
}
