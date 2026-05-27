import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

import Divider from './Divider';

export default function Portfolio() {
  const images = [
    "/newpics/apexmandmboatontrailer.jpg", // New Boat
    "/newpics/apexmandmproductshowcase.jpg", // New Showcase
    "/newpics/apexmandmbusinessexterior.jpg", // New Exterior
    "/apexmandmboatpic4.jpg", // Boat gelcoat
    "/apexmandmcarpic3.jpg", // Powersports/bike
    "/apexmandmcarpic4.jpg", // Interior detail
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  return (
    <section className="bg-dark-surface py-16 lg:py-24 relative overflow-hidden">
      


      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            {/* Faint Background Text Centered with Title */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 w-full flex justify-center">
              <h2 
                className="text-[18vw] md:text-[12vw] font-serif font-black uppercase whitespace-nowrap tracking-widest italic"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}
              >
                PORTFOLIO
              </h2>
            </div>
            <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-white uppercase font-serif tracking-widest px-4">
              OUR RECENT COATING & <span className="text-primary">POLISHING WORK</span>
            </h2>
          </div>
          <Divider className="justify-center mt-6" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, index) => (
            <div key={index} className="relative group/card">
              
              {/* Cyberpunk corner accents */}
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-[3px] border-l-[3px] border-primary z-20 pointer-events-none transition-transform duration-500 group-hover/card:-translate-x-2 group-hover/card:-translate-y-2"></div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-[3px] border-r-[3px] border-primary z-20 pointer-events-none transition-transform duration-500 group-hover/card:translate-x-2 group-hover/card:translate-y-2"></div>

              <div 
                className="group relative aspect-[4/3] rounded-none overflow-hidden bg-black border border-white/10 transition-all duration-500 cursor-pointer"
                style={{ clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))' }}
                onClick={() => setSelectedImageIndex(index)}
              >
                {/* Subtle Inner Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none z-10"></div>
                
                <img 
                src={img} 
                alt={`Portfolio piece ${index + 1}`} 
                className="w-full h-full object-cover transition-all duration-700 brightness-100 group-hover:brightness-50 group-hover:scale-110"
              />
              {/* Overlay gradient for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Expanding corner borders */}
              <div className="absolute inset-4 border border-white/0 group-hover:border-primary/50 transition-all duration-500 scale-95 group-hover:scale-100 pointer-events-none"></div>

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 pointer-events-none">
                <div className="bg-black/50 backdrop-blur-md p-3 border border-white/20 group-hover:border-primary transition-colors">
                  <Plus className="text-white w-8 h-8" />
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
             <button className="border border-white hover:bg-white/10 text-white px-10 py-4 rounded-none btn-swipe-outline text-xs font-bold tracking-widest transition-all backdrop-blur-sm text-center uppercase">
               LOAD MORE SHOWCASE PROJECTS
             </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(null);
            }}
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors p-2 z-10"
          >
            <X size={32} />
          </button>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
            }}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-3 z-10 bg-white/5 hover:bg-white/10 rounded-none border border-white/10 backdrop-blur-sm"
          >
            <ChevronLeft size={36} />
          </button>
          
          <img 
            src={images[selectedImageIndex]} 
            alt="Portfolio full view" 
            className="max-h-[85vh] max-w-[90vw] object-contain drop-shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          />

          <button 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
            }}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-3 z-10 bg-white/5 hover:bg-white/10 rounded-none border border-white/10 backdrop-blur-sm"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
}
