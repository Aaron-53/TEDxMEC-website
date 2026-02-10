import { Music, Drama, Theater } from "lucide-react";

const performances = [
  { icon: Music, label: "Music" },
  { icon: Drama, label: "Dance" },
  { icon: Theater, label: "Theatre" },
];

export default function Performances() {
  return (
    <section
      className="min-h-screen relative z-[60] flex items-center py-24 lg:py-0"
      id="performances"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <img
          src="/performances_hall.jpg"
          alt="Performances"
          className="w-full h-full object-cover object-center lg:object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-tedx-black/80 via-tedx-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col lg:flex-row items-center lg:items-start px-[6vw] gap-12 lg:gap-0">
        {/* Left Text */}
        <div className="w-full lg:max-w-[44vw] text-center lg:text-left">
          <h2
            className="headline-lg text-tedx-white mb-4 lg:mb-6"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            MORE THAN
            <br />
            <span className="text-tedx-red">TALKS</span>
          </h2>

          <p
            className="body-text text-base lg:text-lg"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Music, movement, and storytelling—live on stage. Experience the full
            spectrum of creative expression.
          </p>
        </div>

        {/* Right Performance Card */}
        <div
          className="w-full lg:w-[32vw] lg:absolute lg:right-[6vw] lg:top-1/2 lg:-translate-y-1/2"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <div className="bg-tedx-charcoal/95 border border-tedx-white/20 rounded-lg p-6 lg:p-8 shadow-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-tedx-gray mb-4 lg:mb-6 block">
              LIVE SETS
            </span>

            <div className="space-y-3 lg:space-y-4">
              {performances.map((perf, idx) => (
                <div
                  key={idx}
                  className="perf-item flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-tedx-black/80 border border-tedx-white/10 rounded-lg hover:bg-tedx-red/10 hover:border-tedx-red/30 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={600 + idx * 100}
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-tedx-red rounded-lg flex items-center justify-center shadow-lg">
                    <perf.icon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <span className="text-tedx-white font-medium text-sm lg:text-base">
                    {perf.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
