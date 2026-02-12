import { useState } from "react";
import { X } from "lucide-react";

const previousPerformers = [
  {
    name: "Ashbel Peter",
    type: "Independent Musician",
    description:
      "Ashbel Peter, a crowd favourite and widely acclaimed independent musician, known for his harmonium expertise.",
    image: "/performers/placeholder.jpg",
    specialty: "Harmonium",
  },
  {
    name: "George Austin",
    type: "Guitarist",
    description: "George Austin, the lead guitarist of Rock Paper Scissors",
    image: "/performers/placeholder.jpg",
    specialty: "Lead Guitar",
  },
  {
    name: "Sidharth Jedhu",
    type: "Classical Percussionist",
    description:
      "Sidharth Jedhu, popular tabla scholar from RLV College of Music and Fine Arts",
    image: "/performers/placeholder.jpg",
    specialty: "Tabla",
  },
  {
    name: "We Are The Boom (WAT.B)",
    type: "Artist Collective",
    description:
      "We Are The Boom (WAT.B) the dynamic artist collective from Kochi, featuring the talents of Rehna Shaz, Abhiraman, TJUS, Iappan, and Gauthaman, is renowned for their electrifying live performances that seamlessly blend diverse musical genres",
    image: "/performers/placeholder.jpg",
    specialty: "Multi-Genre Collective",
  },
];

export default function Performances() {
  const [selectedPerformer, setSelectedPerformer] = useState<
    (typeof previousPerformers)[0] | null
  >(null);

  const openModal = (performer: (typeof previousPerformers)[0]) => {
    setSelectedPerformer(performer);
  };

  const closeModal = () => {
    setSelectedPerformer(null);
  };

  return (
    <section
      className="relative z-[60] w-screen h-screen flex flex-col justify-center px-[6vw]"
      id="performances"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <img
          src="/performances_hall.jpg"
          alt="Performances"
          className="w-full h-full object-cover object-center lg:object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-tedx-black/80 via-tedx-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="headline-lg text-tedx-white mb-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            LIVE <span className="text-tedx-red">PERFORMANCES</span>
          </h2>
          <p
            className="body-text max-w-2xl mx-auto text-tedx-white/80 text-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Experience the artistry and talent of performers who have graced our
            stage with unforgettable live performances.
          </p>
        </div>

        {/* Performers Showcase */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {previousPerformers.map((performer, idx) => (
            <div
              key={idx}
              className="performer-spotlight group cursor-pointer"
              onClick={() => openModal(performer)}
              data-aos="flip-left"
              data-aos-delay={600 + idx * 150}
            >
              {/* Performer Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-tedx-black/90 via-tedx-charcoal/80 to-tedx-black/90 border border-tedx-white/20 hover:border-tedx-red/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={performer.image}
                    alt={performer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Floating Specialty Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-tedx-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {performer.specialty}
                    </span>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-tedx-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <p className="font-bold">Click to Read More</p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                  <h3 className="font-bold text-tedx-white text-lg mb-2 group-hover:text-tedx-red transition-colors">
                    {performer.name}
                  </h3>
                  <p className="text-tedx-white/70 text-sm font-medium">
                    {performer.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPerformer && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-tedx-charcoal border border-tedx-white/20 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-sora font-bold text-2xl text-tedx-white mb-1">
                    {selectedPerformer.name}
                  </h3>
                  <p className="text-tedx-red font-medium">
                    {selectedPerformer.type}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-tedx-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-tedx-white" />
                </button>
              </div>
              <div className="w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden bg-gray-900">
                <img
                  src={selectedPerformer.image}
                  alt={selectedPerformer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-tedx-white/90 leading-relaxed">
                {selectedPerformer.description}
              </p>
              <div className="mt-4 text-center">
                <span className="inline-block px-3 py-1 bg-tedx-red/20 text-tedx-red text-xs font-medium rounded-full">
                  {selectedPerformer.specialty}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
