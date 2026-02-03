import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { Destinations } from './sections/Destinations';
import { Itineraries } from './sections/Itineraries';
import { TravelTips } from './sections/TravelTips';
import { Testimonials } from './sections/Testimonials';
import { Newsletter } from './sections/Newsletter';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main>
        <Hero />
        <Destinations />
        <Itineraries />
        <TravelTips />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
