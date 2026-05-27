import { BadgeCheck, Target, Shield, Zap, Wrench, Users } from 'lucide-react';

import Divider from './Divider';
import ParallaxBackground from './ParallaxBackground';

export default function WhyChoose() {
  const pillars = [
    {
      icon: <BadgeCheck className="w-6 h-6 lg:w-8 lg:h-8 text-primary shrink-0" />,
      title: "CERTIFIED EXPERTS",
      desc: "Skilled technicians with extensive marine and automotive detailing experience."
    },
    {
      icon: <Target className="w-6 h-6 lg:w-8 lg:h-8 text-primary shrink-0" />,
      title: "PRECISION WORK",
      desc: "Detail-oriented services for flawless finishes, every single time."
    },
    {
      icon: <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-primary shrink-0" />,
      title: "LASTING PROTECTION",
      desc: "Ensures durability against salt, UV rays, and road debris."
    },
    {
      icon: <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-primary shrink-0" />,
      title: "PREMIUM PRODUCTS",
      desc: "Trusted industry-leading coatings and restorative compounds."
    },
    {
      icon: <Wrench className="w-6 h-6 lg:w-8 lg:h-8 text-primary shrink-0" />,
      title: "STRUCTURAL REPAIR",
      desc: "Advanced fiberglass and gelcoat mastery for flawless reconstructions."
    },
    {
      icon: <Users className="w-6 h-6 lg:w-8 lg:h-8 text-primary shrink-0" />,
      title: "CUSTOMER SATISFACTION",
      desc: "Proven record of exceeding high-end customer expectations."
    }
  ];

  return (
    <section className="bg-dark-bg py-10 lg:py-24 relative scroll-mt-24 overflow-hidden">
      <ParallaxBackground isHoneycomb speed={0.1} />
      {/* Black Top & Bottom Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-[1]"></div>
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 lg:mb-6 uppercase">
            WHY <span className="text-primary">CHOOSE APEX</span> FOR EXCEPTIONAL CARE?
          </h2>
          <Divider className="justify-center mb-4 lg:mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-xs md:text-lg">
            Apex Marine & Motors specializes in premium protection and sales. We deliver professional services using trusted products, ensuring long-lasting shine, structural integrity, and satisfaction for every customer.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-2 lg:gap-0">
          
          {/* Left Pillars */}
          <div className="w-full lg:w-[28%] flex flex-col gap-2 lg:gap-4">
            {pillars.slice(0, 3).map((item, i) => (
              <div 
                key={i} 
                className="group relative bg-dark-surface/80 border border-dark-border p-3 lg:p-6 rounded-none transform transition hover:-translate-y-1 hover:border-primary/50 flex gap-3 lg:gap-4 items-center lg:items-start"
              >
                {/* Cyberpunk corner accents for outside corners */}
                {i === 0 && (
                  <div className="absolute -top-1 -left-1 w-6 h-6 border-t-[3px] border-l-[3px] border-primary z-20 pointer-events-none transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 hidden lg:block"></div>
                )}
                {i === 2 && (
                  <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-[3px] border-l-[3px] border-primary z-20 pointer-events-none transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1 hidden lg:block"></div>
                )}
                
                <div className="shrink-0 relative z-10">{item.icon}</div>
                <div className="relative z-10">
                  <h4 className="text-white font-bold font-serif mb-0.5 lg:mb-2 tracking-wide uppercase text-xs lg:text-base">{item.title}</h4>
                  <p className="text-gray-400 text-[10px] lg:text-sm leading-snug lg:leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Central Image (Hidden on mobile) */}
          <div className="w-full lg:w-[44%] relative z-10 py-8 lg:py-0 hidden lg:block">
            <div className="relative rounded-none overflow-hidden border border-primary/20 h-[300px] lg:h-[500px] w-full">
              <img 
                src="/apexmandmboatpic4.jpg" 
                alt="Why Choose Apex" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 pb-8 px-6 via-transparent flex items-end justify-center">
                <div className="text-center">
                   <div className="w-24 h-24 mx-auto mb-2 flex items-center justify-center">
                     <img src="/apexmarinemotorslogo.webp" alt="Apex Marine & Motors Logo" className="w-full h-full object-contain" />
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Pillars */}
          <div className="w-full lg:w-[28%] flex flex-col gap-2 lg:gap-4">
            {pillars.slice(3, 6).map((item, i) => (
              <div 
                key={i} 
                className="group relative bg-dark-surface/80 border border-dark-border p-3 lg:p-6 rounded-none transform transition hover:-translate-y-1 hover:border-primary/50 flex gap-3 lg:gap-4 items-center lg:items-start"
              >
                {/* Cyberpunk corner accents for outside corners */}
                {i === 0 && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 border-t-[3px] border-r-[3px] border-primary z-20 pointer-events-none transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 hidden lg:block"></div>
                )}
                {i === 2 && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-[3px] border-r-[3px] border-primary z-20 pointer-events-none transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1 hidden lg:block"></div>
                )}
                
                <div className="shrink-0 relative z-10">{item.icon}</div>
                <div className="relative z-10">
                   <h4 className="text-white font-bold font-serif mb-0.5 lg:mb-2 tracking-wide uppercase text-xs lg:text-base">{item.title}</h4>
                   <p className="text-gray-400 text-[10px] lg:text-sm leading-snug lg:leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
