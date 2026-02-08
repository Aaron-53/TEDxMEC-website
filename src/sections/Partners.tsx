import { Download, Mail, Building2, Cpu, Coffee, Rocket } from "lucide-react";

const partnerLogos = [
  { icon: Building2, name: "TechCorp" },
  { icon: Cpu, name: "InnovateLabs" },
  { icon: Coffee, name: "BrewHub" },
  { icon: Rocket, name: "LaunchPad" },
];

export default function Partners() {
  return (
    <section className="min-h-screen relative z-[70]" id="partners">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        data-aos="zoom-in"
        data-aos-duration="1200"
      >
        <img
          src="/partners_stairwell.jpg"
          alt="Partners"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-l from-tedx-charcoal/90 via-tedx-charcoal/60 to-transparent"
        data-aos="fade-in"
        data-aos-duration="800"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-end text-right px-[6vw]">
        <div className="max-w-[40vw]">
          <span
            className="micro-label mb-4 block"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            PARTNERS
          </span>

          <h2
            className="headline-lg text-tedx-white mb-8"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            PARTNER WITH
            <br />
            <span className="text-tedx-red">US</span>
          </h2>

          <p
            className="body-text mb-8 text-lg"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            Align your brand with a community that cares about design, learning,
            and impact. Let's build something memorable together.
          </p>

          {/* CTAs */}
          <div
            className="cta-group flex flex-col sm:flex-row gap-4 mb-10 justify-end"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <button className="btn-tedx group">
              <Download className="mr-2 w-4 h-4" />
              Download Brochure
            </button>
            <a href="mailto:partners@tedxmec.in" className="btn-tedx-outline">
              <Mail className="mr-2 w-4 h-4" />
              Contact for Sponsorship
            </a>
          </div>

          {/* Partner Logos */}
          <div className="flex gap-6 justify-end">
            {partnerLogos.map((partner, idx) => (
              <div
                key={idx}
                className="partner-logo w-14 h-14 bg-tedx-white/10 rounded-lg flex items-center justify-center hover:bg-tedx-white/20 transition-colors"
                data-aos="fade-up"
                data-aos-delay={600 + idx * 100}
              >
                <partner.icon className="w-6 h-6 text-tedx-gray" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
