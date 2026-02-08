import { Music, Drama, Theater } from "lucide-react";

const performances = [
  { icon: Music, label: "Music" },
  { icon: Drama, label: "Dance" },
  { icon: Theater, label: "Theatre" },
];

export default function Performances() {
  return (
    <section
      className="min-h-screen relative z-[60] flex items-center"
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
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tedx-black/80 via-tedx-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-[6vw]">
        {/* Left Text */}
        <div className="max-w-[44vw]">
          <span
            className="micro-label mb-4 block"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            PERFORMANCES
          </span>

          <h2
            className="headline-lg text-tedx-white mb-6"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            MORE THAN
            <br />
            <span className="text-tedx-red">TALKS</span>
          </h2>

          <p
            className="body-text text-lg"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Music, movement, and storytelling—live on stage. Experience the full
            spectrum of creative expression.
          </p>
        </div>

        {/* Right Performance Card */}
        <div
          className="absolute right-[6vw] top-1/2 -translate-y-1/2 w-[32vw]"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <div className="bg-tedx-white/5 backdrop-blur-sm border border-tedx-white/10 rounded-lg p-8">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-tedx-gray mb-6 block">
              LIVE SETS
            </span>

            <div className="space-y-4">
              {performances.map((perf, idx) => (
                <div
                  key={idx}
                  className="perf-item flex items-center gap-4 p-4 bg-tedx-white/5 rounded-lg hover:bg-tedx-white/10 transition-colors"
                  data-aos="fade-up"
                  data-aos-delay={600 + idx * 100}
                >
                  <div className="w-10 h-10 bg-tedx-red/20 rounded-lg flex items-center justify-center">
                    <perf.icon className="w-5 h-5 text-tedx-red" />
                  </div>
                  <span className="text-tedx-white font-medium">
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
