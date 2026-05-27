import { Phone, Mail, Clock, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <section className="bg-black pt-16 lg:pt-24 pb-0" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* Info Side */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h4 className="flex items-center gap-2 text-white/50 font-serif text-xs md:text-sm tracking-[0.3em] uppercase mb-4 border-b border-white/10 pb-4 inline-flex"><span className="text-primary font-black">///</span> Get in touch</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase font-serif">
                GET YOUR QUOTE HERE
              </h2>
              <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                Ready to elevate your vehicle or boat's care? Contact us today or visit our shop for premium, tailored solutions.
              </p>
            </div>

            <div className="space-y-8 border-t border-b border-dark-border py-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center shrink-0">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold font-serif uppercase tracking-wide">Call or Text</div>
                  <div className="text-gray-400 text-lg">(510) 220-7218</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center shrink-0">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold font-serif uppercase tracking-wide">Email Address</div>
                  <div className="text-gray-400 text-sm md:text-lg break-all">apexmarineandmotors@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center shrink-0">
                  <Map className="text-primary w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold font-serif uppercase tracking-wide">Address</div>
                  <div className="text-gray-400 text-lg">11 West 23rd Street<br />Kenner, LA 70062</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center shrink-0">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold font-serif uppercase tracking-wide">Working Hours</div>
                  <div className="text-gray-400">Mon - Fri: 9:00 a.m. - 6:00 p.m.</div>
                  <div className="text-gray-400">Sat: By Appointment Only</div>
                  <div className="text-gray-500 text-sm">Sun: Closed</div>
                </div>
              </div>
            </div>

          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 relative group/form" id="quote">
            
            {/* Cyberpunk corner accents */}
            <div className="absolute -top-1 -left-1 w-12 h-12 border-t-[3px] border-l-[3px] border-primary z-20 pointer-events-none transition-transform duration-500 group-hover/form:-translate-x-2 group-hover/form:-translate-y-2"></div>
            <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-[3px] border-r-[3px] border-primary z-20 pointer-events-none transition-transform duration-500 group-hover/form:translate-x-2 group-hover/form:translate-y-2"></div>

            <div 
              className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 lg:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative h-full flex flex-col"
              style={{ clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))' }}
            >
              {/* Inner overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none z-0"></div>

              <h3 className="text-3xl font-bold text-white mb-8 font-serif uppercase tracking-wider relative z-10">Lets Get Started</h3>

              <form className="space-y-6 relative z-10 flex-grow flex flex-col">
                
                <div className="space-y-4">
                  <div className="relative group/input">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-focus-within/input:scale-y-100 transition-transform origin-bottom"></div>
                    <input type="text" placeholder="Full Name*" className="w-full bg-dark-bg/80 border border-white/5 focus:border-white/20 text-white outline-none placeholder-gray-500 px-5 py-4 transition-colors" required />
                  </div>

                  <div className="relative group/input">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-focus-within/input:scale-y-100 transition-transform origin-bottom"></div>
                    <input type="email" placeholder="Email*" className="w-full bg-dark-bg/80 border border-white/5 focus:border-white/20 text-white outline-none placeholder-gray-500 px-5 py-4 transition-colors" required />
                  </div>

                  <div className="relative group/input">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-focus-within/input:scale-y-100 transition-transform origin-bottom"></div>
                    <input type="tel" placeholder="Phone*" className="w-full bg-dark-bg/80 border border-white/5 focus:border-white/20 text-white outline-none placeholder-gray-500 px-5 py-4 transition-colors" required />
                  </div>
                </div>

              <div className="pt-4 group/input relative">
                <label className="text-primary font-bold tracking-wide uppercase text-sm block mb-4">Select Your Desired Service:</label>
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-focus-within/input:scale-y-100 transition-transform origin-bottom z-10"></div>
                  <select required className="w-full bg-dark-bg/80 border border-white/5 focus:border-white/20 text-white outline-none px-5 py-4 transition-colors appearance-none cursor-pointer">
                    <option value="" disabled selected className="text-gray-500 bg-dark-bg">Select A Service...</option>
                    <option value="Consignment Sales" className="bg-dark-bg">Consignment Sales</option>
                    <option value="Ceramic Coatings" className="bg-dark-bg">Ceramic Coatings</option>
                    <option value="Paint Protection Film" className="bg-dark-bg">Paint Protection Film</option>
                    <option value="Detailing" className="bg-dark-bg">Detailing</option>
                    <option value="Fiberglass Repair" className="bg-dark-bg">Fiberglass & Gelcoat Repair</option>
                    <option value="Marine Flooring" className="bg-dark-bg">Marine Flooring</option>
                    <option value="Inventory Inquiry" className="bg-dark-bg">Inventory Inquiry</option>
                    <option value="Other" className="bg-dark-bg">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-2">
                 <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-dark-surface text-primary mt-1 accent-primary cursor-pointer" required />
                    <span className="text-gray-500 text-sm leading-relaxed">
                       I agree to <Link to="/terms" className="text-primary hover:underline">terms & conditions</Link> provided by the company. By providing my phone number, I agree to receive text messages & phone calls from Apex Marine & Motors LLC.
                    </span>
                 </label>
              </div>

              <button type="submit" className="mt-6 w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-none btn-swipe font-bold text-lg tracking-wide transition-all uppercase">
                SEND MY REQUEST
              </button>

            </form>
            </div>
          </div>

        </div>
      </div>

      {/* Full Width Colored Map */}
      <div className="w-full h-[400px] md:h-[500px] mt-24 relative z-10 border-t border-b border-white/5">
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
        {/* Subtle inner shadow for depth */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]"></div>
      </div>

    </section>
  );
}
