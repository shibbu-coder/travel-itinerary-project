import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Send, CheckCircle } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 lg:py-24 bg-charcoal">
      <div className="container-custom">
        <div
          ref={ref}
          className={`max-w-2xl mx-auto text-center transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Start Your Journey Today
          </h2>

          {/* Description */}
          <p className="text-white/70 leading-relaxed mb-8">
            Subscribe to receive exclusive travel deals, destination guides, and
            insider tips for your next Indian adventure.
          </p>

          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 h-14 px-5 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-gold transition-colors duration-300"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="h-14 px-8 bg-gold text-charcoal font-medium uppercase tracking-wider text-sm flex items-center justify-center gap-2 hover:bg-white transition-colors duration-300 disabled:opacity-70"
              >
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-gold animate-fade-in">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg">
                Thank you for subscribing! Check your inbox for exclusive deals.
              </span>
            </div>
          )}

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-white/50 text-sm">
            <span>No spam, ever</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>Unsubscribe anytime</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>Weekly updates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
