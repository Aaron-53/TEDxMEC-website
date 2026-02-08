import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;
    const label = labelRef.current;
    const headline = headlineRef.current;
    const subhead = subheadRef.current;
    const cta = ctaRef.current;
    const desc = descRef.current;

    if (!section || !bg || !content || !label || !headline || !subhead || !cta || !desc) return;

    const ctx = gsap.context(() => {
      // Initial load animation
      const loadTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      loadTl
        .fromTo(bg, 
          { opacity: 0, scale: 1.06 }, 
          { opacity: 1, scale: 1, duration: 1.2 }
        )
        .fromTo(label, 
          { y: -12, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.5 }, 
          0.3
        )
        .fromTo(headline, 
          { y: 24, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.9 }, 
          0.4
        )
        .fromTo(subhead, 
          { y: 16, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.6 }, 
          0.6
        )
        .fromTo(cta, 
          { y: 16, opacity: 0, scale: 0.98 }, 
          { y: 0, opacity: 1, scale: 1, duration: 0.55 }, 
          0.7
        )
        .fromTo(desc, 
          { opacity: 0 }, 
          { opacity: 1, duration: 0.5 }, 
          0.8
        );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements when scrolling back to top
            gsap.set([label, headline, subhead, cta, desc], { opacity: 1, x: 0, y: 0 });
            gsap.set(bg, { scale: 1 });
          }
        }
      });

      // EXIT phase (70% - 100%)
      scrollTl
        .fromTo(headline, 
          { x: 0, opacity: 1 }, 
          { x: '-18vw', opacity: 0, ease: 'power2.in' }, 
          0.7
        )
        .fromTo([subhead, cta, desc], 
          { y: 0, opacity: 1 }, 
          { y: '10vh', opacity: 0, ease: 'power2.in' }, 
          0.75
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
      className="section-pinned z-10"
      id="hero"
    >
      {/* Background Image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0 }}
      >
        <img 
          src="/hero_hallway.jpg" 
          alt="Threshold"
          className="w-full h-full object-cover"
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 vignette" />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-tedx-black/70 via-tedx-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-center px-[6vw]"
      >
        {/* Micro Label */}
        <span 
          ref={labelRef}
          className="micro-label mb-6"
          style={{ opacity: 0 }}
        >
          TEDxMEC 2025
        </span>

        {/* Headline */}
        <h1 
          ref={headlineRef}
          className="headline-xl text-tedx-white max-w-[46vw] mb-8"
          style={{ opacity: 0 }}
        >
          A NEW<br />
          <span className="text-tedx-red">CHAPTER</span> AWAITS
        </h1>

        {/* Subheadline */}
        <p 
          ref={subheadRef}
          className="body-text max-w-[34vw] mb-10 text-lg"
          style={{ opacity: 0 }}
        >
          An independent TEDx event at MEC. Join us for a journey through the spaces in between. 
          Experience 10+ speakers, live performances, and ideas that bridge worlds.
        </p>

        {/* CTAs */}
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 mb-12"
          style={{ opacity: 0 }}
        >
          <a href="#tickets" className="btn-tedx group">
            Secure Your Seat
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#partners" className="btn-tedx-outline">
            <Mail className="mr-2 w-4 h-4" />
            Partner With Us
          </a>
        </div>

        {/* Descriptor */}
        <p 
          ref={descRef}
          className="font-mono text-xs uppercase tracking-wider text-tedx-gray/80"
          style={{ opacity: 0 }}
        >
          Talks • Performances • Workshops • Networking
        </p>
      </div>
    </section>
  );
}
