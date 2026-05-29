import { Star } from 'lucide-react';
import React, { useRef, useState } from 'react';
import Divider from './Divider';
import ParallaxBackground from './ParallaxBackground';

export default function Reviews() {
  const reviews = [
    {
      author: "Andrew An Christy Leglue",
      date: "May 7",
      platform: "facebook",
      avatar: "AL",
      text: "They really good people stand behind their word and they make everything so easy so nice and helpful makes you want to buy something I LOVE MY NEW BOAT FROM THEM",
      rating: 5
    },
    {
      author: "James Caulfield",
      date: "March 22",
      platform: "facebook",
      avatar: "JC",
      text: "Apex Marine sold my boat. I didn't have any issues. Angelo was awesome and I would recommend them to sell. Your boat or vehicle and I was unable to bring my boat to their yard, and they actually came and picked it up for me",
      rating: 5
    },
    {
      author: "Philip Deborah Spezio",
      date: "February 28",
      platform: "facebook",
      avatar: "PS",
      text: "I had my 2008 Champions bay boat ceramic coated inside and out. It looked better than the day I bought it. Angelo did a amazing job and it's very patient and accommodating. I was very impressed with the professionalism and his attention to meticulous detail in coating my boat. I most definitely recommend them to anybody who wants to get a new boat at a fraction of the cost. They did such a fine job on my boat. I'm waiting in line to get my truck ceramic Coated.",
      rating: 5
    },
    {
      author: "Charlie Meng",
      date: "February 12",
      platform: "facebook",
      avatar: "CM",
      text: "Just bought a uncle j center console. Highly recommended if anyone wants a boat, go with apex.",
      rating: 5
    },
    {
      author: "Tyler Templeton",
      date: "February 4",
      platform: "facebook",
      avatar: "TT",
      text: "Bought my first boat yesterday with them and couldn't have been more pleased. Everyone working there was happy to help and gave me everything that I needed. Couldn't suggest them enough.",
      rating: 5
    },
    {
      author: "Drumspot Fishing Charters",
      date: "January 30",
      platform: "facebook",
      avatar: "DF",
      text: "Huge shout-out to Apex Marine & Motors 👏 If you're looking for a boat, these guys are the real deal. Pain-free, no BS, straight-up purchase process from start to finish. No runaround, no pressure—just authentic and honest folks who know their stuff and take care of their customer. Can't wait to get this rig wet and put some fish on the deck with full crews. Let's go 🌊",
      rating: 5
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const onMouseUp = () => setIsDragging(false);
  const onMouseLeave = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (scrollRef.current) {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2; 
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className="bg-dark-bg py-16 lg:py-24 relative overflow-hidden">
      <ParallaxBackground isHoneycomb speed={0.1} />
      {/* Black Top & Bottom Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-[1]"></div>
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="relative inline-block">
            {/* Faint Background Text Centered with Title */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 w-full flex justify-center">
              <h2 
                className="text-[12vw] font-serif font-black uppercase whitespace-nowrap italic tracking-widest"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)', color: 'transparent' }}
              >
                REVIEWS
              </h2>
            </div>
            <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-white uppercase font-serif tracking-widest px-4">
              CLIENT FEEDBACK & <span className="text-primary">REVIEWS</span>
            </h2>
          </div>
          <Divider className="justify-center mt-6" />
        </div>
      </div>

      {/* Draggable Carousel */}
      <div className="w-full relative group/carousel pb-8 z-10">
        <div 
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onMouseMove={onMouseMove}
          className={`flex gap-4 md:gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`} 
        >
          {reviews.map((review, i) => (
            <div key={i} className="w-[85vw] sm:w-[350px] lg:w-[400px] flex-shrink-0 snap-center">
              <div className="relative group/card h-full">
                
                {/* Cyberpunk corner accents */}
                <div className="absolute -top-1 -left-1 w-8 h-8 border-t-[3px] border-l-[3px] border-primary z-20 pointer-events-none transition-transform duration-500 group-hover/card:-translate-x-2 group-hover/card:-translate-y-2"></div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-[3px] border-r-[3px] border-primary z-20 pointer-events-none transition-transform duration-500 group-hover/card:translate-x-2 group-hover/card:translate-y-2"></div>

                {/* Glassmorphic Card Body */}
                <div 
                  className="bg-black/60 backdrop-blur-md p-6 lg:p-8 border border-white/10 h-full flex flex-col relative"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))' }}
                >
                  {/* Inner overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none z-0"></div>
                  
                  {/* Header */}
                  <div className="flex items-center mb-6 relative z-10 pointer-events-none">
                    <div>
                      <div className="text-white font-bold text-sm flex items-center gap-1 uppercase tracking-wide">
                        {review.author}
                      </div>
                      <div className="text-gray-500 text-xs mt-1">{review.date}</div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex text-primary mb-4 relative z-10 pointer-events-none">
                    {[...Array(review.rating)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
                  </div>
                  
                  {/* Content */}
                  <p className="text-gray-300 text-[14px] leading-relaxed relative z-10 flex-grow italic pointer-events-none">
                    "{review.text}"
                  </p>
                  
                  {/* Footer */}
                  <div className="mt-6 pt-4 border-t border-dark-border relative z-10 flex justify-between items-center pointer-events-none">
                    <span className="text-primary font-bold text-[10px] sm:text-xs uppercase tracking-widest">Verified Client</span>
                    <span className="text-gray-500 font-bold tracking-tight opacity-50 text-[10px] sm:text-xs uppercase">facebook</span>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12 relative z-10">
        <a 
          href="https://www.facebook.com/profile.php?id=61573215550726&sk=reviews" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-none btn-swipe text-xs font-extrabold tracking-widest uppercase transition-all"
        >
          LEAVE A REVIEW
        </a>
      </div>

    </section>
  );
}
