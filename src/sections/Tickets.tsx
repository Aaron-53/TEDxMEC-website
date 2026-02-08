import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Sparkles, Users, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ticketTiers = [
  {
    name: 'Student',
    price: '₹499',
    icon: Users,
    features: [
      'Full day access to all talks',
      'Networking sessions',
      'Workshop participation',
      'Digital certificate',
      'Lunch & refreshments',
    ],
    popular: false,
  },
  {
    name: 'General',
    price: '₹799',
    icon: Sparkles,
    features: [
      'Full day access to all talks',
      'Priority seating',
      'Networking sessions',
      'Workshop participation',
      'Digital certificate',
      'Lunch & refreshments',
      'TEDxMEC merchandise',
    ],
    popular: true,
  },
  {
    name: 'Professional',
    price: '₹1,299',
    icon: Briefcase,
    features: [
      'Everything in General',
      'VIP front-row seating',
      'Exclusive speaker meet',
      'Premium merchandise kit',
      'After-event dinner',
      '1-year TED community access',
    ],
    popular: false,
  },
];

export default function Tickets() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    const ctx = gsap.context(() => {
      const cardElements = cards.querySelectorAll('.ticket-card');
      
      gsap.fromTo(cardElements,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative z-20 bg-tedx-charcoal py-24 px-[6vw]"
      id="tickets"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="micro-label mb-4 block">TICKETS</span>
        <h2 className="headline-lg text-tedx-white mb-4">
          SECURE YOUR <span className="text-tedx-red">SEAT</span>
        </h2>
        <p className="body-text max-w-xl mx-auto">
          Limited seats available. Choose the experience that suits you best and be part of something extraordinary.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-tedx-red/10 border border-tedx-red/30 rounded-full">
          <span className="w-2 h-2 bg-tedx-red rounded-full animate-pulse" />
          <span className="font-mono text-xs text-tedx-red uppercase tracking-wider">Limited Seats Available</span>
        </div>
      </div>

      {/* Ticket Cards */}
      <div 
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {ticketTiers.map((tier) => (
          <div 
            key={tier.name}
            className={`ticket-card relative p-8 rounded-lg transition-all duration-500 hover:-translate-y-2 ${
              tier.popular 
                ? 'bg-gradient-to-b from-tedx-red/20 to-tedx-black border-2 border-tedx-red shadow-glow' 
                : 'bg-tedx-darkgray/50 border border-tedx-white/10 hover:border-tedx-white/30'
            }`}
          >
            {/* Popular Badge */}
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-tedx-red text-white font-mono text-xs uppercase tracking-wider rounded-full">
                Most Popular
              </div>
            )}

            {/* Icon */}
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
              tier.popular ? 'bg-tedx-red' : 'bg-tedx-white/10'
            }`}>
              <tier.icon className="w-6 h-6 text-tedx-white" />
            </div>

            {/* Name & Price */}
            <h3 className="font-sora font-bold text-xl text-tedx-white mb-2">{tier.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="font-sora font-bold text-4xl text-tedx-white">{tier.price}</span>
              <span className="text-tedx-gray text-sm">/person</span>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                    tier.popular ? 'text-tedx-red' : 'text-tedx-gray'
                  }`} />
                  <span className="text-sm text-tedx-gray">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className={`w-full py-3 rounded-md font-sora font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
              tier.popular 
                ? 'bg-tedx-red text-white hover:shadow-glow' 
                : 'bg-tedx-white/10 text-tedx-white hover:bg-tedx-white/20'
            }`}>
              Get {tier.name} Ticket
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
