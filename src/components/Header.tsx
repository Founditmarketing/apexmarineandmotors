import { Phone, Menu, X, Facebook, Instagram, Youtube, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ParallaxBackground from './ParallaxBackground';

export default function Header({ isLoaded = true }: { isLoaded?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Prevent body scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const links = [
    "BOATS INVENTORY", 
    "VEHICLES INVENTORY", 
    "POWERSPORTS", 
    "BOAT DETAILING", 
    "CERAMIC COATING", 
    "FIBERGLASS REPAIR"
  ];

  return (
    <header className="sticky top-0 w-full z-[120] bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-[120] bg-black">
        <div className={`flex justify-between items-center h-20 md:h-24 transition-all duration-1000 ease-out delay-100 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src="/apexmarinemotorslogo.webp" alt="Apex Marine & Motors Logo" className="h-12 md:h-16 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex space-x-6 items-center">
            {/* About Dropdown */}
            <div className="relative group py-6 -my-6">
              <button className="text-xs font-semibold hover:text-primary transition-colors text-gray-300 tracking-wider flex items-center gap-1 cursor-default">
                ABOUT
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-0 w-64 bg-black/95 backdrop-blur-md border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col z-[60] shadow-2xl">
                <Link to="/about" className="px-4 py-3 text-xs font-semibold hover:bg-primary/20 hover:text-primary text-gray-300 transition-colors border-b border-white/5">OUR COMPANY</Link>
                <Link to="/gallery" className="px-4 py-3 text-xs font-semibold hover:bg-primary/20 hover:text-primary text-gray-300 transition-colors">GALLERY</Link>
              </div>
            </div>

            <div className="h-4 w-px bg-white/10"></div>
            
            {/* Inventory Dropdown */}
            <div className="relative group py-6 -my-6">
              <button className="text-xs font-semibold hover:text-primary transition-colors text-gray-300 tracking-wider flex items-center gap-1 cursor-default">
                INVENTORY
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-0 w-64 bg-black/95 backdrop-blur-md border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col z-[60] shadow-2xl">
                <Link to="/inventory?category=all" className="px-4 py-3 text-xs font-semibold hover:bg-primary/20 hover:text-primary text-gray-300 transition-colors border-b border-white/5">ALL</Link>
                <Link to="/inventory?category=boats" className="px-4 py-3 text-xs font-semibold hover:bg-primary/20 hover:text-primary text-gray-300 transition-colors border-b border-white/5">BOATS</Link>
                <Link to="/inventory?category=vehicles" className="px-4 py-3 text-xs font-semibold hover:bg-primary/20 hover:text-primary text-gray-300 transition-colors border-b border-white/5">VEHICLES</Link>
                <Link to="/inventory?category=powersports" className="px-4 py-3 text-xs font-semibold hover:bg-primary/20 hover:text-primary text-gray-300 transition-colors">POWERSPORTS</Link>
              </div>
            </div>

            <div className="h-4 w-px bg-white/10"></div>

            {/* Services Dropdown */}
            <div className="relative group py-6 -my-6">
              <button className="text-xs font-semibold hover:text-primary transition-colors text-gray-300 tracking-wider flex items-center gap-1 cursor-default">
                OUR SERVICES
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-0 w-64 bg-black/95 backdrop-blur-md border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col z-[60] shadow-2xl">
                <Link to="/consignment-sales" className="px-4 py-3 text-xs font-semibold hover:bg-primary/20 hover:text-primary text-gray-300 transition-colors border-b border-white/5">CONSIGNMENT SALES</Link>
                <Link to="/ceramic-coatings" className="px-4 py-3 text-xs font-semibold hover:bg-primary/20 hover:text-primary text-gray-300 transition-colors border-b border-white/5">CERAMIC COATINGS</Link>
                <Link to="/paint-protection-film" className="px-4 py-3 text-xs font-semibold hover:bg-primary/20 hover:text-primary text-gray-300 transition-colors border-b border-white/5">PAINT PROTECTION FILM</Link>
                <Link to="/detailing" className="px-4 py-3 text-xs font-semibold hover:bg-primary/20 hover:text-primary text-gray-300 transition-colors border-b border-white/5">DETAILING</Link>
                <Link to="/fiberglass-repair" className="px-4 py-3 text-xs font-semibold hover:bg-primary/20 hover:text-primary text-gray-300 transition-colors border-b border-white/5">FIBERGLASS REPAIR</Link>
                <Link to="/marine-flooring" className="px-4 py-3 text-xs font-semibold hover:bg-primary/20 hover:text-primary text-gray-300 transition-colors">MARINE FLOORING</Link>
              </div>
            </div>

            <div className="h-4 w-px bg-white/10"></div>

            <a href="https://vantagerecreationalfinance.com/Home/Apply/581" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold hover:text-primary transition-colors text-gray-300 tracking-wider">
              FINANCING
            </a>

            <div className="h-4 w-px bg-white/10"></div>

            <Link to="/contact" className="text-xs font-semibold hover:text-primary transition-colors text-gray-300 tracking-wider">
              CONTACT US
            </Link>
          </nav>

          {/* Socials & CTA Button */}
          <div className="hidden xl:flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-white/20 pr-6">
                <a href="https://www.facebook.com/people/Apex-Marine-Motors/61573215550726" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:scale-110 transition-all">
                  <Facebook size={18} fill="currentColor" />
                </a>
                <a href="https://www.instagram.com/apexmarineandmotors" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:scale-110 transition-all">
                  <Instagram size={18} />
                </a>
                <a href="https://www.tiktok.com/@apexmarineandmotors" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:scale-110 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M448 209.91a210.06 210.06 0 0 1 -122.77-39.25v178.72A162.55 162.55 0 1 1 162.55 186.83V270a79 79 0 1 0 79 79V10h88.66A123.69 123.69 0 0 0 448 133.72Z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@Apexmarineandmotors" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:scale-110 transition-all">
                  <Youtube size={18} />
                </a>
            </div>
            <Link to="/contact" className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-none btn-swipe text-sm font-bold tracking-wide transition-all flex items-center gap-2">
              <Phone size={16} />
              (510) 220-7218
            </Link>
          </div>

          {/* Mobile menu button & Socials */}
          <div className="xl:hidden flex items-center gap-4">
            <div className="flex items-center gap-3 border-r border-white/20 pr-4">
                <a href="https://www.facebook.com/people/Apex-Marine-Motors/61573215550726" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <Facebook size={20} fill="currentColor" />
                </a>
                <a href="https://www.instagram.com/apexmarineandmotors" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://www.tiktok.com/@apexmarineandmotors" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M448 209.91a210.06 210.06 0 0 1 -122.77-39.25v178.72A162.55 162.55 0 1 1 162.55 186.83V270a79 79 0 1 0 79 79V10h88.66A123.69 123.69 0 0 0 448 133.72Z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@Apexmarineandmotors" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <Youtube size={20} />
                </a>
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div 
        className={`fixed inset-0 z-[130] xl:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Dark Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Sliding Panel */}
        <div 
          className={`absolute inset-y-0 right-0 w-full sm:w-[400px] bg-dark-bg border-l border-white/10 shadow-2xl flex flex-col transform transition-transform duration-500 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ParallaxBackground isHoneycomb speed={0} />
          <div className="absolute inset-0 bg-dark-bg/60 pointer-events-none z-0"></div>

          {/* Inner Header for Panel */}
          <div className="flex justify-between items-center h-20 px-4 sm:px-6 border-b border-white/5 relative z-10">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img src="/apexmarinemotorslogo.webp" alt="Apex" className="h-10 w-auto" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white focus:outline-none bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex-1 overflow-y-auto py-8 px-6 sm:px-8 space-y-6 relative z-10">
            <h4 className="flex items-center gap-2 text-white/30 font-serif text-[10px] tracking-[0.3em] uppercase mb-4">
              <span className="text-primary font-black">///</span> Menu
            </h4>
            <div className="flex flex-col divide-y divide-white/5">
              <div className="py-5 flex flex-col">
                <button 
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="text-2xl font-bold text-white font-serif uppercase tracking-wider inline-block">
                    ABOUT
                  </span>
                  <ChevronDown className={`text-white transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`flex flex-col pl-6 border-l border-white/10 ml-2 overflow-hidden transition-all duration-300 ${isAboutOpen ? 'max-h-[200px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                  <div className="flex flex-col space-y-3">
                    <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-400 hover:text-primary font-serif uppercase tracking-wider transition-colors w-full">OUR COMPANY</Link>
                    <Link to="/gallery" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-400 hover:text-primary font-serif uppercase tracking-wider transition-colors w-full">GALLERY</Link>
                  </div>
                </div>
              </div>
              
              <div className="py-5 flex flex-col">
                <button 
                  onClick={() => setIsInventoryOpen(!isInventoryOpen)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="text-2xl font-bold text-white font-serif uppercase tracking-wider inline-block">
                    INVENTORY
                  </span>
                  <ChevronDown className={`text-white transition-transform duration-300 ${isInventoryOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`flex flex-col pl-6 border-l border-white/10 ml-2 overflow-hidden transition-all duration-300 ${isInventoryOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                  <div className="flex flex-col space-y-3">
                    <Link to="/inventory?category=all" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-400 hover:text-primary font-serif uppercase tracking-wider transition-colors w-full">ALL</Link>
                    <Link to="/inventory?category=boats" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-400 hover:text-primary font-serif uppercase tracking-wider transition-colors w-full">BOATS</Link>
                    <Link to="/inventory?category=vehicles" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-400 hover:text-primary font-serif uppercase tracking-wider transition-colors w-full">VEHICLES</Link>
                    <Link to="/inventory?category=powersports" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-400 hover:text-primary font-serif uppercase tracking-wider transition-colors w-full">POWERSPORTS</Link>
                  </div>
                </div>
              </div>

              <div className="py-5 flex flex-col">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="text-2xl font-bold text-white font-serif uppercase tracking-wider inline-block">
                    OUR SERVICES
                  </span>
                  <ChevronDown className={`text-white transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`flex flex-col pl-6 border-l border-white/10 ml-2 overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                  <div className="flex flex-col space-y-3">
                    <Link to="/consignment-sales" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-400 hover:text-primary font-serif uppercase tracking-wider transition-colors w-full">CONSIGNMENT SALES</Link>
                    <Link to="/ceramic-coatings" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-400 hover:text-primary font-serif uppercase tracking-wider transition-colors w-full">CERAMIC COATINGS</Link>
                    <Link to="/paint-protection-film" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-400 hover:text-primary font-serif uppercase tracking-wider transition-colors w-full">PAINT PROTECTION FILM</Link>
                    <Link to="/detailing" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-400 hover:text-primary font-serif uppercase tracking-wider transition-colors w-full">DETAILING</Link>
                    <Link to="/fiberglass-repair" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-400 hover:text-primary font-serif uppercase tracking-wider transition-colors w-full">FIBERGLASS REPAIR</Link>
                    <Link to="/marine-flooring" onClick={() => setIsOpen(false)} className="text-lg font-bold text-gray-400 hover:text-primary font-serif uppercase tracking-wider transition-colors w-full">MARINE FLOORING</Link>
                  </div>
                </div>
              </div>

              <div className="py-5">
                <a
                  href="https://vantagerecreationalfinance.com/Home/Apply/581"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-white hover:text-primary font-serif uppercase tracking-wider transition-colors inline-block w-full"
                >
                  FINANCING
                </a>
              </div>

              <div className="py-5">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-white hover:text-primary font-serif uppercase tracking-wider transition-colors inline-block w-full"
                >
                  CONTACT US
                </Link>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/5">
              <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-primary hover:bg-primary-hover text-white px-6 py-4 rounded-none btn-swipe font-bold tracking-widest transition-all flex justify-center items-center gap-2 w-full uppercase text-sm">
                <Phone size={18} /> Call (510) 220-7218
              </Link>
            </div>
          </div>

          {/* Footer Socials */}
          <div className="p-6 sm:p-8 bg-black/40 border-t border-white/5 relative z-10">
            <h4 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Follow Us</h4>
            <div className="flex gap-4">
                <a href="https://www.facebook.com/people/Apex-Marine-Motors/61573215550726" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                  <Facebook size={18} fill="currentColor" />
                </a>
                <a href="https://www.instagram.com/apexmarineandmotors" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                  <Instagram size={18} />
                </a>
                <a href="https://www.tiktok.com/@apexmarineandmotors" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M448 209.91a210.06 210.06 0 0 1 -122.77-39.25v178.72A162.55 162.55 0 1 1 162.55 186.83V270a79 79 0 1 0 79 79V10h88.66A123.69 123.69 0 0 0 448 133.72Z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@Apexmarineandmotors" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                  <Youtube size={18} />
                </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
