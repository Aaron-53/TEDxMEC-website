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
    <section className="min-h-screen relative z-30 py-24 lg:py-0" id="speakers">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <img
          src="/speakers_corridor.jpg"
          alt="Lineup"
          className="w-full h-full object-cover object-center lg:object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-tedx-black/80 via-tedx-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col lg:flex-row items-center lg:items-start px-[6vw] gap-12 lg:gap-0">
        {/* Left Text */}
        <div className="w-full lg:max-w-[40vw] text-center lg:text-left">
          <h2
            className="headline-lg text-tedx-white mb-4 lg:mb-6"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            THE
            <br />
            <span className="text-tedx-red">LINEUP</span>
          </h2>

          <p
            className="body-text text-base lg:text-lg"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Founders, researchers, artists, and builders—sharing ideas that
            stick. Get ready to be inspired by voices that matter.
          </p>
        </div>

        {/* Right Speaker Card */}
        <div
          className="w-full lg:w-[34vw] lg:min-h-[34vh] lg:absolute lg:right-[6vw] lg:top-1/2 lg:-translate-y-1/2"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <div className="bg-tedx-charcoal/95 border border-tedx-white/20 rounded-lg p-6 lg:p-8 shadow-2xl">
            <span className="card-title font-mono text-xs uppercase tracking-[0.14em] text-tedx-gray mb-4 lg:mb-6 block">
              2025 SPEAKERS
            </span>

            <div className="speaker-list grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-3 lg:gap-y-4">
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
              className="inline-flex items-center gap-2 mt-6 lg:mt-8 text-tedx-red font-mono text-sm uppercase tracking-wider hover:underline"
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
