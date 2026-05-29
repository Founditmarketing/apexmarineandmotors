import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col relative pt-24 lg:pt-32">
      
      {/* Main Content Area */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 w-full flex-grow">
        
        <div className="text-center mb-16">
          <h4 className="flex items-center justify-center gap-2 text-white/50 font-serif text-sm tracking-[0.3em] uppercase mb-4">
            <span className="text-primary font-black">///</span> We're Here To Help
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase font-serif tracking-wide">
            CONTACT <span className="text-primary">US</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Info Column */}
          <div className="flex flex-col gap-6 w-full max-w-full overflow-hidden">
            <div className="bg-dark-bg/80 border border-white/5 p-5 sm:p-8 flex items-center gap-4 sm:gap-6 group hover:border-primary/50 transition-colors w-full">
               <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                 <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
               </div>
               <div className="min-w-0">
                 <h3 className="text-white font-bold font-serif uppercase tracking-wider mb-1 sm:mb-2 text-sm sm:text-base">Call or Text</h3>
                 <p className="text-gray-400 text-sm sm:text-lg">(510) 220-7218</p>
               </div>
            </div>

            <div className="bg-dark-bg/80 border border-white/5 p-5 sm:p-8 flex items-center gap-4 sm:gap-6 group hover:border-primary/50 transition-colors w-full">
               <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                 <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
               </div>
               <div className="min-w-0 flex-1">
                 <h3 className="text-white font-bold font-serif uppercase tracking-wider mb-1 sm:mb-2 text-sm sm:text-base">Email Address</h3>
                 <p className="text-gray-400 text-[13px] sm:text-lg break-all sm:break-normal">apexmarineandmotors@gmail.com</p>
               </div>
            </div>

            <div className="bg-dark-bg/80 border border-white/5 p-5 sm:p-8 flex items-center gap-4 sm:gap-6 group hover:border-primary/50 transition-colors w-full">
               <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                 <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
               </div>
               <div className="min-w-0">
                 <h3 className="text-white font-bold font-serif uppercase tracking-wider mb-1 sm:mb-2 text-sm sm:text-base">Location</h3>
                 <p className="text-gray-400 text-sm sm:text-lg">11 West 23rd Street<br />Kenner, LA 70062</p>
               </div>
            </div>

            <div className="bg-dark-bg/80 border border-white/5 p-5 sm:p-8 flex items-center gap-4 sm:gap-6 group hover:border-primary/50 transition-colors w-full">
               <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                 <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
               </div>
               <div className="min-w-0">
                 <h3 className="text-white font-bold font-serif uppercase tracking-wider mb-1 sm:mb-2 text-sm sm:text-base">Hours</h3>
                 <p className="text-gray-400 text-xs sm:text-base">Mon - Fri: 9:00 a.m. - 6:00 p.m.</p>
                 <p className="text-gray-400 text-xs sm:text-base">Sat: By Appointment Only</p>
                 <p className="text-gray-500 text-xs mt-1">Sun: Closed</p>
               </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="relative group/form">
              {/* Cyberpunk corner accents */}
              <div className="absolute -top-1 -left-1 w-12 h-12 border-t-[3px] border-l-[3px] border-primary z-20 pointer-events-none transition-transform duration-500 group-hover/form:-translate-x-2 group-hover/form:-translate-y-2"></div>
              <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-[3px] border-r-[3px] border-primary z-20 pointer-events-none transition-transform duration-500 group-hover/form:translate-x-2 group-hover/form:translate-y-2"></div>

              <div 
                className="bg-dark-bg/90 border border-white/10 p-8 lg:p-12 relative flex flex-col"
                style={{ clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none z-0"></div>

                <div className="mb-8 relative z-10">
                   <h2 className="text-3xl font-bold text-white font-serif uppercase tracking-wider mb-2">Request A Quote</h2>
                   <p className="text-gray-400 text-sm">Fill out the details of your vehicle or marine vessel, and our expert team will get back to you promptly.</p>
                </div>

                <form className="space-y-6 relative z-10">
                  <div className="space-y-4">
                    <div className="relative group/input">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-focus-within/input:scale-y-100 transition-transform origin-bottom"></div>
                      <input type="text" placeholder="Full Name*" className="w-full bg-black/50 border border-white/5 focus:border-white/20 text-white outline-none placeholder-gray-500 px-5 py-4 transition-colors" required />
                    </div>
                    <div className="relative group/input">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-focus-within/input:scale-y-100 transition-transform origin-bottom"></div>
                      <input type="email" placeholder="Email Address*" className="w-full bg-black/50 border border-white/5 focus:border-white/20 text-white outline-none placeholder-gray-500 px-5 py-4 transition-colors" required />
                    </div>
                    <div className="relative group/input">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-focus-within/input:scale-y-100 transition-transform origin-bottom"></div>
                      <input type="tel" placeholder="Phone Number*" className="w-full bg-black/50 border border-white/5 focus:border-white/20 text-white outline-none placeholder-gray-500 px-5 py-4 transition-colors" required />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 mt-4 group/input relative">
                    <label className="text-white font-bold tracking-wide uppercase text-sm block mb-4">Select Your Desired Service</label>
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-focus-within/input:scale-y-100 transition-transform origin-bottom z-10"></div>
                      <select required className="w-full bg-black/50 border border-white/5 focus:border-white/20 text-white outline-none px-5 py-4 transition-colors appearance-none cursor-pointer">
                        <option value="" disabled selected className="text-gray-500 bg-dark-bg">Select A Service...</option>
                        <option value="Consignment Sales" className="bg-dark-bg">Consignment Sales</option>
                        <option value="Ceramic Coatings" className="bg-dark-bg">Ceramic Coatings</option>
                        <option value="Paint Protection Film" className="bg-dark-bg">Paint Protection Film</option>
                        <option value="Detailing" className="bg-dark-bg">Detailing</option>
                        <option value="Fiberglass Repair" className="bg-dark-bg">Fiberglass & Gelcoat Repair</option>
                        <option value="Marine Flooring" className="bg-dark-bg">Marine Flooring</option>
                        <option value="Other" className="bg-dark-bg">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-2">
                     <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-black text-primary mt-1 accent-primary cursor-pointer shrink-0" required />
                        <span className="text-gray-500 text-xs leading-relaxed">
                           I agree to <Link to="/terms" className="text-primary hover:underline">terms & conditions</Link> provided by the company. By providing my phone number, I agree to receive text messages & phone calls from Apex Marine & Motors LLC.
                        </span>
                     </label>
                  </div>

                  <div className="mt-8">
                    <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white px-12 py-4 rounded-none btn-swipe font-bold text-sm tracking-widest transition-all uppercase">
                      SEND MY REQUEST
                    </button>
                  </div>

                </form>
              </div>
          </div>

        </div>
      </section>

      {/* Full Width Colored Map */}
      <div className="w-full h-[400px] md:h-[500px] mt-auto relative z-10 border-t border-white/10">
        <iframe 
          src="https://maps.google.com/maps?q=11%20West%2023rd%20Street%20Kenner%2C%20LA%2070062&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]"></div>
      </div>

    </div>
  );
}
