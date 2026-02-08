import { Mic, Wrench, Users } from "lucide-react";

const pillars = [
  {
    icon: Mic,
    title: "Talks",
    description:
      "Short, sharp ideas from diverse voices that challenge and inspire.",
  },
  {
    icon: Wrench,
    title: "Workshops",
    description: "Hands-on sessions you can use immediately in your journey.",
  },
  {
    icon: Users,
    title: "Network",
    description: "Meet collaborators over coffee and meaningful conversation.",
  },
];

export default function Experience() {
  return (
    <section className="min-h-screen relative z-40" id="experience">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        <img
          src="/experience_stairwell.jpg"
          alt="Experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tedx-black/90 via-tedx-black/50 to-tedx-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-[6vw]">
        {/* Header */}
        <div className="mb-auto pt-[14vh]">
          <span
            className="micro-label mb-4 block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            EXPERIENCE
          </span>

          <h2
            className="headline-lg text-tedx-white"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            A DAY BUILT
            <br />
            TO <span className="text-tedx-red">INSPIRE</span>
          </h2>
        </div>

        {/* Pillar Cards */}
        <div className="flex flex-col sm:flex-row gap-6 pb-[10vh] mt-auto">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="pillar-card flex-1 bg-tedx-white/5 backdrop-blur-sm border border-tedx-white/10 rounded-lg p-6 hover:border-tedx-white/30 transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={400 + idx * 150}
            >
              <div className="w-12 h-12 bg-tedx-red/20 rounded-lg flex items-center justify-center mb-4">
                <pillar.icon className="w-6 h-6 text-tedx-red" />
              </div>

              <h3 className="font-sora font-bold text-xl text-tedx-white mb-2">
                {pillar.title}
              </h3>

              <p className="text-tedx-gray text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
