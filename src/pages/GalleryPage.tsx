import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import ParallaxBackground from '../components/ParallaxBackground';
import Divider from '../components/Divider';

export default function GalleryPage() {
  const images = [
    "/newpics/apexmandmboatontrailer.jpg",
    "/newpics/apexmandmbusinessexterior.jpg",
    "/newpics/apexmandmheroimage.jpeg",
    "/newpics/apexmandmheroimage.webp",
    "/newpics/apexmandmheroimage2.jpg",
    "/newpics/apexmandmheroimage3.jpg",
    "/newpics/apexmandmheroimage4.jpg",
    "/newpics/apexmandmheroimage5.jpg",
    "/newpics/apexmandmheroimage6.jpg",
    "/newpics/apexmandmnewphotos1.jpg",
    "/newpics/apexmandmofficeexterior.jpg",
    "/newpics/apexmandmofficeexterior2.jpg",
    "/newpics/apexmandmofficeexterior3.jpg",
    "/newpics/apexmandmproductshowcase.jpg",
    "/newpics/apexmandmserviceillustration.webp",
    "/apexheropic1.jpg",
    "/apexheropic2.jpg",
    "/apexmandmboatpic1.jpg",
    "/apexmandmboatpic2.jpg",
    "/apexmandmboatpic3.jpg",
    "/apexmandmboatpic4.jpg",
    "/apexmandmcarpic1.jpg",
    "/apexmandmcarpic2.jpg",
    "/apexmandmcarpic3.jpg",
    "/apexmandmcarpic4.jpg",
    "/apexmandmcarpic5.jpg",
    "/apexmandmcarpic6.jpg",
    "/apexmandmpic1.jpg"
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  return (
    <div className="bg-black min-h-screen flex flex-col relative">
      <ParallaxBackground isHoneycomb speed={0.05} />

      {/* Page Header Mini-Hero */}
      <section className="relative py-20 lg:py-32 flex items-center justify-center overflow-hidden mb-8 lg:mb-12">
        <div className="absolute inset-0 z-0">
          <img src="/apexmandmpic1.jpg" alt="Gallery Background" className="w-full h-full object-cover object-center opacity-60 grayscale" />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h4 className="flex items-center justify-center gap-2 text-white/50 font-serif text-sm tracking-[0.3em] uppercase mb-4">
            <span className="text-primary font-black">///</span> Apex Marine & Motors
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white uppercase font-serif tracking-wide mb-6">
            OUR <span className="text-primary">GALLERY</span>
          </h1>
          <Divider className="justify-center mx-auto" />
        </div>
      </section>

      {/* Main Content Area - Gallery Grid */}
      <section className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pb-24 w-full flex-grow">
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
                  alt={`Gallery piece ${index + 1}`} 
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
      </section>

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
            alt="Gallery full view" 
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
    </div>
  );
}
