import { Phone, MapPin, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParallaxBackground from './ParallaxBackground';

export default function Footer() {
  return (
    <footer className="bg-dark-bg pt-16 lg:pt-20 relative overflow-hidden">
      <ParallaxBackground isHoneycomb speed={0.05} />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-[1]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 mb-16 px-4">
          
          {/* Brand */}
          <div className="lg:w-1/4">
            <a href="#" className="inline-block mb-6">
                <img src="/apexmarinemotorslogo.webp" alt="Apex Marine & Motors Logo" className="h-16 w-auto" />
            </a>
            <p className="text-gray-300 text-sm leading-relaxed pr-4">
              Elite vehicle and marine care specialists serving Kenner, LA and the surrounding areas. Protecting and enhancing your investments through expert craftsmanship.
            </p>
          </div>

          <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-primary font-bold font-serif uppercase tracking-wide mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Detailing', path: '/detailing' },
                  { name: 'Ceramic Coatings', path: '/ceramic-coatings' },
                  { name: 'Fiberglass Repair', path: '/fiberglass-repair' },
                  { name: 'Contact', path: '/contact' }
                ].map((link, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-white text-lg leading-none">&bull;&bull;&bull;</span>
                    <Link to={link.path} className="text-white font-bold hover:text-primary transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inventory */}
            <div>
               <h4 className="text-primary font-bold font-serif uppercase tracking-wide mb-6">Sales & Inventory</h4>
               <ul className="space-y-4">
                  {[
                    { name: 'Boats Inventory', path: '/inventory?category=boats' },
                    { name: 'Vehicles Inventory', path: '/inventory?category=vehicles' },
                    { name: 'Powersports', path: '/inventory?category=powersports' },
                    { name: 'Consignment', path: '/consignment-sales' },
                    { name: 'Purchase Inquiry', path: '/contact' }
                  ].map((link, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-white text-lg leading-none">&bull;&bull;&bull;</span>
                      <Link to={link.path} className="text-white font-bold hover:text-primary transition-colors text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
               </ul>
            </div>

            {/* Legal / Social */}
            <div>
              <h4 className="text-primary font-bold font-serif uppercase tracking-wide mb-6">Connect</h4>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-white mt-0.5" />
                  <span className="text-white font-bold text-sm">(510) 220-7218</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-white mt-0.5 shrink-0" />
                  <span className="text-white font-bold text-xs md:text-sm break-all">apexmarineandmotors@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-white mt-0.5" />
                  <span className="text-white text-sm">11 West 23rd Street<br />Kenner, LA 70062</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-white mt-0.5" />
                  <div className="text-white text-sm">
                    <p>Mon - Fri: 9:00 a.m. - 6:00 p.m.</p>
                    <p>Sat: By Appointment Only</p>
                    <p>Sun: Closed</p>
                  </div>
                </li>
              </ul>

              <div className="flex gap-3">
                <a href="https://www.facebook.com/people/Apex-Marine-Motors/61573215550726/?mibextid=wwXIfr&rdid=7OVsVFtvdJkcOnbA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18pweMrFjX%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
                  <Facebook size={16} fill="currentColor" />
                </a>
                <a href="https://www.instagram.com/apexmarineandmotors/?igsh=MThiZHd6b3BwYmlsYw%3D%3D#" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
                  <Instagram size={16} />
                </a>
                <a href="https://www.tiktok.com/@apexmarineandmotors" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M448 209.91a210.06 210.06 0 0 1 -122.77-39.25v178.72A162.55 162.55 0 1 1 162.55 186.83V270a79 79 0 1 0 79 79V10h88.66A123.69 123.69 0 0 0 448 133.72Z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@Apexmarineandmotors" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
                  <Youtube size={16} />
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 py-6 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm text-center md:text-left">
            Copyright&copy; {new Date().getFullYear()} | Apex Marine & Motors LLC | All Rights Reserved.
          </p>
          <div className="flex gap-4 text-sm font-bold text-white">
             <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
      

    </footer>
  );
}
