import { ShieldCheck, Award, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Divider from './Divider';
import ParallaxBackground from './ParallaxBackground';

export default function About() {
  return (
    <section id="about-us" className="bg-dark-bg flex flex-col lg:flex-row relative overflow-hidden">
      <ParallaxBackground isHoneycomb speed={0.1} />
      {/* Black Top & Bottom Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-[1]"></div>
      
      {/* Content Side */}
      <div 
        className="w-full lg:w-1/2 flex justify-center lg:justify-end py-12 lg:py-16 px-6 sm:px-12 lg:px-16 xl:px-24 relative"
      >
        <div className="w-full max-w-[650px] flex flex-col justify-center relative z-10">
          <h4 className="flex items-center gap-2 text-white/50 font-serif text-xs md:text-sm tracking-[0.3em] uppercase mb-3">
            <span className="text-primary font-black">///</span> Apex Marine & Motors LLC
          </h4>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white leading-tight uppercase">
            STRESS-FREE CONSIGNMENT, <span className="text-primary">EXCEPTIONAL RESULTS</span>
          </h2>
          
          <Divider className="justify-start mb-5" />

          <p className="text-gray-300 mb-6 leading-relaxed text-xs md:text-sm font-light">
            Whether selling a boat or vehicle, our team manages the entire process with professionalism—ensuring your asset gets the value it deserves.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex gap-4 items-start">
              <Award className="text-primary w-5 h-5 shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">
                <span className="text-white font-bold mr-2">Top Certified Installers:</span>
                <span className="text-gray-400 font-light">Premium marine and super-car coating specialists.</span>
              </p>
            </div>
            
            <div className="flex gap-4 items-start">
              <ShieldCheck className="text-primary w-5 h-5 shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">
                <span className="text-white font-bold mr-2">Trusted Products:</span>
                <span className="text-gray-400 font-light">Industry-leading ceramic & fiberglass compounds.</span>
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <ThumbsUp className="text-primary w-5 h-5 shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">
                <span className="text-white font-bold mr-2">Customer Focus:</span>
                <span className="text-gray-400 font-light">Reliable white-glove service, satisfaction guaranteed.</span>
              </p>
            </div>
          </div>

          <div>
            <Link to="/contact" className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-none btn-swipe text-xs font-extrabold tracking-widest uppercase transition-all">
              START MY QUOTE
            </Link>
          </div>
        </div>
      </div>

      {/* Image Side */}
      <div 
        className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-auto overflow-hidden z-10 lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0%_100%)]"
      >
        <img 
          src="/newpics/apexmandmserviceillustration.webp" 
          alt="Service Illustration" 
          className="absolute inset-0 w-full h-full object-cover object-center" 
        />
      </div>
    </section>
  );
}
