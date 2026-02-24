import { Sparkles, Users, Briefcase, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ticketTiers = [
  {
    name: "MECians",
    price: "₹899",
    icon: Users,
    popular: false,
  },
  {
    name: "Ex-MECians",
    price: "₹1299",
    icon: Sparkles,
    popular: false,
  },
  {
    name: "Others",
    price: "₹1599",
    icon: Briefcase,
    popular: false,
  },
];

export default function Tickets() {
  return (
    <section
      className="relative z-20 bg-tedx-charcoal py-24 px-[6vw]"
      id="tickets"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="micro-label mb-4 block" data-aos="fade-up">
          TICKETS NOW LIVE
        </span>
        <h2
          className="headline-lg text-tedx-white mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          SECURE YOUR <span className="text-tedx-red">SEAT</span>
        </h2>

        {/* Event Details */}
        <div className="mb-6 space-y-1" data-aos="fade-up" data-aos-delay="150">
          <p className="text-tedx-white font-semibold text-lg">
            March 7, 2026 • 12PM - 8PM
          </p>
          <p className="text-tedx-gray text-sm">Lulu Cyber Tower 2, Audi - 2</p>
        </div>

        <p
          className="body-text max-w-xl mx-auto mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Join us for an unforgettable day of inspiring talks and ideas worth
          spreading. Choose the ticket that suits you best!
        </p>
        <div
          className="inline-flex items-center gap-2 px-4 py-2 bg-tedx-red/10 border border-tedx-red/30 rounded-full mb-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Clock className="w-4 h-4 text-tedx-red" />
          <span className="font-mono text-xs text-tedx-red uppercase tracking-wider">
            Limited Seats Available
          </span>
        </div>
        <p
          className="text-tedx-gray text-sm max-w-md mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Don't miss your chance to be part of TEDxMEC 2026!
        </p>
      </div>

      {/* Ticket Cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {ticketTiers.map((tier, idx) => (
          <div
            key={tier.name}
            className={`ticket-card relative p-8 rounded-lg transition-all duration-500 hover:-translate-y-2 ${
              tier.popular
                ? "bg-gradient-to-b from-tedx-red/20 to-tedx-black border-2 border-tedx-red shadow-glow"
                : "bg-tedx-darkgray/50 border border-tedx-white/10 hover:border-tedx-white/30"
            }`}
            data-aos="zoom-in"
            data-aos-delay={500 + idx * 150}
          >
            {/* Popular Badge */}
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-tedx-red text-white font-mono text-xs uppercase tracking-wider rounded-full">
                Most Popular
              </div>
            )}

            {/* Icon */}
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                tier.popular ? "bg-tedx-red" : "bg-tedx-white/10"
              }`}
            >
              <tier.icon className="w-6 h-6 text-tedx-white" />
            </div>

            {/* Name & Price */}
            <h3 className="font-sora font-bold text-xl text-tedx-white mb-2">
              {tier.name}
            </h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="font-sora font-bold text-4xl text-tedx-white">
                {tier.price}
              </span>
              <span className="text-tedx-gray text-sm">/person</span>
            </div>

            <Link
              to="/tickets"
              className={`block w-full py-3 rounded-md font-sora font-semibold text-sm uppercase tracking-wider transition-all duration-300 text-center ${
                tier.popular
                  ? "bg-tedx-red text-white hover:shadow-glow"
                  : "bg-tedx-white/10 text-tedx-white hover:bg-tedx-white/20"
              }`}
            >
              Get {tier.name} Ticket
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
