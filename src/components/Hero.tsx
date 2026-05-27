import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Divider from './Divider';

export default function Hero({ isLoaded = true }: { isLoaded?: boolean }) {
  const images = [
    "/newpics/apexmandmheroimage.jpeg",
    "/newpics/apexmandmheroimage5.jpg",
    "/newpics/apexmandmheroimage6.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const goToSlide = (index: number) => setCurrentIndex(index);

  return (
    <section className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center py-16 md:py-24 overflow-hidden group">
      
      {/* Sliding Background Carousel */}
      <div 
        className="absolute inset-0 z-0 flex transition-transform duration-1000 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img 
              src={img} 
              alt={`Hero Background ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover ${
                index === 1 || index === 2 ? 'object-[50%_75%]' : 'object-center'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Dark & Gritty Overlays */}
      {/* Strong gradient fading to pure black at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0 pointer-events-none"></div>

      {/* Cool Navigation Arrows (Appear on Hover) */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-dark-bg/60 hover:bg-primary text-white p-3 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-dark-bg/60 hover:bg-primary text-white p-3 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <ChevronRight size={32} />
      </button>

      {/* Interactive Progress Bar Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {images.map((_, index) => (
          <button 
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 transition-all duration-500 rounded-none overflow-hidden ${
              index === currentIndex ? 'w-24 bg-primary shadow-[0_0_10px_rgba(255,102,0,0.5)]' : 'w-10 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 pointer-events-none">
        <div className="relative max-w-[850px] pointer-events-auto group/card">
          
          {/* Cyberpunk corner accents */}
          <div className="absolute -top-1 -left-1 w-12 h-12 border-t-[3px] border-l-[3px] border-primary z-20 pointer-events-none transition-transform duration-500 group-hover/card:-translate-x-2 group-hover/card:-translate-y-2"></div>
          <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-[3px] border-r-[3px] border-primary z-20 pointer-events-none transition-transform duration-500 group-hover/card:translate-x-2 group-hover/card:translate-y-2"></div>

          {/* Main Card */}
          <div 
            className={`relative bg-black/60 backdrop-blur-md p-6 md:p-12 border border-white/10 transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))' }}
          >
            {/* Subtle Inner Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="mb-4">
                <span className="flex items-center gap-2 text-white/50 font-serif text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase whitespace-nowrap">
                  <span className="text-primary font-black">///</span> Premium Marine & Auto Services
                </span>
              </div>

              {/* Mobile Title */}
              <h1 className="md:hidden text-4xl font-serif font-bold mb-4 leading-tight text-white uppercase">
                TOP <span className="text-primary font-bold">MARINE</span><br />
                &amp; <span className="text-primary font-bold">AUTO</span> SPECIALISTS
              </h1>
              {/* Desktop Title */}
              <h1 className="hidden md:block text-[2.75rem] font-serif font-bold mb-4 leading-tight text-white uppercase">
                LEADING <span className="text-primary font-bold">MARINE</span> &amp; <span className="text-primary font-bold">AUTOMOTIVE</span> SPECIALISTS IN KENNER, LA
              </h1>

              <Divider className="justify-start mb-6" />

              {/* Desktop Body Text */}
              <p className="hidden md:block text-[15px] text-gray-200 mb-8 font-light leading-relaxed">
                Apex Marine &amp; Motors is Kenner's premier destination for high-end marine and automotive care. We specialize in <span className="text-primary font-medium">consignment sales</span>, <span className="text-primary font-medium">ceramic coatings</span>, <span className="text-primary font-medium">paint protection film</span>, <span className="text-primary font-medium">detailing</span>, <span className="text-primary font-medium">fiberglass repair</span>, and <span className="text-primary font-medium">marine flooring</span> to preserve and elevate your most valuable assets.
              </p>
              
              {/* Mobile Body Text */}
              <p className="md:hidden text-sm text-gray-200 mb-8 font-light leading-relaxed">
                Kenner's premier destination for high-end marine and automotive care, specializing in <span className="text-primary font-medium">premium coatings</span>, <span className="text-primary font-medium">detailing</span>, and <span className="text-primary font-medium">sales</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-2">
                <Link to="/contact" className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-none btn-swipe text-xs font-extrabold tracking-widest transition-all text-center uppercase">
                  START MY QUOTE
                </Link>
                <a href="tel:5102207218" className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-none btn-swipe-outline text-xs font-bold tracking-widest transition-all backdrop-blur-sm text-center">
                  (510) 220-7218
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
