import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mic, Wrench, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    icon: Mic,
    title: 'Talks',
    description: 'Short, sharp ideas from diverse voices that challenge and inspire.',
  },
  {
    icon: Wrench,
    title: 'Workshops',
    description: 'Hands-on sessions you can use immediately in your journey.',
  },
  {
    icon: Users,
    title: 'Network',
    description: 'Meet collaborators over coffee and meaningful conversation.',
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;
    const cards = cardsRef.current;
    if (!section || !bg || !content || !cards) return;

    const ctx = gsap.context(() => {
      const label = content.querySelector('.micro-label');
      const headline = content.querySelector('h2');
      const cardElements = cards.querySelectorAll('.pillar-card');

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
          { y: '-6vh', scale: 1.06 }, 
          { y: 0, scale: 1, ease: 'none' }, 
          0
        )
        .fromTo([label, headline], 
          { y: '6vh', opacity: 0 }, 
          { y: 0, opacity: 1, stagger: 0.05, ease: 'power2.out' }, 
          0.05
        )
        .fromTo(cardElements[0], 
          { y: '35vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'power2.out' }, 
          0.1
        )
        .fromTo(cardElements[1], 
          { y: '35vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'power2.out' }, 
          0.14
        )
        .fromTo(cardElements[2], 
          { y: '35vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'power2.out' }, 
          0.18
        );

      // SETTLE (30% - 70%) - Hold

      // EXIT (70% - 100%)
      scrollTl
        .fromTo(headline, 
          { y: 0, opacity: 1 }, 
          { y: '-10vh', opacity: 0, ease: 'power2.in' }, 
          0.7
        )
        .fromTo(cardElements, 
          { y: 0, opacity: 1 }, 
          { y: '18vh', opacity: 0, stagger: 0.02, ease: 'power2.in' }, 
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
      className="section-pinned z-40"
      id="experience"
    >
      {/* Background Image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ transform: 'translateY(-6vh) scale(1.06)' }}
      >
        <img 
          src="/experience_stairwell.jpg" 
          alt="Experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tedx-black/90 via-tedx-black/50 to-tedx-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-[6vw]">
        {/* Header */}
        <div ref={contentRef} className="mb-auto pt-[14vh]">
          <span className="micro-label mb-4 block" style={{ opacity: 0 }}>
            EXPERIENCE
          </span>
          
          <h2 className="headline-lg text-tedx-white" style={{ opacity: 0 }}>
            A DAY BUILT<br />
            TO <span className="text-tedx-red">INSPIRE</span>
          </h2>
        </div>

        {/* Pillar Cards */}
        <div 
          ref={cardsRef}
          className="flex flex-col sm:flex-row gap-6 pb-[10vh] mt-auto"
        >
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="pillar-card flex-1 bg-tedx-white/5 backdrop-blur-sm border border-tedx-white/10 rounded-lg p-6 hover:border-tedx-white/30 transition-all duration-300 hover:-translate-y-1"
              style={{ opacity: 0, transform: 'translateY(35vh)' }}
            >
              <div className="w-12 h-12 bg-tedx-red/20 rounded-lg flex items-center justify-center mb-4">
                <pillar.icon className="w-6 h-6 text-tedx-red" />
              </div>
              
              <h3 className="font-sora font-bold text-xl text-tedx-white mb-2">
                {pillar.title}
              </h3>
              
              <p className="text-tedx-gray text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
