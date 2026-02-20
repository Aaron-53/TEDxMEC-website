import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      className="min-h-screen py-10 relative z-20 flex items-center py-24 lg:py-0"
      id="about"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        data-aos="zoom-in"
        data-aos-duration="1200"
      >
        <img
          src="/about_stairwell.jpg"
          alt="Ascent"
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
      <div className="relative z-10 h-full w-full  flex flex-col justify-center items-center px-[6vw]">
        <div className="w-full max-w-4xl mx-auto">
          <h2
            className="headline-lg text-tedx-white text-center mb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            ABOUT <span className="text-tedx-red">TEDxMEC</span>
          </h2>

          <div
            className="flex flex-col sm:flex-row gap-16"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="bg-tedx-black/30 backdrop-blur-sm rounded-lg p-6 border border-tedx-white/10">
              <h3 className="text-tedx-red font-semibold mb-3 text-sm uppercase tracking-wider">
                What is TEDx?
              </h3>
              <p className="text-tedx-white/90 text-sm leading-relaxed">
                TEDx brings the spirit of TED's "ideas worth spreading" to local
                communities worldwide. These independently organized events
                feature speakers who share innovative ideas and inspiring
                stories.
              </p>
            </div>

            <div className="bg-tedx-black/30 backdrop-blur-sm rounded-lg p-6 border border-tedx-white/10">
              <h3 className="text-tedx-red font-semibold mb-3 text-sm uppercase tracking-wider">
                Our Mission
              </h3>
              <p className="text-tedx-white/90 text-sm leading-relaxed">
                TEDxMEC serves as a catalyst for innovation, encouraging
                students and attendees to think differently in pursuit of
                meaningful change. We bring together diverse voices who share
                their insights through compelling talks.
              </p>
            </div>

           <div className="bg-tedx-black/30 backdrop-blur-sm rounded-lg p-6 border border-tedx-white/10">
  <h3 className="text-tedx-red font-semibold mb-3 text-sm uppercase tracking-wider">
    This Year's Theme
  </h3>
  <p className="text-tedx-white/90 text-sm leading-relaxed">
    Liminality explores the space between where we are and where we are going.
    It represents moments of transition, growth, and transformation. This
    theme encourages us to reflect on change, embrace uncertainty, and
    recognize the opportunities that exist in periods of becoming.
  </p>
</div>
          </div>

          <div className="text-center mt-8">
            <a
              href="#speakers"
              className="btn-tedx-outline inline-flex group text-sm"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Meet Our Speakers
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
