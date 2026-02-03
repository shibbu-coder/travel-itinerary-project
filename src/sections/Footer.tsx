import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Compass, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'Destinations', href: '#destinations' },
  { name: 'Itineraries', href: '#itineraries' },
  { name: 'Travel Tips', href: '#tips' },
  { name: 'About Us', href: '#' },
  { name: 'Contact', href: '#' },
];

const topDestinations = [
  { name: 'Goa', href: '#destinations' },
  { name: 'Kerala', href: '#destinations' },
  { name: 'Rajasthan', href: '#destinations' },
  { name: 'Himachal Pradesh', href: '#destinations' },
  { name: 'Varanasi', href: '#destinations' },
  { name: 'Ladakh', href: '#destinations' },
];

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export function Footer() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-cream border-t border-[#e9e9e9]">
      <div className="container-custom">
        {/* Main Footer */}
        <div
          ref={ref}
          className={`py-16 lg:py-20 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#');
                }}
                className="flex items-center gap-2 group mb-6"
              >
                <Compass className="w-8 h-8 text-gold transition-transform duration-300 group-hover:rotate-45" />
                <span className="font-display text-xl font-medium text-charcoal">
                  Wanderlust<span className="text-gold">India</span>
                </span>
              </a>
              <p className="text-gray leading-relaxed mb-6">
                Your trusted companion for discovering India's most extraordinary
                destinations. Crafting unforgettable journeys since 2015.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 flex items-center justify-center bg-white border border-[#e9e9e9] text-charcoal hover:bg-gold hover:border-gold hover:text-white transition-all duration-300"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg text-charcoal mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Destinations */}
            <div>
              <h4 className="font-display text-lg text-charcoal mb-6">
                Top Destinations
              </h4>
              <ul className="space-y-3">
                {topDestinations.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-lg text-charcoal mb-6">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold mt-0.5" />
                  <span className="text-gray">hello@wanderlustindia.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold mt-0.5" />
                  <span className="text-gray">+91 98765 43210</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold mt-0.5" />
                  <span className="text-gray">
                    123 Travel Street, Bandra West
                    <br />
                    Mumbai, Maharashtra 400050
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#e9e9e9]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray">
              © {new Date().getFullYear()} Wanderlust India. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray">
              <button className="hover:text-gold transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-gold transition-colors duration-300">
                Terms of Service
              </button>
              <button className="hover:text-gold transition-colors duration-300">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
