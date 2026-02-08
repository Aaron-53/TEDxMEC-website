import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '500+', label: 'ATTENDEES' },
  { value: '30+', label: 'UNIVERSITIES' },
];

export default function Community() {
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
      const statElements = content.querySelectorAll('.stat-item');

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
        .fromTo([label, headline], 
          { x: '8vw', opacity: 0 }, 
          { x: 0, opacity: 1, stagger: 0.04, ease: 'power2.out' }, 
          0.05
        )
        .fromTo(body, 
          { x: '6vw', opacity: 0 }, 
          { x: 0, opacity: 1, ease: 'power2.out' }, 
          0.12
        )
        .fromTo(statElements, 
          { y: '3vh', opacity: 0 }, 
          { y: 0, opacity: 1, stagger: 0.03, ease: 'power2.out' }, 
          0.18
        );

      // SETTLE (30% - 70%) - Hold

      // EXIT (70% - 100%)
      scrollTl
        .fromTo([label, headline, body], 
          { x: 0, opacity: 1 }, 
          { x: '12vw', opacity: 0, ease: 'power2.in' }, 
          0.7
        )
        .fromTo(statElements, 
          { y: 0, opacity: 1 }, 
          { y: '6vh', opacity: 0, stagger: 0.02, ease: 'power2.in' }, 
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
      className="section-pinned z-50"
      id="community"
    >
      {/* Background Image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8, transform: 'scale(1.08)' }}
      >
        <img 
          src="/community_corridor.jpg" 
          alt="Community"
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
            COMMUNITY
          </span>
          
          <h2 className="headline-lg text-tedx-white mb-8" style={{ opacity: 0 }}>
            OPEN TO<br />
            <span className="text-tedx-red">EVERYONE</span>
          </h2>
          
          <p className="body-text mb-10 text-lg" style={{ opacity: 0 }}>
            Students, professionals, creators, skeptics, optimists—if you're curious, 
            you belong. We design for accessibility, safety, and real connection.
            <br /><br />
            TEDxMEC is more than an event. It's a community of thinkers, dreamers, 
            and doers who believe in the power of ideas to change the world.
          </p>
          
          {/* Stats */}
          <div className="flex gap-12 justify-end">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="stat-item text-right"
                style={{ opacity: 0 }}
              >
                <p className="font-sora font-bold text-4xl text-tedx-red mb-1">
                  {stat.value}
                </p>
                <p className="font-mono text-xs text-tedx-gray uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
