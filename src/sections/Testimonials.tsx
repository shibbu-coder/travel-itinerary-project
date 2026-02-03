import { useState, useEffect, useCallback } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      "The Golden Triangle tour was perfectly planned. Every hotel, every guide, every experience exceeded our expectations. Truly the trip of a lifetime!",
    name: 'Priya & Rahul Sharma',
    location: 'Mumbai',
    rating: 5,
  },
  {
    quote:
      "Kerala's backwaters were magical. The houseboat stay was serene, and the Ayurvedic spa treatments were rejuvenating. Highly recommend!",
    name: 'Ananya Patel',
    location: 'Bangalore',
    rating: 5,
  },
  {
    quote:
      'Our Ladakh adventure was flawlessly organized. From permits to accommodations, everything was taken care of. We just had to enjoy the breathtaking views!',
    name: 'Vikram Mehta',
    location: 'Delhi',
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLDivElement>();

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div
          ref={sectionRef}
          className={`max-w-3xl mx-auto text-center transition-all duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Section Header */}
          <div className="mb-12">
            <span className="font-script text-5xl text-gold block mb-3">
              Stories
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal">
              Traveler Experiences
            </h2>
          </div>

          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 flex items-center justify-center bg-gold/10">
              <Quote className="w-8 h-8 text-gold" />
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="relative min-h-[200px]">
            <div
              className={`transition-all duration-500 ${
                isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-2xl md:text-3xl text-charcoal leading-relaxed mb-8">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-display text-lg text-charcoal">
                  {currentTestimonial.name}
                </p>
                <p className="text-sm text-gray uppercase tracking-wider">
                  {currentTestimonial.location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            {/* Prev Button */}
            <button
              onClick={goToPrev}
              className="w-12 h-12 flex items-center justify-center border border-[#e9e9e9] text-charcoal hover:bg-gold hover:border-gold hover:text-white transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gold scale-125'
                      : 'bg-[#e9e9e9] hover:bg-gray'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="w-12 h-12 flex items-center justify-center border border-[#e9e9e9] text-charcoal hover:bg-gold hover:border-gold hover:text-white transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
