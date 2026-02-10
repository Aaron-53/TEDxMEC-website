import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      className="min-h-screen relative z-20 flex items-center py-24 lg:py-0"
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
      <div className="relative z-10 h-full flex flex-col justify-center items-center lg:items-end text-center lg:text-right px-[6vw]">
        <div className="w-full lg:max-w-[38vw]">
          <h2
            className="headline-lg text-tedx-white mb-6 lg:mb-8"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            WHAT IS
            <br />
            <span className="text-tedx-red">TEDxMEC</span>
          </h2>

          <p
            className="body-text mb-6 lg:mb-8 text-base lg:text-lg"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            A student-led conference bringing together thinkers, makers, and
            storytellers. We host talks, workshops, and performances—designed to
            spark action and inspire change.
            <br />
            <br />
            At TEDxMEC, we believe in the power of ideas to transform lives. Our
            carefully curated speakers share stories that challenge perspectives
            and ignite curiosity.
          </p>

          <a
            href="#speakers"
            className="btn-tedx-outline inline-flex group w-full lg:w-auto justify-center lg:justify-start"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            Read The Story
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
