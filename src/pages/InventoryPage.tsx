import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, Anchor, Car, Zap, LayoutGrid } from 'lucide-react';
import ParallaxBackground from '../components/ParallaxBackground';
import Divider from '../components/Divider';

export default function InventoryPage() {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Parse the query string on mount and when it changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      setActiveFilter(category.toLowerCase());
    } else {
      setActiveFilter('all');
    }
  }, [location.search]);

  const categories = [
    { id: 'all', label: 'All Inventory', icon: LayoutGrid },
    { id: 'boats', label: 'Boats', icon: Anchor },
    { id: 'vehicles', label: 'Vehicles', icon: Car },
    { id: 'powersports', label: 'Powersports', icon: Zap },
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col relative">
      <ParallaxBackground isHoneycomb speed={0.05} />

      {/* Page Header Mini-Hero */}
      <section className="relative py-20 lg:py-32 flex items-center justify-center overflow-hidden mb-12">
        <div className="absolute inset-0 z-0">
          <img src="/apexheropic2.jpg" alt="Inventory Background" className="w-full h-full object-cover object-center opacity-40 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80"></div>
          <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h4 className="flex items-center justify-center gap-2 text-white/50 font-serif text-sm tracking-[0.3em] uppercase mb-4">
            <span className="text-primary font-black">///</span> Elite Selection
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white uppercase font-serif tracking-wide mb-6">
            OUR <span className="text-primary">INVENTORY</span>
          </h1>
          <Divider className="justify-center mx-auto" />
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 w-full flex-grow">
        
        {/* Controls Bar (Search & Filter) */}
        <div className="bg-dark-bg/80 border border-white/10 p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)] mb-12 backdrop-blur-md sticky top-24 z-40">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`flex items-center gap-2 px-6 py-3 text-sm font-bold tracking-widest uppercase transition-all flex-1 lg:flex-none justify-center ${
                      isActive 
                        ? 'bg-primary text-white shadow-[0_0_15px_rgba(255,102,0,0.4)]' 
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="hidden sm:inline">{cat.label}</span>
                    <span className="sm:hidden">{cat.label.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-96 group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-primary transition-colors">
                <Search size={18} />
              </div>
              <input 
                type="text" 
                placeholder="Search make, model, or year..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/50 border border-white/10 focus:border-primary text-white pl-12 pr-4 py-3 outline-none transition-all placeholder:text-gray-600 font-light"
              />
            </div>
          </div>
        </div>

        {/* Inventory Coming Soon State */}
        <div className="flex flex-col items-center justify-center py-20 text-center relative overflow-hidden bg-gradient-to-b from-white/5 to-transparent border-t border-white/10">
           {/* Decorative Background Elements */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
           
           <div className="relative z-10 flex flex-col items-center">
             <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8 border border-primary/20">
               <Filter size={32} className="text-primary" />
             </div>
             
             <h2 className="text-3xl md:text-5xl font-bold text-white font-serif uppercase tracking-widest mb-6">
               INVENTORY <span className="text-primary">COMING SOON</span>
             </h2>
             
             <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
               We are currently curating an exclusive selection of premium {activeFilter !== 'all' ? activeFilter : 'boats, vehicles, and powersports'}. Check back shortly to view our updated showroom.
             </p>

             <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-white/50 border-t border-white/10 pt-8 w-64 justify-center">
               <span className="text-primary">///</span> STAY TUNED <span className="text-primary">///</span>
             </div>
           </div>
        </div>

      </section>

    </div>
  );
}
