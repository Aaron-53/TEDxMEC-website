import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, Mail, Building2, Cpu, Coffee, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const partnerLogos = [
  { icon: Building2, name: 'TechCorp' },
  { icon: Cpu, name: 'InnovateLabs' },
  { icon: Coffee, name: 'BrewHub' },
  { icon: Rocket, name: 'LaunchPad' },
];

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;
    if (!section || !bg || !content) return;

    const ctx = gsap.context(() => {
      const label = content.querySelector('.micro-label');
      const headline = content.querySelector('h2');
      const body = content.querySelector('p');
      const cta = content.querySelector('.cta-group');
      const logos = content.querySelectorAll('.partner-logo');

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0% - 30%)
      scrollTl
        .fromTo(bg, 
          { scale: 1.08, opacity: 0.8 }, 
          { scale: 1, opacity: 1, ease: 'none' }, 
          0
        )
        .fromTo([label, headline, body], 
          { x: '8vw', opacity: 0 }, 
          { x: 0, opacity: 1, stagger: 0.04, ease: 'power2.out' }, 
          0.05
        )
        .fromTo(cta, 
          { y: '3vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'power2.out' }, 
          0.15
        )
        .fromTo(logos, 
          { y: '2vh', opacity: 0 }, 
          { y: 0, opacity: 1, stagger: 0.02, ease: 'power2.out' }, 
          0.2
        );

      // SETTLE (30% - 70%) - Hold

      // EXIT (70% - 100%)
      scrollTl
        .fromTo([label, headline, body, cta], 
          { x: 0, opacity: 1 }, 
          { x: '10vw', opacity: 0, ease: 'power2.in' }, 
          0.7
        )
        .fromTo(logos, 
          { opacity: 1 }, 
          { opacity: 0, ease: 'power2.in' }, 
          0.72
        )
        .fromTo(bg, 
          { scale: 1 }, 
          { scale: 1.06, ease: 'none' }, 
          0.7
        );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="section-pinned z-[70]"
      id="partners"
    >
      {/* Background Image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8, transform: 'scale(1.08)' }}
      >
        <img 
          src="/partners_stairwell.jpg" 
          alt="Partners"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-tedx-charcoal/90 via-tedx-charcoal/60 to-transparent" />

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-center items-end text-right px-[6vw]"
      >
        <div className="max-w-[40vw]">
          <span className="micro-label mb-4 block" style={{ opacity: 0 }}>
            PARTNERS
          </span>
          
          <h2 className="headline-lg text-tedx-white mb-8" style={{ opacity: 0 }}>
            PARTNER WITH<br />
            <span className="text-tedx-red">US</span>
          </h2>
          
          <p className="body-text mb-8 text-lg" style={{ opacity: 0 }}>
            Align your brand with a community that cares about design, learning, 
            and impact. Let's build something memorable together.
          </p>
          
          {/* CTAs */}
          <div className="cta-group flex flex-col sm:flex-row gap-4 mb-10 justify-end" style={{ opacity: 0 }}>
            <button className="btn-tedx group">
              <Download className="mr-2 w-4 h-4" />
              Download Brochure
            </button>
            <a href="mailto:partners@tedxmec.in" className="btn-tedx-outline">
              <Mail className="mr-2 w-4 h-4" />
              Contact for Sponsorship
            </a>
          </div>
          
          {/* Partner Logos */}
          <div className="flex gap-6 justify-end">
            {partnerLogos.map((partner, idx) => (
              <div 
                key={idx}
                className="partner-logo w-14 h-14 bg-tedx-white/10 rounded-lg flex items-center justify-center hover:bg-tedx-white/20 transition-colors"
                style={{ opacity: 0 }}
              >
                <partner.icon className="w-6 h-6 text-tedx-gray" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
