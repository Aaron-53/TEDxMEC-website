import PlasmaHero from "@/components/plasma";
export default function Hero() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      className="relative min-h-screen h-screen w-full z-10 flex items-center justify-center bg-transparent overflow-hidden"
      id="hero"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <PlasmaHero />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4">
        <span className="text-4xl sm:text-5xl lg:text-6xl font-light mb-2">
          <span className="font-bold text-red-600">
            TED<sup className="text-2xl lg:text-3xl">X</sup>
          </span>
          MEC
        </span>
        <span className="text-lg sm:text-xl font-bold mb-8">
          Ideas <span className="font-light">Worth</span> Spreading.
        </span>
        <div className="hidden lg:flex items-center gap-8 mt-2">
          <a
            href="#tickets"
            onClick={(e) => handleNavClick(e, "#tickets")}
            className="px-6 py-3 bg-tedx-red text-white font-bold text-sm uppercase tracking-wider rounded-md hover:shadow-glow transition-all hover:bg-tedx-red/90"
          >
            <span className="font-bold">Tickets Coming Soon...</span> 
            {/* <span className="font-light">Get</span> Tickets */}
          </a>
        </div>
      </div>
    </section>
  );
}
