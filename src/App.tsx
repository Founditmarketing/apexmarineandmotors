import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContactWidget from './components/FloatingContactWidget';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ConsignmentSalesPage from './pages/ConsignmentSalesPage';
import CeramicCoatingsPage from './pages/CeramicCoatingsPage';
import PaintProtectionFilmPage from './pages/PaintProtectionFilmPage';
import DetailingPage from './pages/DetailingPage';
import FiberglassRepairPage from './pages/FiberglassRepairPage';
import MarineFlooringPage from './pages/MarineFlooringPage';
import TermsPage from './pages/TermsPage';

// Component to handle hash scrolling on route change
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Prevent scrolling while loading
  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoaded]);

  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen flex flex-col">
        {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}
        
        <Header isLoaded={isLoaded} />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home isLoaded={isLoaded} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/consignment-sales" element={<ConsignmentSalesPage />} />
            <Route path="/ceramic-coatings" element={<CeramicCoatingsPage />} />
            <Route path="/paint-protection-film" element={<PaintProtectionFilmPage />} />
            <Route path="/detailing" element={<DetailingPage />} />
            <Route path="/fiberglass-repair" element={<FiberglassRepairPage />} />
            <Route path="/marine-flooring" element={<MarineFlooringPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>

        <FloatingContactWidget isLoaded={isLoaded} />
        <Footer />
      </div>
    </Router>
  );
}
