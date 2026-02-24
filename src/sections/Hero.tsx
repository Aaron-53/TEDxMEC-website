import PlasmaHero from "@/components/plasma";
import { Link } from "react-router-dom";

export default function Hero() {
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

        <div className="hidden lg:flex flex-col items-center gap-4 mt-2">
          <Link
            to="/tickets"
            className="px-6 py-3 bg-tedx-red text-white font-bold text-sm uppercase tracking-wider rounded-md hover:shadow-glow transition-all hover:bg-tedx-red/90"
          >
            Get Your Tickets Now
          </Link>
          <p className="text-xs text-tedx-white/70 font-mono uppercase tracking-wider">
            Limited Seats Available
          </p>
        </div>
      </div>
    </section>
  );
}
