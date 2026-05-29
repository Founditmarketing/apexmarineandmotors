import { CheckSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Divider from './Divider';
import ParallaxBackground from './ParallaxBackground';

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToSlide = (index: number) => {
    const container = document.getElementById('services-scroll-container');
    const slide = document.getElementById(`service-slide-${index}`);
    if (container && slide) {
      container.scrollTo({
        left: slide.offsetLeft - container.offsetLeft,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % services.length;
    setCurrentIndex(newIndex);
    scrollToSlide(newIndex);
  };
  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + services.length) % services.length;
    setCurrentIndex(newIndex);
    scrollToSlide(newIndex);
  };
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    scrollToSlide(index);
  };

  const services = [
    {
      id: "boat-detailing",
      path: "/detailing",
      subtitle: "MARINE EXCELLENCE",
      title: "BOAT DETAILING & RESTORATION",
      badge: "ULTIMATE SHINE & PRESERVATION",
      description: "We meticulously remove oxidation, restore faded gelcoat, and perform deep detailing to keep your vessel pristine against harsh salt and sun.",
      bullets: [
        "Oxidation Removal – Restores vibrant color.",
        "Deep Cleaning – Mold prevention and vinyl care."
      ],
      image: "/apexmandmboatpic1.jpg",
      align: "left"
    },
    {
      id: "ceramic-coating",
      path: "/ceramic-coatings",
      subtitle: "DEEP GLOSS, PERFECT SHIELD",
      title: "CERAMIC COATINGS",
      badge: "LONG-LASTING SHINE AND DURABLE PROTECTION",
      description: "Enhance shine while protecting against UV rays, scratches, and oxidation with our premium aviation-grade hydrophobic formulas.",
      bullets: [
        "UV Protection – Shields against harmful sun rays.",
        "Long-Term Durability – Lasting defense for years."
      ],
      image: "/apexmandmcarpic1.jpg",
      align: "right"
    },
    {
      id: "fiberglass-repair",
      path: "/fiberglass-repair",
      subtitle: "STRUCTURAL INTEGRITY",
      title: "FIBERGLASS & GELCOAT REPAIR",
      badge: "SEAMLESS FIXES, FLAWLESS FINISHES",
      description: "From minor scratches to major structural repairs, our experts seamlessly restore your boat's hull to factory condition with undetectable blending.",
      bullets: [
        "Color Matching – Undetectable gelcoat blending.",
        "Structural Reinforcement – Stronger than original."
      ],
      image: "/apexmandmboatpic2.jpg",
      align: "left"
    }
  ];

  return (
    <section className="bg-dark-surface py-16 lg:py-24 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 relative">
          <div className="relative inline-block w-full">
            {/* Faint Background Text Centered with Title */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 w-full flex justify-center">
              <h2 
                className="text-[18vw] md:text-[12vw] font-serif font-black uppercase whitespace-nowrap tracking-widest italic"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}
              >
                SERVICES
              </h2>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <h4 className="flex justify-center items-center gap-2 text-white/50 font-serif text-xs md:text-sm tracking-[0.3em] uppercase mb-4"><span className="text-primary font-black">///</span> How Can We Serve You?</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">OUR <span className="text-primary">SERVICES</span></h2>
            </div>
          </div>
          <Divider className="justify-center mb-8 relative z-10" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed relative z-10">
            We offer expert services to protect and enhance your lifestyle, including structural marine repair, ceramic coatings, and professional detailing. Safeguard your investment while improving its performance and long-term durability.
          </p>
        </div>
      </div>

      <div className="w-full overflow-hidden relative group/carousel pb-8">
        
        {/* Scroll Hint (Mobile) */}
        <div className="flex justify-end px-[5vw] md:hidden mb-2 relative z-10">
          <span className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-1">
            SCROLL <ChevronRight size={14} className="text-primary/70" />
          </span>
        </div>

        {/* Native CSS Scroll Snap Container */}
        <div 
          id="services-scroll-container"
          className="flex overflow-x-auto snap-x snap-mandatory px-[5vw] md:px-[10vw] lg:px-[12.5vw] gap-6 md:gap-8 pt-4 pb-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={(e) => {
            const container = e.currentTarget;
            const scrollLeft = container.scrollLeft;
            const itemWidth = container.scrollWidth / services.length;
            const newIndex = Math.round(scrollLeft / itemWidth);
            if (newIndex !== currentIndex && newIndex >= 0 && newIndex < services.length) {
              setCurrentIndex(newIndex);
            }
          }}
        >
          {/* Hide Webkit scrollbar via inline style block for this container */}
          <style dangerouslySetInnerHTML={{__html: `
            #services-scroll-container::-webkit-scrollbar { display: none; }
          `}} />

            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={`service-slide-${index}`}
                className="w-[90vw] md:w-[80vw] lg:w-[75vw] max-w-[1400px] flex-shrink-0 snap-center"
              >
                <div className="relative group/card h-full">
              
              {/* Cyberpunk corner accents */}
              <div className="absolute -top-1 -left-1 w-12 h-12 border-t-[3px] border-l-[3px] border-primary z-20 pointer-events-none transition-transform duration-500 group-hover/card:-translate-x-2 group-hover/card:-translate-y-2"></div>
              <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-[3px] border-r-[3px] border-primary z-20 pointer-events-none transition-transform duration-500 group-hover/card:translate-x-2 group-hover/card:translate-y-2"></div>

              {/* Numeric Badge */}
              <div className="absolute top-0 right-0 bg-primary border-b-[2px] border-l-[2px] border-primary px-6 py-3 z-30 pointer-events-none shadow-lg">
                <span className="text-dark-bg font-black text-2xl tracking-widest italic">0{index + 1}</span>
              </div>

              <div 
                className={`flex flex-col lg:flex-row items-stretch ${service.align === 'right' ? 'lg:flex-row-reverse' : ''} bg-dark-bg/80 border border-white/10 rounded-none overflow-hidden backdrop-blur-sm relative h-full`}
                style={{ clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))' }}
              >
                {/* Subtle Inner Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none z-0"></div>
                <ParallaxBackground isHoneycomb speed={0.1} />
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative min-h-[200px] md:min-h-[250px] lg:min-h-[350px] z-10">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                />
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 p-6 md:p-8 xl:p-12 flex flex-col justify-center relative z-10">
                <h4 className="flex items-center gap-2 text-white/50 font-serif text-[10px] md:text-xs tracking-[0.2em] uppercase mb-2 md:mb-3"><span className="text-primary font-black">/</span> {service.subtitle}</h4>
                <h3 className="font-serif text-2xl md:text-4xl text-white mb-3 md:mb-6 uppercase">{service.title}</h3>
                
                <h5 className="text-primary font-semibold mb-2 md:mb-4 tracking-wide border-t border-dark-border pt-3 mt-4 md:pt-4 md:mt-6 uppercase text-xs md:text-sm">
                  {service.badge}
                </h5>
                
                <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-8 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 md:space-y-4 mb-6 md:mb-10">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 md:gap-3">
                      <CheckSquare className="text-primary w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5 md:mt-1" />
                      <span className="text-gray-300 text-xs md:text-base">
                        <strong className="text-white font-medium">{bullet.split(' –')[0]}</strong> 
                        {bullet.includes(' –') && <span className="text-gray-400"> – {bullet.split(' –')[1]}</span>}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link to={service.path} className="inline-block bg-primary hover:bg-primary-hover text-white px-6 py-2 md:px-8 md:py-3 rounded-none btn-swipe text-[10px] md:text-xs font-extrabold tracking-widest transition-all uppercase">
                    LEARN MORE
                  </Link>
                </div>
              </div>

              </div>
                </div>
              </div>
            ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-dark-bg/80 hover:bg-primary text-white p-3 md:p-4 backdrop-blur-md border border-white/10 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 hidden md:block"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-dark-bg/80 hover:bg-primary text-white p-3 md:p-4 backdrop-blur-md border border-white/10 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 hidden md:block"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 md:mt-8 gap-3 relative z-10">
        {services.map((_, index) => (
          <button 
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 transition-all duration-500 rounded-none ${
              index === currentIndex ? 'w-16 bg-primary' : 'w-4 bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={`Go to service ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
