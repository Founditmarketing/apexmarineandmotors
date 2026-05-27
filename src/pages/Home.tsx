import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import MidCTA from '../components/MidCTA';
import Location from '../components/Location';
import Portfolio from '../components/Portfolio';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

export default function Home({ isLoaded }: { isLoaded: boolean }) {
  return (
    <>
      <Hero isLoaded={isLoaded} />
      <About />
      <Services />
      <WhyChoose />
      <MidCTA />
      <Location />
      <Portfolio />
      <Reviews />
      <Contact />
    </>
  );
}
