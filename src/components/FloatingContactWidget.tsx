import { useState, useEffect } from 'react';
import { MessagesSquare, X, Phone, MapPin } from 'lucide-react';

export default function FloatingContactWidget({ isLoaded = true }: { isLoaded?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let isAtFooter = false;
      const footerElement = document.querySelector('footer');
      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        // Hide if the top of the footer is visible in the viewport
        isAtFooter = footerRect.top <= window.innerHeight;
      }
      
      const isPastHero = window.scrollY > window.innerHeight * 0.8;

      if (isPastHero && !isAtFooter) {
        setIsVisible(true);
      } else {
        // Only hide if the modal isn't open
        if (!isOpen) {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Message sent! We will contact you shortly.');
    setIsOpen(false);
  };

  if (!isLoaded) return null;

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] md:hidden animate-in fade-in duration-300" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Widget Container with visibility transition */}
      <div className={`fixed z-[100] bottom-0 left-0 right-0 md:bottom-8 md:right-8 md:left-auto md:w-auto flex flex-col items-end transition-all duration-500 ease-out ${isVisible || isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'}`}>
        
        {/* The Modal Window */}
        {isOpen && (
          <div className="absolute bottom-full mb-0 md:mb-4 right-0 w-full md:w-[450px] bg-black/75 backdrop-blur-md border-t md:border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.9)] flex flex-col origin-bottom animate-in fade-in slide-in-from-bottom-16 duration-500 ease-out z-[100]">
            
            {/* Header */}
            <div className="flex justify-between items-center p-4 md:p-5 border-b border-white/5 bg-black/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5"></div>
              <h3 className="text-white font-serif uppercase tracking-[0.2em] text-sm font-bold flex items-center gap-3 relative z-10">
                <span className="text-primary font-black">///</span> CONTACT HQ
              </h3>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-gray-400 hover:text-white bg-white/5 hover:bg-primary transition-colors p-2 relative z-10"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-4 md:p-6 overflow-y-auto max-h-[85vh] md:max-h-[650px] relative">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
              
              <div className="relative z-10">
                {/* Top Half: Call Now & Address */}
                <div className="mb-6 md:mb-8 text-center flex flex-col items-center">
                  <a 
                    href="tel:5102207218" 
                    className="w-full bg-primary hover:bg-primary-hover text-white transition-all py-5 flex justify-center items-center gap-3 font-bold text-xl tracking-[0.2em] shadow-[0_0_30px_rgba(255,102,0,0.2)] hover:shadow-[0_0_50px_rgba(255,102,0,0.5)] mb-5 uppercase btn-swipe group hidden md:flex"
                  >
                    <Phone size={22} className="group-hover:rotate-12 transition-transform" />
                    CALL NOW
                  </a>
                  <div className="flex items-start gap-3 text-gray-300 text-sm justify-center bg-white/5 border border-white/5 py-4 px-6 w-full">
                    <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                    <p className="font-light tracking-wide text-left uppercase text-xs leading-relaxed">
                      11 West 23rd Street<br />Kenner, LA 70062
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[10px] md:text-xs font-bold tracking-widest uppercase text-white/30 border-t border-white/5 pt-6 md:pt-8 w-full justify-center mb-6">
                  <span className="text-primary">///</span> DIRECT MESSAGE <span className="text-primary">///</span>
                </div>

                {/* Bottom Half: Contact Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:gap-4">
                  <input required type="text" placeholder="YOUR NAME" className="w-full bg-white/5 border border-white/20 focus:border-primary text-white px-4 py-3 md:py-4 outline-none transition-all placeholder:text-gray-400 text-[10px] md:text-xs tracking-widest uppercase focus:bg-white/10" />
                  <input required type="tel" placeholder="PHONE NUMBER" className="w-full bg-white/5 border border-white/20 focus:border-primary text-white px-4 py-3 md:py-4 outline-none transition-all placeholder:text-gray-400 text-[10px] md:text-xs tracking-widest uppercase focus:bg-white/10" />
                  <input required type="email" placeholder="EMAIL ADDRESS" className="w-full bg-white/5 border border-white/20 focus:border-primary text-white px-4 py-3 md:py-4 outline-none transition-all placeholder:text-gray-400 text-[10px] md:text-xs tracking-widest uppercase focus:bg-white/10" />
                  
                  <div className="relative">
                    <select required className="w-full bg-white/5 border border-white/20 focus:border-primary text-white px-4 py-3 md:py-4 outline-none transition-all text-[10px] md:text-xs tracking-widest uppercase appearance-none focus:bg-white/10 cursor-pointer">
                      <option value="" disabled selected className="text-gray-400 bg-dark-bg">SELECT A SERVICE...</option>
                      <option value="Consignment Sales" className="bg-dark-bg">CONSIGNMENT SALES</option>
                      <option value="Ceramic Coatings" className="bg-dark-bg">CERAMIC COATINGS</option>
                      <option value="Paint Protection Film" className="bg-dark-bg">PAINT PROTECTION FILM</option>
                      <option value="Detailing" className="bg-dark-bg">DETAILING</option>
                      <option value="Fiberglass Repair" className="bg-dark-bg">FIBERGLASS REPAIR</option>
                      <option value="Marine Flooring" className="bg-dark-bg">MARINE FLOORING</option>
                      <option value="Other" className="bg-dark-bg">OTHER INQUIRY</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                  
                  <button type="submit" className="w-full bg-white hover:bg-primary text-black hover:text-white transition-all py-4 md:py-5 font-bold text-xs md:text-sm tracking-[0.2em] uppercase mt-2 md:mt-4 btn-swipe shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,102,0,0.4)]">
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* The Trigger Button / Mobile Sticky Footer Container */}
        <div className={`w-full md:w-auto flex items-center ${isOpen ? 'p-0 md:p-0' : 'p-3 gap-3 md:p-0 md:gap-0'} ${isOpen ? 'bg-primary md:bg-transparent border-t-0' : 'bg-black/95 md:bg-transparent border-t border-white/5 md:border-none'} md:backdrop-blur-none backdrop-blur-xl shadow-[0_-10px_40px_rgba(0,0,0,0.8)] md:shadow-none transition-all relative z-[101]`}>
          
          {/* Mobile Call Now Button (Hidden on Desktop and when modal is open) */}
          {!isOpen && (
            <a 
              href="tel:5102207218" 
              className="flex-1 h-14 bg-dark-bg/80 border border-primary/10 flex items-center justify-center gap-4 text-white uppercase font-bold tracking-[0.2em] text-xs transition-all md:hidden relative overflow-hidden group"
            >
              <span className="relative z-10 text-primary">CALL NOW</span>
              {/* Corner effects */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/50"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/50"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/20"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/20"></div>
            </a>
          )}

          {/* The Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`${isOpen ? 'w-full md:w-16 h-16 md:h-16' : 'w-16 md:w-16 h-14 md:h-16'} flex items-center justify-center font-bold tracking-[0.2em] transition-all group md:border relative z-[101] ${isOpen ? 'text-black md:text-white md:bg-black/80 md:backdrop-blur-xl md:border-white/10 md:hover:border-primary/50 md:shadow-[0_0_30px_rgba(0,0,0,0.8)]' : 'bg-dark-bg/80 border border-primary/10 md:bg-black/80 md:backdrop-blur-xl text-white md:border-white/5 md:hover:border-primary/50'}`}
          >
            {/* Corner effects */}
            <div className={`absolute ${isOpen ? '-top-1 -left-1 hidden md:block' : 'top-0 left-0 md:-top-1 md:-left-1'} w-2 h-2 md:w-4 md:h-4 border-t border-l md:border-t-2 md:border-l-2 border-primary/50 z-20 pointer-events-none transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 ${isOpen ? '' : 'md:border-t-2 md:border-l-2'}`}></div>
            <div className={`absolute ${isOpen ? '-bottom-1 -right-1 hidden md:block' : 'bottom-0 right-0 md:-bottom-1 md:-right-1'} w-2 h-2 md:w-4 md:h-4 border-b border-r md:border-b-2 md:border-r-2 border-primary/50 z-20 pointer-events-none transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 ${isOpen ? '' : 'md:border-b-2 md:border-r-2'}`}></div>
            {!isOpen && (
              <>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/20 md:hidden"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/20 md:hidden"></div>
              </>
            )}

            {/* Animated background swipe effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out hidden md:block"></div>
            </div>
            
            <div className="relative z-10 flex items-center gap-3">
              {isOpen ? (
                <X size={24} className={`w-5 h-5 md:w-6 md:h-6 ${isOpen ? 'text-black md:text-white' : ''}`} />
              ) : (
                <div className="w-8 h-8 md:w-auto md:h-auto flex items-center justify-center relative z-10">
                  <MessagesSquare size={18} className="md:w-6 md:h-6 text-primary md:text-white group-hover:scale-110 transition-transform" />
                </div>
              )}
              <span className={`uppercase text-xs mt-0.5 md:hidden ${isOpen ? 'text-black font-black flex' : 'hidden'}`}>
                CLOSE COMMLINK
              </span>
            </div>
          </button>
        </div>

      </div>
    </>
  );
}
