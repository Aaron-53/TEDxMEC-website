import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { name: 'Rahul Kumar', role: 'Licensee', dept: 'Leadership', image: '/team_1.jpg' },
  { name: 'Ananya Singh', role: 'Curator', dept: 'Curation', image: '/team_2.jpg' },
  { name: 'Vikram Patel', role: 'Design Lead', dept: 'Design', image: '/team_3.jpg' },
  { name: 'Priya Sharma', role: 'Marketing Head', dept: 'Marketing', image: '/team_4.jpg' },
  { name: 'Arjun Menon', role: 'Logistics Lead', dept: 'Logistics', image: '/team_5.jpg' },
  { name: 'Neha Gupta', role: 'Finance Head', dept: 'Finance', image: '/team_6.jpg' },
  { name: 'Karan Shah', role: 'Tech Lead', dept: 'Tech', image: '/team_7.jpg' },
  { name: 'Maya Reddy', role: 'Creative Director', dept: 'Design', image: '/team_8.jpg' },
];

const departments = ['All', 'Leadership', 'Curation', 'Design', 'Marketing', 'Logistics', 'Finance', 'Tech'];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const ctx = gsap.context(() => {
      const cards = grid.querySelectorAll('.team-card');
      
      gsap.fromTo(cards,
        { y: '6vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
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
      className="relative z-[90] bg-tedx-charcoal py-24 px-[6vw]"
      id="team"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="micro-label mb-4 block">THE TEAM</span>
        <h2 className="headline-lg text-tedx-white mb-4">
          THE <span className="text-tedx-red">VISIONARIES</span>
        </h2>
        <p className="body-text max-w-xl mx-auto">
          Organized by students. Supported by the community. Meet the minds behind TEDxMEC 2025.
        </p>
      </div>

      {/* Department Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {departments.map((dept, idx) => (
          <button
            key={dept}
            className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
              idx === 0 
                ? 'bg-tedx-red text-white' 
                : 'bg-tedx-white/10 text-tedx-gray hover:bg-tedx-white/20 hover:text-tedx-white'
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Team Grid */}
      <div 
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
      >
        {teamMembers.map((member, idx) => (
          <div 
            key={idx}
            className="team-card group"
          >
            <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
              <img 
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tedx-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="font-sora font-semibold text-tedx-white mb-1">
              {member.name}
            </h3>
            <p className="font-mono text-xs text-tedx-red uppercase tracking-wider">
              {member.role}
            </p>
            <p className="text-xs text-tedx-gray mt-1">
              {member.dept}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
