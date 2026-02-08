import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const speakers = [
  { name: 'Aarav Menon', topic: 'The Future of AI' },
  { name: 'Diya Krishnan', topic: 'Sustainable Design' },
  { name: 'Rishi Varma', topic: 'Building Communities' },
  { name: 'Sara Thomas', topic: 'Digital Wellness' },
  { name: 'Kunal Pai', topic: 'Space Exploration' },
  { name: 'Meera Raj', topic: 'Social Innovation' },
  { name: 'Arjun Nair', topic: 'Creative Leadership' },
  { name: 'Priya Das', topic: 'Mental Health' },
];

export default function Speakers() {
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
      const cardList = card.querySelector('.speaker-list');
      const cardLink = card.querySelector('a');

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
          { x: '6vw', scale: 1.06, opacity: 0.85 }, 
          { x: 0, scale: 1, opacity: 1, ease: 'none' }, 
          0
        )
        .fromTo([label, headline, subhead], 
          { x: '-10vw', opacity: 0 }, 
          { x: 0, opacity: 1, stagger: 0.03, ease: 'power2.out' }, 
          0.05
        )
        .fromTo(card, 
          { x: '18vw', opacity: 0, rotate: 2 }, 
          { x: 0, opacity: 1, rotate: 0, ease: 'power2.out' }, 
          0.08
        )
        .fromTo(cardList?.children || [], 
          { y: '3vh', opacity: 0 }, 
          { y: 0, opacity: 1, stagger: 0.02, ease: 'power2.out' }, 
          0.15
        )
        .fromTo(cardLink, 
          { opacity: 0 }, 
          { opacity: 1, ease: 'power2.out' }, 
          0.22
        );

      // SETTLE (30% - 70%) - Hold

      // EXIT (70% - 100%)
      scrollTl
        .fromTo([label, headline, subhead], 
          { x: 0, opacity: 1 }, 
          { x: '-14vw', opacity: 0, ease: 'power2.in' }, 
          0.7
        )
        .fromTo(card, 
          { x: 0, opacity: 1 }, 
          { x: '14vw', opacity: 0, ease: 'power2.in' }, 
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
      className="section-pinned z-30"
      id="speakers"
    >
      {/* Background Image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.85, transform: 'translateX(6vw) scale(1.06)' }}
      >
        <img 
          src="/speakers_corridor.jpg" 
          alt="Lineup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tedx-black/80 via-tedx-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-[6vw]">
        {/* Left Text */}
        <div ref={contentRef} className="max-w-[40vw]">
          <span className="micro-label mb-4 block" style={{ opacity: 0 }}>
            SPEAKERS
          </span>
          
          <h2 className="headline-lg text-tedx-white mb-6" style={{ opacity: 0 }}>
            THE<br />
            <span className="text-tedx-red">LINEUP</span>
          </h2>
          
          <p className="body-text text-lg" style={{ opacity: 0 }}>
            Founders, researchers, artists, and builders—sharing ideas that stick. 
            Get ready to be inspired by voices that matter.
          </p>
        </div>

        {/* Right Speaker Card */}
        <div 
          ref={cardRef}
          className="absolute right-[6vw] top-1/2 -translate-y-1/2 w-[34vw] min-h-[34vh]"
          style={{ opacity: 0, transform: 'translateX(18vw) translateY(-50%) rotate(2deg)' }}
        >
          <div className="bg-tedx-white/5 backdrop-blur-sm border border-tedx-white/10 rounded-lg p-8">
            <span className="card-title font-mono text-xs uppercase tracking-[0.14em] text-tedx-gray mb-6 block">
              2025 SPEAKERS
            </span>
            
            <div className="speaker-list grid grid-cols-2 gap-x-8 gap-y-4">
              {speakers.map((speaker, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-tedx-red rounded-full flex-shrink-0" />
                  <div>
                    <p className="text-tedx-white font-medium text-sm">{speaker.name}</p>
                    <p className="text-tedx-gray text-xs">{speaker.topic}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-2 mt-8 text-tedx-red font-mono text-sm uppercase tracking-wider hover:underline"
            >
              View full profiles
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
