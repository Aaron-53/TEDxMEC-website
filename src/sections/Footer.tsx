import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Linkedin, Youtube, Twitter, Mail, MapPin, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const leftCol = section.querySelector('.footer-left');
      const rightCol = section.querySelector('.footer-right');
      const footerBottom = section.querySelector('.footer-bottom');
      
      gsap.fromTo(leftCol,
        { x: '-4vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      gsap.fromTo(rightCol,
        { x: '4vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      gsap.fromTo(footerBottom,
        { y: '2vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerBottom,
            start: 'top 95%',
            toggleActions: 'play none none reverse',
          }
        }
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={sectionRef} 
      className="relative z-[110] bg-[#F4F6F9]"
      id="contact"
    >
      {/* Main Footer Content */}
      <div className="py-24 px-[6vw]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div className="footer-left">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-gray-500 mb-4 block">
              CONTACT
            </span>
            <h2 className="font-sora font-bold uppercase text-[clamp(34px,3.6vw,56px)] leading-[1.05] tracking-[-0.02em] text-gray-900 mb-8">
              LET'S<br />
              <span className="text-tedx-red">TALK</span>
            </h2>
            
            <div className="space-y-6">
              <a 
                href="mailto:hello@tedxmec.in"
                className="flex items-center gap-4 text-gray-700 hover:text-tedx-red transition-colors"
              >
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">hello@tedxmec.in</span>
              </a>
              
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium">MEC, Kochi, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-700 hover:bg-tedx-red hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="footer-right">
            <form className="space-y-6">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-gray-500 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-tedx-red transition-colors"
                />
              </div>
              
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-gray-500 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-tedx-red transition-colors"
                />
              </div>
              
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-gray-500 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-tedx-red transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-tedx-red text-white font-sora font-semibold text-sm uppercase tracking-wider rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom border-t border-gray-200 py-8 px-[6vw]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* TEDx Disclaimer */}
          <p className="text-xs text-gray-500 text-center md:text-left max-w-md">
            TEDxMEC is independently organized under license from TED. 
            This independent TEDx event is operated under license from TED.
          </p>
          
          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-500 hover:text-tedx-red transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-tedx-red transition-colors">
              Code of Conduct
            </a>
            <span className="text-xs text-gray-400">
              © 2025 TEDxMEC
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
