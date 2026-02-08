import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen relative z-10 flex items-center" id="hero">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        data-aos="fade-in"
        data-aos-duration="1200"
      >
        <img
          src="/hero_hallway.jpg"
          alt="Threshold"
          className="w-full h-full object-cover"
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 vignette" />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-tedx-black/70 via-tedx-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-[6vw]">
        {/* Micro Label */}
        <span
          className="micro-label mb-6"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          TEDxMEC 2025
        </span>

        {/* Headline */}
        <h1
          className="headline-xl text-tedx-white max-w-[46vw] mb-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          A NEW
          <br />
          <span className="text-tedx-red">CHAPTER</span> AWAITS
        </h1>

        {/* Subheadline */}
        <p
          className="body-text max-w-[34vw] mb-10 text-lg"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          An independent TEDx event at MEC. Join us for a journey through the
          spaces in between. Experience 10+ speakers, live performances, and
          ideas that bridge worlds.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 mb-12"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <a href="#tickets" className="btn-tedx group">
            Secure Your Seat
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#partners" className="btn-tedx-outline">
            <Mail className="mr-2 w-4 h-4" />
            Partner With Us
          </a>
        </div>

        {/* Descriptor */}
        <p
          className="font-mono text-xs uppercase tracking-wider text-tedx-gray/80"
          data-aos="fade-in"
          data-aos-delay="800"
        >
          Talks • Performances • Workshops • Networking
        </p>
      </div>
    </section>
  );
}
