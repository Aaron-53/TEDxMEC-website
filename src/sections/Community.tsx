const stats = [
  { value: "500+", label: "ATTENDEES" },
  { value: "30+", label: "UNIVERSITIES" },
];

export default function Community() {
  return (
    <section className="min-h-screen relative z-50" id="community">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        data-aos="zoom-in"
        data-aos-duration="1200"
      >
        <img
          src="/community_corridor.jpg"
          alt="Community"
          className="w-full h-full object-cover object-center lg:object-right"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-l from-tedx-charcoal/90 via-tedx-charcoal/60 to-transparent"
        data-aos="fade-in"
        data-aos-duration="800"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center lg:items-end text-center lg:text-right px-[6vw] py-24 lg:py-0">
        <div className="w-full lg:max-w-[40vw]">
          <h2
            className="headline-lg text-tedx-white mb-6 lg:mb-8"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            OPEN TO
            <br />
            <span className="text-tedx-red">EVERYONE</span>
          </h2>

          <p
            className="body-text mb-8 lg:mb-10 text-base lg:text-lg"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            Students, professionals, creators, skeptics, optimists—if you're
            curious, you belong. We design for accessibility, safety, and real
            connection.
            <br />
            <br />
            TEDxMEC is more than an event. It's a community of thinkers,
            dreamers, and doers who believe in the power of ideas to change the
            world.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 justify-center lg:justify-end">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="stat-item text-center lg:text-right"
                data-aos="fade-up"
                data-aos-delay={500 + idx * 100}
              >
                <p className="font-sora font-bold text-3xl lg:text-4xl text-tedx-red mb-1">
                  {stat.value}
                </p>
                <p className="font-mono text-xs text-tedx-gray uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
