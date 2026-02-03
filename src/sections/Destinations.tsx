import { useScrollReveal, useStaggeredReveal } from '@/hooks/useScrollReveal';
import { ArrowRight, MapPin } from 'lucide-react';

const destinations = [
  {
    name: 'Goa',
    description: 'Sun-kissed beaches and vibrant nightlife',
    image: '/images/goa.jpg',
  },
  {
    name: 'Kerala',
    description: 'Backwaters, tea gardens, and Ayurvedic wellness',
    image: '/images/kerala.jpg',
  },
  {
    name: 'Rajasthan',
    description: 'Royal palaces and desert adventures',
    image: '/images/rajasthan.jpg',
  },
  {
    name: 'Himachal Pradesh',
    description: 'Snow-capped mountains and scenic valleys',
    image: '/images/himachal.jpg',
  },
  {
    name: 'Varanasi',
    description: 'Spiritual heart of India on the Ganges',
    image: '/images/varanasi.jpg',
  },
  {
    name: 'Ladakh',
    description: 'High-altitude desert and Buddhist monasteries',
    image: '/images/ladakh.jpg',
  },
  {
    name: 'Tamil Nadu',
    description: 'Ancient temples and rich culture',
    image: '/images/tamilnadu.jpg',
  },
  {
    name: 'Uttarakhand',
    description: 'Devbhoomi - Land of the Gods',
    image: '/images/uttarakhand.jpg',
  },
];

function DestinationCard({
  destination,
  index,
  isVisible,
}: {
  destination: (typeof destinations)[0];
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden bg-white border border-[#e9e9e9] transition-all duration-500 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
        
        {/* Location Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5">
          <MapPin className="w-3.5 h-3.5 text-gold" />
          <span className="text-xs uppercase tracking-wider text-charcoal">
            India
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl text-charcoal mb-2">
          {destination.name}
        </h3>
        <p className="text-sm text-gray mb-4 leading-relaxed">
          {destination.description}
        </p>
        <button className="group/btn flex items-center gap-2 text-sm uppercase tracking-wider text-gold hover:text-charcoal transition-colors duration-300">
          Explore
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

export function Destinations() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();
  const { containerRef, visibleItems } = useStaggeredReveal(destinations.length, 100);

  return (
    <section id="destinations" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-500 ${
            titleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-script text-5xl text-gold block mb-3">
            Explore
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            Popular Destinations
          </h2>
          <p className="text-gray leading-relaxed">
            Handpicked locations that capture the essence of India's diverse
            beauty, from pristine beaches to majestic mountains.
          </p>
        </div>

        {/* Destinations Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.name}
              destination={destination}
              index={index}
              isVisible={visibleItems[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
