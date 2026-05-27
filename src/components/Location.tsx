import { MapPin } from 'lucide-react';

import Divider from './Divider';
import ParallaxBackground from './ParallaxBackground';

export default function Location() {
  const cities = [
    "MIAMI, FL",
    "FORT LAUDERDALE, FL",
    "WEST PALM BEACH, FL",
    "BOCA RATON, FL",
    "HOLLYWOOD, FL",
    "CORAL GABLES, FL"
  ];

  return (
    <section className="bg-dark-bg py-0 relative overflow-hidden">
      <ParallaxBackground isHoneycomb speed={0.05} />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-[1]"></div>
      <div className="flex flex-col lg:flex-row relative z-10">
        
        {/* Image side - Full height on desktop */}
        <div 
          className="w-full lg:w-[55%] relative min-h-[300px] md:min-h-[400px] lg:min-h-0 overflow-hidden lg:[clip-path:polygon(0_0,100%_0,90%_100%,0%_100%)]" 
        >
          <img 
            src="/newpics/apexmandmofficeexterior2.jpg" 
            alt="Office Exterior" 
            className="absolute inset-0 w-full h-full object-cover object-center" 
          />
          {/* Slight dark overlay */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none z-10"></div>
          <div className="absolute bottom-8 right-16 lg:right-32 p-2 hidden md:block">
             <div className="w-24 h-24 drop-shadow-2xl opacity-90">
                 <img src="/apexmarinemotorslogo.webp" alt="Apex Marine & Motors Logo" className="w-full h-full object-contain" />
             </div>
          </div>
        </div>

        {/* Content side */}
        <div className="w-full lg:w-[45%] px-6 pt-12 pb-10 lg:p-24 flex flex-col justify-center z-10 relative">
          <div className="relative z-10 flex flex-col">
            <h4 className="flex items-center gap-2 text-white/50 font-serif text-xs md:text-sm tracking-[0.3em] uppercase mb-4"><span className="text-primary font-black">///</span> Serving your local community</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase leading-tight font-serif">
              PROUDLY SERVING <span className="text-primary">KENNER, LA</span> & THE SURROUNDING AREAS
            </h2>
            
            <Divider className="justify-start mb-8" />
            
            <p className="text-gray-400 mb-10 text-sm md:text-lg leading-relaxed">
              Apex Marine & Motors proudly serves Kenner, LA and the surrounding areas with expert car and boat detailing, coatings, fiberglass repair, and vehicle sales. Trust us for reliable luxury service and superior results in your local community.
            </p>

            <a href="/contact" className="self-start bg-primary hover:bg-primary-hover text-black transition-all px-10 py-4 font-bold text-sm tracking-[0.2em] uppercase btn-swipe shadow-[0_0_20px_rgba(255,102,0,0.2)] hover:shadow-[0_0_30px_rgba(255,102,0,0.5)]">
              START MY QUOTE
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
