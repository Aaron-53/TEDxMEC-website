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
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tedx-black/90 via-tedx-black/50 to-tedx-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between lg:justify-center px-[6vw] py-12 lg:py-0">
        {/* Header */}
        <div className="flex-1 lg:mb-auto pt-8 lg:pt-[14vh] flex flex-col justify-center lg:justify-start">
          <h2
            className="headline-lg text-tedx-white text-center lg:text-left"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            A DAY BUILT
            <br />
            TO <span className="text-tedx-red">INSPIRE</span>
          </h2>
        </div>

        {/* Pillar Cards */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 pb-8 lg:pb-[10vh] mt-8 lg:mt-auto">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="pillar-card flex-1 bg-tedx-charcoal/95 border border-tedx-white/20 rounded-lg p-4 lg:p-6 hover:border-tedx-red/50 hover:bg-tedx-charcoal transition-all duration-300 hover:-translate-y-1 shadow-xl"
              data-aos="fade-up"
              data-aos-delay={400 + idx * 150}
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-tedx-red rounded-lg flex items-center justify-center mb-3 lg:mb-4 shadow-lg">
                <pillar.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>

              <h3 className="font-sora font-bold text-lg lg:text-xl text-tedx-white mb-2">
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
