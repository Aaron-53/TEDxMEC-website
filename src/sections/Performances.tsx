import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Music, Drama, Theater } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const performances = [
  { icon: Music, label: 'Music' },
  { icon: Drama, label: 'Dance' },
  { icon: Theater, label: 'Theatre' },
];

export default function Performances() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;
    const card = cardRef.current;
    if (!section || !bg || !content || !card) return;

    const ctx = gsap.context(() => {
      const label = content.querySelector('.micro-label');
      const headline = content.querySelector('h2');
      const subhead = content.querySelector('p');
      const cardItems = card.querySelectorAll('.perf-item');

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
          { x: '-6vw', scale: 1.06 }, 
          { x: 0, scale: 1, ease: 'none' }, 
          0
        )
        .fromTo([label, headline, subhead], 
          { x: '-10vw', opacity: 0 }, 
          { x: 0, opacity: 1, stagger: 0.04, ease: 'power2.out' }, 
          0.05
        )
        .fromTo(card, 
          { x: '18vw', opacity: 0, rotate: -2 }, 
          { x: 0, opacity: 1, rotate: 0, ease: 'power2.out' }, 
          0.1
        )
        .fromTo(cardItems, 
          { y: '2vh', opacity: 0 }, 
          { y: 0, opacity: 1, stagger: 0.03, ease: 'power2.out' }, 
          0.18
        );

      // SETTLE (30% - 70%) - Hold

      // EXIT (70% - 100%)
      scrollTl
        .fromTo([label, headline, subhead], 
          { x: 0, opacity: 1 }, 
          { x: '-12vw', opacity: 0, ease: 'power2.in' }, 
          0.7
        )
        .fromTo(card, 
          { x: 0, opacity: 1 }, 
          { x: '12vw', opacity: 0, ease: 'power2.in' }, 
          0.7
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
      className="section-pinned z-[60]"
      id="performances"
    >
      {/* Background Image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ transform: 'translateX(-6vw) scale(1.06)' }}
      >
        <img 
          src="/performances_hall.jpg" 
          alt="Performances"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tedx-black/80 via-tedx-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-[6vw]">
        {/* Left Text */}
        <div ref={contentRef} className="max-w-[44vw]">
          <span className="micro-label mb-4 block" style={{ opacity: 0 }}>
            PERFORMANCES
          </span>
          
          <h2 className="headline-lg text-tedx-white mb-6" style={{ opacity: 0 }}>
            MORE THAN<br />
            <span className="text-tedx-red">TALKS</span>
          </h2>
          
          <p className="body-text text-lg" style={{ opacity: 0 }}>
            Music, movement, and storytelling—live on stage. 
            Experience the full spectrum of creative expression.
          </p>
        </div>

        {/* Right Performance Card */}
        <div 
          ref={cardRef}
          className="absolute right-[6vw] top-1/2 -translate-y-1/2 w-[32vw]"
          style={{ opacity: 0, transform: 'translateX(18vw) translateY(-50%) rotate(-2deg)' }}
        >
          <div className="bg-tedx-white/5 backdrop-blur-sm border border-tedx-white/10 rounded-lg p-8">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-tedx-gray mb-6 block">
              LIVE SETS
            </span>
            
            <div className="space-y-4">
              {performances.map((perf, idx) => (
                <div 
                  key={idx} 
                  className="perf-item flex items-center gap-4 p-4 bg-tedx-white/5 rounded-lg hover:bg-tedx-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-tedx-red/20 rounded-lg flex items-center justify-center">
                    <perf.icon className="w-5 h-5 text-tedx-red" />
                  </div>
                  <span className="text-tedx-white font-medium">{perf.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
