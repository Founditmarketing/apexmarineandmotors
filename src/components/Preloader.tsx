import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0: Initial render, middle layer is visible instantly (via CSS).
    // Stage 1: Front layer (Text) slides up and fades in.
    const t1 = setTimeout(() => setStage(1), 600);
    
    // Stage 2: Back layer (Outline) fades in slowly.
    const t2 = setTimeout(() => setStage(2), 1800);
    
    // Stage 3: Hold the completed logo, then begin fading out the entire preloader.
    const t3 = setTimeout(() => setStage(3), 4000);

    // Stage 4: Trigger onComplete so App unmounts the preloader and shows main content.
    const t4 = setTimeout(() => {
      onComplete();
    }, 5200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-[1200ms] ease-in-out ${
        stage >= 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="relative w-[180px] sm:w-[220px] md:w-[280px] aspect-square flex items-center justify-center">
          
          {/* Back Layer: Outline */}
          <img 
            src="/loadscreen/apexlogooutline.png" 
            alt="Apex Logo Outline" 
            className={`absolute inset-0 w-full h-full object-contain transition-all duration-[2000ms] ease-in-out z-0 ${
              stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />

          {/* Middle Layer: Image (Centered, visible immediately) */}
          <img 
            src="/loadscreen/apexlogoimage.png" 
            alt="Apex Logo Core" 
            className="absolute inset-0 w-full h-full object-contain z-10 opacity-100"
          />

          {/* Front Layer: Text */}
          <img 
            src="/loadscreen/apexlogotext.png" 
            alt="Apex Logo Text" 
            className={`absolute inset-0 w-full h-full object-contain transition-all duration-[1500ms] ease-out z-20 ${
              stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          />

        </div>

        {/* Short punchy loading message */}
        <div className={`-mt-4 md:-mt-8 transition-opacity duration-1000 ${stage >= 1 ? 'opacity-100' : 'opacity-0'} relative z-30`}>
          <p className="text-gray-400 text-[10px] md:text-xs font-serif uppercase tracking-[0.3em] animate-pulse">
            LOADING
          </p>
        </div>
      </div>
    </div>
  );
}
