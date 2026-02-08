import { useState } from "react";
import { ChevronDown, MapPin, Utensils, Award } from "lucide-react";

const faqs = [
  {
    question: "Where is the venue?",
    answer:
      "TEDxMEC 2025 will be held at the Main Auditorium, Model Engineering College, Kochi. The venue is easily accessible by public transport and has ample parking space.",
    icon: MapPin,
  },
  {
    question: "Is food provided?",
    answer:
      "Yes! All ticket tiers include lunch and refreshments during breaks. We also accommodate dietary restrictions—just let us know when you register.",
    icon: Utensils,
  },
  {
    question: "How do I get my certificate?",
    answer:
      "Digital certificates will be emailed to all attendees within 48 hours of the event. Make sure to check your registered email address.",
    icon: Award,
  },
  {
    question: "Can I get a refund?",
    answer:
      "Tickets are non-refundable but transferable. If you cannot attend, you can transfer your ticket to someone else up to 7 days before the event.",
    icon: ChevronDown,
  },
  {
    question: "What should I bring?",
    answer:
      "Just bring your ticket (digital or printed) and a valid ID. We recommend bringing a notebook and pen for taking notes during talks.",
    icon: ChevronDown,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative z-[100] bg-tedx-charcoal py-24 px-[6vw]"
      id="faq"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span
            className="micro-label mb-4 block"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            FAQ
          </span>
          <h2
            className="headline-lg text-tedx-white mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            GOT <span className="text-tedx-red">QUESTIONS?</span>
          </h2>
          <p className="body-text" data-aos="fade-up" data-aos-delay="300">
            Find answers to commonly asked questions about TEDxMEC 2025.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="faq-item border border-tedx-white/10 rounded-lg overflow-hidden hover:border-tedx-white/20 transition-colors"
              data-aos="fade-up"
              data-aos-delay={400 + idx * 100}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-tedx-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <faq.icon className="w-5 h-5 text-tedx-red" />
                  </div>
                  <span className="font-sora font-semibold text-tedx-white">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-tedx-gray transition-transform duration-300 flex-shrink-0 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 pl-20 text-tedx-gray">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className="mt-12 text-center"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <p className="text-tedx-gray mb-4">Still have questions?</p>
          <a href="mailto:hello@tedxmec.in" className="btn-tedx-outline">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
