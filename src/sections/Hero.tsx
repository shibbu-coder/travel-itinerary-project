import { useEffect, useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Beautiful Indian landscape"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center pt-32 pb-20">
        {/* Pre-title Script */}
        <span
          className={`font-script text-5xl md:text-6xl lg:text-7xl text-gold block mb-4 transition-all duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Discover
        </span>

        {/* Main Title */}
        <h1
          className={`font-display text-4xl md:text-5xl lg:text-7xl text-white max-w-4xl mx-auto leading-tight mb-6 transition-all duration-600 delay-200 ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          Unforgettable Journeys Across India
        </h1>

        {/* Description */}
        <p
          className={`text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-600 delay-400 ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          Curated itineraries for the modern Indian traveler. From the snow-capped
          Himalayas to the serene backwaters of Kerala, explore India's most
          captivating destinations.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-600 delay-600 ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={() => scrollToSection('#destinations')}
            className="group btn-primary flex items-center gap-2"
          >
            Explore Destinations
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollToSection('#itineraries')}
            className="group btn-outline border-white text-white hover:bg-white hover:text-charcoal flex items-center gap-2"
          >
            View Itineraries
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-600 delay-800 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-white/70">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
