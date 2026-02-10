import { ArrowRight } from "lucide-react";

const speakers = [
  { name: "Aarav Menon", topic: "The Future of AI" },
  { name: "Diya Krishnan", topic: "Sustainable Design" },
  { name: "Rishi Varma", topic: "Building Communities" },
  { name: "Sara Thomas", topic: "Digital Wellness" },
  { name: "Kunal Pai", topic: "Space Exploration" },
  { name: "Meera Raj", topic: "Social Innovation" },
  { name: "Arjun Nair", topic: "Creative Leadership" },
  { name: "Priya Das", topic: "Mental Health" },
];

export default function Speakers() {
  return (
    <section className="min-h-screen relative z-30" id="speakers">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        data-aos="fade-right" 
        data-aos-duration="1200"
      >
        <img
          src="/speakers_corridor.jpg"
          alt="Lineup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tedx-black/80 via-tedx-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-[6vw]">
        {/* Left Text */}
        <div className="max-w-[40vw]">
          <span
            className="micro-label mb-4 block"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            SPEAKERS
          </span>

          <h2
            className="headline-lg text-tedx-white mb-6"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            THE
            <br />
            <span className="text-tedx-red">LINEUP</span>
          </h2>

          <p
            className="body-text text-lg"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Founders, researchers, artists, and builders—sharing ideas that
            stick. Get ready to be inspired by voices that matter.
          </p>
        </div>

        {/* Right Speaker Card */}
        <div
          className="absolute right-[6vw] top-1/2 -translate-y-1/2 w-[34vw] min-h-[34vh]"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <div className="bg-tedx-white/5 backdrop-blur-sm border border-tedx-white/10 rounded-lg p-8">
            <span className="card-title font-mono text-xs uppercase tracking-[0.14em] text-tedx-gray mb-6 block">
              2025 SPEAKERS
            </span>

            <div className="speaker-list grid grid-cols-2 gap-x-8 gap-y-4">
              {speakers.map((speaker, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3"
                  data-aos="fade-up"
                  data-aos-delay={600 + idx * 50}
                >
                  <span className="w-2 h-2 bg-tedx-red rounded-full flex-shrink-0" />
                  <div>
                    <p className="text-tedx-white font-medium text-sm">
                      {speaker.name}
                    </p>
                    <p className="text-tedx-gray text-xs">{speaker.topic}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-8 text-tedx-red font-mono text-sm uppercase tracking-wider hover:underline"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              View full profiles
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
