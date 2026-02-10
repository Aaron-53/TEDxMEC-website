import PlasmaHero from "@/components/plasma";
export default function Hero() {
const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section
      className="min-h-screen relative h-screen w-screen z-10 flex items-center bg-transparent"
      id="hero"
    >
      {/* hero content here */}
<div className="text absolute  w-screen h-screen z-10 flex flex-col justify-center items-center">
<span className="text-6xl font-light"><span className="font-bold text-red-600">TED<sup className="text-3xl">X</sup></span>MEC</span>
<span className="font-bold">Ideas <span className="font-light">Worth</span> Spreading.</span>
<div className="hidden lg:flex items-center gap-8 mt-10">
            <a
              href="#tickets"
              onClick={(e) => handleNavClick(e, "#tickets")}
              className="px-4 py-2 bg-tedx-red text-white font-bold text-xs uppercase tracking-wider rounded-md hover:shadow-glow transition-all"
            >
              <span className="font-light">Get</span> Tickets
            </a>
          </div>

</div>
<div>
<PlasmaHero />
</div>
      
    </section>
  );
}
