import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const overlay = overlayRef.current;
    const content = contentRef.current;
    if (!section || !bg || !overlay || !content) return;

    const ctx = gsap.context(() => {
      const label = content.querySelector('.micro-label');
      const headline = content.querySelector('h2');
      const body = content.querySelector('p');
      const cta = content.querySelector('a');

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
        .fromTo(overlay, 
          { opacity: 0 }, 
          { opacity: 1, ease: 'none' }, 
          0
        )
        .fromTo(label, 
          { x: '6vw', opacity: 0 }, 
          { x: 0, opacity: 1, ease: 'power2.out' }, 
          0.05
        )
        .fromTo(headline, 
          { x: '8vw', opacity: 0 }, 
          { x: 0, opacity: 1, ease: 'power2.out' }, 
          0.08
        )
        .fromTo(body, 
          { x: '6vw', opacity: 0 }, 
          { x: 0, opacity: 1, ease: 'power2.out' }, 
          0.12
        )
        .fromTo(cta, 
          { y: '4vh', opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'power2.out' }, 
          0.18
        );

      // SETTLE (30% - 70%) - Hold position

      // EXIT (70% - 100%)
      scrollTl
        .fromTo(headline, 
          { x: 0, opacity: 1 }, 
          { x: '12vw', opacity: 0, ease: 'power2.in' }, 
          0.7
        )
        .fromTo([label, body, cta], 
          { y: 0, opacity: 1 }, 
          { y: '8vh', opacity: 0, ease: 'power2.in' }, 
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
      className="section-pinned z-20"
      id="about"
    >
      {/* Background Image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8, transform: 'scale(1.08)' }}
      >
        <img 
          src="/about_stairwell.jpg" 
          alt="Ascent"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-l from-tedx-charcoal/90 via-tedx-charcoal/60 to-transparent"
        style={{ opacity: 0 }}
      />

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-center items-end text-right px-[6vw]"
      >
        <div className="max-w-[38vw]">
          <span className="micro-label mb-4 block" style={{ opacity: 0 }}>
            ABOUT
          </span>
          
          <h2 className="headline-lg text-tedx-white mb-8" style={{ opacity: 0 }}>
            WHAT IS<br />
            <span className="text-tedx-red">TEDxMEC</span>
          </h2>
          
          <p className="body-text mb-8 text-lg" style={{ opacity: 0 }}>
            A student-led conference bringing together thinkers, makers, and storytellers. 
            We host talks, workshops, and performances—designed to spark action and inspire change.
            <br /><br />
            At TEDxMEC, we believe in the power of ideas to transform lives. Our carefully 
            curated speakers share stories that challenge perspectives and ignite curiosity.
          </p>
          
          <a 
            href="#speakers" 
            className="btn-tedx-outline inline-flex group"
            style={{ opacity: 0 }}
          >
            Read The Story
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
