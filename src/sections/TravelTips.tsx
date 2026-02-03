import { useScrollReveal, useStaggeredReveal } from '@/hooks/useScrollReveal';
import {
  Sun,
  Package,
  Utensils,
  Train,
  Heart,
  Shield,
} from 'lucide-react';

const tips = [
  {
    icon: Sun,
    title: 'Best Time to Visit',
    description:
      'Plan your journey according to seasons. October to March offers pleasant weather across most destinations.',
  },
  {
    icon: Package,
    title: 'Packing Guide',
    description:
      'Light cottons for summers, warm layers for mountains, and modest clothing for temple visits.',
  },
  {
    icon: Utensils,
    title: 'Local Cuisine',
    description:
      'From street food to fine dining, explore India\'s diverse culinary landscape safely and deliciously.',
  },
  {
    icon: Train,
    title: 'Transportation',
    description:
      'Navigate India\'s vast network of trains, flights, and road trips with our expert tips.',
  },
  {
    icon: Heart,
    title: 'Cultural Etiquette',
    description:
      'Respect local customs, dress codes, and traditions for meaningful interactions.',
  },
  {
    icon: Shield,
    title: 'Safety Tips',
    description:
      'Stay informed and prepared with our comprehensive safety guidelines for travelers.',
  },
];

function TipCard({
  tip,
  index,
  isVisible,
}: {
  tip: (typeof tips)[0];
  index: number;
  isVisible: boolean;
}) {
  const Icon = tip.icon;

  return (
    <div
      className={`group bg-white border border-[#e9e9e9] p-8 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 ${
        isVisible
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center bg-cream mb-6 group-hover:bg-gold transition-colors duration-300">
        <Icon className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-300" />
      </div>

      {/* Title */}
      <h3 className="font-display text-xl text-charcoal mb-3">
        {tip.title}
      </h3>

      {/* Description */}
      <p className="text-gray leading-relaxed text-sm">
        {tip.description}
      </p>
    </div>
  );
}

export function TravelTips() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();
  const { containerRef, visibleItems } = useStaggeredReveal(tips.length, 100);

  return (
    <section id="tips" className="section-padding bg-cream">
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
            Prepare
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            Travel Essentials
          </h2>
          <p className="text-gray leading-relaxed">
            Everything you need to know for a seamless Indian adventure, from
            packing tips to cultural insights.
          </p>
        </div>

        {/* Tips Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tips.map((tip, index) => (
            <TipCard
              key={tip.title}
              tip={tip}
              index={index}
              isVisible={visibleItems[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
