import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxBackgroundProps {
  image?: string;
  isHoneycomb?: boolean;
  className?: string;
  speed?: number;
}

export default function ParallaxBackground({ 
  image, 
  isHoneycomb, 
  className = "",
  speed = 0.15
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      <motion.div 
        style={image ? { y, backgroundImage: `url('${image}')` } : { y }}
        className={`absolute inset-x-0 w-full h-[150%] -top-[25%] ${isHoneycomb ? 'bg-honeycomb' : 'bg-cover bg-center'} ${className}`}
      />
    </div>
  );
}
