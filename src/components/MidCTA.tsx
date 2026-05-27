import { Link } from 'react-router-dom';
import Divider from './Divider';
import ParallaxBackground from './ParallaxBackground';

export default function MidCTA() {
  return (
    <section className="relative py-16 lg:py-32 overflow-hidden bg-black">
      {/* Background Image Parallax */}
      <ParallaxBackground image="/apexmandmcarpic1.jpg" className="opacity-40 grayscale" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-black/60 to-black pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-wider font-serif">
          PROTECT YOUR <span className="text-primary">INVESTMENT</span> TODAY!
        </h2>
        
        <Divider className="justify-center mb-8" />

        <p className="text-base md:text-xl text-gray-300 font-light mb-12 leading-relaxed">
          Apex Marine & Motors offers top-tier ceramic coatings, detailing, fiberglass repair, and curated sales. Transform your car or boat with our expert care and advanced solutions. Contact us today for a personalized quote.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/contact" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-none btn-swipe font-bold tracking-wide transition-all">
            START MY QUOTE
          </Link>
          <a href="tel:5102207218" className="border border-white/30 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-none btn-swipe-outline font-bold tracking-wide transition-all">
            CALL US: (510) 220-7218
          </a>
        </div>
      </div>
    </section>
  );
}
