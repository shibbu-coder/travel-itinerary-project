import { useScrollReveal, useStaggeredReveal } from '@/hooks/useScrollReveal';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const itineraries = [
  {
    title: 'Golden Triangle Tour',
    duration: '7 Days',
    route: 'Delhi, Agra, Jaipur',
    description:
      "Experience India's rich heritage through the iconic Taj Mahal, majestic forts, and royal palaces.",
    highlights: ['Taj Mahal', 'Amber Fort', 'City Palace', 'Qutub Minar'],
  },
  {
    title: 'Kerala Backwaters Escape',
    duration: '5 Days',
    route: 'Kochi, Munnar, Alleppey',
    description:
      'Relax in houseboats, explore tea plantations, and rejuvenate with Ayurvedic treatments.',
    highlights: ['Houseboat Stay', 'Tea Gardens', 'Kathakali Dance', 'Spa'],
  },
  {
    title: 'Himalayan Adventure',
    duration: '8 Days',
    route: 'Manali, Leh, Ladakh',
    description:
      'Trek through high-altitude deserts, visit ancient monasteries, and witness breathtaking landscapes.',
    highlights: ['Pangong Lake', 'Nubra Valley', 'Monasteries', 'Trekking'],
  },
  {
    title: 'Spiritual Varanasi & Bodh Gaya',
    duration: '6 Days',
    route: 'Varanasi, Sarnath, Bodh Gaya',
    description:
      'Immerse in ancient spiritual traditions along the sacred Ganges and Buddhist pilgrimage sites.',
    highlights: ['Ganga Aarti', 'Bodhi Tree', 'Sarnath', 'Temples'],
  },
];

function ItineraryCard({
  itinerary,
  index,
  isVisible,
}: {
  itinerary: (typeof itineraries)[0];
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`group relative bg-white border border-[#e9e9e9] p-6 transition-all duration-500 hover:bg-cream hover:border-gold ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Header */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold">
          <Calendar className="w-3.5 h-3.5" />
          {itinerary.duration}
        </span>
        <span className="w-1 h-1 rounded-full bg-gray" />
        <span className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-gray">
          <Clock className="w-3.5 h-3.5" />
          {itinerary.route}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
        {itinerary.title}
      </h3>

      {/* Description */}
      <p className="text-gray leading-relaxed mb-5">
        {itinerary.description}
      </p>

      {/* Highlights */}
      <div className="flex flex-wrap gap-2 mb-5">
        {itinerary.highlights.map((highlight) => (
          <span
            key={highlight}
            className="text-xs uppercase tracking-wider bg-cream text-charcoal px-3 py-1.5 group-hover:bg-white transition-colors duration-300"
          >
            {highlight}
          </span>
        ))}
      </div>

      {/* CTA */}
      <button className="group/btn flex items-center gap-2 text-sm uppercase tracking-wider text-gold hover:text-charcoal transition-colors duration-300">
        View Details
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
      </button>
    </div>
  );
}

export function Itineraries() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>();
  const { containerRef, visibleItems } = useStaggeredReveal(itineraries.length, 150);

  return (
    <section id="itineraries" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div ref={contentRef}>
            {/* Section Header */}
            <div
              className={`mb-10 transition-all duration-500 ${
                contentVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <span className="font-script text-5xl text-gold block mb-3">
                Journey
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
                Curated Itineraries
              </h2>
              <p className="text-gray leading-relaxed max-w-md">
                Expertly crafted travel plans for every type of explorer, from
                cultural enthusiasts to adventure seekers.
              </p>
            </div>

            {/* Itinerary Cards */}
            <div ref={containerRef} className="space-y-4">
              {itineraries.map((itinerary, index) => (
                <ItineraryCard
                  key={itinerary.title}
                  itinerary={itinerary}
                  index={index}
                  isVisible={visibleItems[index]}
                />
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            ref={imageRef}
            className={`relative lg:sticky lg:top-32 transition-all duration-500 delay-200 ${
              imageVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              <img
                src="/images/itineraries.jpg"
                alt="Indian travel experiences"
                className="w-full h-auto"
              />
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-cream">
                <span className="font-display text-3xl text-gold block">50+</span>
                <span className="text-xs uppercase tracking-wider text-gray">
                  Destinations
                </span>
              </div>
              <div className="text-center p-4 bg-cream">
                <span className="font-display text-3xl text-gold block">100+</span>
                <span className="text-xs uppercase tracking-wider text-gray">
                  Itineraries
                </span>
              </div>
              <div className="text-center p-4 bg-cream">
                <span className="font-display text-3xl text-gold block">10K+</span>
                <span className="text-xs uppercase tracking-wider text-gray">
                  Travelers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
